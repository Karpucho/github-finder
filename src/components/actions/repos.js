import axios from "axios";
import { setRepos } from "../../reducers/reposReducer";

export const getRepos = (searchQuery = 'stars:%3E1') => {
  return async (dispatch) => {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`)
    console.log(response.data, "РЕСПОНС ОТ ГИТА");
    dispatch(setRepos(response.data))
  }
}
