import React, { useState, useEffect } from 'react';


const ShowCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  const [clickedButton, setClickedButton] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    setRenderCount(renderCount + 1);
    setClickedButton(true)
  };

  return (
    <div>
      {clickedButton && <h2>Current Time:{currentTime}</h2>}
      <button onClick={handleClick}>Show Current Time</button>
      <p>Number of times clicked: {clickCount}</p>
      <p>Number of times rendered: {renderCount}</p>
    </div>
  )
}
export default ShowCurrentTime