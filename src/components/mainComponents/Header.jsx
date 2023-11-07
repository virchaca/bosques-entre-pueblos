// import React from 'react'
import { useEffect, useState} from 'react';

function Header() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentDateTime(new Date());
        }, 1000); // Actualizar la hora cada segundo
    
        return () => {
          clearInterval(interval);
        };
      }, []);

  return (
    <div>
        <header className="header" id="header">
        <section className="headerSection">
          <div>
            <h1> BOSQUES entre PUEBLOS</h1>
            <i className="fa-solid fa-bars"></i>
            {/* ENTRE BOSQUES y PUEBLOS  */}
          </div>
          <section>
            <div className="dateAndTime">
              <span>Date {currentDateTime.toLocaleDateString()}</span>
              <span>Time {currentDateTime.toLocaleTimeString()}</span>
            </div>
            <div>
              <i className="fa-solid fa-tree"></i>
              <i className="fa-brands fa-pagelines"></i>
              <i className="fa-solid fa-wind"></i>
              <i className="fa-solid fa-feather"></i>
              <i className="fa-solid fa-bug"></i>
              <i className="fa-solid fa-mountain-sun"></i>
              <i className="fa-solid fa-pencil"></i>
            </div>
          </section>
        </section>
      </header>
    </div>
  )
}

export default Header