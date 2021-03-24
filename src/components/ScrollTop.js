import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollTop = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return props.children;
};

export default ScrollTop;
