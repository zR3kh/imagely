import LikedBtn from './LikedBtn';

export default function Gallery({imagesToDisplay, addLikedImage}) {

  return (
    <div className="lg:columns-4 sm:columns-2 ml-5 mr-5">
      {
        imagesToDisplay.length > 0 && imagesToDisplay.map(image => 
        <div 
          className="m-3 relative" 
          key={image.key}>
            <img 
              className="rounded-lg" 
              src={image.url}/>
            <LikedBtn
              onClick={() => addLikedImage(prevState => [...prevState, image])}
            />
        </div>)
      }
    </div>
  )
}
