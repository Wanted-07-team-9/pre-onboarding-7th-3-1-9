// import { SpanHighLight } from '../styles/MainStyle';
export const highLight = (sickNm: string, searchWords: string): JSX.Element => {
  const regex = new RegExp(`(${searchWords})`, 'gi');
  return (
    <>
      {sickNm.split(regex).map((word, idx) => {
        return word === searchWords ? <strong key={idx}>{word}</strong> : word;
      })}
    </>
  );
};
