import OrderEntry from './order-entry';
import Blotter from './blotter';

import './App.scss';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

const App = () => (
  <div className="app">
    <Provider store={store}>
      <h1 className="app-title">Demo Blotter App</h1>

      <OrderEntry />
      <Blotter />
    </Provider>
  </div>
);

export default App;
