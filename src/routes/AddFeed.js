import react from "react";
import {useRef,useState} from 'react'
import addFeed from "../styles/addfeed.css"
import PreviewFeed from '../components/PreviewFeed.js'
// https://www.smh.com.au/rss/feed.xml
const AddFeed =()=>{
  const [channel_obj,setChannelObj]=useState({
  channel_img_url:"",
  channel_img_title:"",
  channel_title:"",
  channel_description:"",
  channel_language:"",
  channel_updateDate:""
})
  const [articles_obj,setArticleObj]=useState({
  article_category:"",
  article_description:"",
  article_title:"",
  articlel_link:"",
  article_enclosure:"",
  article_pubDate:""
})


  let channel_obj1={
  channel_img_url:"",
  channel_img_title:"",
  channel_title:"",
  channel_description:"",
  channel_language:"",
  channel_updateDate:""
}
let article_ob1={
  article_category:"",
  article_description:"",
  article_title:"",
  articlel_link:"",
  article_enclosure:"",
  article_pubDate:""
}
  const inputRef = useRef(null);
  return (

<div class="addFeed">

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



channel_obj1.channel_description=xmlDoc.querySelector("description").textContent
channel_obj1.channel_img_title=xmlDoc.querySelector("image title ").textContent
channel_obj1.channel_img_url=xmlDoc.querySelector("image url").textContent
channel_obj1.channel_language=xmlDoc.querySelector("language").textContent
channel_obj1.channel_title=xmlDoc.querySelector("title").textContent
channel_obj1.channel_updateDate=xmlDoc.querySelector("lastBuildDate").textContent


setChannelObj(channel_obj1)

let articles=xmlDoc.querySelectorAll("item")
console.log(articles)

for (let i in articles)
{
let innerHtmlchildren =articles[i].innerHTML

// console.log(ddd)
  console.log(articles[i].innerHtmlchildren)
}



  });
      }}>
        <i class="fa fa-search"></i>
     </button>
   </div>
   <PreviewFeed channel_obj={channel_obj}/>





  
</div>

  )
}

export default AddFeed;


