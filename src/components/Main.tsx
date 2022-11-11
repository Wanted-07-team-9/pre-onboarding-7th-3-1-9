import React from 'react';
import * as S from '../styles/MainStyle';
import SearchRec from './SearchRec';
import InputStyle from 'styles/InputStyle';
import { setSearchWords, setOnFocus } from 'redux/reducer/searchSlice';
import { useAppSelector, useAppDispatch } from 'redux/reducer/hooks';
import useKeyBorad from 'hooks/useKeyBorad';

function Main() {
  const dispatch = useAppDispatch();
  const { isOnFocus, searchData } = useAppSelector(state => state.searchData);
  const { keyDownControl } = useKeyBorad();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchWords(e.currentTarget.value));
  };

  const onFocusInput = () => {
    dispatch(setOnFocus(true));
  };
  const onBlur = () => {
    dispatch(setOnFocus(false));
  };

  return (
    <S.MainLayout>
      <InputStyle
        onChange={onChange}
        onFocus={onFocusInput}
        onBlur={onBlur}
        onKeyDown={keyDownControl(searchData ? searchData : [])}
        className={isOnFocus ? 'active' : ''}
      />
      {isOnFocus && <SearchRec />}
    </S.MainLayout>
  );
}

export default Main;
