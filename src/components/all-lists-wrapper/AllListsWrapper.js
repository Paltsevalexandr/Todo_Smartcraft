import React, { useState } from 'react';
import { ListContainer } from '../list-container/ListContainer.js';
import { SingleCard } from '../single-card/SingleCard';

export const AllListsWrapper = ({taskLists, setTaskLists}) => {  

  let [currentTask, setCurrentTask] = useState({
    task: {id: 0, title: '', description: '', labels: '', status: ''}, 
    type: ''
  });

  const editCard = (listName, {id: cardId, ...card}) => {
    let list = taskLists[listName];

    list = list.map(item => {
      const { id } = item;
      
      if(id === cardId) {
        item = {...card, id};
      }

      return item;
    });
    setTaskLists({...taskLists, [listName]: list});
  }

  const addCard = (listName, newCard) => {
    const list = taskLists[listName];
    setTaskLists({...taskLists, [listName]: [...list, newCard]});
  }

  const removeCard = (listName, cardId) => {
    const list = taskLists[listName].filter(({id}) => id !== cardId);
    setTaskLists({...taskLists, [listName]: list});
  }

  const moveCard = nextListName => {
    const {task, type: prevListName} = currentTask;

    if(prevListName === nextListName) {
      return taskLists;
    }

    let prevList = taskLists[prevListName];
    const nextList = taskLists[nextListName];

    prevList = prevList.filter(({id}) => id !== currentTask.task.id);

    setTaskLists({
      ...taskLists,
      [prevListName]: prevList,
      [nextListName]: [
        ...nextList, 
        {
          ...task, 
          status: nextListName.toLowerCase(),
          id: calcId(nextList)
        }
      ]
    });
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

  const listsKeys = Object.keys(taskLists);

  return (
    <div className = 'listsWrapper'>
      {
        listsKeys.map((listName, index) => {
          return (
            <ListContainer 
              list = {taskLists[listName]} 
              addCard = {addCard} 
              moveCard = {moveCard}
              header = {listName} 
              key = {index} >
              {
                taskLists[listName].map((card, index) => {
                  return (
                    <SingleCard key = {index}
                        card = {card}
                        listName = {listName}
                        setCurrentTask = {setCurrentTask}
                        editCard = {editCard}
                        removeCard = {removeCard} />
                  )
                })
              }
            </ListContainer>
          )
        })
      }
    </div>
  );
}
