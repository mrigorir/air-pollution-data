import { useEffect } from 'react';

const hooks = (africa, setCountry) => {
  useEffect(() => {
    setCountry(africa);
  }, []);
};

export default hooks;
