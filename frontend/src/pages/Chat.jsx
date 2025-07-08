import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DocumentHeader from '../components/DocumentHeader';
import ChatContent from '../components/ChatContent';
import ChatInput from '../components/ChatInput';
import ChatHistory from "../components/ChatHistory"

function Chat() {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [question, setQuestion] = useState('');
  const [currentChat, setCurrentChat] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);

  const handleChatSelect = async (chat) => {
    try {
      setSelectedChatId(chat._id);
      
      // Get token from localStorage
      const token = localStorage.getItem('accessToken');
      
      // Get document details
      const docResponse = await axios.get(`https://doc-digest-gsgq.vercel.app/upload/getDoc/${chat.documentID}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (docResponse.data.document) {
        setSelectedDocument(docResponse.data.document);
      }
      
      // Create formatted messages for display
      const messages = [
        { isUser: true, content: chat.question },
        { isUser: false, content: chat.answer }
      ];
      
      setCurrentChat(messages);
    } catch (err) {
      console.error('Error fetching chat details:', err);
    }
  };

  const handleUploadClick = () => {
    // Create a file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf,.doc,.docx,.txt';
    
    fileInput.onchange = async (e) => {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file); // Changed from 'document' to 'file' to match backend
        
        try {
          const token = localStorage.getItem('accessToken');
          // Update URL to match your backend route
          const response = await axios.post('https://doc-digest-gsgq.vercel.app/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`
            }
          });
          
          console.log('Upload response:', response.data);
          
          if (response.data.document) {
            setSelectedDocument({
              ...response.data.document,
              name: response.data.document.originalFile // Use originalFile as name
            });
            setCurrentChat([]);
            setSelectedChatId(null);
          }
        } catch (err) {
          console.error('Error uploading document:', err);
          alert('Failed to upload document: ' + (err.response?.data?.message || err.message));
        }
      }
    };
    
    fileInput.click();
  };

  const handleSendMessage = async (message) => {
    // Add user message to chat
    const userMessage = { isUser: true, content: message };
    setCurrentChat(prev => [...prev, userMessage]);
    
    // Clear input
    setQuestion('');
    
    try {
      const token = localStorage.getItem('accessToken');
      
      // Prepare request data
      const requestData = {
        question: message
      };
      
      // Send the question to the API
      const response = await axios.post(`https://doc-digest-gsgq.vercel.app/chat/${selectedDocument._id}`, requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      // Add AI response to chat
      const aiMessage = { isUser: false, content: response.data.chat.answer };
      setCurrentChat(prev => [...prev, aiMessage]);
      
      // If this is a new chat, update the selectedChatId
      if (!selectedChatId && response.data.chat._id) {
        setSelectedChatId(response.data.chat._id);
      }
    } catch (err) {
      console.error('Error getting AI response:', err);
      
      // Add error message to chat
      const errorMessage = { 
        isUser: false, 
        content: "Sorry, I couldn't process your request. Please try again." 
      };
      setCurrentChat(prev => [...prev, errorMessage]);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 p-4">
      <ChatHistory onChatSelect={handleChatSelect} />
      
      <div className="w-3/4 flex flex-col bg-white rounded-r-lg shadow-md">
        <DocumentHeader 
          selectedDocument={selectedDocument} 
          onUploadClick={handleUploadClick} 
        />
        
        <ChatContent 
          selectedDocument={selectedDocument} 
          currentChat={currentChat} 
        />
        
        <ChatInput 
          question={question} 
          setQuestion={setQuestion} 
          onSend={handleSendMessage} 
          isDisabled={!selectedDocument} 
        />
      </div>
    </div>
  );
}

export default Chat;
