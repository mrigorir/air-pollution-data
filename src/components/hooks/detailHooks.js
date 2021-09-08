import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getValuesAction } from '../../redux/values';

const detailHooks = () => {
  const dispatch = useDispatch();
  const values = useSelector((state) => state.values);

  useEffect(() => {
    if (!values.length) {
      dispatch(getValuesAction());
    }
  }, []);
};

export default detailHooks;
