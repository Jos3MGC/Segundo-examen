import React, { useEffect, useState } from "react";
import axios from 'axios';

const App = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const res = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2022-05-31&to=2022-05-31&sortBy=popularity&apiKey=38daf29e5468416fb72a4afa77b6f3d2");

      setNews(res.data.articles);
    }
    getNews();
  }, [])


  return (
    <div className="container">
      <h1>TABLA</h1>
      <table>
        <tbody>
          {
            news.map((item) => (
              <div>
                <img src={`${item.ulrToImage}`} alt="" />
                <h3>
                  <a href={item.url}>{item.title}</a>
                </h3>
                <p>{item.description}</p>
              </div>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
