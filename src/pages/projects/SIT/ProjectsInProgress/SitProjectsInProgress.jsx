import React from 'react';
import "./SitProjectsInProgress.css";
import BreadcrumbComponent from "../../../../components/BreadcrumbComponent/BreadcrumbComponent";
import SitProjectsInProgressList from "./SitProjectsInProgressList.json";
import ComingSoon from "../../../../components/ComingSoon/ComingSoon";
export default function SitProjectsInProgress()
{
	return(
		<div className="sec-projects-in-progress">
			  <div className="side"></div>
			  <div className="content">
				<BreadcrumbComponent activeLink="SIT / Projects / Projects In Progress"></BreadcrumbComponent>
				{
		 		(SitProjectsInProgressList.sitProjectsInProgress.length===0)?
		 		(<ComingSoon/>):
		 		(
				<div className="paragraph-container">
					<div className="college-heading">
			 			<h3>SRI SAI RAM INSTITUTE OF TECHNOLOGY</h3>
			 		</div>
			 		<div className="heading">
			 			<h2>PROJECTS IN PROGRESS</h2>
			 		</div>
				  	<div className="table-details-container">
	                        <table className="table-details">
	                            <thead>
	                                <tr>
	                                   <th>S.No.</th>
	                                   <th>Technology Intervention</th>
	                                   <th>Name of the Project</th>
	                                   <th>Place of Implementation</th>
	                                   <th>Date of Submission</th>
	                                   <th>Principal Investigator</th>
	                                </tr>
	                            </thead>
	                            <tbody>
	                               {SitProjectsInProgressList.sitProjectsInProgress.map((tableRow, index) => {
	                               
	                                    return (
	                                        <tr key={index}>
	                                            <td>{index+1}</td>
	                                            <td>{tableRow.technologyIntervention}</td>
					                       		<td>{tableRow.projectName}</td>
					                       		<td>{tableRow.implementedPlace}</td>
					                       		<td>{tableRow.principalInvestigators.map((principalInvestigator,index)=>
					                       			(<p key={index} className="investigator-list-element">{principalInvestigator}</p>))}</td>
					                       		<td>{tableRow.submittedDate}</td>
	                                        </tr>
	                                    );
	                                })}
	                               
	                               
	                            </tbody>
	                        </table>
					</div>
				</div>)}
			  </div>
		</div>
	);
}
