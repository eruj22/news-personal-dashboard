import React, { useEffect } from "react"
import CardHolder from "./components/CardHolder"
import { useStateValue } from "./utils/StateProvider"
import { getUserLocation } from "./utils/fetchApi"

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useStateValue()

  useEffect(() => {
    getUserLocation().then((location) => {
      if (location) {
        dispatch({
          type: "GET_LOCATION",
          location: location.city,
        })
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main>
      <CardHolder />
    </main>
  )
}

export default App
