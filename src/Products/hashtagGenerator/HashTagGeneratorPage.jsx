import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import GeneratorModal from "../GeneratorModal";

const HashTagGeneratorPage = ({ onHashtagChange }) => {
  const [text, setText] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState("hashtag");

  const handleTextChange = (e) => {
    const textValue = e.target.value;
    setText(textValue);

    // Use a regular expression to extract hashtags from the text
    const hashtagPattern = /#(\w+)/g;
    const extractedHashtags = textValue.match(hashtagPattern) || [];
    setHashtags(extractedHashtags);
    onHashtagChange(extractedHashtags);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xs xl:text-lg md:text-sm lg:text-sm sm:text-xs">
          Hashtags{" "}
          <FontAwesomeIcon icon={faHashtag} className="fa-shake ml-2" />
        </h1>
        <button className="text-xs text-blue-500" onClick={toggleModal}>
          Generate
        </button>
      </div>
      <div className="mb-4">
        <input
          value={text}
          onChange={handleTextChange}
          placeholder="Enter your text with hashtags here"
          rows="5"
          cols="50"
          className="mt-3 w-[100%] border border-gray-300 p-3 outline-blue-400 rounded-[5px] placeholder:text-xs"
        />
      </div>
      {showModal && (
        <div className="modal-overlay modal-open">
          <GeneratorModal
          closeModal={closeModal}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>
      )}
      <div>
        <ul className="flex items-center">
          {hashtags.map((hashtag, index) => (
            <li key={index} className="text-gray-700 pl-3">
              {hashtag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HashTagGeneratorPage;
