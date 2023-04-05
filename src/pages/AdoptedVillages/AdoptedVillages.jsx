import React from "react";
import "./AdoptedVillages.css";
import BreadcrumbComponent from "../../components/BreadcrumbComponent/BreadcrumbComponent";
import VillageTableContainer from "../../components/VillageTableContainer/VillageTableContainer";
import VillageNewTableContainer from "../../components/VillageNewTableContainer/VillageNewTableContainer";
import VillageCardContainer from "../../components/VillageCardContainer/VillageCardContainer";
import PointsComponent from "../../components/PointsComponent/PointsComponent";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function AdoptedVillages({villageDetails})
{
	return (
		<div className="adopted-villages">
	  		<div className="side"></div>
		 	<div className="content">
				<BreadcrumbComponent activeLink={"Adopted Villages / "+villageDetails.villageName}></BreadcrumbComponent>
				<div className="paragraph-container">
				  <div className="village-heading">
					<h2>{villageDetails.villageName}</h2>
				  </div>
				  {
				  (villageDetails.villageMapLink!=="")&&(<iframe title={villageDetails.villageName+" village map"} src={villageDetails.villageMapLink}   allowFullScreen="" loading="lazy" className="village-map"></iframe>)
				  }
				  {
				  (villageDetails.aboutParagraph!=="")&&(<div className="paragraph-container">
				   		<div className="heading">
				   			<h2>ABOUT</h2>
				   		</div>
				   		<p>{villageDetails.aboutParagraph}</p>
				   		<p className="about-coordinates">Latitude : {villageDetails.latitude}</p>
				   		<p className="about-coordinates">Longitude : {villageDetails.longitude}</p>
				   </div>)
				   }
				  {(villageDetails.basicInformation.length>0)&&(<VillageCardContainer basicInformation={villageDetails.basicInformation}/>)}
				  <div className="heading">
				     <h2>LIST OF BASIC AMENTITIES</h2>
				  </div>
				  {
				  	villageDetails.amenitiesTables.map((table,index)=>(
				  		<VillageTableContainer villageTableDetails={table} key={index}/>
				  	))
				  }
				  {villageDetails.otherDetails.map((details, index) => (
				    <PointsComponent details={details} key={index} />
				  ))}
				  <div className="heading">
				  	<h2>Census Data of {villageDetails.villageName}</h2>
				  </div>
				  {
				  (villageDetails.censuslink!=="")&&(<div className="paragraph-container">
				  	  <p>Census Data Source : <a href={`${villageDetails.censuslink}`} target="_blank" rel="noreferrer" className="census-link"> Link <BsBoxArrowUpRight size="1.25rem" className="census-link-icon"/></a></p>
				  </div>)
				  }
				   <VillageTableContainer villageTableDetails={villageDetails.censusTableDetails}/>
				   
				   {
				   		villageDetails.censusParagraphDetails.map((para,index)=>{
				   			return(
				   				<div className="paragraph-container" key={index}>
				   					{(para.paragraphHeading.length>0)&&(
				   						<div className="heading">
										  	<h2>{para.paragraphHeading}</h2>
										  </div>
				   					)}
				   					<p>{para.paragraphDetails}</p>
				   				</div>
				   			);
				   		})
				   }
				</div>
				{
					villageDetails.censusGroupTables.map((censusTable,index)=>(
						<VillageNewTableContainer villageTableDetails={censusTable} key={index}/>
					))
				}
				
			</div>
		</div>
	);

}
