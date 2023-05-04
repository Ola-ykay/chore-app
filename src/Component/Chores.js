// import React, { useState, useEffect } from 'react';

// function ChoresList() {
//   const [chores, setChores] = useState([
//     { name: 'Pumping', doneFlatA: false, doneFlatB: false },
//     { name: 'Washing', doneFlatA: false, doneFlatB: false }
//   ]);
//   const [newChore, setNewChore] = useState('');
//   const [reminders, setReminders] = useState({
//     'Pumping': new Date(new Date().setDate(new Date().getDate() + 7)), // Set pumping reminder for one week from now
//     'Washing': new Date(new Date().setDate(new Date().getDate() + 14)), // Set washing reminder for two weeks from now
//   });
//   const [pumpingFlatA, setPumpingFlatA] = useState(false);
//   const [pumpingFlatB, setPumpingFlatB] = useState(false);
//   const [washingFlatA, setWashingFlatA] = useState(false);
//   const [washingFlatB, setWashingFlatB] = useState(false);

//   const alternatingFlats = ['Flat A', 'Flat B'];

//   const getPumpingChore = (day) => {
//     const index = day % alternatingFlats.length;
//     return `Pump in ${alternatingFlats[index]}`;
//   };

//   const getWashingChore = (weekendNum) => {
//     const index = weekendNum % alternatingFlats.length;
//     return `Wash in ${alternatingFlats[index]}`;
//   };

//   const handleNewChoreChange = (event) => {
//     setNewChore(event.target.value);
//   };

//   const handleAddChore = () => {
//     setChores([...chores, { name: newChore, doneFlatA: false, doneFlatB: false }]);
//     setNewChore('');
//   };

//   const handleSetReminder = (chore) => {
//     const reminderTime = new Date();
//     if (chore === 'Pumping') {
//       reminderTime.setDate(reminderTime.getDate() + 7); // Set pumping reminder for one week from now
//     } else if (chore === 'Washing') {
//       reminderTime.setDate(reminderTime.getDate() + 14); // Set washing reminder for two weeks from now
//     }
//     setReminders({ ...reminders, [chore]: reminderTime });
//   };

//   const handleChoreDone = (chore, flat) => {
//     const updatedChores = chores.map((c) => {
//       if (c.name === chore) {
//         return { ...c, [`done${flat}`]: true };
//       }
//       return c;
//     });
//     setChores(updatedChores);
//   };

//   useEffect(() => {
//     const pumpingReminder = setInterval(() => {
//       const today = new Date();
//       const pumpingDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
//       const pumpingChore = getPumpingChore(pumpingDay);
//       if (pumpingChore.endsWith('A')) {
//         // Reminder for Flat A
//         setPumpingFlatA(true);
//       } else {
//         // Reminder for Flat B
//         setPumpingFlatB(true);
//       }
//     }, 24 * 60 * 60 * 1000); // Check for pumping reminder once a day

//     const washingReminder = setInterval(() => {
//       const today = new Date();
//       const weekendNum = Math.floor(today.getDate() / 7); // Weekends are defined as the 7th and 14th days of
//       const washingChore = getWashingChore(weekendNum);
// if (washingChore.endsWith('A')) {
//   setWashingFlatA(true);
// } else {
//   setWashingFlatB(true);
// }
// }, 24 * 60 * 60 * 1000); // Check for washing reminder once a day

//   })

//   return (
//     <div>
//       <h2>Chores List</h2>
//       <ul>
//         {chores.map((chore) => (
//           <li key={chore.name}>
//             {chore.name}:
//             <label>
//               Flat A
//               <input
//                 type="checkbox"
//                 checked={chore.doneFlatA}
//                 onChange={() => handleChoreDone(chore.name, 'FlatA')}
//               />
//             </label>
//             <label>
//               Flat B
//               <input
//                 type="checkbox"
//                 checked={chore.doneFlatB}
//                 onChange={() => handleChoreDone(chore.name, 'FlatB')}
//               />
//             </label>
//             </li>
//                 ))}
//             </ul>
//             <div>
//             <h2>Set Reminder</h2>
//     <div>
//       <button onClick={() => handleSetReminder('Pumping')}>Pumping Reminder</button>
//       {pumpingFlatA && <p>Reminder for Flat A to pump today!</p>}
//       {pumpingFlatB && <p>Reminder for Flat B to pump today!</p>}
//     </div>
//     <div>
//       <button onClick={() => handleSetReminder('Washing')}>Washing Reminder</button>
//       {washingFlatA && <p>Reminder for Flat A to wash this weekend!</p>}
//       {washingFlatB && <p>Reminder for Flat B to wash this weekend!</p>}
//     </div>
//     <div>
//               </div>


//       <label>
//         Add chore:
//         <input type="text" value={newChore} onChange={handleNewChoreChange} />
//         <button onClick={handleAddChore}>Add</button>
//       </label>
//     </div>
//     </div>
//   );
  
  
// }


// export default ChoresList;