import React from "react";
import "./EventListing.css";
import EventListingComponent from "../../components/EventListingComponent/EventListingComponent";
import BreadcrumbComponent from "../../components/BreadcrumbComponent/BreadcrumbComponent";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
export default function EventListing({ events ,college}) {
  return (
  	<div className="events-listing-page">
  		<div className="side"></div>
	 	<div className="content">
			<BreadcrumbComponent activeLink={college+" / Events"}></BreadcrumbComponent>
			{
			(events.length===0)?
			(<ComingSoon/>):
			(<>
			   <div className="heading">
		 			<h2>{ (college==="SEC")?("SRI SAIRAM ENGINEERING COLLEGE"):("SRI SAI RAM INSTITUTE OF TECHNOLOGY")} - EVENTS</h2>
		 		</div>
		 		<div className="event-listing-holder">
				  {events.map((event, index) => ( <EventListingComponent event={event} key={index} />))}
				</div>
				</>
				)
			}
		</div>
	</div>
  );
}
