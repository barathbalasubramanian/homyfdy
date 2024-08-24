import React, { useState } from 'react';
import Noti from './Noti';

function FAQs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSave = () => {
    console.log("Question:", question);
    console.log("Answer:", answer);
    setIsModalOpen(false);
    setQuestion('');
    setAnswer('');
  };

  const handleClear = () => {
    setQuestion('');
    setAnswer('');
  };

  return (
    <main className="flex flex-col py-6 px-8 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col gap-8 w-full max-md:mr-2.5 max-md:max-w-full">
          <div className='flex items-center justify-between max-md:flex-col max-md:items-start gap-4'>
            <div className="flex overflow-hidden flex-wrap gap-2 items-center px-3 w-1/2 max-md:w-[90%] text-xs leading-6 text-center text-gray-400 whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid min-h-[40px] max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/51a0430ee58a1c70a8bd7129382b322477b4e868f6106bd719ff31411841b3ec?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
              <input type="text" placeholder="Search..." className="gap-0 self-stretch my-auto bg-transparent border-none focus:outline-none" aria-label="Search" />
            </div>
            <div>
              <Noti />
            </div>
          </div>
          <div className='w-full flex items-center justify-between'>
            <div className='text-black font-semibold text-2xl'>
              FAQs
            </div>
            <div className="bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={() => setIsModalOpen(true)}>
              Add FAQs
            </div>
          </div>
          <div>
            <div className='w-full flex flex-wrap gap-6 items-start'>
              {
                Array.from({ length: 5 }).map((_, index) => {
                  return (
                    <div key={index} className='flex p-4 border-neutral-400 w-[30%] max-lg:w-[40%] max-sm:w-[100%] flex-col items-start justify-between gap-3'>
                      <div className='text-black font-semibold'>How do I search for properties on Homyfyd?</div>
                      <div className='text-neutral-500 font-light'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </div>
                      <div className='flex w-full gap-3 items-center justify-between'>
                        <div className="bg-green-500 flex-1 text-white px-4 py-2 rounded-lg">Edit</div>
                        <div className="bg-green-500 flex-1 text-white px-4 py-2 rounded-lg">Delete</div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <div className='w-full flex items-center justify-between mb-6'>
                <div className="text-xl font-semibold text-black">Add/Update FAQ</div>
                <div className='font-bold text-xl cursor-pointer text-red-500' onClick={()=>{setIsModalOpen(false)}}><img src='assets/close.svg' alt='Close'/></div>
            </div>
            <div className='flex flex-col gap-4'>
              <div>
                <label className="block text-gray-700">Question</label>
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="w-full text-neutral-700 outline-none mt-1 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Answer</label>
                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-full text-neutral-700 outline-none mt-1 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button onClick={handleClear} className="bg-gray-300 text-black px-4 py-2 rounded-lg">Clear</button>
                <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded-lg">Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default FAQs;
