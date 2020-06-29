import React from 'react';

export const ListContainer = ({
   header, 
   moveCard,
   cardNumber,
   children
}) => {

   return (
      <div className = {`listContainer ${header}`} 
         onDrop = {() => moveCard(header)} 
         onDragOver = {e => e.preventDefault()}
      >
         <h2 className = 'listTitle'>{header}<span>{cardNumber}</span></h2>
         <ul className = 'listWrap'>
            {children}
         </ul>
      </div>
   )
}
