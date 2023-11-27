import React from 'react';
import like_empty from '../../images/like_empty.png';
import like_fill from '../../images/like_fill.png';

export default function ({onLikeBtnClick, linkedImage}) {

  const [isImageLiked, setIsImageLiked] = React.useState();

  /**
   * After each state update, we call passed function to handle the image into liked array
   */
  React.useEffect(() => {
    if (isImageLiked !== undefined) {
      onLikeBtnClick(isImageLiked, linkedImage)
    }
  }, [isImageLiked])

  /**
   * Change like state to display corresponding heart
   */
  const changeLikeStatus = () => {
    setIsImageLiked(prevState => !prevState);
  }

  return (
    <img
      className='absolute bottom-2 left-2 w-8 cursor-pointer'
      onClick={changeLikeStatus}
      src={isImageLiked ? like_fill : like_empty}
    />
  )
}
