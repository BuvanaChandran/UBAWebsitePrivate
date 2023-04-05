import React,{useEffect,useRef} from "react";
import "./NewsCarousel.css";
import { Link } from "react-router-dom";
import NewsTicker from "react-advanced-news-ticker";
import NewsEventDetails from "../../pages/NewsEvents/NewsEventDetails.json";

const NewsCarousel = () => {

  const newsTickerRef=useRef(null);	
  useEffect(()=>{
  	const newsTickerRefCurrent=newsTickerRef.current;
  	return ()=>( newsTickerRefCurrent.stop());
  },[]);
  return (
    <div className="news-container">
      <div className="news-heading">
        <h2 className="news-title">News &amp; Events</h2>
      </div>
      <NewsTicker
      	ref = {newsTickerRef}
        rowHeight={60}
        maxRows={5}
        speed={1500}
        duration={10}
        autoStart={true}
        pauseOnHover={true}
        className="news-details"
      >
        {[
          ...NewsEventDetails.events.SEC,
          ...NewsEventDetails.events.SIT,
          ...NewsEventDetails.news,
        ].map((details, index) => {
          return (
            <Link
              to={`/${details.type}/${details.title}`}
              className="newsevent-link"
              key={index}
            >
              <span style={{color: 'rgba(0,0,0,0.7)'}}>{details.postedDate}</span>
              <div className="news-item">{details.title}</div>
            </Link>
          );
        })}
      </NewsTicker>
    </div>
  );
};

export default NewsCarousel;
