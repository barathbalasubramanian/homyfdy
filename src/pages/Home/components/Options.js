import React from 'react';

function Options() {

  const data = [
    {
      title: 'Flats by bedrooms in Bangalore',
      items: [
        '1 BHK apartments in Bangalore',
        '2 BHK apartments in Bangalore'
      ]
    },
    {
      title: 'Construction status in Bangalore',
      items: [
        'Under construction properties',
        'Ready To Move properties',
        'Under construction properties'
      ]
    },
    {
      title: 'Best moving properties in Bangalore region wise',
      items: [
        'Under construction properties',
        'Ready To Move properties',
        'Under construction properties'
      ]
    },
    {
      title: 'Other projects by developers in Bangalore',
      items: [
        'Prestige Developers projects',
        'Shobha projects',
        'Lodha projects',
        'Hiranandani projects '
      ]
    },
  ];

  return (
    <div className='py-16 px-16 gap-8 flex w-full overflow-scroll max-md:px-3 max-md:py-10'>
      {
        data.map((option, index) => {
          return (
            <div className='options-con' key={index}>
              <div className='font-semibold'>{option.title}</div>
              <div className='flex flex-col'>
                {option.items.map((item, itemIndex) => (
                  <div key={itemIndex}>{item}</div>
                ))}
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Options;
