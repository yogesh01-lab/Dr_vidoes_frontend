import { useEffect } from 'react';

const usePageView = (selectedVideo) => {
  useEffect(() => {
    if (!selectedVideo || !selectedVideo.id) return;

    const checkHit = () => {
      return window.location.pathname === `/videos/${selectedVideo.id}`;
    };
    
    const updateCount = async (videoId) => {
      try {
        const baseURL = process.env.REACT_APP_API_BASE_URL;
        console.log(baseURL);
        const response = await fetch(`${baseURL}/api/update-count`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ videoId }),
        });

        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error('Error updating count:', error);
      }
    };

    if (checkHit()) {
      updateCount(selectedVideo.id);
    }
  }, [selectedVideo]);
};

export default usePageView;
