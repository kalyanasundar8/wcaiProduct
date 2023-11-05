import React, { useState } from "react";

export const Outlines = () => {

  const [outelines, setOutlines] = useState([
    { id: 1, outline: 'Facebook is worst.'},
    { id: 2, outline: 'Insta is worst.'},
    { id: 3, outline: 'Twitter is worst.'},
    { id: 4, outline: 'Whatsapp is destroyer.'},
  ])
  
  const [selectedOutlines, setSelectedOutlines] = useState([]);

  const outlineList = (outlineId) => {

    const isSelected = selectedOutlines.includes(outlineId);

    if(isSelected) {
      setSelectedOutlines(selectedOutlines.filter(id => id !== outlineId));
    } else {
      setSelectedOutlines([...selectedOutlines, outlineId])
    }
  }

  return (
    <main className="px-4 lg:px-0 relative">
      <div className="text-center lg:text-left">
        <h1 className="text-xl lg:text-xl mb-3">Generated Outlines</h1>
        <p className="text-gray-400 text-sm lg:text-base mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>
      { Array.isArray(outelines) ? outelines.map((out) => (
        <div key={out.id} className={`cursor-pointer scrollable-content mb-4 max-w-screen-md mx-auto border-2 border-gray-300 p-3 rounded-[3px] ${
          selectedOutlines.includes(out.id)
            ? 'border-blue-400 text-blue-500'
            : 'text-gray-400 hover:border-blue-400 hover:text-blue-500'
        } transition-all duration-300 ease-in-out`}
        onClick={() => outlineList(out.id)}>
        <p>
          { out.outline }
        </p>
      </div>    
      )) : ( <p>Fill the details in that form and generate outlines for your blog</p> )}  
    
    </main>
  );
};
