import React from "react";
import "./NewsEventPage.css";
import BreadcrumbComponent from "../../components/BreadcrumbComponent/BreadcrumbComponent";
import ShadowContainer from "../../components/ShadowContainer/ShadowContainer";
import Viewer from "react-viewer";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";

/*
	SEC - news & events json - file structure  | SIT - news & events json - file structure
		
		* type 
		* title
		* description
		* coordinator [
			{
				name
				email 
				designation
				phoneNo
			}
		]
		* postedDate
		* image
		* venue []
		* eventDate
		* register
		
	news - news & events json - file structure 
	
		* type 
		* title
		* description
		* postedDate
		* image
		
*/

export default function NewsEvent({ eventDetail }) {
  const [visible, setVisible] = React.useState(false);
  const [imageIndex,setImage]=React.useState(0);
  return (
    <>
      <div className="Event-page">
        <div className="side"></div>
        <div className="content">
          <BreadcrumbComponent activeLink={`${eventDetail.breadCrumbLink} / ${eventDetail.title}`}></BreadcrumbComponent>
          <div className="Event-template">
            <div className="Event-heading">
              <h2>{eventDetail.title}</h2>
            </div>
            
            {
				(eventDetail.images.length>1)?
						(
							<Carousel className={`event-carousel ${eventDetail.images[0].type}`}>
								{ eventDetail.images.map((imageDetails,index)=>{
									return (
									<CarouselItem key={index}>
										<img
										    src={imageDetails.src}
										    alt={eventDetail.title}
										    className={`Event-img ${eventDetail.images[0].type}`}
										    title="click to view"
										    onClick={() => { setVisible(true);setImage(index); } }
										/>
									</CarouselItem>);
								})}
							</Carousel>
						):
						(<img
								src={eventDetail.images[0].src}
								alt={eventDetail.title}
								className={`Event-img ${eventDetail.images[0].type}`}
								title="click to view"
								onClick={() => { setVisible(true); setImage(0);}}
							/>
						)
			}
            <div className="Event-postedDate">Posted on {eventDetail.postedDate}</div>
            {eventDetail.hasOwnProperty("description") && eventDetail.description !== "" ? (
              <div className="Event-description">
                <h2 className="heading">Description</h2>
                <p>{eventDetail.description}</p>
              </div>
            ) : (
              <></>
            )}
            {eventDetail.hasOwnProperty("eventDate") && eventDetail.coordinator.length !== 0 ? (
              <div className="Event-date">
                <h2 className="heading">Event Date & Time</h2>
                <h4>
                  {eventDetail.eventDate.date} & {eventDetail.eventDate.time}
                </h4>
              </div>
            ) : (
              <></>
            )}
            {eventDetail.hasOwnProperty("coordinator") && eventDetail.coordinator.length !== 0 ? (
              <div className="Event-coordinators">
                <h2 className="heading">Coordinators</h2>
                <div className="Event-coordinators-container">
                  {eventDetail.coordinator.map((coordinator, index) => {
                    return (
                      <ShadowContainer key={index}>
                        {coordinator.hasOwnProperty("name") ? <h5>{coordinator.name}</h5> : <></>}
                        {coordinator.hasOwnProperty("designation") ? <h6>{coordinator.designation}</h6> : <></>}
                        {coordinator.hasOwnProperty("email") ? (
                          <h6>
                            <a href={`mailto:${coordinator.email}`}>{coordinator.email}</a>
                          </h6>
                        ) : (
                          <></>
                        )}
                        {coordinator.hasOwnProperty("phoneNo") ? (
                          <h6>
                            <a href={`tel:${coordinator.phone}`}>{coordinator.phoneNo}</a>
                          </h6>
                        ) : (
                          <></>
                        )}
                      </ShadowContainer>
                    );
                  })}
                </div>
              </div>
            ) : (
              <></>
            )}
            {eventDetail.hasOwnProperty("venue") && eventDetail.venue.length !== 0 ? (
              <div className="Event-venue">
                <h2 className="heading">Venue</h2>
                <div>
                  {eventDetail.venue.map((venue, index) => {
                    return <p key={index}>{venue}</p>;
                  })}
                </div>
              </div>
            ) : (
              <></>
            )}
            {eventDetail.hasOwnProperty("register") && eventDetail.register !== "" ? (
              <div className="Event-link-container">
                <a className="Event-link" href={eventDetail.register}>
                  Register
                </a>
              </div>
            ) : (
              <></>
            )}
          </div>
          <Viewer
            visible={visible}
            onClose={() => {
              setVisible(false);
            }}
            images={[{ src: eventDetail.images[imageIndex].src, alt: eventDetail.title }]}
          />
        </div>
      </div>
    </>
  );
}
