import React, {useEffect,useState} from 'react'
import { getFromLocalStorage } from "../utils/helpers"
import Sunny from "../assets/cloudy_sunny.png"
import Settings from "../assets/settings.png"
import { FaSearch } from "react-icons/fa"

const apiKey = "yekzyxA7dRlH6VWlHVaAoANRWQRIunGr";
// const url = "http://content.guardianapis.com/sections?api-key=ac6442cb-67e3-440e-8bca-9aee70a5f232"
const url = `https://api.nytimes.com/svc/topstories/v2/health.json?api-key=${apiKey}`

function CardMain({ setNext }) {
  const name = getFromLocalStorage('name');

  const [newsSections,setNewsSection] = useState([])

  const fetchNews = async () => {
    const response = await fetch(url)
      .then(data => data.json())
      .catch(error => error)
    return response
  }

  useEffect(() => {
    fetchNews().then(news => {
      if (news.results) {
        setNewsSection(news.results)
      }
    })
  }, [])

  console.log(newsSections);

  const nextCard = () => {
    setNext(1);
  };

  return (
    <section className="mainCard">
      <header className="mainCard__header">
          <div>
            <img src={Sunny} className="icon" alt="" />
            <h1>Good morning, {name?name:"Unknown"}!</h1>
          </div>
          <div>
            <input type="text" placeholder="search for stories..." />
            <button className="search-btn">
                <FaSearch />
            </button>
          </div>
      </header>
      <div className="card">
        <div className="part part-a">aaaa</div>
        <div className="part part-b">bbbb</div>
        <div className="part part-c">cccc</div>
        <div className="part part-d">dddd</div>
        <div className="part part-e">eeee</div>
        <button className="part part-setting" onClick={nextCard}>
            <img src={Settings} className="icon" alt="" />
        </button>
        <div className="part part-weather">weather</div>
        <div className="part part-pic">pic</div>
      </div>
    </section>
  )
}

export default CardMain
