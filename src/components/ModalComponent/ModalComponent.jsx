import React from "react";
import "./ModalComponent.css";
import Modal from "react-bootstrap/Modal";

export default function ModalComponent({
  message,
  currentState,
  showStateFromChild,
}) {
  return (
    <>
      <Modal
        show={currentState}
        onHide={() => showStateFromChild(false)}
        dialogClassName="modal-custom"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal-heading">
              <h2>{message.messageHeading}</h2>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="message-intro-holder">
            <div className="message-intro-image">
              <img
                src={message.messageImage}
                alt={message.messageHeading + " img"}
              />
            </div>
            <div className="message-center-line"></div>
            <div className="message-intro-designation">
              {message.personName !== "" && <h4>{message.personName}</h4>}
              {message.personDesignation.length > 0 &&
                message.personDesignation.map((designation, index) => (
                  <p key={index}>{designation}</p>
                ))}
            </div>
          </div>
          <div className="message-paragraph-container">
            {message.messageParagraph.length > 0 &&
              message.messageParagraph.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
          {message.messageEndingQuote !== "" && (
            <h5 className="message-ending-quote">
              {message.messageEndingQuote}
            </h5>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
