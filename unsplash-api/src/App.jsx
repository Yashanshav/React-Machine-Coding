
import { useState } from 'react';
import './App.css'
import Card from './components/Card'
import { useEffect } from 'react';
import Search from './components/Search';

function App() {

  const [img, setImg] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.waifu.im/search'
    const params = {
      included_tags: 'maid',
      height: '>=2000',
      limit: 20,
    }

    const queryParams = new URLSearchParams();

    for (const key in params) {
      if (Array.isArray(params[key])) {
        params[key].forEach(value => {
          queryParams.append(key, value);
        });
      }
      else {
        queryParams.set(key, params[key]);
      }
    }

    const requestUrl = `${apiUrl}?${queryParams.toString()}`;

    fetch(requestUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          throw new Error('Request failed with status code:' + res.status);
        }
      })
      .then(data => {
        console.log(data.images);
        setImg(data.images);
      })
      .catch(err => {
        console.error('An error occured', err.message);
      })
  }, [])

  async function onSearch(text) {
    const apiUrl = 'https://api.waifu.im/search';

    const params = {
      included_tags: text.split(","),
      limit: 20,
    }

    const queryParams = new URLSearchParams();

    for(const key in params) {
      if(Array.isArray(params[key])) {
        params[key].forEach((item) => {
          queryParams.append(key, item);
        });
      }
      else {
        queryParams.set(key, params[key]);
      }
    }

    const requestUrl = `${apiUrl}?${queryParams.toString()}`;

    const response = await fetch(requestUrl);
    if(response.ok) {
      const res = await response.json();
      setImg(res.images);
    }
    else {
      throw new Error('Request failed with Status Code' + response.status);
    }
  }

  return (
    <div>
      <Search search={onSearch}/>
      <Card images={img}/>
    </div>
  )
}

export default App;
