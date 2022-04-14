import axios from "axios";
import { setIsFetching, setRepos } from "../../reducers/reposReducer";

export const getRepos = (searchQuery = 'stars:%3E1', currentPage, perPage) => {

  if (searchQuery == '') searchQuery = 'stars:%3E1';

  return async (dispatch) => {
    dispatch(setIsFetching(true))
    const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
    // console.log(response.data, "РЕСПОНС ОТ ГИТА");
    dispatch(setRepos(response.data))
  }
}
