import React from "react"

export default function SearchImage(props) {
  
  const { query, setQuery, number, setNumber, setImages } = props.data;

  /**
   * Call the API on button click
   * and prevent page reloading
   * @param {event} e 
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setImages([]);
    props.getImages();
  }

  return (
    <div className="mt-16 mb-16">
        <form className="flex flex-col justify-center items-center" onSubmit={(e) => handleSubmit(e)}>
            <input 
                value={query}
                className="sm:w-3/5 lg:w-2/5 border-4 outline-0 p-2 text-2xl rounded-lg"
                type="text" 
                placeholder="Search anything..."
                onChange={(e) => setQuery(e.target.value)}
            />
            <div className="flex justify-between sm:w-2/6 lg:w-1/5 w-52 mt-8 mb-8">
              <div className="flex flex-col items-center">
                <label className={`text-2xl mb-1 ${props.darkMode ? 'dark:text-white' : 'text-violet-600'} font-bold`} htmlFor="50">50</label>
                <input name="imagesNumber" className="cursor-pointer h-5 w-full" type="radio" value={50} id="50" onChange={(e) => setNumber(e.target.value)} checked={number === 50}/>
              </div>
              <div className="flex flex-col items-center">
                <label className={`text-2xl mb-1 ${props.darkMode ? 'dark:text-white' : 'text-violet-600'} font-bold`} htmlFor="100">100</label>
                <input name="imagesNumber" className="cursor-pointer h-5 w-full" type="radio" value={100} id="100" onChange={(e) => setNumber(e.target.value)} checked={number === 100}/>
              </div>
              <div className="flex flex-col items-center">
                <label className={`text-2xl mb-1 ${props.darkMode ? 'dark:text-white' : 'text-violet-600'} font-bold`} htmlFor="200">200</label>
                <input name="imagesNumber" className="cursor-pointer h-5 w-full" type="radio" value={200} id="200" onChange={(e) => setNumber(e.target.value)} checked={number === 200}/>
              </div>
            </div>
            <button 
                className={`p-3 rounded-lg sm:w-3/6 lg:w-2/6 w-52 text-2xl font-bold ${props.darkMode ? 'dark:text-white dark:bg-slate-800' : 'text-violet-600 bg-slate-100'}`}
                type="submit"
            >Search</button>
        </form>
    </div>
  )
}
