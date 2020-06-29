import React, { useState } from 'react';
import { HomePage } from '../pages';
import { SearchFormContainer } from '../search';
import { ModalWindow } from '../modal-window'

export const AllListsWrapper = ({taskLists, setTaskLists}) => {

   let [currentTask, setCurrentTask] = useState({
      task: {id: 0, title: '', description: '', labels: ''}, 
      type: ''
   });
   let [searchResults, setSearchResults] = useState({});
   let [showSearchResults, setShowSearchResults] = useState(false);
   const [showModalWindow, setShowModalWindow] = useState(false);

   const addCard = (listName, newCard) => {
      const list = taskLists[listName];
      setTaskLists({...taskLists, [listName]: [...list, newCard]});

      if(searchResults[listName]) {
         const searchList = searchResults[listName];
         setSearchResults({...searchResults, [listName]: [...searchList, newCard]});
      }
   }

   const removeCard = (listName, cardId) => {
      const list = taskLists[listName].filter(({id}) => id !== cardId);
      setTaskLists({...taskLists, [listName]: list});

      if(searchResults[listName]) {
         const searchList = searchResults[listName].filter(({id}) => id !== cardId);
         setSearchResults({...searchResults, [listName]: searchList});
      }
   }

   const editCard = (listName, {id: cardId, ...card}) => {

      let list = taskLists[listName].map(item => {
         const { id } = item;
         
         if(id === cardId) {
            item = {...card, id};
         }

         return item;
      });
      setTaskLists({...taskLists, [listName]: list});

      if(searchResults[listName]) {
         let searchList = searchResults[listName].map(item => {
            const { id } = item;
            
            if(id === cardId) {
               item = {...card, id};
            }
   
            return item;
         });
         setSearchResults({...searchResults, [listName]: searchList});
      }
   }

   const moveCard = nextListName => {
      const {task, type: prevListName} = currentTask;

      if(prevListName !== nextListName) {

         let prevList = taskLists[prevListName].filter(({id}) => id !== currentTask.task.id);
         const nextList = taskLists[nextListName];
         const updatedTask = {
            ...task, 
            id: calcId(nextList)
         };

         setTaskLists({
            ...taskLists,
            [prevListName]: prevList,
            [nextListName]: [
               ...nextList, 
               updatedTask
            ]
         });

         if(searchResults[prevListName] && searchResults[nextListName]) {
            let searchPrevList = searchResults[prevListName].filter(({id}) => id !== currentTask.task.id);
            const searchNextList = searchResults[nextListName];

            setSearchResults({
               ...searchResults,
               [prevListName]: searchPrevList,
               [nextListName]: [
                  ...searchNextList, 
                  updatedTask
               ]
            });
         }
      }
   }

   const calcId = list => {
      let allId = [];

      if(list.length === 0) {
         return 1;
      }
      
      for(let card of list) {
         allId.push(card.id);
      }
      let biggestId = Math.max(...allId);
      return biggestId + 1;
   }
   
   return (
      <>
         <SearchFormContainer 
            taskLists = {taskLists} 
            showSearchResults  = {showSearchResults}
            setSearchResults = {setSearchResults}
            setShowSearchResults = {setShowSearchResults}
            setShowModalWindow = {setShowModalWindow} />
         {
               showModalWindow 
            ? <ModalWindow
                  setShowModalWindow = {setShowModalWindow}
                  taskLists = {taskLists}
                  addCard = {addCard} />
            : null
         }
         <HomePage
            taskLists = {!showSearchResults  ? taskLists : searchResults}
            addCard = {addCard}
            removeCard = {removeCard} 
            editCard = {editCard} 
            moveCard = {moveCard} 
            setCurrentTask = {setCurrentTask}
         />
      </>
   );
}
