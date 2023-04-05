import React, { useState } from "react";
import "./Faqs.css";
import BreadcrumbComponent from "../../components/BreadcrumbComponent/BreadcrumbComponent";
import FaqsDetails from "./Faqs.json";
import FaqBox from "../../components/FaqBox/FaqBox";
export default function Faqs() {
  const [tabToggle, setTabToggle] = useState(true);
  return (
    <div className="Faqs">
      <div className="faq-side"></div>
      <div className="Faqs-content">
        <BreadcrumbComponent activeLink={"FAQs"}></BreadcrumbComponent>
        <h2 className="Faqs-heading">FAQs related to Unnat Bharat Abhiyan</h2>
        <div className="Faqs-tabs">
          <span
            style={
              tabToggle
                ? { borderBottom: "2px solid #FE901F" }
                : { opacity: "0.8" }
            }
            onClick={() => setTabToggle(!tabToggle)}
          >
            General Instructions
          </span>
          /
          <span
            style={
              !tabToggle
                ? { borderBottom: "2px solid #FE901F" }
                : { opacity: "0.8" }
            }
            onClick={() => setTabToggle(!tabToggle)}
          >
            SEG
          </span>
        </div>
        <div className="Faqs-container">
          {tabToggle
            ? FaqsDetails.FaqsGI.map((Faq, index) => {
                return <FaqBox Faq={Faq} QNo={index + 1} key={index}></FaqBox>;
              })
            : FaqsDetails.FaqsSEG.map((Faq, index) => {
                return (
                  <FaqBox
                    Faq={Faq}
                    QNo={index + 1}
                    key={index + FaqsDetails.FaqsGI.length}
                  ></FaqBox>
                );
              })}
        </div>
      </div>
    </div>
  );
}
