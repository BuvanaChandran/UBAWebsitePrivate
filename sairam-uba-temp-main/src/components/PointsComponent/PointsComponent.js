import React from "react";
import "./PointsComponent.css";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function PointsComponent({ details }) {
  return (
    <div className="points-component">
      <div className="heading">
      	<h2>{details.title}</h2>
      </div>
      <ul className="Points-list">
        {details.points.map((point, index) => (
          <li key={index} className="Points-item">
            {point.link === "" ? (
              <p>{point.content}</p>
            ) : (
              <a href={`${point.link}`} target="_blank" rel="noreferrer">
                {point.content + " "}
                <BsBoxArrowUpRight size="1.25rem" className="point-icons"/>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
