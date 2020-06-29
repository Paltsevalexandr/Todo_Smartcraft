import React, { useState } from 'react';

export const SearchForm = ({ submitFunctions, showInput }) => {

   let [searchWords, setSearchWords] = useState('');

   return (
      <form className = 'searchForm'>
         <button 
            type = 'submit' 
            className = 'searchBtn'
            onClick = {e => submitFunctions(e, searchWords)} />
         {
               showInput
            ? <input type = 'text' required
               autoFocus
               value = {searchWords} 
               onChange = {e => setSearchWords(e.target.value)} />
            :  null
         }
      </form>
   )
}
