import React from 'react';
import './ParticipatingInstitutionsPage.css';
import BreadcrumbComponent from "../../../components/BreadcrumbComponent/BreadcrumbComponent";
export default function ParticipatingInstitutionsPage()
{
	return(
		<div className="participating-institutions-page">
			<div className="side"></div>
			<div className="content">
			    <BreadcrumbComponent activeLink="About / Participating Institutions"></BreadcrumbComponent>
			    <div className="sub-content">
					<div className="page-heading">
		                <h2>Participating Institutions (PIs)</h2>
		            </div>
		            <div className="paragraph-content">
		            	<p>All participating institutions (PIs) are expected to establish a UBA Cell which will be responsible for carrying out the activities of the UBA. This will involve the development of an active working group consisting of motivated faculty members drawn from various disciplines. To guide and monitor the activities of the UBA Cell in each institution, there will be an Executive Committee and a local advisory committee (which will be chaired by the Head of the Institution).</p>
		            	<p>The main responsibility of a UBA cell will be primarily to develop linkage with selective rural clusters, involve in the planning process and to promote the requisite S&T interventions to improvise and expedite the developmental efforts in those clusters. On the other hand, a UBA cell will also be responsible for developing the competence of its working group by appropriate orientation, training and creation of appropriate ethos within the institution towards indigenous and sustainable rural development, and initiating requisite curricular modifications and other facilitating measures.</p>
		            	<p>All participating institutions will be facilitated and mentored in their activities by the respective mentoring institutions in their region.</p>
		            </div>
		        </div>
			</div>
		</div>
	);
}
