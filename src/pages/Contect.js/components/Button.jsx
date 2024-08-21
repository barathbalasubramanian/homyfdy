import React from 'react';

const Button = ({ text }) => {
  return (
    <button className="gap-10 self-stretch px-9 py-3.5 my-auto text-sm leading-6 text-white rounded-md bg-green-600 shadow-[0px_0px_21px_rgba(31,200,39,1)] max-md:px-5">
      {text}
    </button>
  );
};

export default Button;