import React from 'react';
import { ListContainer } from '../list-container/ListContainer.js';
import { SingleCard, NewCardForm } from '../single-card';

export const HomePage = ({taskLists, addCard, removeCard, editCard, moveCard, setCurrentTask}) => {

   const listsKeys = Object.keys(taskLists);
   
   const appHeight = document.documentElement.clientHeight;

   return (
      <div className = 'listsWrapper' style = {{minHeight: appHeight + 'px'}} >
         {
            listsKeys.map((listName, index) => {
               return (
                  <ListContainer
                     cardNumber = {taskLists[listName].length}
                     moveCard = {moveCard}
                     header = {listName} 
                     key = {index} >
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
