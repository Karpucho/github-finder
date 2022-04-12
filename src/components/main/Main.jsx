import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';
import './main.less'
import Repo from './repo/Repo.jsx';

function Main(props) {
  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos.items)
  console.log(repos, "REPOS");

  useEffect(() => {
    dispatch(getRepos())
  }, [])


  return (
    <div>
      {repos.length > 0 ? repos.map((repo) => <Repo key={repo.id} repo={repo} />) : 'Нет репо'}
    </div>
  );
}

export default Main;
