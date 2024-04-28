import React, { useEffect, useState } from "react";
import ChannelCard from "./ChannelCard";
import "../styles/ChannelsView.css";
import ArticleCard from "./ArticleCard";

function UserArticles({articles}) {

    
  const [intialArticles, setIntialArticles] = useState([
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
    { thumbnail: "", description: "", title: "", id: "" },
  ]);
  if (articles)
    return (
      <div className={`gallary_items `}>
        {articles.map((item) => (
          <ArticleCard item={item} />
        ))}
      </div>
    );
  else {
    return (
      <div className={`gallary_items `}>
        {intialArticles.map((item) => (
          <ArticleCard  item={item} />
        ))}
      </div>
    );
  }
}

export default UserArticles;

