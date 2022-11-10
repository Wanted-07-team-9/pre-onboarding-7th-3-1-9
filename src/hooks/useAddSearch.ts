import { useAppDispatch, useAppSelector } from 'redux/reducer/hooks';
import { setSearchData, setLoading } from '../redux/reducer/searchSlice';
import { AxiosService } from '../api/AxiosService';
import { useEffect } from 'react';

function useAddSearch() {
  const dispatch = useAppDispatch();
  const { getCashSearch } = AxiosService;
  const { searchWords } = useAppSelector(state => state.searchData);

  useEffect(() => {
    const onChageWords = async () => {
      try {
        dispatch(setLoading(true));
        const getWords = await getCashSearch(searchWords);
        dispatch(setSearchData(getWords));
      } catch (err) {
        dispatch(setLoading(false));
        alert(err);
      }
    };
    const timer = setTimeout(() => onChageWords(), 800);
    return () => clearTimeout(timer);
  }, [dispatch, searchWords]);
}

export default useAddSearch;
