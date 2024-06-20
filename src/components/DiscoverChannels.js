import React, { useEffect, useState } from "react";
import ChannelsView from "./ChannelsView";
import '../styles/discoverChannel.css'
import Alert from "./Alert";
function DiscoverChannels() {
  const [channels, setChannels] = useState();


  const [PageNumber, setPageNumber] = useState('1')
  const [alertMessage, setAlertMessage] = useState(false);
  const [alertType, setAlertType] = useState(false);
  //to not render success at begining



  let token = JSON.parse(localStorage.getItem('data')).token
  useEffect(() => {
    // http://BrieflyNews.runasp.net/api/v1/Rss/GetAll?PageNumber=1&PageSize=50

    fetch(`https://BrieflyNews.runasp.net/api/v1/Rss/GetAll?PageNumber=1&PageSize=50`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        console.log('Getting channels ...');
        return response.json();
      })
      .then((jsonData) => {
        if (jsonData.statusCode) {
          setChannels(jsonData.data);
          console.log(jsonData);

        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setAlertMessage(error)
        setAlertType('error')
      });


  }, []);

  return (
    <>
      {alertType && <Alert alertText={alertMessage} type={alertType} />}

      <ChannelsView type="discover_channels" channels={channels} /></>)
}

export default DiscoverChannels;

