import React from 'react';
import './ProjectSubmittedContainer.css';
import ComingSoon from '../ComingSoon/ComingSoon';
import BreadcrumbComponent from "../BreadcrumbComponent/BreadcrumbComponent";
export default function ProjectSubmittedContainer({projectList})
{
	return(
		<div className="project-submitted-container">
			  <div className="side"></div>
			  <div className="content">
				<BreadcrumbComponent activeLink={projectList.breadCrumb}></BreadcrumbComponent>
			 	{
			 	(projectList.projectTableDetails.length===0)?
			 	(<ComingSoon/>):
				(<div className="paragraph-container">
					<div className="college-heading">
			 			<h3>{projectList.collegeName}</h3>
			 		</div>
			 		<div className="heading">
			 			<h2>{projectList.heading}</h2>
			 		</div>
				  	<div className="table-details-container">
	                        <table className="table-details">
	                            <thead>
	                                <tr>
	                                	<th>S.No.</th>
	                                	<th>Technology Intervention</th>
	                                	<th>Name of the Project</th>
	                                	<th>Place of Implementation</th>
	                                	<th>Principal Investigator</th>
	                                	<th>Date of Submission</th>
	                                </tr>
	                            </thead>
	                            <tbody>
	                               {projectList.projectTableDetails.map((tableRow, index) => {
	                               
	                                    return (
	                                        <tr key={index}>
	                                            <td>{index+1}</td>
	                                            <td>{tableRow.technologyIntervention}</td>
					                       		<td>{tableRow.projectName}</td>
					                       		<td>
							                   		{
							                   		tableRow.implementedPlace.map((place,index)=>
							                   			<p key={index} className="investigator-list-element">{place}</p>)
							                   		}
					                       		</td>
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
