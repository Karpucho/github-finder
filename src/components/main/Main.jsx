import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';
import './main.less'
import Repo from './repo/Repo.jsx';

function Main() {
  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos.items)
  const isFetching = useSelector(state => state.repos.isFetching)
  const [searchValue, setSearchValue] = useState('')
  console.log(repos, "REPOS");

  useEffect(() => {
    dispatch(getRepos())
  }, [])

  function searchHandler() {
    dispatch(getRepos(searchValue))
    
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
    </div>
  );
}

export default Main;
