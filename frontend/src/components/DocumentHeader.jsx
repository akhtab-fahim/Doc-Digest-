import React from 'react';
import removeMd from "remove-markdown"

function DocumentHeader({ selectedDocument, onUploadClick }) {
  return (
    <div className="p-4 border-b flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold text-black">
          {selectedDocument ? selectedDocument.originalFile || selectedDocument.name : 'No document selected'}
        </h2>
      </div>
      <div>
        {selectedDocument ? (
          <button 
            className="text-green-600 border border-green-600 px-3 py-1 rounded-md hover:bg-green-50 text-sm"
            onClick={onUploadClick}
          >
            New Document
          </button>
        ) : (
          <button 
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            onClick={onUploadClick}
          >
            Upload
          </button>
        )}
      </div>
    </div>
  );
}

export default DocumentHeader;

