import React, { useEffect } from 'react';
import { getSick } from '../../api/http';
import * as Styled from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setCondition, setIsLoading, setItems } from '../../redux/searchSlicer/searchSlicer';
const SearchPage = () => {
  const dispatch = useDispatch();
  const condition = useSelector(store => store.search.condition);
  const items = useSelector(store => store.search.items);
  console.log(items.length);
  useEffect(() => {
    const getSickName = async text => {
      dispatch(setIsLoading(true));
      try {
        console.log(condition);
        const searchResult = await getSick(text);
        dispatch(setItems(searchResult));
      } catch (err) {
        if (err) {
          console.error(err.response?.data);
        } else {
          console.error(err);
        }
      }
    };
    const delay = setTimeout(() => getSickName(condition), 300);
    return () => clearTimeout(delay);
  }, [condition]);

  const InputData = e => {
    dispatch(setCondition(e.target.value));
  };

  return (
    <Styled.PageContainer>
      메인페이지
      <Styled.SearchInput onChange={InputData} placeholder="질환명을 입력해주세요" />
      {condition.length === 0 ? null : (
        <Styled.ResultItems>
          {items?.map((el, idx) => {
            if (items.length === 0) {
              return <p>검색어 없음</p>;
            } else {
              return <div key={idx}>{el.sickNm}</div>;
            }
          })}
        </Styled.ResultItems>
      )}
    </Styled.PageContainer>
  );
};

export default SearchPage;
