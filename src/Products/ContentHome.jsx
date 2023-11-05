import { useState } from 'react'
import ContentGeneratePage from './contentgenerator/ContentGeneratePage'
import ImageGeneratorPage from './imagegenerator/ImageGeneratorPage'
import HashTagGeneratorPage from './hashtagGenerator/HashTagGeneratorPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faThumbsUp, faComment, faShare, faSmile,
  faImage,
  faThumbtack,
  faLink,
  faHeart,
  faPaperPlane,
  faBookmark,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import Minion from "../assets/minion sward.jpg";
import { AccountsList } from './accounts/AccountsList';

const ContentHome = () => {

  // Tab selection
  const [selectedTab, setSelectedTab] = useState('facebook');
  const [activeTab, setActiveTab] = useState('facebook'); // Set the default tab
  const [showInstaAccounts, setShowInstaAccounts] = useState(false);
  const [showFacebookAccounts, setShowFacebookAccounts] = useState(false);
  const [showTwitterAccounts, setShowTwitterAccounts] = useState(false);
  const [showLinkedInAccounts, setShowLinkedInAccounts] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedTab(tab);
  }

  // Content Generation
  const [contentText, setContentText] = useState('');

  const handleTextChange = (newText) => {
    setContentText(newText)
  }

  // Image generation
  const [selectedImage, setSelectedImages] = useState(null);

  const handleImageUpload = (newImage) => {
    setSelectedImages(newImage);
  }

  function getImageURL(image) {
    if (image instanceof Blob || image instanceof File) {
      return URL.createObjectURL(image);
    }
    return image; // Return the image as is (if it's already an URL)
  }

  // Hashtag Generation
  const [createdHashtags, setCreatedHashtags] = useState(null);

  const handleHashtagChange = (newHashtags) => {
    setCreatedHashtags(newHashtags);
  }

  const [instaClicked, setInstaClicked] = useState(false);
  const [facebookClicked, setFacebookClicked] = useState(false);
  const [twitterClicked, setTwitterClicked] = useState(false);
  const [linkedinClicked, setLinkedinClicked] = useState(false);
  const [iconClicked, setIconClicked] = useState('');
  console.log(iconClicked)

  const handleInstaClick = (icon) => {
    setInstaClicked(!instaClicked);
    setIconClicked(icon);
  }

  const handleFacebookClick = (icon) => {
    setFacebookClicked(!facebookClicked);
    setIconClicked(icon);
  }

  const handleTwitterClick = (icon) => {
    setTwitterClicked(!twitterClicked);
    setIconClicked(icon);
  }

  const handleLinkedinClick = (icon) => {
    setLinkedinClicked(!linkedinClicked);
    setIconClicked(icon);
  }

  const instaIconColor = instaClicked ? 'text-pink-500' : 'text-gray-400';
  const facebookIconColor = facebookClicked ? 'text-blue-600' : 'text-gray-400';
  const twitterIconColor = twitterClicked ? 'text-blue-400' : 'text-gray-400';
  const linkedinIconColor = linkedinClicked ? 'text-blue-800' : 'text-gray-400';

  return (
    <div className="">
      <div className='h-screen flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row m-10 gap-5'>
        <section className="border border-gray-300 rounded-md sm:w-4/4 md:w-4/4 lg:w-2/4 xl:w-2/5 mb-0">
          <h1>Templates</h1>
        </section>
        <section className="border border-gray-300 rounded-md flex-grow w-full sm:w-4/4 md:w-4/4 lg:w-4/4 xl:w-4/5 mb-0 overflow-scroll custom-scrollbar">
          <div className="h-full flex flex-col gap-5">
            <div className=''><ContentGeneratePage onChangeText={handleTextChange} /></div>
            <div className=''><ImageGeneratorPage onImageUpload={handleImageUpload} /></div>
            <div className=''><HashTagGeneratorPage onHashtagChange={handleHashtagChange} /></div>
            <div className='flex items-center justify-center gap-5'>
              <FontAwesomeIcon icon={faInstagram} className={`text-xl xl:text-2xl md:text-xl lg:text-xl sm:text-xl ${instaIconColor} hover:text-pink-500`} onClick={() => {handleInstaClick('insta'); setShowInstaAccounts(!showInstaAccounts)}} />
              <FontAwesomeIcon icon={faFacebook} className={`text-xl xl:text-2xl md:text-xl lg:text-xl sm:text-xl ${facebookIconColor} hover:text-blue-600`} onClick={() => {handleFacebookClick('facebook'); setShowFacebookAccounts(!showFacebookAccounts)}} />
              <FontAwesomeIcon icon={faTwitter} className={`text-xl xl:text-2xl md:text-xl lg:text-xl sm:text-xl ${twitterIconColor} hover:text-blue-400`} onClick={() => {handleTwitterClick('twitter'); setShowTwitterAccounts(!showTwitterAccounts)}} />
              <FontAwesomeIcon icon={faLinkedin} className={`text-xl xl:text-2xl md:text-xl lg:text-xl sm:text-xl ${linkedinIconColor} hover:text-blue-800`} onClick={() => {handleLinkedinClick('linkedin'); setShowLinkedInAccounts(!showLinkedInAccounts)}} />
            </div>
            { iconClicked === 'insta' ? showInstaAccounts && (
            <AccountsList iconName={iconClicked}/>
            ) : iconClicked === 'facebook' ? showFacebookAccounts && (
              <AccountsList iconName={iconClicked}/>
            ) : iconClicked === 'twitter' ? showTwitterAccounts && (
              <AccountsList iconName={iconClicked}/>
            ) : iconClicked === 'linkedin' ? showLinkedInAccounts && (
              <AccountsList iconName={iconClicked}/>
            ) : ""}
          </div>
        </section>
        <section className="border border-gray-300 rounded-md flex-grow w-full sm:w-4/4 md:w-4/4 lg:w-3/4 xl:w-2/4 overflow-scroll custom-scrollbar">
          <div className="flex items-center justify-between mt-0 rounded-md bg-white shadow-lg px-10 py-4 text-gray-300">
            <FontAwesomeIcon icon={faFacebook} onClick={() => handleTabClick('facebook')} className={`text-2xl ${activeTab === 'facebook' ? 'text-blue-600' : 'text-gray-400'} hover:text-blue-600 cursor-pointer`} />
            <FontAwesomeIcon icon={faInstagram} onClick={() => handleTabClick('instagram')} className={`text-2xl ${activeTab === 'instagram' ? 'text-pink-500' : 'text-gray-400'} hover:text-pink-500 cursor-pointer`} />
            <FontAwesomeIcon icon={faTwitter} onClick={() => handleTabClick('twitter')} className={`text-2xl ${activeTab === 'twitter' ? 'text-blue-400' : 'text-gray-400'} hover:text-blue-400 cursor-pointer`} />
            <FontAwesomeIcon icon={faLinkedin} onClick={() => handleTabClick('linkedin')} className={`text-2xl ${activeTab === 'linkedin' ? 'text-blue-900' : 'text-gray-400'} hover:text-blue-900 cursor-pointer`} />
          </div>
          <div className='flex items-center justify-center'>
            {selectedTab === 'facebook' && (
              <div id='facebook' className="border border-blue-600 bg-white p-4 m-4 w-[400px] shadow-lg rounded-md max-w-[400px]">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={Minion}
                    alt="User Profile"
                  />
                  <div className="ml-2">
                    <h3 className="text-lg font-semibold">User's Name</h3>
                    <p className="text-blue-300 text-xs">Posted on October 18, 2023</p>
                  </div>
                </div>
                <p className="mt-4" style={{ wordWrap: "break-word" }}>{contentText}</p>
                <div>
                  <ul className='flex items-center'>
                    {createdHashtags ? createdHashtags.map((hashtags) => (
                      <li className="text-gray-700 m-1">{hashtags}</li>
                    )) : null}
                  </ul>
                </div>
                <div className='flex items-center justify-center'>
                  {selectedImage && (
                    <div className='' style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '8px',
                    }}>
                      {selectedImage && selectedImage.map((image, index) => (
                        <img className='' key={index} src={getImageURL(image)} alt={`Selected Image ${index}`} style={{
                          width: '100%',
                          height: 'auto',
                          aspectRatio: '1 / 1', // Maintain a 1:1 aspect ratio
                        }} />
                      ))}
                    </div>
                  )}
                </div>
                <div className=''>
                  <div className="text-gray-400 mt-4 flex items-center gap-4">
                    <div className='flex items-center text-xs'>
                      <FontAwesomeIcon icon={faThumbsUp} className='mr-2' />
                      <p>Like</p>
                    </div>
                    <div className='flex items-center text-xs'>
                      <FontAwesomeIcon icon={faComment} className='mr-2' />
                      <p>Comment</p>
                    </div>
                    <div className='flex items-center text-xs'>
                      <FontAwesomeIcon icon={faShare} className='mr-2' />
                      <p>Share</p>
                    </div>
                  </div>
                  <div className='flex mt-2'>
                    <p className=''>😀</p>
                    <p>😭</p>
                  </div>
                  <div className='flex items-center mt-3'>
                    <div className='bg-gray-200 px-4 py-2'>K</div>
                    <div className='border border-gray-300 w-[100%] ml-2 px-2 py-2 flex items-center justify-between'>
                      <h1 className='text-xs text-gray-300'>Write a comment</h1>
                      <div className='text-xs text-gray-400 flex items-center justify-evenly gap-2'>
                        <FontAwesomeIcon icon={faSmile} />
                        <FontAwesomeIcon icon={faImage} />
                        <FontAwesomeIcon icon={faThumbtack} />
                        <FontAwesomeIcon icon={faLink} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedTab === 'instagram' && (
              <div id="instagram" className="border border-pink-500 bg-white p-4 m-4 h-full w-[400px] shadow-lg rounded-md max-w-[400px]">
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={Minion}
                    alt="User Profile"
                  />
                  <div className="ml-2">
                    <h3 className="text-xl font-semibold">User's Name</h3>
                    <p className="text-gray-500 text-xs">Posted on October 18, 2023</p>
                  </div>
                </div>
                <p className="mt-4 text-lg">{contentText}</p>
                <div>
                  <ul className="flex items-center text-gray-500 text-xs">
                    {createdHashtags
                      ? createdHashtags.map((hashtags, index) => (
                        <li key={index} className="m-1">
                          {hashtags}
                        </li>
                      ))
                      : null}
                  </ul>
                </div>
                <div className="mt-4">
                  {selectedImage && (
                    <div
                      className=""
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                        gap: "8px",
                      }}
                    >
                      {selectedImage.map((image, index) => (
                        <img
                          key={index}
                          src={getImageURL(image)}
                          alt={`Selected Image ${index}`}
                          style={{
                            width: "100%",
                            height: "auto",
                            aspectRatio: "1 / 1", // Maintain a 1:1 aspect ratio
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className="mt-4 text-gray-400">
                  <div className="flex items-center gap-4 text-xs">
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faComment} />
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </div>
                  <div className="flex items-center mt-2 text-xs text-gray-400">
                    <FontAwesomeIcon icon={faBookmark} />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-gray-500">
                    <p className="text-xs">
                      Liked by <strong>username</strong> and{" "}
                      <strong>10,345 others</strong>
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-gray-500">
                    <strong>username</strong> Nice shot! 👏
                  </p>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  View all <strong>245 comments</strong>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  1 HOUR AGO
                </div>
              </div>
            )}
            {selectedTab === 'twitter' && (
              <div id="twitter" className="border border-blue-400 bg-white p-4 m-4 w-[400px] shadow-lg rounded-md max-w-[400px]">
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={Minion}
                    alt="User Profile"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">User's Name</h3>
                    <p className="text-gray-500 text-xs">@username &bull; 2h</p>
                  </div>
                </div>
                <p className="mt-4 text-lg">{contentText}</p>
                <div>
                  <ul className="flex items-center text-gray-500 text-xs">
                    {createdHashtags
                      ? createdHashtags.map((hashtags, index) => (
                        <li key={index} className="m-1">
                          #{hashtags}
                        </li>
                      ))
                      : null}
                  </ul>
                </div>
                <div className="mt-4">
                  {selectedImage && (
                    <div
                      className=""
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                        gap: "8px",
                      }}
                    >
                      {selectedImage.map((image, index) => (
                        <img
                          key={index}
                          src={getImageURL(image)}
                          alt={`Selected Image ${index}`}
                          style={{
                            width: "100%",
                            height: "auto",
                            aspectRatio: "1 / 1", // Maintain a 1:1 aspect ratio
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className="mt-4 text-gray-400">
                  <div className="flex items-center gap-4 text-xs">
                    <FontAwesomeIcon icon={faComment} />
                    <FontAwesomeIcon icon={faRetweet} />
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faShare} />
                  </div>
                </div>
                <div className="mt-4 text-gray-500">
                  <p className="text-xs">123 Comments &bull; 456 Retweets &bull; 789 Likes</p>
                </div>
              </div>
            )}
            {selectedTab === 'linkedin' && (
              <div id="linkedin" className="border border-blue-900 bg-white p-4 m-4 w-[400px] shadow-lg rounded-md max-w-[400px]">
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={Minion}
                    alt="User Profile"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">User's Name</h3>
                    <p className="text-gray-500 text-xs">3rd+ | 500+ connections</p>
                  </div>
                </div>
                <p className="mt-4 text-lg">{contentText}</p>
                <div>
                  <ul className="flex items-center text-gray-500 text-xs">
                    {createdHashtags
                      ? createdHashtags.map((hashtags, index) => (
                        <li key={index} className="m-1">
                          #{hashtags}
                        </li>
                      ))
                      : null}
                  </ul>
                </div>
                <div className="mt-4">
                  {selectedImage && (
                    <div
                      className=""
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                        gap: "8px",
                      }}
                    >
                      {selectedImage.map((image, index) => (
                        <img
                          key={index}
                          src={getImageURL(image)}
                          alt={`Selected Image ${index}`}
                          style={{
                            width: "100%",
                            height: "auto",
                            aspectRatio: "1 / 1", // Maintain a 1:1 aspect ratio
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className="mt-4 text-gray-400">
                  <div className="flex items-center gap-4 text-xs">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <p>123 Likes</p>
                    <FontAwesomeIcon icon={faComment} />
                    <p>45 Comments</p>
                    <FontAwesomeIcon icon={faShare} />
                    <p>Share</p>
                  </div>
                </div>
                <div className="mt-4 text-gray-400">
                  <div className="flex items-center gap-4 text-xs">
                    <FontAwesomeIcon icon={faImage} />
                    <p>Attach</p>
                    <FontAwesomeIcon icon={faComment} />
                    <p>Comment</p>
                    <FontAwesomeIcon icon={faShare} />
                    <p>Send</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContentHome
