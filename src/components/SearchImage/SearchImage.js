import React from "react"
import config from "../../config.js"

export default function SearchImage(props) {
  
  const [query, setQuery] = React.useState('')
  const [number, setNumber] = React.useState(50)
  const accessKey = config.publicKey
  const privateKey = config.privateKey
  const unsplashUrl = config.unsplashUrl

  const handleSubmit = (e) => {
    props.getImages(e, unsplashUrl, query, number, accessKey)
  }

  return (
    <div className="mt-16 mb-16">
        <form className="flex flex-col justify-center items-center" onSubmit={(e) => handleSubmit(e)}>
            <input 
                value={query}
                className="w-2/5 border-4 outline-0 p-2 text-2xl rounded-lg"
                type="text" 
                placeholder="Type your image name here..."
                onChange={(e) => setQuery(e.target.value)}
            />
            <div className="flex justify-between w-1/5 mt-8 mb-8">
              <div className="flex flex-col items-center">
                <label className="text-2xl mb-1 text-violet-600 font-bold" htmlFor="50">50</label>
                <input className="cursor-pointer h-5 w-full" type="radio" value={50} id="50" onChange={(e) => setNumber(e.target.value)} checked={number == 50}/>
              </div>
              <div className="flex flex-col items-center">
                <label className="text-2xl mb-1 text-violet-600 font-bold" htmlFor="100">100</label>
                <input className="cursor-pointer h-5 w-full" type="radio" value={100} id="100" onChange={(e) => setNumber(e.target.value)} checked={number == 100}/>
              </div>
              <div className="flex flex-col items-center">
                <label className="text-2xl mb-1 text-violet-600 font-bold" htmlFor="200">200</label>
                <input className="cursor-pointer h-5 w-full" type="radio" value={200} id="200" onChange={(e) => setNumber(e.target.value)} checked={number == 200}/>
              </div>
            </div>
            <button 
                className="p-3 bg-slate-100 rounded-lg w-1/5 text-2xl font-bold text-violet-600"
                type="submit"
            >Search</button>
        </form>
    </div>
  )
}
