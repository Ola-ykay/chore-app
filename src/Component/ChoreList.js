// import React, { useState } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';

// function App() {
//   const [choresDetails, setChoresDetails] = useState({});

//   const handleDateClick = (arg) => {
//     const date = arg.dateStr;

//     // Determine which flat is washing this weekend
//     const isFlatAWashing = isAlternateWeekend(date);

//     // Determine which flat is doing the pump chore on this date
//     const flatForPump = getFlatForPump(date);

//     // Create an object to store the chores details for the clicked date
//     const chores = {
//       flatA: isFlatAWashing ? 'wash' : '',
//       flatB: isFlatAWashing ? '' : 'wash',
//       pumpFlatA: flatForPump === 'flatA' ? 'pump' : '',
//       pumpFlatB: flatForPump === 'flatB' ? 'pump' : '',
//     };

//     // Update the state with the chores details
//     setChoresDetails({ date, chores });
//   };

//   // Helper function to determine if it's the alternate weekend for flat A to wash
//   const isAlternateWeekend = (date) => {
//     const parsedDate = new Date(date);
//     // Check if the date is a Saturday
//     if (parsedDate.getDay() !== 6) {
//       return false;
//     }
//     const firstSaturday = new Date(parsedDate.getFullYear(), parsedDate.getMonth(), 7);
//     const daysSinceFirstSaturday = Math.floor((parsedDate - firstSaturday) / (1000 * 60 * 60 * 24 * 6));
//     return daysSinceFirstSaturday % 2 === 0;
//   };
  
  

//   // Helper function to determine which flat is doing the pump chore on the specified date
//   const getFlatForPump = (date) => {
//     const parsedDate = new Date(date);
//     const dayOfYear = getDayOfYear(parsedDate);
    
//     // Determine which flat should pump on the current day
//     const isEvenDayOfYear = dayOfYear % 2 === 0;
//     return isEvenDayOfYear ? 'flatA' : 'flatB';
//   };
  
//   const getDayOfYear = (date) => {
//     const startOfYear = new Date(date.getFullYear(), 0, 0);
//     const diff = date - startOfYear;
//     const oneDay = 1000 * 60 * 60 * 24;
//     return Math.floor(diff / oneDay);
//   };
  
  

//   return (
//     <div>
//       <FullCalendar
//         plugins={[dayGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         selectable={true}
//         dateClick={handleDateClick}
//       />
//       {Object.keys(choresDetails).length > 0 && (
//         <div>
//           <h2>Chores details for {choresDetails.date}</h2>
//           <ul>
//             <li>Flat A: {choresDetails.chores.flatA}</li>
//             <li>Flat B: {choresDetails.chores.flatB}</li>
//             <li>Flat A: {choresDetails.chores.pumpFlatA}</li>
//             <li>Flat B: {choresDetails.chores.pumpFlatB}</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
