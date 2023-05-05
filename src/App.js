import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './index.css';

function App() {
  const [choresDetails, setChoresDetails] = useState({});

  const handleDateClick = (arg) => {
    const date = arg.dateStr;

    const isFlatAWashing = isAlternateWeekend(date);
    const flatForPump = getFlatForPump(date);

    const isSaturday = new Date(date).getDay() === 6;

    const chores = {
      flatA: isSaturday && isFlatAWashing ? "It's your turn" : '',
      flatB: isSaturday && !isFlatAWashing ? "It's your turn" : '',
      pumpFlatA: flatForPump === 'flatA' ? "It's your turn" : '',
      pumpFlatB: flatForPump === 'flatB' ? "It's your turn" : '',
    };

    setChoresDetails({ date, chores });
  };

  // Helper function to determine if it's the alternate weekend for flat A to wash
  const isAlternateWeekend = (date) => {
    const parsedDate = new Date(date);
    const firstSaturday = new Date(parsedDate.getFullYear(), parsedDate.getMonth(), 7);
    const daysSinceFirstSaturday = Math.floor((parsedDate - firstSaturday) / (1000 * 60 * 60 * 24 * 7));
    return daysSinceFirstSaturday % 2 === 0;
  };
  
  // Helper function to determine which flat is doing the pump chore on the specified date
  const getFlatForPump = (date) => {
    const parsedDate = new Date(date);
    const dayOfYear = getDayOfYear(parsedDate);
    
    // Determine which flat should pump on the current day
    const isEvenDayOfYear = dayOfYear % 2 === 0;
    return isEvenDayOfYear ? 'flatA' : 'flatB';
  };
  
  const getDayOfYear = (date) => {
    const startOfYear = new Date(date.getFullYear(), 0, 0);
    const diff = date - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };
  
  

  return (
    <div className='chore-calender'>
      <h1>Chore Calender</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        dateClick={handleDateClick}
        className='calender'
      />
      {Object.keys(choresDetails).length > 0 && (
        <div className='chores-details'>
         <div className='image-cont'><img src='./chorel
         .png' alt='' /></div>
          <h2>Chore details for {choresDetails.date}</h2>
          <div className='chore-wrapper'>
            <div className='washing'>
                <h3>Washing of Gutter</h3>
                <ul>
                  <li className='flatA'><span>Flat A:</span> {choresDetails.chores.flatA}</li>
                  <li className='flatB'><span>Flat B:</span> {choresDetails.chores.flatB}</li>
                </ul>
            </div>
            <div className='pumping'>
                <h3>Pumping of Water</h3>
              <ul>
                <li className='flatA'><span>Flat A:</span> {choresDetails.chores.pumpFlatA}</li>
                <li className='flatB'><span>Flat B:</span> {choresDetails.chores.pumpFlatB}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
