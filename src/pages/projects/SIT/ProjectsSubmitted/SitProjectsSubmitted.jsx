import React from 'react';
import "./SitProjectsSubmitted.css";
import BreadcrumbComponent from "../../../../components/BreadcrumbComponent/BreadcrumbComponent";
import ComingSoon from "../../../../components/ComingSoon/ComingSoon";
import SitProjectsSubmittedList from './SitProjectsSubmittedList.json';
export default function SitProjectsSubmitted()
{
	return(
		<div className="sit-projects-submitted">
			  <div className="side"></div>
			  <div className="content">
				<BreadcrumbComponent activeLink="SIT - Projects / Projects Submitted"></BreadcrumbComponent>
				{(SitProjectsSubmittedList.sitProjectsSubmitted.length===0) ?
				(<ComingSoon/>):
				(<div className="paragraph-container">
					<div className="college-heading">
			 			<h3>SRI SAI RAM INSTITUTE OF TECHNOLOGY</h3>
			 		</div>
			 		<div className="heading">
			 			<h2>SUBMITTED PROJECTS</h2>
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
	                               {SitProjectsSubmittedList.sitProjectsSubmitted.map((tableRow, index) => {
	                               
	                                    return (
	                                        <tr key={index}>
	                                            <td>{index+1}</td>
	                                            <td>{tableRow.technologyIntervention}</td>
					                       		<td>{tableRow.projectName}</td>
					                       		<td>{tableRow.implementedPlace.map((place,index)=>
							                   		<p key={index} className="investigator-list-element">{place}</p>)}</td>
					                       		<td>{tableRow.submittedDate}</td>
												<td>{tableRow.principalInvestigators.map((principalInvestigator,index)=>
					                       			(<p key={index} className="investigator-list-element">{principalInvestigator}</p>))}</td>
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
