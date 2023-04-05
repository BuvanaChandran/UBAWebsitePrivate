import React from 'react';
import './SitProjectsCompleted.css';
import BreadcrumbComponent from "../../../../components/BreadcrumbComponent/BreadcrumbComponent";
import SitProjectsCompletedList from "./SitProjectsCompletedList.json";
import ComingSoon from "../../../../components/ComingSoon/ComingSoon";
export default function SitProjectsCompleted()
{
	return(
		<div className="sit-projects-completed">
			  <div className="side"></div>
			  <div className="content">
				<BreadcrumbComponent activeLink="SIT / Projects / Projects Completed"></BreadcrumbComponent>
				{
				(SitProjectsCompletedList.sitProjectsCompleted.length===0)?
				(<ComingSoon/>):
				(<div className="paragraph-container">
					<div className="college-heading">
			 			<h3>SRI SAI RAM INSITUTE OF TECHNOLOGY</h3>
			 		</div>
			 		<div className="heading">
			 			<h2>COMPLETED PROJECTS</h2>
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
	                               {SitProjectsCompletedList.sitProjectsCompleted.map((tableRow, index) => {
	                               
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
