import React, { useState, useEffect } from "react";
import CardFirst from "./CardFirst";
import CardSecond from "./CardSecond";
import CardThird from "./CardThird";
import CardMain from "./CardMain";


function CardHolder() {
  const apiKey1 = "yekzyxA7dRlH6VWlHVaAoANRWQRIunGr";
  const url1 = `https://api.nytimes.com/svc/topstories/v2/health.json?api-key=${apiKey1}`
  const apiKey2 = "22882275-5453122ff729f7627d455372d"
  const url2 = `https://pixabay.com/api/?key=${apiKey2}&image_type=photo&order=popular`
  const url3 = "http://ip-api.com/json/"
  // const apiKey4 = "a56a03b632cb8b12bcde0a1180cb1c64"
  // const url4 = `http://api.weatherstack.com/current?access_key=${apiKey4}&query=Maribor`

  const [next, setNext] = useState(1);

  const [newsSections,setNewsSection] = useState([])
  const [imageOfTheDay,setImageOfTheDay] = useState([])
  const [userLocation, setUserLocation] = useState([])
  const [localWeather, setLocalWeather] = useState([])

  const fetchNews = async () => {
    const response = await fetch(url1)
      .then(data => data.json())
      .catch(error => error)
    return response
  }

  const fetchImageOfTheDay = async () => {
    const response = await fetch(url2)
      .then(data => data.json())
      .catch(error => error)
    return response
  }

  const getUserLocation = async () => {
    const response = await fetch(url3)
      .then(data => data.json())
      .catch(error => error)
    return response
  }

  // const getWeather = async () => {
  //   const response = await fetch(url4)
  //     .then(data => data.json())
  //     .catch(error => error)
  //   return response
  // }

  useEffect(() => {
    fetchNews().then(news => {
      if (news.results) {
        setNewsSection(news.results)
      }
    })
    fetchImageOfTheDay().then(image => {
      if (image.hits) {
        setImageOfTheDay(image.hits)
      }
    })
    getUserLocation().then(location => {
      if (location.city) {
        setUserLocation(location.city)
      }
    })
    // getWeather().then(weather => {
    //   if (weather) {
    //     setLocalWeather(weather)
    //   }
    // })
  }, [])

  switch (next) {
    case 1:
      return <CardFirst setNext={setNext} />;
    case 2:
      return <CardSecond setNext={setNext} />;
    case 3:
      return <CardThird setNext={setNext} />;
    default:
      return <CardMain setNext={setNext} newsSections={newsSections} imageOfTheDay={imageOfTheDay[0]} localWeather={localWeather} />;
  }
}

export default CardHolder;
