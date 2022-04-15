import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  const isFetchError = useSelector(state => state.repos.isFetchError)

  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()
  
  const pagesCount = Math.ceil(totalCount/perPage)
  const pages =[]

  createPages(pages, pagesCount, currentPage)

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage))
  }, [currentPage])

  function searchHandler() {
    dispatch(setCurrentPage(1))
    dispatch(getRepos(searchValue, currentPage, perPage))
  }

  // if (isFetchError) {
  //   navigate('/error')
  // }

  // console.log(repos, "REPOS");
  return (
    <div>

      { isFetchError &&
        <div className="alert alert-danger" role="alert">
          Ты ошибся, друг!
        </div>
      }
      <div className="header">
        Поиск по самым популярным репозиториям GitHub
      </div>
      {/* <div className="search">
       <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} type='text' className="search-input" placeholder='Search repo'  />
       <button onClick={() => searchHandler()} className='btn btn-outline-success'>Search</button>
      </div> */}

      <div className="input-group mb-3">
        <button onClick={() => searchHandler()} className="btn btn-outline-secondary" type="button" id="button-addon1">Click me!</button>
        <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} type="text" className="form-control" aria-label="Example text with button addon" aria-describedby="button-addon1" 
        placeholder='Search repo' />
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
         className={currentPage == page ? 'current-page' : 'page'}
         onClick={() => dispatch(setCurrentPage(page))} >{page}</span>)} 
      </div>
      
    </div>
  );
}

export default Main;
