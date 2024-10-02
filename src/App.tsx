import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import GridCellComp from "./Components/gridCellComp/gridCellComp";
import GridCust from "./Components/Grid/gridCust";
import Modal from "./Components/popap/popap";

function App() {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
  return (
    <div className="mainD">
      <div className="grid">
        <GridCust/>
      </div>
        <Modal isOpen={open} onClose={handleClose}>
            <>
                <h1>Реклама</h1>
            </>
        </Modal>
    </div>
  );
}

export default App;
