import React from 'react';
import "./ReportContainer.css";
import BreadcrumbComponent from "../BreadcrumbComponent/BreadcrumbComponent";
import ReportActivityContainer from "../ReportActivityContainer/ReportActivityContainer";

export default function SecReport19to20({reportDetails})
{

	return(
		<div className="sec-reports">
			<div className="side"></div>
			<div className="content">
				 <BreadcrumbComponent activeLink={reportDetails.activeLink}></BreadcrumbComponent>
				 <div className="paragraph-container">
					<div className="college-heading">
			 			<h3>{reportDetails.title}</h3>
			 		</div>
			 	</div>
				{
					reportDetails.reportActivities.map((reportActivity,index)=>(
						<ReportActivityContainer activity={reportActivity} key={index}/>
					))
				}		 	
			</div>
		</div>
	);
	
}
