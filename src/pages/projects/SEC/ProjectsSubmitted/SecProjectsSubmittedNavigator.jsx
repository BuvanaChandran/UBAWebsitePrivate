import React from 'react';
import "./SecProjectsSubmittedNavigator.css";
import BreadcrumbComponent from "../../../../components/BreadcrumbComponent/BreadcrumbComponent";
import ComingSoon from "../../../../components/ComingSoon/ComingSoon";
import {BsBoxArrowInUpRight} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SecProjectsSubmittedNavigator()
{
	const SecProjectSubmitted=[
		{
			"link":"/sec/projects/projects-submitted-21-22",
			"title":"UBA Project Submitted 2021-2022",
			"type":"link-tag"
		},
		{
			"link":"/sec/projects/projects-submitted-20-21",
			"title":"UBA Project Submitted 2020-2021",
			"type":"link-tag"
		}
	];
	return(
		<div className="sec-projects-submitted-navigator">
			  <div className="side"></div>
			  <div className="content">
				<BreadcrumbComponent activeLink="SEC / Projects / Projects Submitted"></BreadcrumbComponent>
			 	{
			 	(SecProjectSubmitted.length===0)?
			 	(<ComingSoon/>):
				(
				 <div className="paragraph-container">
					<div className="heading">
			 			<h2>SRI SAI RAM ENGINEERING COLLEGE - PROJECT SUBMITTED</h2>
			 		</div>
		 			<ul className="report-list">
		 			{
		 				SecProjectSubmitted.map((projectSubmittedDetails,index)=>{
		 				
		 				return (projectSubmittedDetails.type==="anchor-tag")?
		 				(<li key={index} className="report-link-holder">
		 					<a href={projectSubmittedDetails.link}className="report-link" target="_blank" rel="noreferrer">{projectSubmittedDetails.title} <BsBoxArrowInUpRight size="1.5rem" className="report-icons"/></a> 
		 				</li>)
		 				:
		 				(<li key={index} className="report-link-holder">
		 					<Link to={projectSubmittedDetails.link}className="report-link">{projectSubmittedDetails.title} <BsBoxArrowInUpRight size="1.5rem" className="report-icons"/>
		 					</Link> 
		 				</li>)
		 				}
		 				)
		 			}
		 			
		 			</ul>
			 	</div>
					
				)}
			  </div>
		</div>
	);
}
