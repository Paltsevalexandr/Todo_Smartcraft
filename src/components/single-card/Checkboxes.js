import React from 'react';

export const Checkboxes = ({ labels, chooseLabel })  => {
   return (
      <div className = 'checkboxWrap'>
         <p>
            <input type = 'checkbox' 
               className = 'checkbox'
               onChange = {e => chooseLabel(e)} 
               value = 'UI design' 
               checked = {labels.includes('UI design')}
            />
            UI design
         </p>
         <p>
            <input type = 'checkbox' 
               className = 'checkbox'
               onChange = {e => chooseLabel(e)} 
               value = 'Marketing' 
               checked = {labels.includes('Marketing')}
            />
            Marketing
         </p>
         <p>
            <input type = 'checkbox' 
               className = 'checkbox'
               onChange = {e => chooseLabel(e)} 
               value = 'Research' 
               checked = {labels.includes('Research')}
            />
            Research
         </p>
      </div>
   )
}
