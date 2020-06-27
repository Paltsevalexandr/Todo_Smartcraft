import React, { useState } from 'react';
import { CardText } from './CardText';
import { CardForm } from './CardForm';

export const SingleCard = ({card, listName, setCurrentTask, editCard, removeCard}) => {
   
   let [showCard, setShowCard] = useState(true);

   return (
      showCard
      ? <CardText 
         card = {card} 
         listName = {listName}
         setCurrentTask = {setCurrentTask} 
         removeCard = {removeCard}
         setShowCard = {setShowCard}
        />
      : <CardForm 
         card = {card}
         listName = {listName}
         editCard = {editCard}
         setShowCard = {setShowCard}
        />
   )
}
