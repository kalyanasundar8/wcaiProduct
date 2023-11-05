import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileText, faImage, faHashtag, faXmark } from '@fortawesome/free-solid-svg-icons';
import SuperHeroOne from "../assets/superhero/back.jpg"

const GeneratorModal = ({ selectedTab, setSelectedTab, closeModal}) => {

    const handleSelectedTab = (tab) => {
        setSelectedTab(tab)
    }

    return (
        <div className=''>
            <div className='bg-white w-[500px] h-[600px] md:w-[700px] lg:w-[800px] xl:w-[800px] border rounded-lg'>
                <nav className='py-10 relative'>
                    <div className='flex items-end justify-end mr-5 absolute top-5 left-0 right-0'>
                    <FontAwesomeIcon onClick={closeModal} icon={faXmark} className='bg-red-400 text-white font-bold rounded-full px-[5px] py-[3px] cursor-pointer hover:bg-red-600 transition-all duration-200 ease-in-out'/>
                    </div>
                    <ul className='flex items-center justify-evenly mt-10'>
                        <li><a onClick={() => {handleSelectedTab('content'); setSelectedTab('content')}} className={`text-lg ${selectedTab === 'content' ? 'bg-blue-500 text-white py-2 px-3 rounded-full' : 'text-gray-300'} hover:bg-blue-500 hover:text-white py-2 px-3 rounded-full`}><FontAwesomeIcon icon={faFileText} /></a></li>
                        <li><a onClick={() => {handleSelectedTab('image'); setSelectedTab('image')}} className={`text-lg ${selectedTab === 'image' ? 'bg-blue-500 text-white py-2 px-3 rounded-full' : 'text-gray-300'} hover:bg-blue-500 hover:text-white py-2 px-3 rounded-full`}><FontAwesomeIcon icon={faImage} /></a></li>
                        <li><a onClick={() => {handleSelectedTab('hashtag'); setSelectedTab('hashtag')}} className={`text-lg ${selectedTab === 'hashtag' ? 'bg-blue-500 text-white py-2 px-3 rounded-full' : 'text-gray-300'} hover:bg-blue-500 hover:text-white py-2 px-3 rounded-full`}><FontAwesomeIcon icon={faHashtag} /></a></li>
                    </ul>
                </nav>
                {selectedTab === 'content' && (
                    <section>
                        <form className='mx-10'>
                            <div className='relative'>
                                <input type="text" className='w-[100%] border border-gray-400 p-3 rounded-md outline-blue-400 placeholder:text-sm relative' placeholder='Enter a prompt to generate your content' />
                                <button className='absolute top-2 right-3 bg-blue-500 px-3 py-2 rounded-md text-xs text-white font-bold'>Generate</button>
                            </div>
                            <div>
                                <textarea name="content" id="content-gen" className='w-[100%] mt-3 border border-gray-400 rounded-md' cols="30" rows="10"></textarea>
                            </div>
                        </form>
                    </section>
                )}
                {selectedTab === 'image' && (
                    <section>
                        <form className='mx-10'>
                            <div className='flex items-center justify-normal gap-3'>
                                <input type="text" className='w-[100%] border border-gray-400 p-3 rounded-md outline-blue-400 placeholder:text-sm' placeholder='Enter a prompt to generate images' />
                                <input type='number' className='w-[20%] border border-gray-400 p-3 rounded-md outline-blue-400 placeholder:text-sm'/>
                                <button className='bg-blue-500 px-3 py-4 rounded-md text-xs text-white font-bold'>Generate</button>
                            </div>
                            <div className='flex flex-wrap gap-5 mt-4 border border-gray-400 h-[300px] px-3 py-3 overflow-scroll'>
                                <img src={SuperHeroOne} className='w-[150px] h-[100px]'/>
                                <img src={SuperHeroOne} className='w-[150px] h-[100px]'/>
                                <img src={SuperHeroOne} className='w-[150px] h-[100px]'/>
                                <img src={SuperHeroOne} className='w-[150px] h-[100px]'/>
                                <img src={SuperHeroOne} className='w-[150px] h-[100px]'/>
                                <img src={SuperHeroOne} className='w-[150px] h-[100px]'/>
                            </div>
                        </form>
                    </section>
                )}
                {selectedTab === 'hashtag' && (
                    <section>
                        <form className='mx-10'>
                            <div className='relative'>
                                <input type="text" className='w-[100%] border border-gray-400 p-3 rounded-md outline-blue-400 placeholder:text-sm' placeholder='Enter a prompt to generate hashtags' />
                                <button className='absolute top-2 right-3 bg-blue-500 px-3 py-2 rounded-md text-xs text-white font-bold'>Generate</button>
                            </div>
                            <div>
                                <textarea name="content" id="content-gen" className='w-[100%] mt-3 border border-gray-400 rounded-md' cols="30" rows="10"></textarea>
                            </div>
                        </form>
                    </section>
                )}
                <div className='flex items-center justify-end mx-10 my-4'>
                    <button className='text-red-500 mr-3'>Reset</button>
                    <button className='bg-blue-500 text-white rounded-md p-2 w-[100px]'>Use</button>
                </div>
            </div>
        </div>
    )
}

export default GeneratorModal
