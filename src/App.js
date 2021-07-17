import React, { useEffect, useState } from 'react';
import './App.css';

export function App() {
  const [Loading, setLoading] = useState(true);

  //fetch express API and stored on data.
  const getAPI = async () => {
    await fetch('http://localhost:4000/posts')
      .then((results) => results.json())
      .then((results) => {
        console.log(results);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  //get data when componentDidMount
  useEffect(() => {
    getAPI();
  }, []);
  return <div>{Loading ? <h1>Loading...</h1> : <h1>hi</h1>}</div>;
}
