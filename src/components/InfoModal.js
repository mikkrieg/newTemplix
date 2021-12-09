import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './../styles/Layouts/infoModal.scss';

const InfoModal = (props) => {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Specifications:</h4>
        <ul className="modal-list">
          <li className="spec-li"> <span className="modal-span"> Styled with:</span> {props.styling.join(', ')}</li>
          <li className="spec-li"> <span className="modal-span">Download size:</span> {props.download}</li>
          <li className="spec-li"> <span className="modal-span">Main technologies:</span> {props.technologies.join(', ')}</li>
          <li className="spec-li"> <span className="modal-span">CSS files:</span> {props.css}</li>
          <li className="spec-li"> <span className="modal-span">Content files: </span> {props.content}</li>
          <li className="spec-li"> <span className="modal-span">Image files: </span> {props.image}</li>
        </ul>
        <Modal.Title id="contained-modal-title-vcenter">
          Instructions:
        </Modal.Title>
        <ul id='first-item'>
          <li>Downloads are currently unavailable sorry for the inconvenience!</li>
        </ul>
        <ol>
          <li>Select the download button in the bottom left hand corner</li>
          <li>To use this splash template you will need to install:
            <ul>
              {props.installs.map( e => (
                  <li key={e}>{e}</li>
              ))}
            </ul>
          </li>
          <li>Once downloaded add files to an existing project or start a new one from scratch</li>
          <li>Don't forget to read the comments in the js file and css file to remove lines and styles that are no longer needed</li>
        </ol>
        <ul>
          <li>If you don't want to use create-react-app make sure to install CSS modules (this package is built in to create-react-app)</li>
        </ul>
      </Modal.Body>
      <Modal.Footer className="modal-foot">
        <Button variant="dark" className="dl-button" disabled>Download</Button>
        <Button variant="dark" className="close-button" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default InfoModal;
