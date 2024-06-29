import React, { useEffect, useState } from "react";
import ChannelsView from "./ChannelsView";
import "../styles/publicChannels.css";
import useFetch from "../customHooks/useFetch";


const categories = [
  {
    "name": "General",
    "key": "general"
  },
  {
    "name": "World",
    "key": "world"
  },
  {
    "name": "Nation",
    "key": "nation"
  }, {
    "name": "Sports",
    "key": "sports"
  },
  {
    "name": "Science",
    "key": "science"
  },
  {
    "name": "Health",
    "key": "health"
  },
  {
    "name": "Business",
    "key": "business"
  },
  {
    "name": "Technology",
    "key": "technology"
  },
  {
    "name": "Entertainment",
    "key": "entertainment"
  }]


const countries = [
  {
    "name": "Egypt",
    "key": "eg",
    "lang": "ar",
  },
  {
    "name": "Australia",
    "key": "au",
    "lang": "any",

  },
  {
    "name": "Brazil",
    "lang": "any",
    "key": "br",
  },
  {
    "name": "Canada",
    "lang": "any",
    "key": "ca"
  },
  {
    "name": "China",
    "lang": "any",
    "key": "cn"
  },
  {
    "name": "France",
    "lang": "any",
    "key": "fr"
  }]

function PublicChannels() {
  const [selectedSpan, setSelectedSpan] = useState(0)//catgory
  const [selectedCountry, setSelectedCountry] = useState(0)//country
  const [categorisHover, setCategorisHover] = useState(false)

  //#todo move this state to seperate compoent to avoid useless re-render
  //#todo set err state if ex: no internet connection and display msg
  //#todo if go back from any page , should fetch from loval storge no rerequest
  let apikey = '8e69a1db2fb43edac805be1306b74ae2';
  //we need the useeffect inside the hook depend only on selectedSpan
  const [data, , sendRequest] = useFetch()



  useEffect(() => {

    sendRequest(`https://gnews.io/api/v4/top-headlines?category=${categories[selectedSpan].key}&lang=${countries[selectedCountry].lang}&country=${countries[selectedCountry].key}&max=20&apikey=${apikey}`, { useEffect: true, method: 'Get', name: 'GnewsAPI', jsonFailProp: 'errors' })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSpan, selectedCountry])


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
      {/* suitable to be above all elements not children */}

      <h1 className="public_channels_h1"> World top headlines..</h1>

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
                borderColor: 'rgb(255, 0, 0)',
                display: 'block',
              }}></span>}

            </div>
          )
        })}




      </div>
      <div style={{
        display: 'flex',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: categorisHover ? 'default' : 'pointer',

        backgroundColor: ' #3b3b3b',
        borderRadius: '20px'
      }}>
        {countries.map((item, index) => {
          return (
            <div className={index === selectedCountry ? 'selectedCountryOrCategry' : ''} key={index}
              style={{
                width: '11.1%',

              }}

              onClick={() => {
                setSelectedCountry(index)


              }}

            >

              <p style={{
                textAlign: 'center',

              }}
              >
                {item.name}
              </p>

              {index === selectedCountry && <span style={{
                borderBottomStyle: 'solid',
                borderColor: 'rgb(174 161 161)',
                display: 'block',
              }}></span>}
            </div>
          )
        })}
      </div >
      <ChannelsView type="public_channels" channels={modifiedArticles}  />
    </>

  );
}

export default PublicChannels;

