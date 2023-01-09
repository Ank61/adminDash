import './App.css';
import { NavLink, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from './Component/Pages/home';
import User from './Component/Pages/user';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './Component/Saga/RootSaga/rootSaga';
import { createStore,applyMiddleware } from 'redux';
import reducer from './Component/Saga/Reducer/reducer';


const sagaMiddleWare = createSagaMiddleware()
const store = createStore(reducer,applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(rootSaga)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/user" element={<User/>}></Route>
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
