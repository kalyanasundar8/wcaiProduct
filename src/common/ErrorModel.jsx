import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring';
import { Twemoji } from 'react-emoji-render';

const ErrorModel = ({ error }) => {
    const [isShaking, setShaking] = useState(false);

  // Define the react-spring animation for the shaking effect
  const emojiAnimation = useSpring({
    transform: isShaking ? 'translate(0px, 0px)' : 'translate(2px, 2px)',
  });

  // Function to start the shaking effect
  const startShaking = () => {
    setShaking(true);
  };

  // Function to stop the shaking effect
  const stopShaking = () => {
    setShaking(false);
  };

  // Use useEffect to create a continuous loop of shaking
  useEffect(() => {
    const shakingTimer = setInterval(() => {
      startShaking();

      // Stop the shaking after a certain duration (e.g., 500ms)
      setTimeout(stopShaking, 500);
    }, 1000); // Shake every 1000ms (1 second)

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(shakingTimer);
    };
  }, []);
  
  return (
    <div className='bg-red-200 mb-5 p-2 border rounded-sm text-red-500 text-sm flex items-center justify-between'>
      <h1>{error}</h1>
      <animated.div style={emojiAnimation}>
      <Twemoji text="😔" /> {/* You can replace this emoji with the one you want */}
    </animated.div>
    </div>
  )
}

export default ErrorModel
