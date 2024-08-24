import React from 'react'

function Noti() {
    const iconButtons = [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/27c8bfd5f3f31ccac7ba0f35b6f1611e6e5a64aec0ed28a0151d8ff9762fc7cc?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", alt: "Icon 1" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd1d99630efaa818e0076d8de6b217454cc0bba0184003b6f610c9b44384dd77?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757", alt: "Icon 2" },
      ];
    return (
    <div>
      <nav className="flex overflow-hidden flex-wrap gap-2 items-center pr-0 pl-14 max-md:px-0">
      {iconButtons.map((button, index) => (
        <div key={index}>
            <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch px-2 my-auto w-10 h-10 bg-white rounded-lg border border-gray-200 border-solid">
                <img loading="lazy" src={button.src} alt={button.alt} className="object-contain self-stretch my-auto w-6 aspect-square" />
            </div>
        </div>
      ))}

        <div className="flex overflow-hidden gap-2 justify-center items-center self-stretch p-2 my-auto text-sm leading-6 bg-white rounded-lg border border-gray-200 border-solid text-neutral-700">
            <img loading="lazy" src='https://cdn.builder.io/api/v1/image/assets/TEMP/1e96b01e29ec01f1e0e5f9039b602daa8cffa106381ccffbb9a08497b66da83c?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757' alt={`Derek Alvarado's avatar`} className="object-contain shrink-0 self-stretch my-auto w-6 rounded-sm aspect-square" />
            <span className="self-stretch my-auto">Derek Alvarado</span>
            <img loading="lazy" src='https://cdn.builder.io/api/v1/image/assets/TEMP/0573c589ed22e8b46126a16e3de66688394d405ed455c736446a78c6b75238f8?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757' alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </div>
    </nav>
    </div>
  )
}

export default Noti
