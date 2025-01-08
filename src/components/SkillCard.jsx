import React from 'react';

const SkillCard = ({ icon, title }) => {
  return (
    <div className='min-w-[5rem] max-w-[9rem] h-[5rem] border-white border rounded-md p-4 flex flex-col items-center justify-center'>
      <div className="icon">{icon}</div>
      <div className="title text-center mt-2">{title}</div>
    </div>
  );
};

export default SkillCard;
