import { useEffect } from 'react';

const hooks = (countries, setCountry) => {
  useEffect(() => {
    setCountry(countries[0]);
  }, []);
};

export default hooks;
