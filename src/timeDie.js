import { useState, useEffect } from "react";


export default function DeadlinePopUp() {
  const DeadlinePopUp = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const handleOpenModal = () => {
      setModalIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalIsOpen(false);
    };
  
    return (
      <>
        <button onClick={handleOpenModal}>Open Deadline Pop-up</button>
        <div
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Deadline Pop-up"
        >
          <h2>Deadline Pop-up</h2>
          <p>Your deadline is approaching!</p>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      </>
    );
  };
}
