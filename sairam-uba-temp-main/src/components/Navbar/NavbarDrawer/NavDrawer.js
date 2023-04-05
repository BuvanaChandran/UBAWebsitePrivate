import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { IoArrowBackCircle } from "react-icons/io5";
import "./NavDrawer.css";

const LINK = "LINK";
const DROPDOWN = "DROPDOWN";
const LINE = "LINE";
const HEADING = "HEADING";
const EXTERNAL_LINK="EXTERNAL_LINK";

export default function NavDrawer({ closed, close }) {
    const [currSection, setCurrent] = useState(0);
    // const = useHistory();

    const resetAndClose = () => {
        setCurrent(0);
        close();
    };

    const pages = [
        [
            {
                type: LINK,
                href: "/home",
                label: "Home",
            },
            {
                type: DROPDOWN,
                label: "About",
                to: 1,
            },
            {
                type: DROPDOWN,
                label: "ISC",
                to: 2,
            },
            {
                type: DROPDOWN,
                label: "Themes",
                to: 3,
            },
            {
                type: DROPDOWN,
                label: "Adopted Villages",
                to: 4
            },
            {
                type: DROPDOWN,
                label: "Acitivities & Reports",
                to: 5
            },
            {
                type: DROPDOWN,
                label: "Projects",
                to: 6
            },
            {
                type: DROPDOWN,
                label: "Join UBA",
                to: 7
            },
            
            {
                type: LINK,
                href: "/faqs",
                label: "FAQs",
            },
        ],
        [
        	{type:LINE},
        	{
        		type:LINK,
        		href:"/about/introduction",
        		label:"Introduction"
        	},
        	{
        		type:LINK,
        		href:"/about/sponsoring-ministry",
        		label:"Sponsoring Ministry"
        	},
        	{
        		type:LINK,
        		href:"/about/coordinating-institutions",
        		label:"Coordinating Institutions"
        	},
        	{
        		type:LINK,
        		href:"/about/participating-institutions",
        		label:"Participating Institutions"
        	},
        	{
        		type:LINK,
        		href:"/about/forms-page",
        		label:"List Of Forms"
        	},
        	
        	
        ],
        [
            { type: LINE },
            {
                type: LINK,
                href: "/isc",
                label: "Institution Steering Committee",
            },
            { type: LINE },
            {
                type: HEADING,
                label: "Institution Login",
            },
            {
                type: EXTERNAL_LINK,
                label: "SEC",
                href: "https://unnatbharatabhiyan.gov.in:8443/reporting_portal",
            },
            {
                type: EXTERNAL_LINK,
                label: "SIT",
                href: "https://unnatbharatabhiyan.gov.in:8443/reporting_portal",
            },
        ],
        [
            { type: LINE },
            {
                type: LINK,
                href: "/themes/organic-farming",
                label: "Organic Farming",
            },
            {
                type: LINK,
                href: "/themes/water-management",
                label: "Water Management",
            },
            {
            	type:LINK,
            	href:"/themes/energy-sources",
            	label:"Energy Sources",
            },
            {
            	type:LINK,
            	href:"/themes/artisans-industries-and-livelihood",
            	label:"Artisans, Industries & Livelihood",
            },
            {
            	type:LINK,
            	href:"/themes/basic-amenities",
            	label:"Basic Amenities",
            },
            {
            	type:LINK,
            	href:"/themes/convergence",
            	label:"Convergence",
            },
        ],
        [
            { type: LINE },
            {
                type: HEADING,
                label: "SRI SAI RAM ENGINEERING COLLEGE",
            },
            {
                type: LINK,
                href: "/adopted-villages/puducheri",
                label: "Puducheri",
            },
            {
                type: LINK,
                href: "/adopted-villages/somangalam",
                label: "Somangalam",
            },
            {
                type: LINK,
                href: "/adopted-villages/naduveerappattu",
                label: "Naduveerappattu",
            },
            {
                type: LINK,
                href: "/adopted-villages/nandambakkam",
                label: "Nandambakkam",
            },
            {
                type: LINK,
                href: "/adopted-villages/varadharajapuram",
                label: "Varadharajapuram",
            },
            { type: LINE },
            {
                type: HEADING,
                label: "SRI SAI RAM INSTITUTE OF TECHNOLOGY",
            },
            {
                type: LINK,
                href: "/adopted-villages/pazhanthandalam",
                label: "Pazhanthandalam",
            },
            {
                type: LINK,
                href: "/adopted-villages/nallur",
                label: "Nallur",
            },
            {
                type: LINK,
                href: "/adopted-villages/erumaiyur",
                label: "Erumaiyur",
            },
            {
                type: LINK,
                href: "/adopted-villages/thirumudivakkam",
                label: "Thirumudivakkam",
            },
            {
                type: LINK,
                href: "/adopted-villages/puduppair",
                label: "Puduppair",
            },
        ],
        [
            { type: LINE },
            {
                type: HEADING,
                label: "SRI SAI RAM ENGINEERING COLLEGE",
            },
            {
                type: LINK,
                href: "/events/sec",
                label: "Events",
            },
            {
                type: LINK,
                href: "/sec/reports",
                label: "Reports",
            },
            { type: LINE },
            {
                type: HEADING,
                label: "SRI SAI RAM INSTITUTE OF TECHNOLOGY",
            },
            {
                type: LINK,
                href: "/events/sec",
                label: "Events",
            },
            {
                type: LINK,
                href: "/sit/reports",
                label: "Reports",
            },
        ],
        [
            { type: LINE },
            {
                type: HEADING,
                label: "SRI SAI RAM ENGINEERING COLLEGE",
            },
            {
                type: LINK,
                href: "/sec/projects/project-guides",
                label: "Project Guides",
            },
            {
                type: LINK,
                href: "/sec/projects/projects-submitted",
                label: "Submitted",
            },
            {
                type: LINK,
                href: "/sec/projects/projects-sanctioned",
                label: "Sanctioned",
            },
            {
                type: LINK,
                href: "/sec/projects/projects-in-progress",
                label: "In Progress",
            },
            {
                type: LINK,
                href: "/sec/projects/projects-completed",
                label: "Completed",
            },
            { type: LINE },
            {
                type: HEADING,
                label: "SRI SAI RAM INSTITUTE OF TECHNOLOGY",
            },
            {
                type: LINK,
                href: "/sit/projects/project-guides",
                label: "Project Guides",
            },
            {
                type: LINK,
                href: "/sit/projects/projects-submitted",
                label: "Submitted",
            },
            {
                type: LINK,
                href: "/sit/projects/projects-sanctioned",
                label: "Sanctioned",
            },
            {
                type: LINK,
                href: "/sit/projects/projects-in-progress",
                label: "In Progress",
            },
            {
                type: LINK,
                href: "/sit/projects/projects-completed",
                label: "Completed",
            },
        ],
        [
        	{
        		type:LINK,
            	href:"/join-uba/sec",
            	label:"SRI SAI RAM ENGINEERING COLLEGE",
        	},
        	{
        		type:LINK,
            	href:"/join-uba/sit",
            	label:"SRI SAI RAM INSTITUTE OF TECHNOLOGY",
        	}
        	
        ]
    ];

    return (
        <div id="nav-drawer-container" className={closed ? "invisible" : ""}>
            <div id="nav-drawer" className={closed ? "translate-left" : ""}>
                <div className="header">
                    <h3>UNNAT BHARAT ABHIYAN</h3>
                </div>
                <div className="body">
                    {pages.map((page, i) => (
                        <ul
                            className={`${i < currSection ? "translate-left" : i > currSection ? "translate-right" : ""} ${
                                i === currSection && !closed ? "visible" : "invisible"
                            }`}
                            key={i}
                        >
                            {i !== 0 && (
                                <li>
                                    <div className="nav-drawer-link" onClick={setCurrent.bind(this, 0)}>
                                        <div style={{ alignItems: "center", display: "flex" }}>
                                            <IoArrowBackCircle size="1.25rem" style={{ marginRight: "0.5rem" }} />
                                            <span>Back</span>
                                        </div>
                                    </div>
                                </li>
                            )}
                            {page.map((item, j) => {
                                switch (item.type) {
                                    case LINK:
                                        return (
                                            <li key={j}>
                                                <Link onClick={resetAndClose} to={item.href}>
                                                    <div className="nav-drawer-link">{item.label}</div>
                                                </Link>
                                            </li>
                                        );
                                    case DROPDOWN:
                                        return (
                                            <li key={j}>
                                                <div className="nav-drawer-link" onClick={setCurrent.bind(this, item.to)}>
                                                    <span>{item.label}</span>
                                                    <IoMdArrowDropright size="1.25rem" />
                                                </div>
                                            </li>
                                        );
                                    case LINE:
                                        return (
                                            <li key={j}>
                                                <div className="nav-line" />
                                            </li>
                                        );
                                    case HEADING:
                                        return (
                                            <li className="nav-drawer-heading" key={j}>
                                                <div>
                                                    <h3>{item.label}</h3>
                                                </div>
                                            </li>
                                        );
                                    case EXTERNAL_LINK:
                                    	return(
                                    		 <li key={j}>
                                                <a onClick={resetAndClose} href={item.href} target="_blank" rel="noreferrer">
                                                    <div className="nav-drawer-link">{item.label}</div>
                                                </a>
                                            </li>
                                    	);
                                    default:
                                        return <li key={j}></li>;
                                }
                            })}
                        </ul>
                    ))}
                </div>
                <h3 onClick={resetAndClose}>x</h3>
            </div>
        </div>
    );
}
