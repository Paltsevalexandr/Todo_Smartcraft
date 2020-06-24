import React from 'react';

export const SingleCard = ({card, setCurrentTask, setList, listName}) => {
   const {title, description, label, status} = card;

   return (
      <li className = 'singleCard' draggable = 'true' 
         onDragStart = {
            () => {
               setCurrentTask({task: card, type: listName});
            }}>
         
         <h3>
            {title}
            <button className = 'editBtn'>
               edit
            </button>
         </h3>
         <span>
            {label}
         </span>
         <p>
            {description}
         </p>
         <span>
            {status}
         </span>
      </li>
   )
}

/* <li className = 'singleCard' draggable = 'true' key = {key}>
         
         <h3 key = {`${key}title`}>
            {title}
            <button className = 'editBtn' key = {`${key}btn`}>
               edit
            </button>
         </h3>
         <span key = {`${key}label`}>
            {label}
         </span>
         <p key = {`${key}description`}>
            {description}
         </p>
         <span key = {`${key}status`}>
            {status}
         </span>
      </li>*/