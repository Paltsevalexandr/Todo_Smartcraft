import React, { useState } from 'react';
import { SearchForm } from './SearchForm';
import './search.css';

export const SearchFormContainer = ({ 
   taskLists, 
   setSearchResults, 
   setShowHomePage, 
   showHomePage,
   setShowModalWindow
}) => {

   let [showInput, setShowInput] = useState(false);
   let [showMessage, setShowMessage] = useState(false);
 
   const search = searchWords => {
      let visibleCards = Object.assign({}, taskLists);
       
         for(let listName in visibleCards) {
         visibleCards[listName] = visibleCards[listName].filter(card => {
            let isFind = false;
            for(let value in card) {
 
               if(!isFind
               && Array.isArray(card[value])) {
 
                  for(let item of card[value]) {
                     if(item.toLowerCase().match(searchWords.toLowerCase())) {
                        isFind = true;
                     }
                  }
               }else if(!isFind 
               && typeof card[value] === 'string') {
                  if(card[value].toLowerCase().match(searchWords.toLowerCase())) {
                     isFind = true;
                  }
               }
            }
            return isFind;
         });
      }
      return visibleCards;
   }

   const validate = searchWords => {
      const regExp = /\S{2,}/g;
      return regExp.test(searchWords);
   }
   
   const submitFunctions = (e, searchWords) => {     
      if(!showInput) {
         setShowInput(true);
         e.preventDefault();

      }else if(showInput && validate(searchWords)) {
         setSearchResults(search(searchWords));
         setShowHomePage(false); 
         setShowMessage(false);
         e.preventDefault();

      }else {
         setShowMessage(true);
         e.preventDefault();
      }
   }

   return (
      <div className = 'searchWrap'>
         {
               showHomePage
            ?  null
            :  <>
                  <button 
                     className = 'clearFilterBtn' 
                     onClick = {() => {
                        setShowHomePage(true); 
                        setShowInput(false);
                     }}>
                        Go to all cards
                  </button>
                  <h2 className = 'searchTitle'>Search results</h2>
               </>
         }           
         <div className = 'searchFormWrap'>
            <p className = 'infoMessage'>
               {
                  showMessage 
                  ? 'You must type anything' 
                  : ''
               }
            </p>
            <button className = 'showModalWindowBtn' 
               onClick = {() => setShowModalWindow(true)}>
               +
            </button>
            <SearchForm
               submitFunctions = {submitFunctions}
               showInput = {showInput}
             />
         </div>
       </div>
    )
 }
 