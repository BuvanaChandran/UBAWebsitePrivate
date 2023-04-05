import React from 'react';
import './SponsoringMinistryPage.css';
import BreadcrumbComponent from "../../../components/BreadcrumbComponent/BreadcrumbComponent";

export default function SponsoringMinistryPage()
{
	return(
		<div className="sponsoring-ministry-page">
			<div className="side"></div>
			<div className="content">
			    <BreadcrumbComponent activeLink="About / Sponsoring Ministry"></BreadcrumbComponent>
			    <div className="sub-content">
					<div className="page-heading">
		                <h2>Sponsoring Ministry - Ministry of Education (MoE)</h2>
		            </div>
		            <div className="paragraph-content">
		            	<p>The Ministry of Education (MoE) has launched Unnat Bharat Abhiyan with an aim to connect institutions of higher education with local communities to address the development challenges through appropriate technologies.</p>
		            	<p>The MoE has advised all the HEIs which are funded by the Central/State Government and all institutions approved by the regulatory bodies, to adopt clusters of backward Gram Panchayats/villages in their vicinity and apply their knowledge and expertise to improve the infrastructure in the Gram Panchayats (GPs). HEIs in the districts are expected to carry out detailed field study, participate in conceptualising & preparation of community-level development plans along with the Rural Development and Panchayat Raj personnel by providing technical, managerial inputs and by suggesting innovative solutions to the issues faced in the day-to-day lives of the households therein, in the areas of livelihoods, energy security, environment and basic living amenities. The institutions have been advised to continue their engagement with chosen Panchayats and offer assistance to the Rural Development and Panchayat Raj personnel.</p>
		            	<p>Ministry of Education (MoE) to oversee that selected Higher Educational Institutions (HEIs) adopt (5) panchayats each in consultation with the District Collectors and use their knowledge base to find solutions for the issues of basic amenities & livelihood opportunities faced by the rural communities and thereby help in bringing about a qualitative change in the economic change in the economic and living standards of the people</p>
		            	<p>Basic funding for setting up the structural network of UBA and for orientation of UBA teams to enable effective participation i.e. establishing and running the UBA cells of CI, MIs and PIs is to be provided by the Ministry of Education (MoE). In addition, the requisite funding for the working of subject expert groups for preparation of resource materials, training workshops, etc. will also need to be provided by the Ministry of Education (MoE). The UBA cell in an Institute should identify a rural cluster (around 5 villages) for development work. The base-level funding from Ministry of Education (MoE) will be made available for setting up the necessary infrastructure/manpower for the UBA Cell of the mentoring as well as the participating institutions.</p>
		            </div>
		        </div>
			</div>
		</div>
	);
}
