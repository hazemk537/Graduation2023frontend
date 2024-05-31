import React, { useEffect, useState } from "react";
import ChannelsView from "./ChannelsView";
import "../styles/publicChannels.css";
const categories = [
  {

    "name": "General"
  },
  {

    "name": "World"
  },
  {

    "name": "Nation"
  },
  {

    "name": "Business"
  },
  {

    "name": "Technology"
  },
  {

    "name": "Entertainment"
  },
  {

    "name": "Sports"
  },
  {

    "name": "Science"
  },
  {

    "name": "Health"
  }
]
function PublicChannels() {
  const [channels, setChannels] = useState([]);
  const [selectedSpan, setSelectedSpan] = useState(3)

  useEffect(() => {
    //#todo make transition on categories bar
    //#todo make transition on categories bar
    let apikey = '8e69a1db2fb43edac805be1306b74ae2';
    let url = 'https://gnews.io/api/v4/top-headlines?category=' + categories[selectedSpan].name + '&lang=en&country=us&max=10&apikey=' + apikey;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        let modifiedArticles = json.articles.map((item, index) => {
          return {
            thumbnail: item.image,
            title: item.title,
            description: item.description,
            id: index,
            content: item.content,
            publishedAt: item.publishedAt,
            src: item.src,
            url: item.url,


          }

        })
        setChannels(modifiedArticles)

      }
      ).catch((err) => { console.log(err) })
  }, [selectedSpan]);


  return (
    <>
      <h1 className="public_channels_h1">Pick Your Favourite Creater...</h1>

      <div style={{
        display: 'flex',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',

      }}
      >

        {categories.map((item, index) => {
          return (
            <div key={index}
              style={{
                width: '11.1%',

              }}

              onClick={() => {
                setSelectedSpan(index)
              }}>

              <p style={{
                textAlign: 'center',

              }}>
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
      <ChannelsView type="public_channels" channels={channels} />
    </>
  );
}

export default PublicChannels;

