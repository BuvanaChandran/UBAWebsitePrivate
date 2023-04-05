import React,{useEffect} from "react";
import { Switch, Route, Redirect,useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Themes from "./pages/themes/Themes";
import themeDetails from "./pages/themes/themeDetails.json";
import NewsEvent from "./pages/NewsEvents/NewsEventDetails.json";
import NewsEventPage from "./pages/NewsEvents/NewsEventPage.js";
import Faqs from "./pages/Faqs/Faqs";
import IntroductionPage from "./pages/About/IntroductionPage/IntroductionPage";
import SponsoringMinistryPage from "./pages/About/SponsoringMinistryPage/SponsoringMinistryPage";
import CoordinatingInstitutionsPage from "./pages/About/CoordinatingInstitutionsPage/CoordinatingInstitutionsPage";
import ParticipatingInstitutionsPage from "./pages/About/ParticipatingInstitutionsPage/ParticipatingInstitutionsPage";
import InstitutionSteeringCommittee from "./pages/Isc/InstitutionSteeringCommittee";
import FormsPage from "./pages/About/FormsPage/FormsPage";
import JoinUba from "./pages/JoinUba/JoinUba";
import JoinUbaDetails from "./pages/JoinUba/JoinUbaDetails.json";
import SecProjectsCompleted from "./pages/projects/SEC/ProjectsCompleted/SecProjectsCompleted";
import SecProjectsSanctioned from "./pages/projects/SEC/ProjectsSanctioned/SecProjectsSanctioned";
import SecProjectsSubmittedNavigator from "./pages/projects/SEC/ProjectsSubmitted/SecProjectsSubmittedNavigator";
import ProjectSubmittedContainer from "./components/ProjectSubmittedContainer/ProjectSubmittedContainer";
import SecProjectSubmitted20to21List from "./pages/projects/SEC/ProjectsSubmitted/SecProjectSubmitted20to21List.json";
import SecProjectSubmitted21to22List from "./pages/projects/SEC/ProjectsSubmitted/SecProjectSubmitted21to22List.json";
import SecProjectsInProgress from "./pages/projects/SEC/ProjectsInProgress/SecProjectsInProgress";
import SecProjectGuides from "./pages/projects/SEC/ProjectGuides/SecProjectGuides";

import SitProjectsCompleted from "./pages/projects/SIT/ProjectsCompleted/SitProjectsCompleted";
import SitProjectsSanctioned from "./pages/projects/SIT/ProjectsSanctioned/SitProjectsSanctioned";
import SitProjectsSubmitted from "./pages/projects/SIT/ProjectsSubmitted/SitProjectsSubmitted";
import SitProjectsInProgress from "./pages/projects/SIT/ProjectsInProgress/SitProjectsInProgress";
import SitProjectGuides from "./pages/projects/SIT/ProjectGuides/SitProjectGuides";

import SecReportNavigator from "./pages/reports/SEC/SecReportNavigator/SecReportNavigator";
import SecReport19to20List from "./pages/reports/SEC/SecReports/SecReport19to20List.json";
import SecReport20to21List from "./pages/reports/SEC/SecReports/SecReport20to21List.json";
import SitReportNavigator from "./pages/reports/SIT/SitReportNavigator/SitReportNavigator";
import EventListing from "./pages/EventListing/EventListing";
import AdoptedVillages from "./pages/AdoptedVillages/AdoptedVillages";
import ReportContainer from "./components/ReportContainer/ReportContainer";
import ComingSoon from "./components/ComingSoon/ComingSoon";

import NallurVillageDetails from "./pages/AdoptedVillages/AdoptedVillageDetails/NallurVillageDetails.json";
import ErumaiyurVillageDetails from "./pages/AdoptedVillages/AdoptedVillageDetails/ErumaiyurVillageDetails.json";
import PuducheriVillageDetails from "./pages/AdoptedVillages/AdoptedVillageDetails/PuducheriVillageDetails.json";
import SomangalamVillageDetails from "./pages/AdoptedVillages/AdoptedVillageDetails/SomangalamVillageDetails.json";
import NaduveerappattuVillageDetails from "./pages/AdoptedVillages/AdoptedVillageDetails/NaduveerappattuVillageDetails.json";
import NandambakkamVillageDetails from "./pages/AdoptedVillages/AdoptedVillageDetails/NandambakkamVillageDetails.json";
import VaradharajapuramVillageDetails from "./pages/AdoptedVillages/AdoptedVillageDetails/VaradharajapuramVillageDetails.json";
import pazhanthandalamVillageDetails from "./pages/AdoptedVillages/AdoptedVillageDetails/pazhanthandalamVillageDetails.json";
import ThirumudivakkamVillageDetails from "./pages/AdoptedVillages/AdoptedVillageDetails/ThirumudivakkamVillageDetails.json";
import PuduppairVillageDetails from "./pages/AdoptedVillages/AdoptedVillageDetails/PuduppairVillageDetails.json";

export default function Routes() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about/introduction" component={IntroductionPage} />
      <Route
        path="/about/sponsoring-ministry"
        component={SponsoringMinistryPage}
      />
      <Route
        path="/about/coordinating-institutions"
        component={CoordinatingInstitutionsPage}
      />
      <Route
        path="/about/participating-institutions"
        component={ParticipatingInstitutionsPage}
      />
      <Route path="/about/forms-page" component={FormsPage} />
      <Route path="/isc" component={InstitutionSteeringCommittee} />
      
      <Route
        path="/sec/projects/projects-completed"
        component={SecProjectsCompleted}
      />
      <Route
        path="/sec/projects/projects-sanctioned"
        component={SecProjectsSanctioned}
      />
      <Route
        path="/sec/projects/projects-submitted"
        component={SecProjectsSubmittedNavigator}
      />
      <Route path="/sec/projects/projects-submitted-20-21">
      		<ProjectSubmittedContainer projectList={SecProjectSubmitted20to21List}/>
      </Route>
      <Route path="/sec/projects/projects-submitted-21-22">
      		<ProjectSubmittedContainer projectList={SecProjectSubmitted21to22List}/>
      </Route>
      <Route
        path="/sec/projects/projects-in-progress"
        component={SecProjectsInProgress}
      />
      {
      	JoinUbaDetails.map((collegeDetails,index)=>(
      		<Route path={collegeDetails.path} key={index}><JoinUba collegeDetails={collegeDetails}/></Route>
      	))
      }
      <Route path="/sec/projects/project-guides" component={SecProjectGuides} />
      <Route
        path="/sit/projects/projects-completed"
        component={SitProjectsCompleted}
      />
      <Route
        path="/sit/projects/projects-sanctioned"
        component={SitProjectsSanctioned}
      />
      <Route
        path="/sit/projects/projects-submitted"
        component={SitProjectsSubmitted}
      />
      <Route path="/sit/projects/project-guides" component={SitProjectGuides} />
      <Route
        path="/sit/projects/projects-in-progress"
        component={SitProjectsInProgress}
      />
      <Route path="/sec/reports" component={SecReportNavigator} />
      <Route path="/sec/report-20-21"><ReportContainer reportDetails={SecReport20to21List}/></Route>
      <Route path="/sec/report-19-20"><ReportContainer reportDetails={SecReport19to20List}/></Route> 
      
      <Route path="/sit/reports" component={SitReportNavigator} />

      <Route exact path="/faqs" component={Faqs} />
      {themeDetails.themes.map((theme, index) => (
        <Route path={`/${theme.themeLink}`} key={index}>
          <Themes themeDetails={theme} />
        </Route>
      ))}
      {[...NewsEvent.events.SEC, ...NewsEvent.events.SIT].map(
        (event, index) => (
          <Route path={`/events/${event.title}`} key={index}>
            <NewsEventPage eventDetail={event} />
          </Route>
        )
      )}
      {NewsEvent.news.map((event, index) => (
        <Route path={`/news/${event.title}`} key={index}>
          <NewsEventPage eventDetail={event} />
        </Route>
      ))}
      <Route path={`/events/sec`}>
        <EventListing events={NewsEvent.events.SEC} college={"SEC"}/>
      </Route>
      <Route path={`/events/sit`}>
        <EventListing events={NewsEvent.events.SIT} college={"SIT"}/>
      </Route>
      <Route path="/adopted-villages/puducheri"><AdoptedVillages villageDetails={PuducheriVillageDetails} /></Route>
      <Route path="/adopted-villages/somangalam"><AdoptedVillages villageDetails={SomangalamVillageDetails}/></Route>
      <Route path="/adopted-villages/naduveerappattu"><AdoptedVillages villageDetails={NaduveerappattuVillageDetails}/></Route>
      <Route path="/adopted-villages/nandambakkam"><AdoptedVillages villageDetails={NandambakkamVillageDetails}/></Route>
      <Route path="/adopted-villages/varadharajapuram"><AdoptedVillages villageDetails={VaradharajapuramVillageDetails}/></Route>
      <Route path="/adopted-villages/pazhanthandalam"><AdoptedVillages villageDetails={pazhanthandalamVillageDetails}/></Route>
      <Route path="/adopted-villages/nallur"><AdoptedVillages villageDetails={NallurVillageDetails}/></Route>
      <Route path="/adopted-villages/erumaiyur"><AdoptedVillages villageDetails={ErumaiyurVillageDetails}/></Route>
      <Route path="/adopted-villages/thirumudivakkam"><AdoptedVillages villageDetails={ThirumudivakkamVillageDetails}/></Route>
      <Route path="/adopted-villages/puduppair"><AdoptedVillages villageDetails={PuduppairVillageDetails}/></Route>
      <Route path="/coming-soon" component={ComingSoon}/>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}
