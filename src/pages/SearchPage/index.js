import React, { useEffect } from 'react';
import { getSick } from '../../api/http';
import * as Styled from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setCondition, setIsLoading, setItems } from '../../redux/searchSlicer/searchSlicer';
import { searchedItem } from '../../utils/searchedItem';
const SearchPage = () => {
  const dispatch = useDispatch();
  const condition = useSelector(store => store.search.condition);
  const items = useSelector(store => store.search.items);
  const loading = useSelector(store => store.search.isLoading);

  useEffect(() => {
    const getSickName = async text => {
      dispatch(setIsLoading(true));
      try {
        const searchResult = await getSick(text);
        dispatch(setItems(searchResult));
        dispatch(setIsLoading(false));
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
          {loading ? <div>검색중</div> : <>{items.length === 0 && <div>검색 결과 없음</div>}</>}
          {items?.map((el, idx) => {
            return <div key={idx}>{searchedItem(el.sickNm, condition)}</div>;
          })}
        </Styled.ResultItems>
      )}
    </Styled.PageContainer>
  );
};

export default SearchPage;
