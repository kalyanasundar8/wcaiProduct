import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faCircle } from "@fortawesome/free-solid-svg-icons";

const OutlineListing = ({ openSection, openingFunctionality }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center">
        <span className="bg-blue-500 text-white px-1 py-1 flex items-center rounded-full">
          {openSection === "facebook" ? (
            <FontAwesomeIcon icon={faCircle} className="text-[5px]" />
          ) : (
            <FontAwesomeIcon icon={faCircleDot} className="text-[5px]" />
          )}
        </span>
        <a className="ml-3 cursor-pointer" onClick={() => openingFunctionality("facebook")}>
          Facebook
        </a>
      </div>
      {openSection === "facebook" && (
        <form className="space-y-4 ml-12">
          {/* Your form fields and code go here */}
        </form>
      )}
    </div>
  );
};

export default OutlineListing;