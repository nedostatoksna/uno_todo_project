import { useState } from 'react';
import './App.css';
import { AppContext } from './context/context';
import StartPage from './components/StartPage';
import TodoApp from './components/TodoApp';
import { useSelector } from 'react-redux';

function App() {

  const [isVisible, setIsVisible] = useState(true);
  const context = useSelector(state => state.userPanelUI);

  const contextObj = {
    palette: context.palette,
    lang: context.lang,
    mode: context.mode
  };
  
  return (
    <>
    <AppContext.Provider value={contextObj}>
      {
        isVisible
          ? <StartPage setIsVisible={setIsVisible} /> :  <TodoApp /> 
      }
    </AppContext.Provider>
    </>
  );
}

export default App;
