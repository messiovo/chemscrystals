import React, {useState} from "react";

const Faq = ({ question, answer }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const handleIsDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  return (
    <div>
      <div className=" w-[30%] m-auto flex flex-col mt-4 overflow-hidden cursor-pointer  "
      onClick={handleIsDropdown}
      onBlur={()=> setIsDropdown(false)}
      tabIndex={5}>
        <div className="flex items-center gap-4 px-6 bg-[#98B4AA] py-2 text-md fold-semibold">
          <svg
            width="25"
            height="25"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M35 2.9165C17.2813 2.9165 2.91669 17.2811 2.91669 34.9998C2.91669 52.7186 17.2813 67.0832 35 67.0832C52.7188 67.0832 67.0834 52.7186 67.0834 34.9998C67.0834 17.2811 52.7188 2.9165 35 2.9165ZM37.9167 46.6665C37.9167 47.44 37.6094 48.1819 37.0624 48.7289C36.5154 49.2759 35.7736 49.5832 35 49.5832C34.2265 49.5832 33.4846 49.2759 32.9376 48.7289C32.3906 48.1819 32.0834 47.44 32.0834 46.6665V37.9165H23.3334C22.5598 37.9165 21.8179 37.6092 21.271 37.0622C20.724 36.5152 20.4167 35.7734 20.4167 34.9998C20.4167 34.2263 20.724 33.4844 21.271 32.9374C21.8179 32.3905 22.5598 32.0832 23.3334 32.0832H32.0834V23.3332C32.0834 22.5596 32.3906 21.8178 32.9376 21.2708C33.4846 20.7238 34.2265 20.4165 35 20.4165C35.7736 20.4165 36.5154 20.7238 37.0624 21.2708C37.6094 21.8178 37.9167 22.5596 37.9167 23.3332V32.0832H46.6667C47.4402 32.0832 48.1821 32.3905 48.7291 32.9374C49.2761 33.4844 49.5834 34.2263 49.5834 34.9998C49.5834 35.7734 49.2761 36.5152 48.7291 37.0622C48.1821 37.6092 47.4402 37.9165 46.6667 37.9165H37.9167V46.6665Z"
              fill="#495371"
            />
          </svg>
          <span> {question}</span>
        </div>
        <div
          className={`${
            !isDropdown ? " h-0" : " h-24"
          }   px-4  bg-[teal] transition-[height] duration-500 ease-in`}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Faq;
