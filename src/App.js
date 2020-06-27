import React from 'react';
import { AllListsWrapper } from './components/all-lists-wrapper/AllListsWrapper';
import { Error } from './components/errors/Error';
import { Spinner } from './components/spinner/Spinner';
import { DataService } from './services/data-service';

class App extends React.Component {
  constructor() {
    super();
    this.dataService = new DataService();
    this.state = {
      taskLists: null, 
      loading: true, 
      error: false
    }
  }  

  componentDidMount() {
    this.getData();
  }

  componentDidCatch() {
    this.onError();
  }

  getData = async () => {
    if(this.state.taskLists === null) {
      this.dataService.getData()
      .then(result => {

        if(result.Backlog) {
          this.setState({taskLists: result, loading: false});

        }else {
          this.onError();
        }
      })
      .catch(this.onError);
    }
  }

  onError = () => {
    this.setState({error: true, loading: false});
  }

  setTaskLists = data => {
    this.setState({taskLists: data});
    this.dataService.updateData(data)
  }

  render() {

    const { taskLists, loading, error } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const errorComponent = error ? <Error /> : null;
    const listWrapper = 
        !loading && !error 
      ? <AllListsWrapper taskLists = {taskLists} setTaskLists = {this.setTaskLists} />
      : null;

    return (
      <div className = 'app'>
        {errorComponent}
        {spinner}
        {listWrapper}
      </div>

    )
  }
}

export default App;
