import React from 'react';

export const CardText = ({
   card, 
   setCurrentTask, 
   setShowCard, 
   removeCard, 
   listName
}) => {

   const { title, description, labels, id } = card;

   const addLabels = () => {
      if(labels) {
         return labels.map((item, index) => {
            let class_name = item;
            class_name = item.replace('UI ', '');
            
            return (
               <span key = {index} className = {`label ${class_name}`}>
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
            <h3 className = 'cardTitle'>
                  {title}
            </h3>
            <div className = 'cardBtnsWrap'>
               <button 
                  className = 'cardBtn editBtn' 
                  onClick = {() => setShowCard(false)}
                  title = 'edit card'>
               </button>
               <button 
                  className = 'cardBtn removeBtn' 
                  onClick = {() => removeCard(listName, id)}
                  title = 'remove card'>
               </button>
            </div>
         </div>
         <hr />
         <div className = 'cardDetails'>
            <span className = 'labelsWrap'>
               {addLabels()}
            </span>
            <div className = 'description'>
               {
                  description.split('\n')
                  .map((item, i) => {
                     return <p key = {i}>{item}</p>}
                  )
               }
            </div>
            <span className = {`status ${listName.toLowerCase()}`}>
               status: {listName.toLowerCase()}
            </span>
         </div>
      </li>
   )
}
