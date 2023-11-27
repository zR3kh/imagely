import React from 'react';
import LikedBtn from './LikedBtn';

export default function Gallery({imagesToDisplay, updateImageArray}) {

  const [likesBtn, setLikesBtn] = React.useState({})

  /**
   * Create a like button for each image
   * @param {Object} image 
   */
  const createLikeBtn = (image) => {
    setLikesBtn(prevState => ({
      ...prevState,
      [image.key]: (
        <LikedBtn
          key={image.key}
          onLikeBtnClick={setImage}
          linkedImage={image}
        />
      ),
    }))
  }

  /**
   * Add or remove the image into liked array
   * @param {boolean} isImageLiked 
   * @param {Object} currentImage 
   */
    const setImage = (isImageLiked, currentImage) => {
      if (isImageLiked) {
        updateImageArray(prevState => [...prevState, currentImage])
      } else {
        updateImageArray(prevState => prevState.filter(prevImage => prevImage !== currentImage))
      }
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
              onLoad={() => createLikeBtn(image)}
            />
            {likesBtn[image.key]}
        </div>)
      }
    </div>
  )
}
