import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const useMenuAnimation = (isOpen: boolean) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start('open');
    } else {
      controls.start('closed');
    }
  }, [isOpen, controls]);

  return controls;
};

export default useMenuAnimation;
