import * as S from '../styles/MainStyle';
import { useAppSelector } from 'redux/reducer/hooks';

function RecommendWords() {
  const { searchData, keyControl } = useAppSelector(state => state.searchData);

  // 배열의 객제
  if (searchData.length === 0) {
    return <S.recomText> 추천검색어가 없습니다... </S.recomText>;
  }

  return (
    <S.RecommendBoxItem>
      {searchData.map(({ sickNm }, idx) => {
        return (
          <S.recomText key={idx} className={idx === keyControl ? 'keySelect' : ''}>
            <S.recomIcon />
            <S.recomTexts>{sickNm}</S.recomTexts>
          </S.recomText>
        );
      })}
    </S.RecommendBoxItem>
  );
}

export default RecommendWords;
