import React, { useState } from "react";
import "./Navbar.css";
import NavItem from "./NavItem";
import NavDropdown from "./NavDropdown";
import NavbarDropdownItem from "./NavbarDropdownItem";
import NavSection from "./NavSection/NavSection";
import NavHeading from "./NavSection/NavHeading";
import NavList from "./NavSection/NavList";
import NavListItem from "./NavSection/NavListItem";
import NavLink from "./NavSection/NavLink";
import { HiMenu } from "react-icons/hi";
import NavDrawer from "./NavbarDrawer/NavDrawer";

export default function Navbar({ fixed }) {
  const [navbarActive, setNavbarActive] = useState(false);

  return (
    <>
      <nav id="nav-bar" className={fixed ? "fixed" : ""}>
        <div id="dt-nav">
          <NavItem label="Home" to="/" />
          <NavItem label="About" dropdown>
            <NavDropdown>
              <NavbarDropdownItem to="/about/introduction" type="internal-link">
                Introduction
              </NavbarDropdownItem>
              <NavbarDropdownItem
                to="/about/sponsoring-ministry"
                type="internal-link"
              >
                Sponsoring ministry
              </NavbarDropdownItem>
              <NavbarDropdownItem
                to="/about/coordinating-institutions"
                type="internal-link"
              >
                Coordinating institutions
              </NavbarDropdownItem>
              <NavbarDropdownItem
                to="/about/participating-institutions"
                type="internal-link"
              >
                Participating institutions
              </NavbarDropdownItem>
              <NavbarDropdownItem to="/about/forms-page" type="internal-link">
                List of forms
              </NavbarDropdownItem>
            </NavDropdown>
          </NavItem>
          <NavItem label="ISC" dropdown multiple>
            <NavDropdown>
              <NavSection single>
                <NavLink label="Institution Steering Committee" to="/isc" />
              </NavSection>
              <NavSection>
                <NavHeading>Institution login</NavHeading>
                <NavList>
                  <NavListItem
                    to="https://unnatbharatabhiyan.gov.in:8443/reporting_portal"
                    type="external-link"
                  >
                    SEC
                  </NavListItem>
                  <NavListItem
                    to="https://unnatbharatabhiyan.gov.in:8443/reporting_portal"
                    type="external-link"
                  >
                    SIT
                  </NavListItem>
                </NavList>
              </NavSection>
            </NavDropdown>
          </NavItem>
          <NavItem label="Themes" dropdown>
            <NavDropdown>
              <NavbarDropdownItem
                to="/themes/organic-farming"
                type="internal-link"
              >
                Organic Farming
              </NavbarDropdownItem>
              <NavbarDropdownItem
                to="/themes/water-management"
                type="internal-link"
              >
                Water Management
              </NavbarDropdownItem>
              <NavbarDropdownItem
                to="/themes/energy-sources"
                type="internal-link"
              >
                Energy Sources
              </NavbarDropdownItem>
              <NavbarDropdownItem
                to="/themes/artisans-industries-and-livelihood"
                type="internal-link"
              >
                Artisans, Industries &amp; Livelihood
              </NavbarDropdownItem>
              <NavbarDropdownItem
                to="/themes/basic-amenities"
                type="internal-link"
              >
                Basic Amenities
              </NavbarDropdownItem>
              <NavbarDropdownItem to="/themes/convergence" type="internal-link">
                Convergence
              </NavbarDropdownItem>
            </NavDropdown>
          </NavItem>
          <NavItem label="Adopted Villages" dropdown multiple>
            <NavDropdown>
              <NavSection>
                <NavHeading>SRI SAI RAM ENGINEERING COLLEGE</NavHeading>
                <NavList>
                  <NavListItem to="/adopted-villages/puducheri" type="internal-link">Puducheri</NavListItem>
                  <NavListItem to="/adopted-villages/somangalam" type="internal-link">Somangalam</NavListItem>
                  <NavListItem to="/adopted-villages/naduveerappattu" type="internal-link">Naduveerappattu</NavListItem>
                  <NavListItem to="/adopted-villages/nandambakkam" type="internal-link">Nandambakkam</NavListItem>
                  <NavListItem to="/adopted-villages/varadharajapuram" type="internal-link">Varadharajapuram</NavListItem>
                </NavList>
              </NavSection>
              <NavSection>
                <NavHeading>SRI SAI RAM INSTITUTE OF TECHNOLOGY</NavHeading>
                <NavList>
                  <NavListItem to="/adopted-villages/pazhanthandalam" type="internal-link">Pazhanthandalam</NavListItem>
                  <NavListItem to="/adopted-villages/nallur" type="internal-link">Nallur</NavListItem>
                  <NavListItem to="/adopted-villages/erumaiyur" type="internal-link">Erumaiyur</NavListItem>
                  <NavListItem to="/adopted-villages/thirumudivakkam" type="internal-link">Thirumudivakkam</NavListItem>
                  <NavListItem to="/adopted-villages/puduppair" type="internal-link">Puduppair</NavListItem>
                </NavList>
              </NavSection>
            </NavDropdown>
          </NavItem>
          <NavItem label="Acitivities &amp; Reports" dropdown multiple>
            <NavDropdown>
              <NavSection>
                <NavHeading>SRI SAI RAM ENGINEERING COLLEGE</NavHeading>
                <NavList>
                  <NavListItem to="/events/sec" type="internal-link">
                    Events
                  </NavListItem>
                  <NavListItem to="/sec/reports" type="internal-link">
                    Reports
                  </NavListItem>
                </NavList>
              </NavSection>
              <NavSection>
                <NavHeading>SRI SAI RAM INSTITUTE OF TECHNOLOGY</NavHeading>
                <NavList>
                  <NavListItem to="/events/sit" type="internal-link">
                    Events
                  </NavListItem>
                  <NavListItem to="/sit/reports" type="internal-link">
                    Reports
                  </NavListItem>
                </NavList>
              </NavSection>
            </NavDropdown>
          </NavItem>
          <NavItem label="Projects" dropdown multiple>
            <NavDropdown>
              <NavSection>
                <NavHeading>SRI SAI RAM ENGINEERING COLLEGE</NavHeading>
                <NavList>
                  <NavListItem
                    to="/sec/projects/project-guides"
                    type="internal-link"
                  >
                    Project Guides
                  </NavListItem>
                  <NavListItem
                    to="/sec/projects/projects-submitted"
                    type="internal-link"
                  >
                    Submitted
                  </NavListItem>
                  <NavListItem
                    to="/sec/projects/projects-sanctioned"
                    type="internal-link"
                  >
                    Sanctioned
                  </NavListItem>
                  <NavListItem
                    to="/sec/projects/projects-in-progress"
                    type="internal-link"
                  >
                    In Progress
                  </NavListItem>
                  <NavListItem
                    to="/sec/projects/projects-completed"
                    type="internal-link"
                  >
                    Completed
                  </NavListItem>
                </NavList>
              </NavSection>
              <NavSection>
                <NavHeading>SRI SAI RAM INSTITUTE OF TECHNOLOGY</NavHeading>
                <NavList>
                  <NavListItem
                    to="/sit/projects/project-guides"
                    type="internal-link"
                  >
                    Project Guides
                  </NavListItem>
                  <NavListItem
                    to="/sit/projects/projects-submitted"
                    type="internal-link"
                  >
                    Submitted
                  </NavListItem>
                  <NavListItem
                    to="/sit/projects/projects-sanctioned"
                    type="internal-link"
                  >
                    Sanctioned
                  </NavListItem>
                  <NavListItem
                    to="/sit/projects/projects-in-progress"
                    type="internal-link"
                  >
                    In Progress
                  </NavListItem>
                  <NavListItem
                    to="/sit/projects/projects-completed"
                    type="internal-link"
                  >
                    Completed
                  </NavListItem>
                </NavList>
              </NavSection>
            </NavDropdown>
          </NavItem>
          <NavItem label="Join UBA" dropdown>
            <NavDropdown>
              <NavbarDropdownItem to="/join-uba/sec" type="internal-link">
                SRI SAI RAM
                <br /> ENGINEERING COLLEGE
              </NavbarDropdownItem>
              <NavbarDropdownItem to="/join-uba/sit" type="internal-link">
                SRI SAI RAM INSTITUTE
                <br /> OF TECHNOLOGY
              </NavbarDropdownItem>
            </NavDropdown>
          </NavItem>
          <NavItem label="FAQs" to="/faqs" />
        </div>
        <div id="mb-nav">
          <HiMenu
            size="35px"
            color="white"
            onClick={setNavbarActive.bind(this, true)}
          />
          {fixed && <h3>UNNAT BHARAT ABHIYAN</h3>}
        </div>
      </nav>
      <NavDrawer
        closed={!navbarActive}
        close={setNavbarActive.bind(this, false)}
      />
    </>
  );
}
