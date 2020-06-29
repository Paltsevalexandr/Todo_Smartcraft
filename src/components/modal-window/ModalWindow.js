import React, { useState } from 'react';
import { NewCardForm } from '../single-card';
import { Radiobuttons } from './Radiobuttons';

import './modal-window.css';

export const ModalWindow = ({ addCard, taskLists, setShowModalWindow }) => {

   const [listName, setListName] = useState('Backlog');
   
   return (
      <div className = 'modalWindow' onClickCapture = {() => setShowModalWindow(false)}>
         <button className = 'closeBtn'></button>
         <div className = 'formWrap' onClick = {e => {setShowModalWindow(true); e.stopPropagation()}}>
            <h2>Create new task-card</h2>
            <NewCardForm 
               list = {taskLists[listName]}
               addCard = {addCard} 
               listName = {listName}
               setShowModalWindow = {setShowModalWindow}>
               <div>
                  <h3>Select list name </h3>
                  <Radiobuttons 
                     listName = {listName} 
                     setListName = {setListName} />
               </div>
            </NewCardForm>
         </div>
      </div>
   )
}

