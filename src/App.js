import React, {useState} from 'react';
import {ListContainer} from './components/list/ListContainer.js';

function App() {
  const getBacklogList = [{title: 'title', description: 'dest', status: 'status', label: 'log', id: 1}];
  const getSelectedList = [{title: 'title', description: 'dest', status: 'status', label: 'sel', id: 1}];
  const getRunningList = [{title: 'title', description: 'dest', status: 'status', label: 'run', id: 1}];
  const getEvaluatingList = [{title: 'title', description: 'dest', status: 'status', label: 'ev', id: 1}];
  const getLiveList = [{title: 'title', description: 'dest', status: 'status', label: 'live', id: 1}];

  const allTaskLists = {
    Backlog: getBacklogList,
    Selected: getSelectedList,
    Running: getRunningList,
    Evaluating: getEvaluatingList,
    Live: getLiveList
  }
 
  let [lists, setAllLists] = useState(allTaskLists);

  let [currentTask, setCurrentTask] = useState({
    task: {id: 0, title: '', description: '', label: '', status: ''}, 
    type: ''
  });

  const setList = (listName) => {
    const list = lists[listName];
    setAllLists({...lists, [listName]: [...list, currentTask]});
  }

  const moveCard = nextListName => {
    const {task, type: prevListName} = currentTask;

    if(prevListName === nextListName) {
      return lists;
    }

    let prevList = lists[prevListName];
    const nextList = lists[nextListName];

    prevList = prevList.filter(({id}) => id !== currentTask.task.id);

    return {
      ...lists,
      [prevListName]: prevList,
      [nextListName]: [
        ...nextList, 
        {
          ...task, 
          status: nextListName.toLowerCase(),
          id: calcId(nextList)
        }
      ]
    };
  }

  const calcId = list => {
    let allId = [];

    if(list.length === 0) {
      return 1;
    }

    for(let card of list) {
      allId.push(card.id);
    }
    const biggestId = Math.max(...allId);
    return biggestId + 1;
  }
  
  return (
    <div className = "App">
    <button onClick = {() => console.log(lists)}>push</button>
      <div className = 'listsWrapper'>
        <ListContainer 
          list = {lists.Backlog} 
          setList = {setList} 
          moveCard = {nextListName => setAllLists(moveCard(nextListName))}
          header = 'Backlog' 
          setCurrentTask = {setCurrentTask}
        />
        <ListContainer
          list = {lists.Selected} 
          setList = {setList} 
          moveCard = {nextListName => setAllLists(moveCard(nextListName))}
          header = 'Selected'
          setCurrentTask = {setCurrentTask} 
        />
        <ListContainer
          list = {lists.Running} 
          setList = {setList} 
          moveCard = {nextListName => setAllLists(moveCard(nextListName))}
          header = 'Running'
          setCurrentTask = {setCurrentTask} 
        />
        <ListContainer 
          header = 'Evaluating'
          list = {lists.Evaluating} 
          setList = {setList} 
          moveCard = {nextListName => setAllLists(moveCard(nextListName))}
          setCurrentTask = {setCurrentTask} 
        />
        <ListContainer 
          header = 'Live'
          list = {lists.Live} 
          setList = {setList} 
          moveCard = {nextListName => setAllLists(moveCard(nextListName))}
          setCurrentTask = {setCurrentTask} 
        />
      </div>
    </div>
  );
}

export default App;

/*
        <ListContainer list = {runningList} setList = {setRunningList} header = 'Running' />
        <ListContainer list = {evaluatingList} setList = {setEvaluatingList} header = 'Evaluating' />
        <ListContainer list = {liveList} setList = {setLiveList} header = 'Live' />*/