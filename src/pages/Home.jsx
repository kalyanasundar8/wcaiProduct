import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SvgLogo from '../common/SvgLogo';
import ImageOne from '../assets/content_generate_page.png';
import ImageTwo from "../assets/image_generate_page.png";
import ImageThree from "../assets/hashtag_generate_page.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileText, faImage, faHashtag } from '@fortawesome/free-solid-svg-icons';
import SuccessModel from '../common/SuccessModel';
import { useLocation } from 'react-router-dom';

const Home = () => {

    const location = useLocation();
    const pathName = location?.state?.path;
    // console.log(pathName);
    const message = location?.state?.message;
    // console.log(message.data.name);

    const [success, setSuccess] = useState("");

    const images = [
        { url: ImageOne },
        { url: ImageTwo },
        { url: ImageThree }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const updateIndex = (newIndex) => {
        setCurrentIndex(newIndex);
    }

    useEffect(() => {

        if(pathName === "/signin") {
            console.log(message.data.name);
            setSuccess(`✨🎉 Welcome back ${message.data.name}`);

            const displayTime = 5000;
            const clearSuccesTime = setTimeout(() => {
                setSuccess("")
            }, displayTime);
            
            return () => {
                clearTimeout(clearSuccesTime);
            }
        }

        // const displayTime = 5000;
        // const disappearMessage = setInterval(() => {
            
        // }, displayTime);
        
        const sliding = setInterval(() => {
            const newIndex = (currentIndex + 1) % images.length;
            updateIndex(newIndex);
        }, 2000);

        return () => {
            // clearInterval(disappearMessage);
            clearInterval(sliding);
        };
    }, [currentIndex])


    return (
        <div className='mx-auto'>
            {/* Header section */}
            <section className='top-section'>
                { success ? (
                    <SuccessModel success={success}/>
                ) : ""}
                <Navbar />
                <div className="my-20 mx-4 lg:mx-28 mt-40">
                    <div className="lg:w-1/2 mx-auto text-center">
                        <h1 className="text-white text-4xl lg:text-5xl font-bold sm:text-3xl md:text-4xl" style={{ fontSize: "70px", lineHeight: "1.15" }}>
                            WC AI Generator
                        </h1>
                        <p className="text-base lg:text-lg text-gray-300 mt-5 sm:mt-7 md:mt-10">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam amet cum tenetur error non mollitia, deserunt hic! Dolore maiores consequatur adipisci quisquam perferendis minus explicabo autem. Quas ratione perspiciatis laborum.
                        </p>
                        <div className="mt-5 sm:mt-7 md:mt-10 lg:mt-12">
                            <button className="light-button px-10 sm:px-20 py-3 text-white font-semibold">
                                Free Trial
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Header section ends */}

            {/* Products list */}
            <section className='product-section container mt-20 mb-20 mx-auto'>
                <h1 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold'>WC Products</h1>
                <div className='my-7 flex flex-col items-center sm:flex-row sm:justify-evenly md:flex-row md:justify-evenly'>
                    <div className='p-3 rounded-lg'>
                        <div className='group hover:bg-blue-100 transition duration-300 ease-in-out p-3 rounded-lg'>
                            <FontAwesomeIcon icon={faFileText} className='text-2xl bg-blue-700 text-white p-3 rounded-full w-6' />
                            <h1 className='mt-2 text-2xl font-bold'>Content Generator</h1>
                            <p className='text-gray-500 font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore velit hic reprehenderit obcaecati deserunt commodi sapiente, nemo facere tempora incidunt quae voluptas magnam consectetur? In minima qui ad et.</p>
                        </div>
                    </div>
                    <div className=' p-3 rounded-lg'>
                        <div className='group hover:bg-blue-100 transition duration-300 ease-in-out p-3 rounded-lg'>
                            <FontAwesomeIcon icon={faImage} className='text-2xl bg-blue-700 text-white p-3 rounded-full w-6' />
                            <h1 className='mt-2 text-2xl font-bold'>Image Generator</h1>
                            <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore velit hic reprehenderit obcaecati deserunt commodi sapiente, nemo facere tempora incidunt quae voluptas magnam consectetur? In minima qui ad et.</p>
                        </div>
                    </div>
                    <div className='p-3 rounded-lg'>
                        <div className='group hover:bg-blue-100 transition duration-300 ease-in-out p-3 rounded-lg'>
                            <FontAwesomeIcon icon={faHashtag} className='text-2xl bg-blue-700 text-white p-3 rounded-full w-6' />
                            <h1 className='mt-2 text-2xl font-bold'>Hashtag Generator</h1>
                            <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore velit hic reprehenderit obcaecati deserunt commodi sapiente, nemo facere tempora incidunt quae voluptas magnam consectetur? In minima qui ad et.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Products list ends */}

            {/* Product showcase */}
            <section className='flex items-center justify-center w-full h-full'>
                <div className='mt-20 mb-20'>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.url}
                            alt={`Image ${index + 1}`}
                            style={{ display: index === currentIndex ? 'block' : 'none', width: "1000px", transition: "all 1s ease" }}
                        />
                    ))}
                </div>
            </section>
            {/* Product showcase ends */}
        </div>

    )
}

export default Home
