import React, { useEffect, useState } from "react";
import ChannelsView from "./ChannelsView";
import "../styles/publicChannels.css";
import { faL } from "@fortawesome/free-solid-svg-icons";
import ModalArticle from "./ChannelModal";
import useFetch from "../customHooks/useFetch";
const categories = [
  {

    "name": "general"
  },
  {

    "name": "world"
  },
  {

    "name": "nation"
  },
  {

    "name": "business"
  },
  {

    "name": "technology"
  },
  {

    "name": "entertainment"
  },
  {

    "name": "sports"
  },
  {

    "name": "science"
  },
  {

    "name": "health"
  }
]
function PublicChannels() {
  const [selectedSpan, setSelectedSpan] = useState(1)
  const [categorisHover, setCategorisHover] = useState(false)
  //#todo move this state to seperate compoent to avoid useless re-render
  //#todo set err state if ex: no internet connection and display msg
  //#todo if go back from any page , should fetch from loval storge no rerequest
  let apikey = '8e69a1db2fb43edac805be1306b74ae2';

  const [data,setData] = useFetch(`https://gnews.io/api/v4/top-headlines?category=${categories[selectedSpan].name}&lang=ar&country=any&max=50&apikey=${apikey}`, { method: 'Get', name: 'GnewsAPI' })
  let modifiedArticles
  if (data.articles) {
    modifiedArticles = data.articles.map((item, index) => {
      return {
        thumbnail: item.image,
        title: item.title,
        description: item.description,
        id: index,
        content: item.content,
        publishedAt: item.publishedAt,
        src: item.src,
        url: item.url

      }
    })
  }


  return (
    <>
      <h1 className="public_channels_h1">Egypt top headlines..</h1>

      <div style={{
        display: 'flex',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: categorisHover ? 'default' : 'pointer',

      }}
      >

        {categories.map((item, index) => {
          return (
            <div key={index}
              style={{
                width: '11.1%',

              }}
              onMouseEnter={() => { setCategorisHover(true) }}

              onMouseOut={() => { setCategorisHover(false) }}

              onClick={() => {
                setSelectedSpan(index)


              }}

            >

              <p style={{
                textAlign: 'center',

              }}
              >
                {item.name}
              </p>

              {index === selectedSpan && <span style={{
                borderBottomStyle: 'solid',
                borderColor: 'rgb(75, 95, 95)',
                display: 'block',
              }}></span>}

            </div>
          )
        })}


      </div>
      <ChannelsView type="public_channels" channels={modifiedArticles} />
    </>

  );
}

export default PublicChannels;

