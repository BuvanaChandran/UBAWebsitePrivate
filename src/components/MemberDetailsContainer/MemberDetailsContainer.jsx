import React from "react";
import "./MemberDetailsContainer.css";
import MemberDetails from "./MemberDetails.jsx";
import memberDetailsHolder from "./memberDetails.json";

export default function MemberDetailsContainer() {
  return (
    <div id="member-details">
      {memberDetailsHolder.memberDetails.map((memberDetail, index) => {
        return (
          <MemberDetails
            key={index}
            name={memberDetail.name}
            imageSrc={memberDetail.imageSrc}
            designation={memberDetail.designation}
            role={memberDetail.role}
          />
        );
      })}
    </div>
  );
}
