import React, { useState } from "react";
import "./search.css";

function Search() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [language, setLanguage] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    let url = `https://api.newscatcherapi.com/v2/search?q=${searchQuery}`;
    if (language) url += `&lang=${language}`;
    if (topic) url += `&topic=${topic}`;
    if (date) url += `&date=${date}`;
    if (country) url += `&country=${country}`;

    fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": "fQNAKTTdUmsQ7rEA_CqkRUHnDU5chzsCw_AvUuCt2-M",
        "x-rapidapi-host": "newscatcher.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // topic options

  const topicOptions = [
    { label: "news" },
    { label: "sports", value: "sports" },
    { label: "technology", value: "tech" },
    { label: "world", value: "world" },
    { label: "finance", value: "finance" },
    { label: "politics", value: "politics" },
    { label: "business", value: "business" },
    { label: "economics", value: "economics" },
    { label: "entertainment", value: "entertainment" },
    { label: "beauty", value: "beauty" },
    { label: "travel", value: "travel" },
    { label: "music", value: "music" },
    { label: "food", value: "food" },
    { label: "science", value: "science" },
    { label: "gaming", value: "gaming" },
    { label: "energy", value: "energy" },
  ];

  // language options
  const languageOptions = [
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Italian", value: "it" },
    { label: "Russian", value: "ru" },
  ];

  return (
    <div>
      <form
        onSubmit={handleSearchSubmit}
        style={{ marginLeft: "3%", marginTop: "5%", fontSize: "1.3rem" }}
      >
        <label>
          Search query:
          <input
        className="textInput"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </label>
        <button type="submit">Search</button>
<br/>
<br/>
        <label>
          Topic:
          <select value={language} onChange={handleLanguageChange}>
            <option value="English">select topic</option>
            {topicOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Language:
          <select value={topic} onChange={handleTopicChange}>
            <option value="English">select language</option>
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Date:
          <input type="text" value={date} onChange={handleDateChange} />
        </label>

        <label>
          Country:
          <input type="text" value={country} onChange={handleCountryChange} />
        </label>

        <button type="submit">Search</button>
      </form>

      {articles.map((article) => (
        <div style={{display:"grid",gridTemplateColumns:"repeat(4, 1fr)"}}>
        <div key={article._id}>
          <img src={article.media} alt="2" style={{ width: "200px" }} />
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
          <p>{article.published_date}</p>
          <p>{article.country}</p>
          <a href={article.link}>Read more</a>
        </div>
        </div>
      ))}
    </div>
  );
}

export default Search;
