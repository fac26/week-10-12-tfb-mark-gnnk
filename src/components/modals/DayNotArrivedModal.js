import React from 'react';
//import styles from '/styles/DayNotArrivedModal.css';


function DayNotArrivedModal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Jumping ahead?</h2>
        <p>This day has not arrived yet. Please come back for this page tomorrow.</p>
        <button onClick={props.onClose}>OK!</button>
      </div>
    </div>
  );
}

export default DayNotArrivedModal;
