import React, { useEffect,useState } from "react";
import CardHolder from "./components/CardHolder";

const url = "http://content.guardianapis.com/sections?api-key=ac6442cb-67e3-440e-8bca-9aee70a5f232"

const App = () => {
  const [newsSections,setNewsSection] = useState([])

  const fetchNews = async () => {
    const response = await fetch(url)
      .then(data => data.json())
      .catch(error => error)
    return response
  }

  useEffect(() => {
    fetchNews().then(news => {
      if (news.response.results) {
        setNewsSection(news.response.results)
      }
    })
  }, [])

  return (
    <main>
      <CardHolder />
    </main>
  );
};

export default App;
