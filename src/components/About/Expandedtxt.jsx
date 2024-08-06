import React, { useState } from 'react';


const ExpandText = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 60;


  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <div className="relative">
      <div className={` overflow-hidden ${!isExpanded ? 'max-h-10' : ''} ${!isExpanded ? 'text-gray-300' : ''}`}>
        {isExpanded ? children : children.slice(0, MAX_LENGTH)}
        {!isExpanded && children.length > MAX_LENGTH && (
          <span className="absolute w-full right-0 left-0 bg-gradient-to-b from-transparent to-black pl-4">
                <p className='text-black'>.</p>
          </span>
        )}
      </div>
      {children.length > MAX_LENGTH && (
        <button
          onClick={toggleExpand}
          className="text-[#c1392b] py-2 italic hover:underline focus:outline-none"
        >
          {isExpanded ? 'See less' : 'Read more . . .'}
        </button>
      )}
    </div>
  );
};


export default ExpandText;