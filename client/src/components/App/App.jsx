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
import ProfileStudent from "../ProfileStudent/ProfileStudent";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import Feedback from "../Feedback/Feedback";
import ImgBlock from "../ImgBlock/ImgBlock";

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
          <Route path="/profile" element={<ProfileStudent />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </Provider>
 );
}

export default App;
