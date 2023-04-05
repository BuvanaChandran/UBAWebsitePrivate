import React from 'react';
import './SitReportNavigator.css';
import BreadcrumbComponent from "../../../../components/BreadcrumbComponent/BreadcrumbComponent";
import ComingSoon from "../../../../components/ComingSoon/ComingSoon";
import { Link } from "react-router-dom";
import {BsBoxArrowInUpRight} from "react-icons/bs";
export default function SitReportNavigator()
{
	const SitReportList=[
		
		{
			"link":"https://sairamit.edu.in/unnat-bharat-abhiyan/",
			"title":"UBA Report SIT",
			"type":"anchor-tag"
		}
	];
	return(
		<div className="sit-reports">
			<div className="side"></div>
			<div className="content">
				 <BreadcrumbComponent activeLink="SIT / Reports"></BreadcrumbComponent>
				 {(SitReportList.length===0)?(<ComingSoon/>):(
				 <div className="paragraph-container">
					<div className="heading">
			 			<h2>SRI SAI RAM INSTITUTE OF TECHNOLOGY - UBA REPORTS</h2>
			 		</div>
		 			<ul className="report-list">
		 			{
		 				SitReportList.map((reportDetails,index)=>{
		 				
		 				return (reportDetails.type==="anchor-tag")?
		 				(<li key={index} className="report-link-holder"><a href={reportDetails.link}className="report-link" target="_blank" rel="noreferrer">{reportDetails.title} <BsBoxArrowInUpRight size="1.5rem" className="report-icons"/></a> </li>)
		 				:
		 				(<li key={index} className="report-link-holder"><Link to={reportDetails.link}className="report-link">{reportDetails.title} <BsBoxArrowInUpRight size="1.5rem" className="report-icons"/></Link> </li>)
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
