import React, { useState, useEffect } from 'react'
import GeneratorModal from '../GeneratorModal';

const ContentGeneratePage = ({ onChangeText }) => {

  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState('content');


  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onChangeText(newText)
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const closeModal = () => {
      setShowModal(false);
  }

  return (
    <div className="p-6">
      <div className='flex items-center justify-between mt-5'>
        <h1 className='font-bold text-xs xl:text-lg md:text-sm lg:text-sm sm:text-xs'>Create your post content</h1>
        {/* <p>Create your own content (or) Generate content using WC</p> */}
        <button className='text-xs text-blue-500' onClick={toggleModal}>
          Generate
        </button>
      </div>
      <div>
        <form>
          <textarea name="content" id="" onChange={handleTextChange} className='mt-3 w-[100%] border border-gray-300 outline-blue-400 p-10' />
        </form>
      </div>
      {showModal && (
        <div className="modal-overlay modal-open">
          <GeneratorModal closeModal={closeModal} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>
      )}
    </div>
  )
}

export default ContentGeneratePage
