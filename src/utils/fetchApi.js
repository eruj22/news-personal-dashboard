const urlLocationApi = process.env.REACT_APP_LOCATION_URL

export const getUserLocation = async () => {
  const response = await fetch(urlLocationApi)
    .then((data) => data.json())
    .catch((error) => console.log(error))
  return response
}

const urlPhotoApi = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY_PICTURE}&image_type=photo&order=popular`

export const fetchImageOfTheDay = async () => {
  const response = await fetch(urlPhotoApi)
    .then((data) => data.json())
    .catch((error) => console.log(error))
  return response
}
