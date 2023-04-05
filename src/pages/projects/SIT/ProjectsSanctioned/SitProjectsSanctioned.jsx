import React from 'react';
import "./SitProjectsSanctioned.css";
import BreadcrumbComponent from "../../../../components/BreadcrumbComponent/BreadcrumbComponent";
import SitProjectsSanctionedList from "./SitProjectsSanctionedList.json";
import ComingSoon from "../../../../components/ComingSoon/ComingSoon";
export default function SitProjectsSanctioned()
{
	return(
		<div className="sit-projects-sanctioned">
			  <div className="side"></div>
			  <div className="content">
				<BreadcrumbComponent activeLink="SIT / Projects / Projects Sanctioned"></BreadcrumbComponent>
				{(SitProjectsSanctionedList.sitProjectsSanctioned.length===0)?
				(<ComingSoon/>):
				(<div className="paragraph-container">
					<div className="college-heading">
			 			<h3>SRI SAI RAM INSTITUTE OF TECHNOLOGY</h3>
			 		</div>
			 		<div className="heading">
			 			<h2>SANCTIONED PROJECTS</h2>
			 		</div>
				  	<div className="table-details-container">
	                        <table className="table-details">
	                            <thead>
	                                <tr>
	                                   <th>S.No.</th>
	                                   <th>Name Of PI</th>
	                                   <th>Title of project</th>
	                                   <th>Department</th>
	                                   <th>Unique Code</th>
	                                   <th>Fund</th>
									   <th>SEG</th>
									   <th>Type of Fund</th>
	                                </tr>
	                            </thead>
	                            <tbody>
	                               {SitProjectsSanctionedList.sitProjectsSanctioned.map((tableRow, index) => {
	                                    return (
	                                        <tr key={index}>
	                                            <td>{index+1}</td>
												<td>{tableRow.principalInvestigators.map((principalInvestigator,index)=>
					                       			(<p key={index} className="investigator-list-element">{principalInvestigator}</p>))}</td>
	                                            <td>{tableRow.projectName}</td>
												<td>{tableRow.department}</td>
												<td>{tableRow.uniqueCode}</td>
												<td>{tableRow.fund}</td>
												<td>{tableRow.seg}</td>
												<td>{tableRow.typeOfFund}</td>	
	                                        </tr>
	                                    );
	                                })}
	                            </tbody>
	                        </table>
					</div>
				</div>)
				}
			  </div>
		</div>
	);
}
