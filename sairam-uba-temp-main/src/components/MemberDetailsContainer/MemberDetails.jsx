import React from "react";
import "./MemberDetails.css";
import ShadowContainer from "../ShadowContainer/ShadowContainer";

export default function MemberDetails({name,imageSrc,designation,role})
{
	return(
		<div className="member-details-card">
			<ShadowContainer>
				<div className="data-holder">
					<div className="user-image">
						<img src={imageSrc} alt="user-img"/>
					</div>
					<div className="user-details">
						<h5 className="user-details-name">{name}</h5>
						<h6 className="user-details-designation">{designation}</h6>
						<h6 className="user-details-role">{role}</h6>
					</div>
				</div>
			</ShadowContainer>
		</div>
	);
}
