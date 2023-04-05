import React from 'react';
import './FormsPage.css';
import BreadcrumbComponent from "../../../components/BreadcrumbComponent/BreadcrumbComponent";
import {BsFileEarmarkPdfFill} from "react-icons/bs";
export default function FormsPage()
{
	return(
		<div className="forms-page">
			<div className="side"></div>
			<div className="content">
				 <BreadcrumbComponent activeLink="About / List of Forms"></BreadcrumbComponent>
				 <div className="sub-content">
				 	<ul className="form-ul">
				 		<li><a href="https://unnatbharatabhiyan.gov.in:8443/app/webroot/files/uba-forms/GPDP_report_format.pdf" target="_blank" rel="noreferrer" className="form-link"><span className="link-span">GPDP Report Format</span> <BsFileEarmarkPdfFill size="1.25rem" className="form-icon"/></a></li>
				 		<li><a href="https://unnatbharatabhiyan.gov.in:8443/app/webroot/files/uba-forms/sample_HOI_Letter.pdf" target="_blank" rel="noreferrer" className="form-link"><span className="link-span">Sample HOI Letter</span> <BsFileEarmarkPdfFill size="1.25rem" className="form-icon"/></a></li>
				 		<li><a href="https://unnatbharatabhiyan.gov.in:8443/app/webroot/files/uba-forms/UBA_Household_Survey_Form.pdf" target="_blank" rel="noreferrer" className="form-link"><span className="link-span">UBA Household Survey Form</span> <BsFileEarmarkPdfFill size="1.25rem" className="form-icon"/></a></li>
				 		<li><a href="https://unnatbharatabhiyan.gov.in:8443/app/webroot/files/uba-forms/UBA_mandate.pdf" target="_blank" rel="noreferrer" className="form-link"><span className="link-span">UBA Mandate Forms</span> <BsFileEarmarkPdfFill size="1.25rem" className="form-icon"/></a></li>
				 		<li><a href="https://unnatbharatabhiyan.gov.in:8443/app/webroot/files/uba-forms/UBA_Monthly_Progress_Report.pdf" target="_blank" rel="noreferrer" className="form-link"><span className="link-span">UBA Monthly Progress Report</span> <BsFileEarmarkPdfFill size="1.25rem" className="form-icon"/></a></li>
				 		<li><a href="https://unnatbharatabhiyan.gov.in:8443/app/webroot/files/uba-forms/UBA_Village_Survey_Form.pdf" target="_blank" rel="noreferrer" className="form-link"><span className="link-span">UBA Village Survey Form</span> <BsFileEarmarkPdfFill size="1.25rem" className="form-icon"/></a></li>
				 		<li><a href="https://unnatbharatabhiyan.gov.in:8443/app/webroot/files/uba-forms2/Utilization%20Certificate%20Form%20GFR%2012A.pdf" target="_blank" rel="noreferrer" className="form-link"><span className="link-span">Utilization Certificate Form</span> <BsFileEarmarkPdfFill size="1.25rem" className="form-icon"/></a></li>
				 	</ul>
				 </div>
			</div>
		</div>
	);
}
