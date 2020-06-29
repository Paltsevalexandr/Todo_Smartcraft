import React from 'react';

export const Radiobuttons = ({ listName, setListName }) => {
   return (
      <div className = 'radiobuttonsWrap'>
         <span>
            <input type = 'radio' 
            checked = {listName === 'Backlog'}
            onChange = {() => setListName('Backlog')}
            value = 'Backlog' />
            Backlog
         </span>
         <span>
            <input type = 'radio' 
            checked = {listName === 'Selected'}
            onChange = {() => setListName('Selected')}
            value = 'Selected' />
            Selected
         </span>
         <span>
            <input type = 'radio' 
            checked = {listName === 'Running'}
            onChange = {() => setListName('Running')}
            value = 'Running' />
            Running
         </span>
         <span>
            <input type = 'radio' 
            checked = {listName === 'Evaluating'}
            onChange = {() => setListName('Evaluating')}
            value = 'Evaluating' />
            Evaluating
         </span>
         <span>
            <input type = 'radio' 
            checked = {listName === 'Live'}
            onChange = {() => setListName('Live')}
            value = 'Live' />
            Live
         </span>
      </div>
   )
}