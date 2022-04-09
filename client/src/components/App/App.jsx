// Инструменты
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

// Компоненты
import Home from '../Home/Home';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Reg from "../Reg/Reg";
import Login from "../Login/Login";
import Feedback from "../Feedback/Feedback";

function App() {
 return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
          <Home />
          <Feedback />
        <Routes>
          <Route path="/registration" element={<Reg />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </Provider>
 );
}

export default App;
