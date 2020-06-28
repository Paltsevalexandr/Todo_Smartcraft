import React from 'react';

export const ListContainer = ({
   header, 
   moveCard,
   children
}) => {

   return (
      <div className = {`listContainer ${header}`} 
         onDrop = {() => moveCard(header)} 
         onDragOver = {e => e.preventDefault()}
      >
         <h2>{header}</h2>
         <ul className = 'listWrap'>
            {children}
         </ul>
      </div>
   )
}
