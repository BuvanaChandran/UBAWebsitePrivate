import React from 'react';
import {FaStar} from "react-icons/fa";
import "./VillageTableContainer.css";
export default function VillageTableContainer({villageTableDetails})
{

	return(
	<div className="village-table-container">
		{(villageTableDetails.tableParagraph!=="")&&(<p className="village-paragraph"> <FaStar className="village-paragraph-icon"/> {villageTableDetails.tableParagraph}</p>)}
		{(villageTableDetails.tableBody.length>0)&&
		(<div className="village-table-details-container">
            <table className="village-table">
                <thead>
                    <tr>
                      {
		                  villageTableDetails.tableHead.map((heading,index)=>(
		                  	<th key={index}>{heading}</th>
		                  ))
                      }
                    </tr>
                </thead>
                <tbody>
                	{
                		villageTableDetails.tableBody.map((tableRow,index)=>{
                			return(
                				<tr key={index}>
                					{
                					tableRow.map((columnDetails,index)=>(
                						<td key={index}>{columnDetails}</td>
                					))
                					}
                				</tr>
                			);
                		})
                	}
                </tbody>
           </table>
       </div>)
       }
	</div>
	);
}
