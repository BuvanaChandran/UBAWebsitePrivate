import React from "react";

import Accordion from "react-bootstrap/Accordion";
import "./DistrictsAccordion.css";

export default function DistrictsAccordion({ districtsAllotedList }) {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>List of Districts</Accordion.Header>
          <Accordion.Body>
            {districtsAllotedList.map((district, index) => (
              <p className="accordion-content" key={index}>
                {index + 1}. {district}
              </p>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
