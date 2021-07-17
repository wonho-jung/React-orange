import React, { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/Posts';
import { sortData } from './components/util';
export function App() {
  const [data, setData] = useState('');
  const [Loading, setLoading] = useState(true);

  //fetch express API and stored on data.
  const getAPI = async () => {
    await fetch('http://localhost:4000/posts')
      .then((results) => results.json())
      .then((results) => {
        const sortedData = sortData(results);
        setData(sortedData);
      })
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  };
  //get data when componentDidMount
  useEffect(() => {
    getAPI();
  }, []);
  return <div>{Loading ? <h1>Loading...</h1> : <Posts data={data} />}</div>;
}
