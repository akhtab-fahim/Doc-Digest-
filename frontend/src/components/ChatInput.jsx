import React from 'react';

function ChatInput({ question, setQuestion, onSend, isDisabled }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() && !isDisabled) {
      onSend(question);
    }
  };

  return (
    <div className="p-4 border-t">
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Chat with AI"
          className="flex-grow p-3 border rounded-l-md focus:outline-none focus:ring-2 text-black focus:ring-green-500"
          disabled={isDisabled}
        />
        <button 
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-r-md border-2 hover:bg-green-700"
          disabled={isDisabled || !question.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;