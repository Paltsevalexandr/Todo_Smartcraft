import React from 'react';

export const CardText = ({card, setCurrentTask, setShowCard, removeCard, listName}) => {

   const {title, description, labels, status, id} = card;

   const addLabels = () => {
      if(labels) {
         return labels.map((item, index) => {
            return (
               <span key = {index} className = {`label ${item}`}>
                  {item}
               </span>
            )
         })
      }
      return null;
   }
   return (
      <li className = 'singleCard' draggable = 'true' 
         onDragStart = {
            () => {
               setCurrentTask({task: card, type: listName});
         }}>
         <div className = 'cardTitleWrap'>
            <button onClick = {() => removeCard(listName, id)}>remove</button>
            <h3 className = 'cardTitle'>
               {title}
            </h3>
            <button className = 'editBtn' onClick = {() => setShowCard(false)}>
                     edit
               </button>
         </div>
         <hr />
         <div className = 'cardDetails'>
            <span className = 'labelsWrap'>
               {addLabels()}
            </span>
            <p className = 'description'>
               {description}
            </p>
            <span className = 'status'>
               status: {status ? status : listName.toLowerCase()}
            </span>
         </div>
      </li>
   )
}
