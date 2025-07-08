import React from 'react';
import removeMd from "remove-markdown"

function ChatContent({ selectedDocument, currentChat }) {
  return (
    <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
      {selectedDocument && (
        <div className="mb-6 p-4 bg-green-100 rounded-lg border border-green-200 shadow-sm">
          <h3 className="font-medium mb-2 text-green-800">Summary of document by AI:</h3>
          <p className="text-gray-700">{removeMd(selectedDocument.summary) || 'No summary available'}</p>
        </div>
      )}

      {currentChat.map((message, index) => (
        <div key={index} className="mb-4">
          <div className="font-medium mb-1 text-gray-700">
            {message.isUser ? 'Question:' : 'Answered by AI:'}
          </div>
          <div className={`p-3 rounded-lg shadow-sm ${
            message.isUser 
              ? 'bg-blue-100 text-right border text-black border-blue-200 ml-12' 
              : 'bg-white border text-black border-gray-200 mr-12'
          }`}>
            {removeMd(message.content)}
          </div>
        </div>
      ))}

      {!selectedDocument && (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            Please upload or select a document to start chatting
          </p>
        </div>
      )}
    </div>
  );
}

export default ChatContent;