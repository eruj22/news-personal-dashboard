import React, { useState } from "react"
import CardHolder from "./components/CardHolder"

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [userLocation, setUserLocation] = useState({})

  const showLocation = (position) => {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    setUserLocation({
      latitude,
      longitude,
    })
  }

  navigator.geolocation.getCurrentPosition(showLocation)

  return (
    <main>
      <CardHolder userLocation={userLocation} />
    </main>
  )
}

export default App
