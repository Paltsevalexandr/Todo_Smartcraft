import React from 'react';
import {SingleCard} from './SingleCard';

export const ListContainer = ({
   header, 
   list, 
   setList, 
   setCurrentTask, 
   moveCard
}) => {

   return (
      <div className = 'listContainer' 
         onDrop = {() => moveCard(header)} 
         onDragOver = {e => e.preventDefault()}
      >
         <h2>{header}</h2>
         <ul className = 'listWrapper'>
            {
               list.map((card, index) => {
                  return (
                     <SingleCard key = {index}
                        card = {card}
                        listName = {header}
                        setCurrentTask = {setCurrentTask}
                        setList = {setList} />
                  )
               })
            }
         </ul>
      </div>
   )
}
