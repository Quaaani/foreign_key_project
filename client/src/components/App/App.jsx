// Инструменты
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import style from "./App.module.css"

// Компоненты
import Home from '../Home/Home';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Reg from "../Reg/Reg";
import Login from "../Login/Login";
import ProfileStudent from "../ProfileStudent/ProfileStudent";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import Feedback from "../Feedback/Feedback";
import ImgBlock from "../ImgBlock/ImgBlock";
import Profile from "../Profile/Profile";
import MapList from "../MapList/MapList";

function App() {

 return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Reg />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/profile" element={<Profile />} />
            <Route path="/mymap" element={<MapList />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </Provider>
 );
}

export default App;
