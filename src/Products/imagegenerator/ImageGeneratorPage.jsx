import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import GeneratorModal from "../GeneratorModal";

const ImageGeneratorPage = ({ onImageUpload }) => {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState("image");

  const onDrop = (acceptedFiles) => {
    // Handle image uploads here
    setImages([...images, ...acceptedFiles]);
    onImageUpload([...images, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="p-4 mb-0">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xs xl:text-lg md:text-sm lg:text-sm sm:text-xs">Upload your images</h1>
        <button className="text-xs text-blue-500" onClick={toggleModal}>
          Generate
        </button>
      </div>
      <div className="mb-4">
        <div
          {...getRootProps()}
          className="mt-3 dropzone border-dashed border-2 border-blue-400 p-4 rounded hover:bg-blue-100 transition-all duration-500"
        >
          <input {...getInputProps()} />
          <p className="text-center text-xs text-blue-400 p-10 hover:font-bold">
            {" "}
            <FontAwesomeIcon icon={faCloudUploadAlt} className="text-4xl"/>
            <p className="text-gray-300 font-bold mt-3">Drag and Drop here</p>
            {/* <FontAwesomeIcon
              icon={faImage}
              className="fa-shake mr-2 text-blue-400 hover:font-bold"
            />
            Upload Image Here */}
          </p>
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
      </div>
      {images.length > 0 && (
        <div>
          <h2 className="text-xs font-light mb-2">Uploaded Images:</h2>
          <ul className="flex gap-4 flex-wrap">
            {images.map((file) => (
              <li
                key={file.path}
                className="text-gray-700 bg-gray-300 p-1 rounded-md"
              >
                {file.path}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageGeneratorPage;
