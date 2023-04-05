import React from 'react';
import './ReportActivityContainer.css';
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";
import Viewer from 'react-viewer';

export default function ReportActivityContainer({activity})
{
	const [ visible, setVisible ] = React.useState(false);
	const [imageIndex,setImage]=React.useState(0);
	return(
	<div className="report-activity">
		<div className="heading">
			<h2>{activity.activityTitle}</h2>
		</div>
		<div className="report-flex-holder">
			<div className="left-side-content">
				{(activity.activityNeed!=='') && (<div className="sub-heading">
					<p className="sub-line-heading">NEED OF THE ACTIVITY :</p>
					<p className="sub-line-paragraph">{activity.activityNeed}</p>
				</div>)}
				{(activity.activityDescription.length!==0) &&(<div className="sub-heading">
					<p className="sub-line-heading">BRIEF DESCRIPTION (NEED/ IMPACT /ACTION /PICTURE) :</p>
					{activity.activityDescription.map((description,index)=>(<p className="sub-line-paragraph" key={index}>{description}</p>))}
				</div>)}
				{(activity.activityDate!=='') &&(<div className="sub-heading">
					<p><span className="sub-line-heading">Date :</span> {activity.activityDate}</p>
				</div>)}
				{(activity.activityParticipatedCount!=='') &&(<div className="sub-heading">
					<p><span className="sub-line-heading">NO. OF STUDENTS PARTICIPATED :</span> {activity.activityParticipatedCount}</p>
				</div>)}
			</div>
			
			<div className="right-side-content">
			{
				(activity.activityReportImages.length>1)?
						(<div className="carousel-image-holder">
							<Carousel >
								{ activity.activityReportImages.map((imageDetails,index)=>{
									return (
									<CarouselItem key={index}>
										<img
										    src={imageDetails.src}
										    alt={imageDetails.altName}
										    className="carousel-slide-image"
										    title="click to view"
										    onClick={() => { setVisible(true);setImage(index); } }
										/>
									</CarouselItem>);
								})}
							</Carousel>
						</div>):
						(<div className="non-carousel-image-holder">
							<img
								src={activity.activityReportImages[0].src}
								alt={activity.activityReportImages[0].alt}
								className="non-carousel-image"
								title="click to view"
								onClick={() => { setVisible(true); setImage(0);}}
							/>
						</div>)
			}
			</div>
		</div>
		<Viewer
		  visible={visible}
		  onClose={() => { setVisible(false); } }
		  images={[activity.activityReportImages[imageIndex]]}
		  />
	</div>
	);
}
