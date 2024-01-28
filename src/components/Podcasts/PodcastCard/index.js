import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function PodcastCard({ id, title, displayImage }) {
  return (
    
    id !== '-1' ? (
      <Link to={`/podcast/${id}`} className="podcast-card">
        <img className="display-image-podcast" src={displayImage} alt={title} />
        <p className="title-podcast">{title}</p>
      </Link>
    ) : (<Link className="podcast-card">
    <img className="display-image-podcast" src={displayImage} alt={title} />
    <p className="title-podcast">{title}</p>
  </Link>)
  );
}

export default PodcastCard;
