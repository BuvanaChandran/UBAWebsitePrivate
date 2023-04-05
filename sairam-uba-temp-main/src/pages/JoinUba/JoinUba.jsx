import React from "react";
import "./JoinUba.css";
import BreadcrumbComponent from "../../components/BreadcrumbComponent/BreadcrumbComponent";
import { AiOutlineForm } from "react-icons/ai";
export default function JoinUba({collegeDetails}) {
  return (
    <div className="join-uba-sec">
      <div className="side"></div>
      <div className="content" id="join-uba-sec">
        <BreadcrumbComponent activeLink={collegeDetails.breadCrumb}></BreadcrumbComponent>
          <div className="paragraph-container">
            <div className="heading">
              <h2>Join uba - {collegeDetails.collegeName}</h2>
            </div>
            <p>
              <span className="name-highlight">UNNAT BHARAT ABHIYAN (UBA) </span>
               is a Ministry of Human Resource Development
              <span className="name-highlight"> (MHRD),</span> Government of
              India&apos;s flagship Program approved by All India Council for
              Technical Education (AICTE).
            </p>
            <p>
              The aim UBA club is a Transformational change in rural development
              process by connecting the institutions of Higher education with
              local communities through appropriate technologies.
            </p>
            <p>
              Our{" "}
              <span className="name-highlight">
                {collegeDetails.collegeName}
              </span>{" "}
              is a{" "}
              <span className="name-highlight">
                Participating Institute (PI)
              </span>{" "}
              of <span className="name-highlight">UBA</span> since 2017,and our
              college UBA Club have adopted 5 villages near by our institution
              and consistently involved in developmental activities with the
              students of UBA for the past 3 years.
            </p>
            <p>
              We would like to select our new batch of{" "}
              <span className="name-highlight">First Year students</span> from
              all departments now for UBA activities. The selected students will
              get opportunity to work under{" "}
              <span className="name-highlight">SairamUBA</span> as a team and
              they should be the member of UBA Cell for{" "}
              <span className="name-highlight">two</span> years. UBA will
              conduct programs with the approval of the principal. The students
              will get the opportunities to work in summer Internships like
              swachh bharat internship by Govt of India and towards institution
              SDG goals.
            </p>
            <p>
              All the selected and actively participating students in the
              activities of SairamUBA will get an institutional certificate
              authorized by regional coordination institute UBA, New Delhi with
              Govt.of India emblem. The selected students may be informed over
              mail or contact number.
            </p>
            <p>
              Interested students can{" "}
              <span className="name-highlight">enrol (Register)</span> their
              name and details through our college official google form link
              using college mail id.
            </p>
            {(collegeDetails.formLink!=="")&&(<p>
              <span className="name-highlight">Registration Link : </span>
              <a
                href={collegeDetails.formLink}
                target="_blank"
                rel="noreferrer"
                className="form-registeration-link"
              >
                <span className="link-span">registration link</span>
                <AiOutlineForm size="1.35rem" className="registration-icon"/>
              </a>
            </p>)
            }
            <p>Looking forward to your enrollment.</p>
            <div className="contact-details">
              <div className="heading">
		          <h2>
		            FOR ANY DETAILS CONTACT
		          </h2>
              </div>
              {collegeDetails.contactDetails.map((contact,index)=>{
              	return(
              		<div key={index}>
						
							<h5 className="text-color-heading">{contact.personName}</h5>
						
						{
							contact.designation.map((designationDetails,index)=>(
								<p key={index}>{designationDetails}</p>
							))
						}
						  <p className="join-uba-text-holder">
							<img src="/images/footer-images/call-logo.webp" alt="call-logo img" className="join-uba-logo"/><span className="join-uba-span">Phone :</span> <a href={"tel:"+contact.phone} className="join-uba-anchor">{contact.phone}</a>
						  </p>

						  <p className="join-uba-text-holder">
						  	<img src="/images/footer-images/gmail-logo.webp" alt="gmail-logo img" className="join-uba-logo"/><span className="join-uba-span">Mail :</span>
							<a href={"mailto:"+contact.mail} className="join-uba-anchor">
							  {contact.mail}
							</a>
						</p>
              		</div>
              	);
              })}
              
            </div>
          </div>
      </div>
    </div>
  );
}
