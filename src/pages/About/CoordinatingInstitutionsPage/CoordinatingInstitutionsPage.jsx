import React from 'react';
import './CoordinatingInstitutionsPage.css';
import BreadcrumbComponent from "../../../components/BreadcrumbComponent/BreadcrumbComponent";
import DistrictsAccordion from "./DistrictsAccordion";
import coordinatingInstitutionDetails from "./coordinatingInstitutionDetails.json";

export default function CoordinatingInstitutionsPage()
{
	return(
		<div className="coordinating-institutions-page">
			<div className="side"></div>
			<div className="content">
			    <BreadcrumbComponent activeLink="About / Coordinating Institutions"></BreadcrumbComponent>
			    <div className="sub-content">
					<div className="page-heading">
		                <h2 id="RCI">Regional Coordinating Institutes (RCIs)</h2>
		            </div>
		            <div className="paragraph-content">
		            	<p>The Regional Coordinating Institutions (RCIs) are identified on the basis of their earlier experience and infrastructural competence etc. These institutions will act as nodal centers for promoting & facilitate UBA network in their region. These will be responsible for grooming the other participating institutions in their region in addition to carrying out their own village cluster activities. These are the institutions identified by the NSC for the purpose of better coordination of the programme in specified areas/States. The RCI will have their own login credential to view and review the work of PIs in their region. Additionally, the RCIs have a strategic role to play, they have to identify a challenge relevant in their region / states in collaboration with PIs and State government.</p>
		            	<div className="page-sub-heading">
		               		 <h4>Regional Coordinating Institutes &amp; its details:</h4>
		            	</div>
		            	<div className="table-details-container">
	                        <table className="table-details">
	                            <thead>
	                                <tr>
	                                   <th>S.No.</th>
	                                   <th>Institute</th>
	                                   <th>Coordinator</th>
	                                   <th>E-mail</th>
	                                   <th>State</th>
	                                   <th>Districts Alloted</th>
	                                   
	                                </tr>
	                            </thead>
	                            <tbody>
	                               {coordinatingInstitutionDetails.InstitutionDetails.map((tableRow, index) => {
	                               
	                                    return (
	                                    	
	                                        <tr key={index}>
	                                            <td>{index+1}</td>
	                                            <td>{tableRow.institute}</td>
					                       		<td>{tableRow.coordinator}</td>
					                       		<td>
					                       		{ tableRow.eMail.map((mail,index)=>(<p key={index} className="table-mail-link"><a href={"mailto:"+mail}>{mail}</a></p>))}
					                       		</td>
					                       		<td className="td-state">{tableRow.state}</td>
					                       		<td ><DistrictsAccordion districtsAllotedList={tableRow.districtsAllotedList}/></td>
	                                        </tr>
	                                        
	                                    );
	                                })}
	                               
	                               
	                            </tbody>
	                        </table>
	                    </div>
		            </div>
		        </div>
			</div>
		</div>
	);
}
