import React, {useState} from 'react';
import './search.css';

export const SearchForm = ({ 
  taskLists, 
  setSearchResults, 
  setShowHomePage, 
  showHomePage 
}) => {

  let [searchWords, setSearchWords] = useState('')
 
  const search = () => {
    let visibleCards = Object.assign({}, taskLists);
     
      for(let listName in visibleCards) {
      visibleCards[listName] = visibleCards[listName].filter(card => {
        let isFind = false;
        for(let value in card) {
 
          if(!isFind
          && Array.isArray(card[value])) {
 
            for(let item of card[value]) {
              if(item.toLowerCase().match(searchWords)) {
                isFind = true;
              }
            }
          }else if(!isFind 
          && typeof card[value] === 'string') {
            if(card[value].toLowerCase().match(searchWords)) {
              isFind = true;
            }
          }
        }
        return isFind;
      });
    }
    return visibleCards;
  }
   
  return (
    <div className = 'searchWrap'>
      {
          showHomePage
        ? null
        : <>
            <button 
              className = 'clearFilterBtn' 
              onClick = {() => {
                setSearchResults(taskLists);
                setShowHomePage(true);
              }}>
                Back to all cards
            </button>
            <h2 className = 'searchMessage'>Search results</h2>
          </>
      }
      <form className = 'searchForm'>
        <button 
          type = 'submit' 
          className = 'searchBtn'
          onClick = {e => {
            setSearchResults(search());
            setShowHomePage(false); 
            e.preventDefault()}}>
        </button>
        <input type = 'text' value = {searchWords} onChange = {e => setSearchWords(e.target.value.toLowerCase())} />
      </form>
     </div>
   )
 }
 