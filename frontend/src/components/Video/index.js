import React, { useRef } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import index from './index.css';

export const Video = () => {
  const playerRef = useRef(null);

  const closeVideoPopup = () => {
    document.querySelector('.full-screen').classList.remove('show-full');

    // Pause the video using the YouTube Player API
    if (playerRef.current) {
      playerRef.current.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*'
      );
    }
  };

  return (
    <>
      <div className='full-screen'>
        <RxCrossCircled
          style={{ position: 'absolute', fontSize: '36px', color: 'white', right: '40px', top: '40px' }}
          onClick={closeVideoPopup}
        />
        <iframe
          ref={playerRef}
          width='1197'
          height='673'
          src='https://www.youtube.com/embed/ifs3ladT_tc?enablejsapi=1'
          title='Trading Tiers Intro Video'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};
