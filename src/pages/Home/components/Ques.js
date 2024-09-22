import React, { useState, useEffect } from 'react';
import { getAllFAQ } from '../../../firebase/faq';

function Ques() {
  const [faqs, setFaqs] = useState([]);

  const fetchFaqs = async () => {
    try {
      const fetchedFaqs = await getAllFAQ();
      setFaqs(fetchedFaqs);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  return (
    <div className='py-10'>
      <div className='px-16 py-6 max-md:px-3 flex items-center gap-8 justify-between text-start max-md:flex-col max-md:items-start'>
        <div>
          <div className='averoxfont text-3xl pb-2'>FREQUENTLY ASKED QUESTIONS</div>
          <div style={{color: "grey"}} className='w-3/4'>
            Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
          </div>
        </div>
        <div className='cursor-pointer min-w-fit flex items-center gap-3 px-2 py-1' style={{border: "1px solid #262626", backgroundColor: "var(--blackhd)", borderRadius: "5px"}}>
          View All FAQ's
        </div>
      </div>

      <div className='flex w-full px-16 max-md:px-3 gap-8 overflow-scroll py-10' style={{borderBottom: "1px solid #262626"}}>
        {faqs.map((faq, index) => (
          <div key={index} className='ques-con'>
            <div className='pb-1'>{faq.question}</div>
            <div style={{color: "grey"}} className='pb-1 text-sm'>{faq.answer}</div>
            <div className='cursor-pointer bg-green-600 shadow-[0px_0px_21px_rgba(31,200,39,1)] text-sm w-fit flex items-center gap-3 px-2 py-1' style={{backgroundColor: "var(--green)", borderRadius: "5px"}}>
              Read More
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ques;
