import React from 'react';
import Header from './components/Header/Header';
import SearchImage from './components/SearchImage/SearchImage';
import Gallery from './components/Gallery/Gallery';
import config from './config';
import Sidebar from './components/Sidebar/Sidebar';
import Theme from './components/Menu/Theme';

function App() {

  const [images, setImages]= React.useState([])
  const [query, setQuery] = React.useState('')
  const [number, setNumber] = React.useState(50)
  const [page, setPage] = React.useState(1)
  const [isSidebarDisplayed, setIsSidebarDisplayed] = React.useState(false)
  const [isThemeOpen, setIsThemeOpen] = React.useState(false)

  const accessKey = config.publicKey
  const unsplashUrl = config.unsplashUrl

  /**
   * Request the API if we miss images (30 max per call)
   */
  React.useEffect(() => {
    if (number > 0 && images.length > 0) {
      setTimeout(() => {
        getImages()
      }, 1000)
    } else {
      setPage(1)
    }
  }, [images, number, page])

  /**
   * API Call
   * Set number and page values to update future requests in useEffect
   */
  const getImages = () => {
    fetch(`${unsplashUrl}?query=${query}&client_id=${accessKey}&per_page=${number}&page=${page}`, {
      method: "GET"
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Network error while retrieving data.')
      }
    })
    .then(res => {
      setImages(prevImages => [...prevImages, ...res.results.map(el => ({key: el.id, url: el.urls.full}))])
      setNumber(prevNumber => prevNumber - res.results.length)
      setPage(prevPage => prevPage + 1)
    })
  }

  return (
    <div className="App bg-slate-300 h-full min-h-screen">
      <Header setSidebar={setIsSidebarDisplayed}/>
      <Sidebar showSidebar={isSidebarDisplayed} openMenu={setIsThemeOpen}/>
      {
        isThemeOpen 
        ?
        <Theme/>
        :
        <div>
          <SearchImage getImages={getImages} data={{query: query, setQuery: setQuery, number: number, setNumber: setNumber}}/>
          <Gallery images={images}/>
        </div>
      }
    </div>
  );
}

export default App;
