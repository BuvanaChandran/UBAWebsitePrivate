import React from 'react';
import "./SitProjectGuides.css";
import BreadcrumbComponent from "../../../../components/BreadcrumbComponent/BreadcrumbComponent";
import SitProjectGuidesList from "./SitProjectGuidesList.json";
import ComingSoon from "../../../../components/ComingSoon/ComingSoon";
export default function SitProjectGuides()
{
	return(
		<div className="sit-project-guides">
			  <div className="side"></div>
			  <div className="content">
				<BreadcrumbComponent activeLink="SIT / Projects / Project Guides"></BreadcrumbComponent>
				{
				(SitProjectGuidesList.sitProjectGuides.length===0)?
				(<ComingSoon/>):
				(<div className="paragraph-container">
					<div className="college-heading">
			 			<h3>SRI SAI RAM INSTITUTE OF TECHNOLOGY</h3>
			 		</div>
				 	<div className="guides-heading">
			 			<h2>PROJECT GUIDES for SET (Sustainability, Engineering,Technology) projects of UBA Internships, Prototypes & Funding</h2>
			 		</div>
				  	<div className="table-details-container">
	                        <table className="table-details">
	                            <thead>
	                                <tr>
	                                   <th>S.No.</th>
	                                   <th>Name of the Faculty</th>
	                                   <th>Department</th>
	                                   <th>Faculty ID</th>
	                                   <th>Specialization Areas of Project Guidance</th>
	                                   <th>Mail ID</th>
	                                   <th>Contact Number</th>
	                                   
	                                </tr>
	                            </thead>
	                            <tbody>
	                               {SitProjectGuidesList.sitProjectGuides.map((tableRow, index) => {
	                               
	                                    return (
	                                        <tr key={index}>
	                                            <td>{index+1}</td>
	                                            <td>{tableRow.guideName}</td>
					                       		<td>{tableRow.department}</td>
					                       		<td>{tableRow.facultyId}</td>
					                       		<td>{tableRow.specialization.map((specializedFields,index)=>
					                       			(<p key={index} className="specialization-fields">{specializedFields}</p>))}</td>
					                       		<td><a href={"mailto:"+tableRow.mail} className="table-mail-link">{tableRow.mail}</a></td>
					                       		<td><a href={"tel:"+tableRow.contactNo} className="table-mail-phone">{tableRow.contactNo}</a></td>
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
