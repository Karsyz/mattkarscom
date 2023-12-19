import React, { useEffect } from 'react';

const LivePortrait = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    document.getElementsByClassName("vimeo-embed")[0].appendChild(script);
  }, []);

  const videoData = {
    title: 'Karsy Live Portrait',
    src: 'https://player.vimeo.com/video/895953956?autoplay=1&loop=1&autopause=0badge=0&amp;player_id=0&amp;app_id=58479',
    styles: { 
      videoIframeContainer: { 
        padding: 'padding: 0 0 0 0', 
        // position: 'relative', 
      }, 
      videoIframe: { 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%'
      }
    }
  }

  return (
        <iframe 
          className='vimeo-embed select-none w-5/12 z-10'
          src="https://player.vimeo.com/video/895953956?autoplay=1&amp;loop=1&amp;muted=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="1280"
          height="720"
          allow="autoplay; fullscreen; picture-in-picture"
          title='Karsy Live Portrait'
        >
        </iframe>
  )
}

export default LivePortrait