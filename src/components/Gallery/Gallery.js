export default function Gallery(props) {
  return (
    <div className="lg:columns-4 sm:columns-2 ml-5 mr-5">
        {
            props.images.length > 0 && props.images.map(image => <div className="p-3" key={image.key}><img className="rounded-lg" src={image.url}/></div>)
        }
    </div>
  )
}
