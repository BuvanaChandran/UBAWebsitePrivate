import React from "react";
import "./InstitutionSteeringCommittee.css";
import BreadcrumbComponent from "../../components/BreadcrumbComponent/BreadcrumbComponent";
import CommitteeMembersDetails from "./CommitteeMemberDetails.json";
export default function InstitutionSteeringCommittee() {
	
  return (
    <div className="institution-steering-committee-page">
      <div className="side"></div>
      <div className="content">
        <BreadcrumbComponent activeLink="ISC "></BreadcrumbComponent>
        <div className="paragraph-container">
          <div className="heading">
            <h2>Institution Steering Committee</h2>
          </div>
          <ul className="isc-list">
          	{
          	    CommitteeMembersDetails.committeeMemberList.map((committeeMember,index)=>(
		        <li key={index}>
		          <span className="name-highlight">{committeeMember.name}</span>, {committeeMember.designation}.
		        </li>
		        ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
