import React, { useState } from "react";
import "./search.css";

function Search() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [language, setLanguage] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("");


  const today = new Date();
  const minDate = new Date(today.getTime() - (14 * 24 * 60 * 60 * 1000));



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
    { label: "news", value: "news" }, // added value to the first option
    { label: "sports", value: "sport" },
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
    { label: "Swahili", value: "sw" },
    { label: "Turkish", value: "tr" },
    { label: "Ukrainian", value: "uk" }

  ];

const countyOptions =[
  { label: "United States", value: "US" },
  { label: "China", value: "CN" },
  { label: "Japan", value: "JP" },
  { label: "Germany", value: "DE" },
  { label: "United Kingdom", value: "GB" },
  { label: "India", value: "IN" },
  { label: "France", value: "FR" },
  { label: "Brazil", value: "BR" },
  { label: "Italy", value: "IT" },
  { label: "Canada", value: "CA" },
  { label: "South Korea", value: "KR" },
  { label: "Russia", value: "RU" },
  { label: "Australia", value: "AU" },
  { label: "Spain", value: "ES" },
  { label: "Mexico", value: "MX" },
  { label: "Indonesia", value: "ID" },
  { label: "Turkey", value: "TR" },
  { label: "Netherlands", value: "NL" },
  { label: "Saudi Arabia", value: "SA" },
  { label: "Switzerland", value: "CH" },
  { label: "South Africa", value: "ZA" },
  { label: "Kenya", value: "KE" }
]


  return (
    <div>
      <form
        onSubmit={handleSearchSubmit}
        style={{ marginLeft: "3%", marginTop: "5%", fontSize: "1.3rem" }}
      >
       <div id="main-search">
           <label>
             <input
               className="input"
               type="text"
               placeholder="Search for something"
               value={searchQuery}
               onChange={handleSearchChange}
             />
           </label>
           <button type="submit" className="button-85">
             Search
           </button>
         </div>

<br/>
<div id="filter-search"  >
<h3>Filters</h3>

        <label className="select" >
          <select value={topic} onChange={handleTopicChange}>
            <option value="English">topics</option>
            {topicOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
<br/>
        <label className="select">
       
          <select value={language} onChange={handleLanguageChange}>
            <option value="English">languages</option>
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

<br/>



        <label className="select">
       
       <select value={country} onChange={handleCountryChange}>
         <option value="English">Countries</option>
         {countyOptions.map((option) => (
           <option key={option.value} value={option.value}>
             {option.label}
           </option>
         ))}
       </select>
     </label>


<br/>


<input
        type="date"
        id="my-date-input"
        name="my-date-input"
        value={date}
        min={minDate.toISOString().split("T")[0]}
        max={new Date().toISOString().split("T")[0]} // Set the max date to today's date
        onChange={handleDateChange}
      />

<br/>
<br/>



  

        </div>
      </form>
    <div className="new-content">
      {articles.map((article) => (
        <div >
        <div key={article._id}>
          <img src={article.media} alt="2" style={{ width: "200px" }} />
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
          <p>{article.published_date}</p>
          <p>{article.country}</p>
          <a href={article.link}  rel="noopener" >Read more</a>
        </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Search;