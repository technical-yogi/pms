import './App.css';
import Register from './Component/register';
import { Provider } from "react-redux";
import store from './store.js'



function App() {
  return (
    <Provider store={store}>
    <Register/>
    </Provider>
  );
}

export default App;
