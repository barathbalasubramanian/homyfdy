import React from 'react';

const FormTextArea = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col mt-8 w-full max-md:max-w-full">
      <label className="text-base font-semibold text-white" htmlFor={label.toLowerCase().replace(/\s/g, '-')}>
        {label}
      </label>
      <textarea
        id={label.toLowerCase().replace(/\s/g, '-')}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 shrink gap-3 px-5 pt-4 pb-20 mt-4 w-full text-sm font-medium leading-none rounded-md border border-solid bg-zinc-900 border-neutral-800 min-h-[122px] text-stone-500 max-md:max-w-full"
      />
    </div>
  );
};

export default FormTextArea;