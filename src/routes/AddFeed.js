import react from "react";
import {useRef} from 'react'
import addFeed from "../styles/addfeed.css"

const AddFeed =()=>{
  const inputRef = useRef(null);
  return (

<div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" onChange={(event)=>{inputRef.current=event.target.value} } placeholder="Add Rss link"/>
      <button type="submit" class="searchButton" onClick={()=>{
// const corsProxy = "https://cors.eu.org/";

const UrlBase = "https://cors.eu.org/";

fetch(UrlBase+inputRef.current)
  .then((response) => response.text())
  .then((xmlText) => {


    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");


    // Access the parsed feed data
    let newsFeed={
  "thumbnail":`${xmlDoc.getElementsByTagName("image").getElementsByTagName("url")}`,
    "websiteUrl":`${xmlDoc.getElementsByTagName("link")))}`,
  "feedUrl":`${inputRef.current}`,
  "title":`${xmlDoc.getElementsByTagName("title")}`
}
// console.log(newsFeed.thumbnail.)
    const items = xmlDoc.getElementsByTagName("item");
console.log(xmlDoc)
    for (let i = 0; i < items.length; i++) {
      const title = items[i].getElementsByTagName("title")[0];
      const link = items[i].getElementsByTagName("link")[0];
      // console.log(title);
      // console.log(link);
      // Access other properties as needed

     let currentFeeds= localStorage.getItem("feeds");
      // localStorage.setItem("feeds", );


    }
  });
      }}>
        <i class="fa fa-search"></i>
     </button>
   </div>
</div>

  )
}
export default AddFeed;
