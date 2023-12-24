import { useState } from 'react';
import { AppContext } from './context/context';
import StartPage from './components/StartPage';
import TodoApp from './components/TodoApp';
import { useSelector } from 'react-redux';
import GlobalStyle from './globalStyles';

function App() {

  const [isVisible, setIsVisible] = useState(true);
  const context = useSelector(state => state.userPanelUI);

  return (
    <>
    <GlobalStyle />
    <AppContext.Provider value={context}>
      {
        isVisible
          ? <StartPage setIsVisible={setIsVisible} /> 
          : <TodoApp />                                            
      }
    </AppContext.Provider>
    </>
  );
}

export default App;
