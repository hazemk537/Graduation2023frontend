import react from "react";
import "../styles/PreviewFeed.css";

const PreviewFeed = ({ channel_obj, articlesArr }) => {
  //
  return (
    <div className="preview_channel_feed">
      <img
        src={channel_obj.channel_img_url}
        alt={channel_obj.channel_img_title}
      />

      <header className="preview_channel__info">
        <h3>{channel_obj.channel_title} </h3>
        <p>{channel_obj.channel_description}</p>

        <div className="preview_channel_meta">
          {" "}
          <span>{channel_obj.channel_language} </span>
          <span> {channel_obj.channel_updateDate}</span>
        </div>
      </header>
    </div>
  );
};
export default PreviewFeed;

