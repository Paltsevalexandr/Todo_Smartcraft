import React from 'react';
import { ListContainer } from '../list-container/ListContainer.js';
import { SingleCard, NewCardForm } from '../single-card';
export const SearchPage = ({ taskLists, addCard, removeCard, editCard, moveCard, setCurrentTask }) => {
   const listsKeys = Object.keys(taskLists);

   return (
      <div className = 'listsWrapper'>
      {
         listsKeys.map((listName, index) => {
            return (
               <ListContainer
                  cardNumber = {taskLists[listName].length}
                  moveCard = {moveCard}
                  header = {listName} 
                  key = {index}>
               {
                  taskLists[listName].map((card, index) => {
                     return (
                     <SingleCard key = {index}
                        card = {card}
                        listName = {listName}
                        setCurrentTask = {setCurrentTask}
                        editCard = {editCard}
                        removeCard = {removeCard} />
                     )
                  })
               }
                  <NewCardForm 
                     list = {taskLists[listName]}
                     addCard = {addCard} 
                     listName = {listName} />
               </ListContainer>
            )
         })
      }
      </div>
   )
}
