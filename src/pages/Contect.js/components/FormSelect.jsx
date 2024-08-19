import React from 'react';

const FormSelect = ({ label, options ,value, onChange }) => {
  return (
    <div className="flex flex-col flex-1 gap-4 shrink basis-0 min-w-[240px]">
      <label className="text-base font-semibold text-white" htmlFor={label.toLowerCase().replace(/\s/g, '-')}>
        {label}
      </label>
      <div className="relative">
        <select
          id={label.toLowerCase().replace(/\s/g, '-')}
          value={value} 
          onChange={onChange} 
          className="flex gap-3 items-center  px-5 py-4 w-full text-sm font-medium leading-none rounded-md border border-solid bg-zinc-900 border-neutral-800 text-stone-500 appearance-none"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6c7fa7bcc537c506e2eb19ac900ce762bfd77b8cc623b0e18a0ce14810fdae0?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757"
          alt=""
          className="object-contain absolute right-5 top-1/2 transform -translate-y-1/2 w-5 aspect-square pointer-events-none"
        />
      </div>
    </div>
  );
};

export default FormSelect;