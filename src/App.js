import React from 'react';
import Header from './components/Header/Header';
import SearchImage from './components/SearchImage/SearchImage';
import Gallery from './components/Gallery/Gallery';
import config from './config';
import Sidebar from './components/Sidebar/Sidebar';
import Settings from './components/Menu/Settings';
import { nanoid } from 'nanoid';

function App() {

  const [images, setImages] = React.useState([]);
  const [query, setQuery] = React.useState('');
  const [number, setNumber] = React.useState(50);
  const [page, setPage] = React.useState(1);
  const [isSidebarDisplayed, setIsSidebarDisplayed] = React.useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

  const appRef = React.useRef();
  const sidebarRef = React.useRef();
  const settingsRef = React.useRef();
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

  }, [isSidebarDisplayed, isSettingsOpen])

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
        if (isSettingsOpen) {
          if (!sidebarRef.current.contains(e.target) && !settingsRef.current.contains(e.target)) {
            setIsSidebarDisplayed(false);
            setIsSettingsOpen(false);
          }
        } else {
          if (!sidebarRef.current.contains(e.target)) {
            setIsSidebarDisplayed(false);
          }
        }
      }
    }
  }

  return (
    <div ref={appRef} className='App bg-slate-300 h-full min-h-screen'>
      <Sidebar innerRef={sidebarRef} showSidebar={isSidebarDisplayed} setSettings={setIsSettingsOpen} />
      <Header innerRef={headerImageRef} setSidebar={setIsSidebarDisplayed} />
      {
      isSettingsOpen
      ?
      <Settings innerRef={settingsRef} />
      :
      <div>
        <SearchImage getImages={getImages} data={{ query: query, setQuery: setQuery, number: number, setNumber: setNumber }} />
        <Gallery images={images} />
      </div>
      }
    </div>
  );
}

export default App;
