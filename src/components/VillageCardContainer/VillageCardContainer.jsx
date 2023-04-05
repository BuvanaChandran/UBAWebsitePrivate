import React from 'react';
import "./VillageCardContainer.css";

export default function VillageCardContainer({basicInformation})
{
	
	return(
		<div className="village-card-container">
			<div className="village-card-container-heading">
				<h4>Basic information</h4>
			</div>
			<div className="village-card-holder">
				<div className="card-holder-left">
				{
				basicInformation.slice(0,basicInformation.length/2+2).map((details,index)=>{
				   if(details.contentTitle!=="" && details.contentValue.length>0)
						return(
							<div className="village-card-content" key={index}>
								<div className="content-title">{details.contentTitle}</div>
								<div className="content-splitter">:</div>
								<div className="content-value">{ details.contentValue.map((value,index)=>
								(<p key={index} className="village-card-para">{value}<br/></p>))}
								</div>
							</div>
						);
				  else
				  	return (<div key={index}></div>);
				})
				}
				</div>
				<div className="card-center-line">
				</div>
				<div className="card-holder-right">
				{
				basicInformation.slice(basicInformation.length/2+2).map((details,index)=>{
				   if(details.contentTitle!=="" && details.contentValue.length>0)
						return(
							<div className="village-card-content" key={index}>
								<div className="content-title">{details.contentTitle}</div>
								<div className="content-splitter">:</div>
								<div className="content-value">{ details.contentValue.map((value,index)=>
								(<p key={index} className="village-card-para">{value}<br/></p>))}
								</div>
							</div>
						);
				  else
				  	return (<div key={index}></div>);
				})
				}
				</div>
			</div>
		</div>
	);
}
