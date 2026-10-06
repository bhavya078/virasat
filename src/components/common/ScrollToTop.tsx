import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { heritageAudio } from '../../utils/audioService';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Ensure any audio narration or speech voice immediately stops when loading a new page
    heritageAudio.stopSpeaking();

    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};
