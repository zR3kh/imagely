export default function Gallery(props) {
  return (
    <div className="columns-4 ml-5 mr-5">
        {
            props.images && props.images.map(image => <div className="p-3" key={image.key}><img className="rounded-lg" src={image.url}/></div>)
        }
    </div>
  )
}
