import React from 'react';
import './SecReportNavigator.css';
import BreadcrumbComponent from "../../../../components/BreadcrumbComponent/BreadcrumbComponent";
import { Link } from "react-router-dom";
import ComingSoon from "../../../../components/ComingSoon/ComingSoon";
import {BsBoxArrowInUpRight} from "react-icons/bs";
export default function SecReportNavigator()
{
	const SecReportList=[
		{
			"link":"/sec/report-20-21",
			"title":"UBA Report 2020-2021",
			"type":"link-tag"
		},
		{
			"link":"/sec/report-19-20",
			"title":"UBA Report 2019-2020",
			"type":"link-tag"
		}
	];
	return(
		<div className="sec-reports">
			<div className="side"></div>
			<div className="content">
				 <BreadcrumbComponent activeLink="SEC / Reports"></BreadcrumbComponent>
				 {
				 (SecReportList.length===0)?
				 (<ComingSoon/>):
				 (<div className="paragraph-container">
					<div className="heading">
			 			<h2>SRI SAI RAM ENGINEERING COLLEGE - UBA REPORTS</h2>
			 		</div>
		 			<ul className="report-list">
		 			{
		 				SecReportList.map((reportDetails,index)=>{
		 				
		 				return (reportDetails.type==="anchor-tag")?
		 				(<li key={index} className="report-link-holder"><a href={reportDetails.link}className="report-link" target="_blank" rel="noreferrer">{reportDetails.title} <BsBoxArrowInUpRight size="1.5rem" className="report-icons"/></a> </li>)
		 				:
		 				(<li key={index} className="report-link-holder"><Link to={reportDetails.link}className="report-link">{reportDetails.title} <BsBoxArrowInUpRight size="1.5rem" className="report-icons"/></Link> </li>)
		 				}
		 				)
		 			}
		 			
		 			</ul>
			 	</div>)}
			</div>
		</div>
	);
}
