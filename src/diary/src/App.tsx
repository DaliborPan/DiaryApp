import React from 'react';
import './App.css';
import { MainMenu } from './Components/Menu';
import { TaskList } from './Components/TaskList';
import { Footer } from './Components/Footer';
import { Provider } from 'mobx-react';
import { createStore } from './Stores/createStore';

const store = createStore();

function App() {
  return (
   <div className="App">
     <Provider {...store}>
        <MainMenu name="Diary"></MainMenu>
        <TaskList></TaskList>
        <Footer></Footer>
     </Provider>
      
   </div>
  );
}

export default App;
