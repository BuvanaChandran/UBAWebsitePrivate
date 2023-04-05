import React from "react";
import "./Footer.css";
import {FaMapMarkerAlt} from 'react-icons/fa';
export default function FooterContainer(){
    return(
     <div className="footer-container">
     	<div className="footer-top">
		    <div className="footer-content"> 
				<div className="heading">            
				    <h2 className="contact-us-heading"> CONTACT</h2>
				</div>
				    
				    <address className="address-college">
				    
				    <h5 className="address-college-name"><a href="https://goo.gl/maps/aSenrPuDBUzB9Kfb6" rel="noreferrer" target="_blank" className="address-map-link" title="College Map link"><FaMapMarkerAlt size="1.25rem" className="address-map-icon"/>SRI SAI RAM ENGINEERING COLLEGE</a></h5>
				    Sai Leo Nagar, West Tambaram,<br/>
				    Chennai - 600 044,<br/>
				    Tamil Nadu. India
				    </address>
				    
				    <table className="college-details">
				    	<tbody>
							<tr>
								<td className="college-info-flex"><img src="/images/footer-images/gmail-logo.webp" alt="gmail-logo img" className="table-footer-logo" />E-MAIL</td>
								<td>:</td>
								<td><a href="mailto:sairam@sairam.edu.in" className="address-map-link">sairam@sairam.edu.in</a>, <a href="mailto:uba@sairam.edu.in" className="address-map-link">uba@sairam.edu.in</a></td>
							</tr>
							<tr>
								<td className="college-info-flex"> <img src="/images/footer-images/landline-logo.webp" alt="landline-logo img" className="table-footer-logo" />LANDLINE</td>
								<td>:</td>
								<td><a href="tel:04422512222" className="address-map-link">044 - 2251 2222</a></td>
							</tr>
						</tbody>
				    </table>
			</div>
			<div className="footer-content-image">
				<img src="/images/footer-images/gandhi-photo.webp" alt="gandhi img" />
			</div>
			<div className="footer_social">
				  <a rel="noreferrer" target="_blank" href="https://www.facebook.com/SairamUBA/">
					<div className="footer_social_icon">
					  <img src="/images/footer-images/facebook-logo.webp" alt="facebook-logo img" className="footer-facebook-icon" title="Facebook page"/>
					</div>
				</a>
				<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/sairam-uba-4296721b3/">
					<div className="footer_social_icon">
					  <img src="/images/footer-images/linkedin-logo.webp" alt="linkedin-logo img" className="footer-linkedin-icon" title="Linkedin page"/>
					</div>
				</a>
				<a rel="noreferrer" target="_blank" href="https://www.instagram.com/sairam.uba/?igshid=p4q0q">
					<div className="footer_social_icon">
					  <img src="/images/footer-images/instagram-logo.webp" alt="instagram-logo img" className="footer-instagram-icon" title="Instagram page"/>
					</div>
				</a>
				<a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCejM5ohr3QocEdXgmHhPjRQ">
					<div className="footer_social_icon">
					  <img src="/images/footer-images/youtube-logo.webp" alt="youtube-logo img" className="footer-youtube-icon" title="Youtube channel"/>
					</div>
				</a>
		   </div>
		</div>
		
    </div>);
}
