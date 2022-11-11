import { setKeyControl } from 'redux/reducer/searchSlice';
import { useAppDispatch, useAppSelector } from 'redux/reducer/hooks';
import { sickData } from 'redux/reducer/searchSlice';
import React from 'react';

function useKeyBorad() {
  const dispatch = useAppDispatch();
  const { keyControl } = useAppSelector(state => state.searchData);

  const keyDownControl = (sickData: sickData[]) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!sickData.length) return dispatch(setKeyControl(-1));

    if (!e.nativeEvent.isComposing) {
      if (e.key === 'ArrowDown' && sickData.length - 1 > keyControl) {
        dispatch(setKeyControl(keyControl + 1));
      }
    }

    if (e.key === 'ArrowUp' && keyControl >= 0) {
      dispatch(setKeyControl(keyControl - 1));
    }
  };

  return {
    keyDownControl,
  };
}

export default useKeyBorad;
