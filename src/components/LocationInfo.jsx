import "./styles/LocationInfo.css"

const LocationInfo = ({ location }) => {

  return (
   <div className="container_info">
      <article className="container_head">
        <h2>{location?.name}</h2>
        <ul className="info">
          <li><span>Type: </span><span className="info-text">{location?.type}</span></li>
          <li><span>Dimension: </span><span className="info-text">{location?.dimension}</span></li>
          <li><span>Population: </span><span className="info-text">{location?.residents.length}</span></li>
        </ul>
      </article>

   </div>
  
  )
}

export default LocationInfo