import { useState } from 'react'
import './App.css'
import Lottery from './Lottery'
import Ticket from './Ticket.jsx';
import { sum } from './helper.js';

function App() {

   let winCondition = (ticket) => {
    return ticket[0] === 0;
  }

  // let winCondition = (ticket) => {
  //   return sum(ticket) === 15;
  // }
 
  //  let winCondition = (ticket) => {
  //   return ticket.every((num) => num === ticket[0]);
  // }

  return (
    <>
      <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
