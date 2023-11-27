import React from 'react';
import LikedBtn from './LikedBtn';

export default function Gallery({imagesToDisplay, addLikedImage}) {

  const [likesBtn, setLikesBtn] = React.useState({})

  const addLikedBtn = (image) => {
    setLikesBtn(prevState => ({
      ...prevState,
      [image.key]: (
        <LikedBtn
          key={image.key}
          onClick={() => addLikedImage(prevState => [...prevState, image])}
        />
      ),
    }))
  }
 
  return (
    <div className="lg:columns-4 sm:columns-2 ml-5 mr-5">
      {
        imagesToDisplay.length > 0 && imagesToDisplay.map(image => 
        <div 
          className="m-3 relative" 
          key={image.key}>
            <img 
              className="rounded-lg" 
              src={image.url}
              onLoad={() => addLikedBtn(image)}
            />
            {likesBtn[image.key]}
        </div>)
      }
    </div>
  )
}
