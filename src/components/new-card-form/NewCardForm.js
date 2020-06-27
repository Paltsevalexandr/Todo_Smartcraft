import React, { useState } from 'react';
import { Checkboxes } from './Checkboxes';

export const NewCardForm = ({ list, setShowForm, addCard, listName }) => {

   let [title, setTitle] = useState('');
   let [description, setDescription] = useState('');
   let [labels, setLabel] = useState([]);

   const calcId = list => {
      let allId = [];
  
      if(list.length === 0) {
        return 1;
      }
      for(let card of list) {
        allId.push(card.id);
      }
      let biggestId = Math.max(...allId);
      return biggestId + 1;
   }

   const handleCard = e => {
      addCard(
         listName, 
         {
            title, 
            description, 
            status: listName.toLowerCase(), 
            labels, 
            id: calcId(list)
         });
      setShowForm(false);
      e.preventDefault();
   }

   const chooseLabel = e => {
      const {checked, value} = e.target;

      if(checked) {
         setLabel([...labels, value]);

      }else {
         setLabel(labels.filter(item => item !== value));
      }
   }

   return (
      <form className = 'cardForm'
         onSubmit = {e => handleCard(e)}>
         <input type = 'text' required
            className = 'titleInput'
            value = {title}
            onChange = {e => {setTitle(e.target.value);}}
         />
         <Checkboxes 
            chooseLabel = {chooseLabel} 
            labels = {labels} 
         />
         <textarea className = 'textInput'
            value = {description}
            onChange = {e => setDescription(e.target.value)} />
         <button type = 'submit' className = 'formBtn addCardBtn newCardBtn'>
            Add card
         </button>
      </form>
   )
}
