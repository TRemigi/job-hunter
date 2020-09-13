import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/Nav';
import Jobs from './components/Jobs';


function App() {
const [navSelected, setNavSelected] = useState("home");

const renderPage = () => {
    
  switch(navSelected) {
    case 'jobs':
      return <Jobs />;
    default:
      return <Jobs />;
  }
}

  return (
    <div className="back-dark">
      <NavComponent 
      navSelected={navSelected}
      setNavSelected={setNavSelected}
      />
      <main>
        {renderPage()}
      </main>

    </div>
  );
}

export default App;
