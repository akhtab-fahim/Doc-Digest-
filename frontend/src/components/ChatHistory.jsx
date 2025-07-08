import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatHistory({ onChatSelect }) {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        setLoading(true);
        // Get token from localStorage
        const token = localStorage.getItem('accessToken');
        
        const response = await axios.get('https://doc-digest-gsgq.vercel.app/chat/getUserChats', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        setChats(response.data.chats || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching chat history:', err);
        setError('Failed to load chat history');
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="w-1/4 bg-white rounded-l-lg shadow-md overflow-y-auto border-r border-grey-50">
      <div className="p-4 border-b">
        <h2 className="text-black text-xl font-semibold">User Chat History</h2>
      </div>
      
      {loading && (
        <div className="p-4 text-center">
          <p className="text-gray-500">Loading chat history...</p>
        </div>
      )}
      
      {error && (
        <div className="p-4 text-center">
          <p className="text-red-500">{error}</p>
        </div>
      )}
      
      <div className="p-2">
        {!loading && !error && chats.length > 0 ? (
          chats.map((chat) => (
            <div 
              key={chat._id} 
              className="p-3 hover:bg-gray-100 cursor-pointer border-grey-50 rounded-md mb-1"
              onClick={() => onChatSelect(chat)}
            >
              <p className="text-black font-medium truncate">{chat.question}</p>
              <p className="text-sm text-gray-500 truncate">{new Date(chat.createdAt).toLocaleString()}</p>
            </div>
          ))
        ) : (
          !loading && !error && <p className="text-center text-gray-500 p-4">No chat history</p>
        )}
      </div>
    </div>
  );
}

export default ChatHistory;
