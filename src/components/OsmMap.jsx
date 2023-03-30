import './OsmMap.scss'

function OsmMap ({ coords }) {
  const lat = coords.lat
  const lng = coords.lng
  const box = {
    left: lng - 0.01,
    right: lng + 0.01,
    top: lat + 0.01,
    bottom: lat - 0.01
  }
  const link = `https://www.openstreetmap.org/export/embed.html?bbox=${box.left},${box.bottom},${box.right},${box.top}&layer=mapnik&marker=${lat},${lng}`

  return (
    <iframe
      width='100%'
      height='100%'
      frameBorder='0'
      scrolling='no'
      marginHeight='0'
      marginWidth='0'
      src={link}
      style={{
        border: '1px solid red',
        position: 'absolute'
      }}
    ></iframe>
  )
}

export default OsmMap
