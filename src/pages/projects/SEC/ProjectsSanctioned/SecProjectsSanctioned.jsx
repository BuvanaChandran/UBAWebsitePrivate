import React from 'react';
import "./SecProjectsSanctioned.css";
import BreadcrumbComponent from "../../../../components/BreadcrumbComponent/BreadcrumbComponent";
import SecProjectsSanctionedList from "./SecProjectsSanctionedList.json";
import ComingSoon from "../../../../components/ComingSoon/ComingSoon";
export default function SecProjectsSanctioned()
{
	return(
		<div className="sec-projects-sanctioned">
			  <div className="side"></div>
			  <div className="content">
				<BreadcrumbComponent activeLink="SEC / Projects / Projects Sanctioned"></BreadcrumbComponent>
				{
				(SecProjectsSanctionedList.secProjectsSanctioned.length===0)?
				(<ComingSoon/>):
				(<div className="paragraph-container">
					<div className="college-heading">
			 			<h3>SRI SAI RAM ENGINEERING COLLEGE</h3>
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
	                               {SecProjectsSanctionedList.secProjectsSanctioned.map((tableRow, index) => {
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
				</div>)}
			  </div>
		</div>
	);
}
