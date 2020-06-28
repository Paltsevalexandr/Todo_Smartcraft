import React, { useState } from 'react';
import { Checkboxes } from './Checkboxes';

export const CardForm = ({ setShowCard, editCard, listName, card }) => {

   const { title, description, labels: prevLabels, ...cardRest } = card;

   let [newTitle, setTitle] = useState(title);
   let [newDescription, setDescription] = useState(description);
   let [labels, setLabels] = useState(prevLabels);

   const chooseLabel = e => {
      const {checked, value} = e.target;

      if(checked) {
         setLabels([...labels, value]);

      }else {
         setLabels(labels.filter(item => item !== value));
      }
   }

   const clearForm = () => {
      setTitle('');
      setDescription('');
      setLabels([]);
   }

   const handleCard = e => {
      editCard(listName, 
         {
            title: newTitle, 
            description: newDescription, 
            labels, 
            ...cardRest
         });
      setShowCard(true);
      clearForm();
      e.preventDefault();
   }
   
   return (
      <li className = 'singleCard'>
         <form className = 'cardForm'
            onSubmit = {e => handleCard(e)}>
            <div className = 'cardTitleWrap'>
               <div className = 'cardBtnsWrap'>
                  <button 
                     className = 'cardBtn editBtn' 
                     type = 'submit'
                     title = 'edit card'>
                  </button>
               </div>
               <input type = 'text' required
                  className = 'titleInput'
                  value = {newTitle}
                  onChange = {e => {setTitle(e.target.value);}}
               />
            </div>
            <Checkboxes
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
