import React,{useState} from "react";
import ShadowContainer from "../../components/ShadowContainer/ShadowContainer";
import "./Home.css";
import MemberDetailsContainer from "../../components/MemberDetailsContainer/MemberDetailsContainer";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import NewsCarousel from "../../components/NewsCarousel/NewsCarousel.jsx";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";
import messages from "./messages.json";
export default function Home() {
  const [showState, setShowState] = useState(false);
  const showStateFromChild=(state)=>{
  	setShowState(state);  	
  	};
  const[messageIndex,setMessageIndex]=useState(0);
  return (
    <div id="home-container">
      <div className="home-section">
        <div className="image-news">
          <ImageCarousel />
          <NewsCarousel />
        </div>
      </div>
      <div className="home-section">
        <div className="heading">
          <h2>CHAIRMAN'S MESSAGE</h2>
        </div>
        <ShadowContainer right>
          <div className="home-content-div">
            <div className="home-content-left">
              <div className="home-content-left-image">
                <img
                  src="/images/home-page-images/ceo.webp"
                  className="image-size home-principal-img"
                  height="130px"
                  alt="ceo"
                />
              </div>
              <div className="home-content-left-info">
                 <h5>{messages[0].personName}</h5>
                {
                messages[0].personDesignation.map((designation,index)=>(
                	<h6 key={index}>{designation}</h6>))
                }
              </div>
            </div>
            <div className="home-content-right">
              <q title="click Read more to see details">
                <i>
                 {messages[0].messageParagraph[0]}
                 <button className="modal-trigger-button" onClick={() => {setShowState(true);setMessageIndex(0);}} title="click to view more">
					Read more ...
				  </button>
                </i>
              </q>
            </div>
          </div>
        </ShadowContainer>
      </div>
      <div className="home-section">
        <div className="heading">
          <h2>PRINCIPAL's MESSAGE</h2>
        </div>
        <div className="home-carousel">
           <div className="carousel-detail">
		        <Carousel variant="dark">
		        	{
		        	messages.slice(1).map((message,index)=>{
		        	return(
		        	<CarouselItem key={index}>
                        <div className="carousel-content">
                            <div className="home-content-div">
                                <div className="home-content-left">
                                    <div className="home-content-left-image">
                                        <img
                                            className="image-size home-principal-img"
                                            height="130px"
                                            src={message.messageImage}
                                            alt="slide1-img"
                                        />
                                    </div>
                                    <div className="home-content-left-info">
                                        <h5>{message.personName}</h5>
                                        {
                                        message.personDesignation.map((designation,index)=>(
                                        	<h6 key={index}>{designation}</h6>))
                                        }
                                    </div>
                                </div>
                                <div className="home-content-right">
								  <q title="click Read more to see details">
									<i>
									 {message.messageParagraph[0]}
									 <button className="modal-trigger-button" onClick={() => {setShowState(true);setMessageIndex(index+1)}} title="click to view more">
										Read more ...
									  </button>
									</i>
								  </q>
								</div>
                            </div>
                        </div>
                    </CarouselItem>
                    );}
                    )
                 }
		        </Carousel>
		    </div>
          
        </div>
      </div>
      <div className="heading">
        <h2>ABOUT SAIRAM UBA</h2>
      </div>
      <div className="home-section">
        <div className="home-about-div">
          <p>
            As foreseen by Gandhi Ji in his seminal work, ‘Hind Swaraj’, the
            western developmental paradigm, based on centralized technologies
            and urbanization, has given rise to serious problems like increasing
            inequity (leading to crime and violence), and climate change due to
            rapid ecological degradation. To ameliorate these problems, it is
            necessary to promote development of rural areas in tune with
            Gandhian vision of self-sufficient ‘village republics’, based on
            local resources and using decentralized, eco-friendly technologies
            so that the basic needs of food, clothing, shelter, sanitation,
            health care, energy, livelihood, transportation, and education are
            locally met. This should be the vision of holistic development of
            villages
          </p>
          <ShadowContainer right>
            <img
              src="/images/home-page-images/Mission.webp"
              className="vision-mission-img"
              alt="Mission &amp; Vision"
            />

            <p id="mission-vission-p">
              Unnat Bharat Abhiyan is inspired by the vision of transformational
              change in rural development processes by leveraging knowledge
              institutions to help build the architecture of an Inclusive India.
              The Mission of Unnat Bharat Abhiyan is to enable higher
              educational institutions to work with the people of rural India in
              identifying development challenges and evolving appropriate
              solutions for accelerating sustainable growth. It also aims to
              create a virtuous cycle between society and an inclusive academic
              system by providing knowledge and practices for emerging
              professions and to upgrade the capabilities of both the public and
              the private sectors in responding to the development needs of
              rural India.
            </p>
          </ShadowContainer>
        </div>
      </div>
      <div className="home-section">
        <div className="home-objectives-div">
          <div className="heading">
            <h2>OBJECTIVES</h2>
          </div>
          <ul>
            <li>
              To inculcate UN’s Sustainable Development Goals (SDG) to village
              Presidents, village admin peoples, ward members & voluntary
              village youths, SHG womens with the help of Govt organizations.
            </li>
            <li>
              Complete geographical & household survey of all the adopted
              villages and digitally monitored.
            </li>
            <li>
              Organizing various technical projects for the development of
              adopted villages in the following
            </li>

            <ul className="home-secondary-objectives">
              <li>Safe Drinking water,</li>
              <li>Hygienic sanitation,</li>
              <li>Renewable energy systems,</li>
              <li>
                Proper solid waste management in all the adopted villages,
              </li>
              <li>Simple but necessary infrastructure and</li>
              <li>Agriculture using latest technical inventions.</li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="home-section">
        <div className="heading">
          <h2>SAIRAM UBA - SCOPE MEMBERS</h2>
        </div>
        <MemberDetailsContainer />
      </div>
      <ModalComponent message={messages[messageIndex]} currentState={showState} showStateFromChild={showStateFromChild}/>
    </div>
  );
}
