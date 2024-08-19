import React from 'react';

const FormInput = ({ label, placeholder, type = 'text',value, onChange }) => {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
      <label className="text-base font-semibold text-white" htmlFor={label.toLowerCase().replace(/\s/g, '-')}>
        {label}
      </label>
      <input
        type={type}
        id={label.toLowerCase().replace(/\s/g, '-')}
        placeholder={placeholder}
        value={value} 
        onChange={onChange} 
        className="flex-1 shrink gap-3 self-stretch px-5 py-4 mt-3.5 w-full text-sm font-medium leading-none rounded-md border border-solid bg-zinc-900 border-neutral-800 text-stone-500"
      />
    </div>
  );
};

export default FormInput;