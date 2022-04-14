import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../reducers/reposReducer';
import { createPages } from '../../utils/pagesCreator';
import { getRepos } from '../actions/repos';
import './main.less'
import Repo from './repo/Repo';

function Main() {
  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos.items)
  const isFetching = useSelector(state => state.repos.isFetching)
  const currentPage = useSelector(state => state.repos.currentPage)
  const perPage = useSelector(state => state.repos.perPage)
  const totalCount = useSelector(state => state.repos.totalCount)
  const [searchValue, setSearchValue] = useState('')
  const pagesCount = Math.ceil(totalCount/perPage)
  const pages =[]
  // console.log(repos, "REPOS");

  createPages(pages, pagesCount, currentPage)

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage))
  }, [currentPage])

  function searchHandler() {
    dispatch(setCurrentPage(1))
    dispatch(getRepos(searchValue, currentPage, perPage))
  }

  return (
    <div>
      <div className="search">
       <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} type='text' className="search-input" placeholder='Fill repo name' autoFocus={true} />
       <button onClick={() => searchHandler()} className='search-btn'>Search</button>
      </div>
      
      {
       !isFetching
         ?
        repos.map((repo) => <Repo key={repo.id} repo={repo} />) 
         : 
        <div className="fetching">
          
        </div>
      }

      <div className="pages">
        {pages.map((page, index) => <span
         key={index}
         className={currentPage === page ? 'current-page' : 'page'}
         onClick={() => dispatch(setCurrentPage(page))} >{page}</span>)} 
      </div>
    </div>
  );
}

export default Main;
