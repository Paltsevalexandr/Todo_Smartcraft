import React from 'react';
import { AllListsWrapper } from './components/all-lists-wrapper/AllListsWrapper';
import { ErrorBoundary } from './components/error-boundary/ErrorBoundary';
import { Spinner } from './components/spinner/Spinner';
import { DataService } from './services/data-service';

class App extends React.Component {
   constructor() {
      super();
      this.dataService = new DataService();
      this.state = {
         taskLists: null, 
         loading: true, 
         error: {isError: false, status: 0},
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
               this.onError(result.message);
            }
         })
         .catch(result => this.onError(result.message));
      }
   }

   onError = (status = 0) => {
      this.setState({error: {isError: true, status}, loading: false});
   }

   setTaskLists = data => {
      this.setState({taskLists: data});
      this.dataService.updateData(data)
   }

   render() {
      const { taskLists, loading, error } = this.state;

      const spinner = loading ? <Spinner /> : null;
      const errorComponent = error.isError ? <ErrorBoundary status = {error.status} /> : null;
      const listWrapper = 
            !loading && !error.isError 
         ? <AllListsWrapper taskLists = {taskLists} setTaskLists = {this.setTaskLists} />
         : null;

      return (
         <div className = 'app' >
            {errorComponent}
            {spinner}
            {listWrapper}
         </div>

      )
   }
}

export default App;
