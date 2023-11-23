import React from 'react';
import Header from './components/Header/Header';
import SearchImage from './components/SearchImage/SearchImage';
import Gallery from './components/Gallery/Gallery';

function App() {

  const [images, setImages]= React.useState()

  const getImages = (e, unsplashUrl, query, number, accessKey) => {
    console.log(unsplashUrl)
    console.log(query)
    console.log(number)
    console.log(accessKey)
    e.preventDefault()
    fetch(`${unsplashUrl}?query=${query}&client_id=${accessKey}&per_page=${number}`, {
      method: "GET"
    })
    .then(res => res.json())
    .then(res => setImages(res.results.map(el => ({key: el.id, url: el.urls.full}))))
  }

  return (
    <div className="App bg-slate-300">
      <Header/>
      <SearchImage getImages={getImages}/>
      <Gallery images={images}/>
    </div>
  );
}

export default App;
