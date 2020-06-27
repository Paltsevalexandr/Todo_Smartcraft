import React, { useState } from 'react';
import { CardCheckboxes } from './CardCheckboxes';

export const CardForm = ({ setShowCard, editCard, listName, card }) => {

   const {title, description, labels: prevLabels, ...cardRest} = card;

   let [newTitle, setTitle] = useState(title);
   let [newDescription, setDescription] = useState(description);
   let [labels, setLabel] = useState(prevLabels);

   const chooseLabel = e => {
      const target = e.target;

      if(target.checked) {
         setLabel([...labels, target.value]);

      }else {
         setLabel(labels.filter(item => item !== target.value));
      }
   }
   
   return (
      <li className = 'singleCard'>
         <form className = 'cardForm'
            onSubmit = {e => {
               editCard(listName, {title: newTitle, description: newDescription, labels, ...cardRest});
               setShowCard(true);
               e.preventDefault();
            }}>
            <div className = 'formTitleWrap'>
               <button type = 'submit' className = 'editBtn'>
                  edit
               </button>
               <input type = 'text' required
                  className = 'titleInput'
                  value = {newTitle}
                  onChange = {e => {setTitle(e.target.value);}}
               />
            </div>
            <CardCheckboxes
               chooseLabel = {chooseLabel} 
               labels = {labels} 
            />
            <textarea className = 'textInput'
               value = {newDescription}
               onChange = {e => setDescription(e.target.value)} />
         </form>
      </li>
   )
}
