import React, { useState, useEffect } from "react";
import CardHolder from "./components/CardHolder";

const App = () => {
  const url3 = "http://ip-api.com/json/"

  const [userLocation, setUserLocation] = useState([])

  const getUserLocation = async () => {
    const response = await fetch(url3)
      .then(data => data.json())
      .catch(error => error)
    return response
  }

  useEffect(() => {
    getUserLocation().then(location => {
      if (location.city) {
        setUserLocation(location.city)
      }
    })
  }, [])
  return (
    <main>
      <CardHolder userLocation={userLocation} />
    </main>
  );
};

export default App;
