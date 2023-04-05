import React from 'react';
import "./VillageNewTableContainer.css";
export default function VillageNewTableContainer({villageTableDetails})
{

	return(
	<div className="village-new-table-container">
		<div className="heading">
			<h2>{villageTableDetails.heading}</h2>
		</div>
		{(villageTableDetails.tableBody.length>0)&&
		(<div className="village-new-table-details-container">
            <table className="village-new-table">
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
