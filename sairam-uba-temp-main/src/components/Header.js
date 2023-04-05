import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <div id="nav-container">
            <div id="nav-center">
             <a href="https://sairamgroup.in/" title="visit sairam website" target="_blank" rel="noreferrer">	
		            <div id="logo">
		                <div>
		                    <img src="/images/header-images/sairam-logo.webp" height="70px" className="sairam-logo-img" alt="sairam logo" />
		                </div>
		                <div>
		                    <img src="/images/header-images/chairman-logo.webp" height="70px" className="chairman-logo-img"  alt="chairman logo" />
		                </div>
		           	 </div>
		        </a>
                <div>
                    <h1>UNNAT BHARAT ABHIYAN</h1>
                </div>
            </div>
            <div id="emblem-container">
            	<a href="https://unnatbharatabhiyan.gov.in:8443/new-website/" target="_blank" rel="noreferrer">
		            <div title="visit uba website">
		                <img src="/images/header-images/uba-logo.webp" height="100px" className="uba-logo-img"  alt="uba logo" />
		            </div>
                </a>
                <div>
                    <img src="/images/header-images/emblem.webp" height="100px" className="emblem-logo-img"  alt="chairman logo" />
                </div>
            </div>
        </div>
    );
}
