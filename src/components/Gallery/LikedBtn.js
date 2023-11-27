import React from 'react';
import like_empty from '../../images/like_empty.png';
import like_fill from '../../images/like_fill.png';

export default function ({onClick}) {

  const [isLiked, setIsLiked] = React.useState(false);

  /**
   * Add the image into liked images array
   * Change like state to display corresponding heart
   */
  const handleClick = () => {
    onClick();
    setIsLiked(prevState => !prevState);
  }

  return (
    <img
      className='absolute bottom-2 left-2 w-6'
      onClick={handleClick}
      src={isLiked ? like_fill : like_empty}
    />
  )
}
