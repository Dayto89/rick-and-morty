
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import getRandomNumer from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'

function App() {

  const [location, setLocation] = useState()
  const [idLocation, setIdLocation] = useState(getRandomNumer(126))
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const URL = `https://rickandmortyapi.com/api/location/${idLocation}`
    setIsLoading(true)
    axios
      .get(URL)
      .then(res => {
        setLocation(res.data)
        setHasError(false)
      })
      .catch(err => {
        console.error(err)
        setHasError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [idLocation])

  return (
    <div>
      <div className='banner'>
        <img src="./img/banner.png" alt="" />
      </div>
      <FormLocation
        setIdLocation={setIdLocation}
      />
      {
        isLoading
          ? (<h1>Loading...</h1>)
          : (
            hasError
              ? (<h1>❌ Hey! you must provide an id from 1 to 126 😥</h1>)
              : (
                <>
                  <LocationInfo
                    location={location}
                  />
                  <div className='resident_container'>
                    {
                      location?.residents.map(url => (
                        <ResidentCard
                          key={url}
                          url={url}
                        />
                      ))
                    }
                  </div>
                </>

              )

          )
      }
    </div>
  )
}

export default App
