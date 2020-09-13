import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/Nav';
import Jobs from './components/Jobs';
import Contact from './components/Contact';


function App() {
const [navSelected, setNavSelected] = useState("jobs");

useEffect(() => {
  const newTitle = navSelected.charAt(0).toUpperCase() + navSelected.slice(1)
  document.title = newTitle;
}, [navSelected]);

const renderPage = () => {
    
  switch(navSelected) {
    case 'jobs':
      return <Jobs />;
      case 'contact':
        return <Contact />;
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
