import sunny from "../assets/sunny.png"
import cloudy_sunny from "../assets/cloudy_sunny.png"
import foggy from "../assets/foggy.png"
import raining from "../assets/raining.png"
import snowy from "../assets/snowy.png"
import lightning from "../assets/lightning_cloudy.png"
import drip from "../assets/drip.png"

export const saveToLocalStorage = (name, value) => {
  localStorage.setItem(name, value)
}

export const getFromLocalStorage = (name) => {
  return localStorage.getItem(name)
}

export const newsCategories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
]

export const dataForNews = [
  {
    id: 0,
    article: 9,
    section: "featured",
    style: "part-a",
  },
  {
    id: 1,
    article: 5,
    section: 1,
    style: "part-b",
  },
  {
    id: 2,
    article: 6,
    section: 2,
    style: "part-c",
  },
  {
    id: 3,
    article: 7,
    section: 3,
    style: "part-d",
  },
  {
    id: 4,
    article: 8,
    section: 4,
    style: "part-e",
  },
]

export const weatherIcon = (code) => {
  let imgLink = ""
  switch (code) {
    case 804:
      imgLink = cloudy_sunny
      break
    case 803:
      imgLink = cloudy_sunny
      break
    case 802:
      imgLink = cloudy_sunny
      break
    case 801:
      imgLink = cloudy_sunny
      break
    case 800:
      imgLink = sunny
      break
    case 781:
      imgLink = foggy
      break
    case 771:
      imgLink = foggy
      break
    case 762:
      imgLink = foggy
      break
    case 761:
      imgLink = foggy
      break
    case 751:
      imgLink = foggy
      break
    case 741:
      imgLink = foggy
      break
    case 731:
      imgLink = foggy
      break
    case 721:
      imgLink = foggy
      break
    case 711:
      imgLink = foggy
      break
    case 701:
      imgLink = foggy
      break
    case 622:
      imgLink = snowy
      break
    case 621:
      imgLink = snowy
      break
    case 620:
      imgLink = snowy
      break
    case 616:
      imgLink = snowy
      break
    case 615:
      imgLink = snowy
      break
    case 613:
      imgLink = snowy
      break
    case 612:
      imgLink = snowy
      break
    case 611:
      imgLink = snowy
      break
    case 602:
      imgLink = snowy
      break
    case 601:
      imgLink = snowy
      break
    case 600:
      imgLink = snowy
      break
    case 531:
      imgLink = raining
      break
    case 522:
      imgLink = raining
      break
    case 521:
      imgLink = raining
      break
    case 520:
      imgLink = raining
      break
    case 511:
      imgLink = raining
      break
    case 504:
      imgLink = raining
      break
    case 503:
      imgLink = raining
      break
    case 502:
      imgLink = raining
      break
    case 501:
      imgLink = raining
      break
    case 500:
      imgLink = raining
      break
    case 321:
      imgLink = drip
      break
    case 314:
      imgLink = drip
      break
    case 313:
      imgLink = drip
      break
    case 312:
      imgLink = drip
      break
    case 311:
      imgLink = drip
      break
    case 310:
      imgLink = drip
      break
    case 302:
      imgLink = drip
      break
    case 301:
      imgLink = drip
      break
    case 300:
      imgLink = drip
      break
    case 232:
      imgLink = lightning
      break
    case 231:
      imgLink = lightning
      break
    case 230:
      imgLink = lightning
      break
    case 221:
      imgLink = lightning
      break
    case 212:
      imgLink = lightning
      break
    case 211:
      imgLink = lightning
      break
    case 210:
      imgLink = lightning
      break
    case 202:
      imgLink = lightning
      break
    case 201:
      imgLink = lightning
      break
    case 200:
      imgLink = lightning
      break
    default:
      imgLink = ""
      break
  }
  return imgLink
}
