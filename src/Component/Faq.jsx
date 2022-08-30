import React, { useState } from "react";

const Faq = ({ question, answer }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const handleIsDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  return (
    <div>
      <div
        className={`w-full lg:w-[40%] m-auto flex flex-col mt-4 overflow-hidden  cursor-pointer `}
        onClick={handleIsDropdown}
        onBlur={() => setIsDropdown(false)}
        tabIndex={5}
      >
        <div
          className={`flex items-center gap-6 px-4  py-2 text-md fold-semibold ${
            isDropdown ? "bg-light text-dark" : "bg-medium text-light"
          } font-semibold text-sm lg:text-lg transition-colors duration-500 ease-in`}
        >
         <div className="bg-light w-6 h-6 rounded-full">
          <span className={`${!isDropdown ? "after:rotate-0" : "after:rotate-90"} w-4 h-1 relative top-2.5 left-1 bg-dark block after:block after:content-[''] after:h-4 after:w-1 after:bg-dark after:relative after:left-1.5 after:bottom-1.5 after:transition-transform after:duration-500 after:ease-in`}></span>
         </div>

          <span> {question}</span>
        </div>
        <div
          className={`${
            !isDropdown ? " h-0" : " h-24"
          }   px-4  bg-light transition-[height] duration-500 ease-in text-dark text-sm lg:text-lg font-semibold `}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Faq;
