import * as S from '../styles/MainStyle';
import { useAppSelector } from 'redux/reducer/hooks';
import { highLight } from 'utils/highLight';

function RecommendWords() {
  const { searchData, keyControl, searchWords } = useAppSelector(state => state.searchData);

  // 배열의 객제
  if (searchData.length === 0) {
    return <S.recomText> 추천검색어가 없습니다... </S.recomText>;
  }

  return (
    <S.RecommendBoxItem>
      {searchData.map(({ sickNm }, idx) => {
        const highLightText = highLight(sickNm, searchWords);
        return (
          <S.recomText key={idx} className={idx === keyControl ? 'keySelect' : ''}>
            <S.recomIcon />
            <S.recomTexts>{highLightText}</S.recomTexts>
          </S.recomText>
        );
      })}
    </S.RecommendBoxItem>
  );
}

export default RecommendWords;
