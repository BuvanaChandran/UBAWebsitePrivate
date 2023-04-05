import React, { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./FaqBox.css";
export default function FaqBox({ Faq, QNo }) {
  const showAns = useRef(null);
  const changeArrow = useRef(null);
  const [isHidden, setIsHidden] = useState(true);
  const showAnswer = () => {
    setIsHidden(isHidden ? false : true);
    showAns.current.style.padding = isHidden ? "14px 16px" : "0px";
    showAns.current.style.height = isHidden ? "fit-content" : "0px";
    showAns.current.style.opacity = isHidden ? "1" : "0";
    changeArrow.current.style.transform = isHidden
      ? "rotateZ(180deg)"
      : "rotateZ(0deg)";
  };
  return (
    <div className="FaqBox-accordion">
      <div className="FaqBox-accordion-Qn" onClick={showAnswer}>
        <div style={{ display: "flex", width: "100%" }}>
          <span>{QNo}.</span>
          <p>{Faq.question}</p>
        </div>
        <span className="FaqBox-sign" ref={changeArrow}>
          <FaChevronDown />
        </span>
      </div>
      <div
        className="FaqBox-accordion-Ans"
        ref={showAns}
        dangerouslySetInnerHTML={{ __html: Faq.answer }}
      ></div>
    </div>
  );
}
