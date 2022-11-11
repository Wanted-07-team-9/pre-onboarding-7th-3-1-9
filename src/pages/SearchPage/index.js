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
      <Styled.PageTitle>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </Styled.PageTitle>
      <Styled.SearchInput onChange={InputData} placeholder="질환명을 입력해주세요" />
      {condition.length === 0 ? null : (
        <Styled.ResultItems>
          {items.length === 0 && <div>검색어 없음</div>}
          {items?.map((el, idx) => {
            return <div key={idx}>{el.sickNm}</div>;
          })}
        </Styled.ResultItems>
      )}
    </Styled.PageContainer>
  );
};

export default SearchPage;
