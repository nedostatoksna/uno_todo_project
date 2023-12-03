import { useState } from 'react';
import './App.css';
import { AppContext } from './context/context';
import StartPage from './components/StartPage';
import TodoApp from './components/TodoApp';
import { useSelector } from 'react-redux';
import GlobalStyle from './globalStyles';

function App() {

  const [isVisible, setIsVisible] = useState(true);
  const context = useSelector(state => state.userPanelUI);

  const contextObj = {
    palette: context.palette,
    lang: context.lang,
    mode: context.mode,
    userName: context.userName,
    userInitials: context.userInitials,
    userEmail: context.userEmail,
  };
  
  return (
    <>
    <GlobalStyle />
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
