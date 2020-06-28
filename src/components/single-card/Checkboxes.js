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
               value = 'marketing' 
               checked = {labels.includes('marketing')}
            />
            Marketing
         </p>
         <p>
            <input type = 'checkbox' 
               className = 'checkbox'
               onChange = {e => chooseLabel(e)} 
               value = 'research' 
               checked = {labels.includes('research')}
            />
            Research
         </p>
      </div>
   )
}
