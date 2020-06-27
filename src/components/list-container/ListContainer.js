import React, { useState } from 'react';
import { NewCardForm } from '../new-card-form/NewCardForm';

export const ListContainer = ({
   header, 
   list, 
   addCard, 
   moveCard,
   children
}) => {

   let [showForm, setShowForm] = useState(false);

   return (
      <div className = {`listContainer ${header}`} 
         onDrop = {() => moveCard(header)} 
         onDragOver = {e => e.preventDefault()}
      >
         <h2>{header}</h2>
         <ul className = 'listWrap'>
            {children}
            <li className = 'singleCard addCardWrap'>
               {
                  showForm || list.length === 0
                ? <NewCardForm 
                     list = {list}
                     addCard = {addCard} 
                     setShowForm = {setShowForm} 
                     listName = {header} />
                : <button className = 'addCardBtn' onClick = {() => setShowForm(true)}>
                     +
                  </button>
               }
               
            </li>
         </ul>
      </div>
   )
}
