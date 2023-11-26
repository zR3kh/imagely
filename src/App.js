import React from 'react';
import Header from './components/Header/Header';
import SearchImage from './components/SearchImage/SearchImage';
import Gallery from './components/Gallery/Gallery';
import config from './config';
import Sidebar from './components/Sidebar/Sidebar';
import { nanoid } from 'nanoid';

function App() {

  const [images, setImages] = React.useState([]);
  const [query, setQuery] = React.useState('');
  const [number, setNumber] = React.useState(50);
  const [page, setPage] = React.useState(1);
  const [isSidebarDisplayed, setIsSidebarDisplayed] = React.useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false)

  const appRef = React.useRef();
  const sidebarRef = React.useRef();
  const headerImageRef = React.useRef();
  const accessKey = config.publicKey;
  const unsplashUrl = config.unsplashUrl;

  /**
   * Request the API if we miss images (30 max per call)
   */
  React.useEffect(() => {
    if (number > 0 && images.length > 0) {
      getImages();
    } else {
      setNumber(50);
      setPage(1);
    }
  }, [images])

  /**
   * Sidebar listener to display / hide
   */
  React.useEffect(() => {
    if (isSidebarDisplayed) {
      appRef.current.addEventListener('click', handleSidebar);
    }
    return () => {
      appRef.current.removeEventListener('click', handleSidebar);
    }

  }, [isSidebarDisplayed])

  /**
   * API Call
   * Set number and page values to update future requests in useEffect
   */
  const getImages = () => {
    fetch(`${unsplashUrl}?query=${query}&client_id=${accessKey}&per_page=${number > 30 ? 30 : number}&page=${page}`, {
      method: "GET"
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Network error while retrieving data.');
      }
    })
    .then(res => {
      setImages(prevImages => [...prevImages, ...res.results.map(el => ({ key: nanoid(), url: el.urls.regular }))]);
      setNumber(prevNumber => prevNumber - res.results.length);
      setPage(prevPage => prevPage + 1);
    })
  }

  /**
   * Handle opening or closing sidebar
   * @param {event} e 
   */
  const handleSidebar = (e) => {
    if (!headerImageRef.current.contains(e.target)) {
      if (isSidebarDisplayed) {
        if (!sidebarRef.current.contains(e.target)) {
          setIsSidebarDisplayed(false);
        } 
      }
    }
  }

  /**
   * Handle darkMode
   * @param {event} e 
   */
  const handleDarkMode = (e) => {
    e.target.checked ? setIsDarkModeEnabled(true) : setIsDarkModeEnabled(false)
    console.log(isDarkModeEnabled)
    console.log(e.target.checked)
  }
  return (
    <div ref={appRef} className={`App ${isDarkModeEnabled ? 'dark:bg-slate-600' : 'bg-slate-300'} h-full min-h-screen`}>
      <Sidebar innerRef={sidebarRef} showSidebar={isSidebarDisplayed} handleDarkMode={handleDarkMode} darkMode={isDarkModeEnabled}/>
      <Header innerRef={headerImageRef} setSidebar={setIsSidebarDisplayed} darkMode={isDarkModeEnabled} />
      <SearchImage getImages={getImages} data={{ query: query, setQuery: setQuery, number: number, setNumber: setNumber }} darkMode={isDarkModeEnabled}/>
      <Gallery images={images} />
    </div>
  );
}

export default App;
