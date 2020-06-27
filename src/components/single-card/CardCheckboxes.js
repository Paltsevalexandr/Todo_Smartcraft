import React from 'react';

export const CardCheckboxes = ({labels, chooseLabel})  => {
   return (
      <div className = 'checkboxWrap'>
         <p>
            <input type = 'checkbox' 
               className = 'checkbox'
               onChange = {e => chooseLabel(e)} 
               value = 'design' 
               checked = {labels.includes('design')}
            />
            design
         </p>
         <p>
            <input type = 'checkbox' 
               className = 'checkbox'
               onChange = {e => chooseLabel(e)} 
               value = 'marketing' 
               checked = {labels.includes('marketing')}
            />
            marketing
         </p>
         <p>
            <input type = 'checkbox'
               className = 'checkbox' 
               onChange = {e => chooseLabel(e)} 
               value = 'research' 
               checked = {labels.includes('research')}
            />
            research
         </p>
      </div>
   )
}
