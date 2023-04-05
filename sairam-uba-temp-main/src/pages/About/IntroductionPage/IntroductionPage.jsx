import React from "react";
import "./IntroductionPage.css";
import BreadcrumbComponent from "../../../components/BreadcrumbComponent/BreadcrumbComponent";
import { Link } from "react-router-dom";

export default function IntroductionPage() {
  return (
    <div className="introduction-page">
      <div className="side"></div>
      <div className="content">
        <BreadcrumbComponent activeLink="About / Introduction"></BreadcrumbComponent>
        <div className="sub-content">
          <div className="paragraph-container">
            <div className="heading">
              <h2 id="who-join-uba">BACKGROUND AND NEED</h2>
            </div>
            <p>
              As foreseen by Gandhi Ji in his seminal work, ‘Hind Swaraj’, the
              western developmental paradigm, based on centralized technologies
              and urbanization, has given rise to serious problems like
              increasing inequity (leading to crime and violence), and climate
              change due to rapid ecological degradation. To ameliorate these
              problems, it is necessary to promote development of rural areas in
              tune with Gandhian vision of self-sufficient ‘village republics’,
              based on local resources and using decentralized, eco-friendly
              technologies so that the basic needs of food, clothing, shelter,
              sanitation, health care, energy, livelihood, transportation, and
              education are locally met. This should be the vision of holistic
              development of villages. Presently, 70% of the population in India
              lives in rural areas engaged in agrarian economy with agriculture
              and allied sector employing 51% of the total work-force but
              accounting for only 17% of the country’s GDP. There are huge
              developmental disconnects between the rural and urban sectors such
              as inequity in health, education, incomes and basic amenities as
              well as employment opportunities - all causing great discontent
              and large-scale migration to urban areas. The imperatives of
              sustainable development which are being felt more and more acutely
              all over the world also demand eco-friendly development of the
              villages and creation of appropriate employment opportunities
              locally. Increasing urbanization is neither sustainable nor
              desirable. So far, our professional higher education institutions
              have largely been oriented to cater to the mainstream industrial
              sector and, barring a few exceptions, have hardly contributed
              directly to the development of the rural sector. Unnat Bhārat
              Abhiyān (UBA) is a much needed and highly challenging initiative
              in this direction.
            </p>
          </div>
        </div>

        <div className="paragraph-container">
          <div className="heading">
            <h2>History</h2>
          </div>
          <p>
            The conceptualization of Unnat Bharat Abhiyan started with the
            initiative of a group of dedicated faculty members of Indian
            Institute of Technology (IIT) Delhi working for long in the area of
            rural development and appropriate technology. The concept was
            nurtured through wide consultation with the representatives of a
            number of technical institutions, Rural Technology Action Group
            (RuTAG) coordinators, voluntary organizations and government
            agencies, actively involved in rural development work, during a
            National workshop held at IIT Delhi in September, 2014. The workshop
            was sponsored by Council for Advancement of People’s Action and
            Rural Technology (CAPART), Ministry of Rural Development, Govt. of
            India. The program was formally launched by the Ministry of
            Education (MoE) (formerly Ministry Human Resource Development
            (MHRD)) in presence of The President of India on 11th November,
            2014.
          </p>
        </div>

        <div className="paragraph-container">
          <div className="heading">
            <h2>GOALS</h2>
          </div>
          <ul className="paragraph-container-ul">
            <li>
              To build an understanding of the development agenda within
              institutes of Higher Education and an institutional capacity and
              training relevant to national needs, especially those of rural
              India.
            </li>
            <li>
              To re-emphasize the need for field work, stake-holder interactions
              and design for societal objectives as the basis of higher
              education.
            </li>
            <li>
              To stress on rigorous reporting and useful outputs as central to
              developing new professions.
            </li>
            <li>
              To provide rural India and regional agencies with access to the
              professional resources of the institutes of higher education,
              especially those that have acquired academic excellence in the
              field of science, engineering and technology, and management.
            </li>
            <li>
              To improve development outcomes as a consequence of this research.
              To develop new professions and new processes to sustain and absorb
              the outcomes of research.
            </li>
            <li>
              To foster a new dialogue within the larger community on science,
              society and the environment and to develop a sense of dignity and
              collective destiny.
            </li>
          </ul>
        </div>
        <div className="paragraph-container">
          <div className="heading">
            <h2>THEMES</h2>
          </div>
          <div className="themes-container">
            <div className="theme-image-holder">
              <Link
                to={"/themes/organic-farming"}
                className="theme-image-holder-image"
              >
                <img
                  src="/images/themes-images/organic-farming.webp"
                  alt="organic-farming"
                />
              </Link>
              <Link
                className="theme-image-holder-link"
                to={"/themes/organic-farming"}
              >
                Organic Farming
              </Link>
            </div>
            <div className="theme-image-holder">
              <Link
                to={"/themes/water-management"}
                className="theme-image-holder-image"
              >
                <img
                  src="/images/themes-images/water-management.webp"
                  alt="water-management"
                />
              </Link>
              <Link
                className="theme-image-holder-link"
                to={"/themes/water-management"}
              >
                Water Management
              </Link>
            </div>
            <div className="theme-image-holder">
              <Link
                to={"/themes/energy-sources"}
                className="theme-image-holder-image"
              >
                <img
                  src="/images/themes-images/energy-sources.webp"
                  alt="energy-sources"
                />
              </Link>
              <Link
                className="theme-image-holder-link"
                to={"/themes/energy-sources"}
              >
                Energy Sources
              </Link>
            </div>
            <div className="theme-image-holder">
              <Link
                to={"/themes/artisans-industries-and-livelihood"}
                className="theme-image-holder-image"
              >
                <img src="/images/themes-images/artisans.webp" alt="artisans" />
              </Link>
              <Link
                className="theme-image-holder-link"
                to={"/themes/artisans-industries-and-livelihood"}
              >
                Artisans, Industries and Livelihood
              </Link>
            </div>
            <div className="theme-image-holder">
              <Link
                to={"/themes/basic-amenities"}
                className="theme-image-holder-image"
              >
                <img
                  src="/images/themes-images/basic-amenities.webp"
                  alt="basic-amenities"
                />
              </Link>
              <Link
                className="theme-image-holder-link"
                to={"/themes/basic-amenities"}
              >
                Basic Amenities
              </Link>
            </div>
            <div className="theme-image-holder">
              <Link
                to={"/themes/convergence"}
                className="theme-image-holder-image"
              >
                <img
                  src="/images/themes-images/convergence.webp"
                  alt="convergence"
                />
              </Link>
              <Link
                className="theme-image-holder-link"
                to={"/themes/convergence"}
              >
                Convergence
              </Link>
            </div>
          </div>
        </div>

        <div className="paragraph-container">
          <div className="heading">
            <h2>HOW YOU CAN PARTICIPATE IN UBA?</h2>
          </div>
          <p>
            You are welcome to participate in the Unnat Bharat Abhiyan in any of
            the following capacity as per your present status, competence and
            interest:{" "}
          </p>
          <ul className="paragraph-container-ul">
            <li>As a prospective Mentoring Institute</li>
            <li>As a Participating Institute</li>
            <li>As a Subject Expert</li>
            <li>As a Voluntary Organization</li>
            <li>As a Developmental Agency</li>
            <li>As a Philanthropist or a CSR Promoter</li>
            <li>As NSS Member</li>
            <li>As an Enthusiastic Volunteer</li>
          </ul>
          <p>
            For more information in this regard, you may please visit the UBA
            website and contact National Coordinator or Regional Coordinators
            (Mentoring Institutions).
          </p>
        </div>
      </div>
    </div>
  );
}
