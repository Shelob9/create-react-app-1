import React, {useState} from 'react';
import './App.css';
import {EditValue} from './components/EditValue';
import {DisplayValue} from './components/DisplayValue';
function App() {
    const [theValue,setTheValue] = useState('Hi Roy');
    return (
        <div className="App">
            <DisplayValue value={theValue} className={'display-value'} data-testid="number-display" />
            <EditValue value={theValue} onChange={setTheValue} className={'edit-value'} id={'the-input'} />
        </div>
    );
}

export default App;
