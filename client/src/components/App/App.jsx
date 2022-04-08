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

function App() {
 return (
   <Provider store={store}>
     <BrowserRouter>
        <Header />
        {/* <Reg /> */}
        {/* <Login />  */}
        {/* <Home /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/profile' element={<ProfileStudent />} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>

        {/* <Footer /> */}
     </BrowserRouter>
   </Provider>
 );
}
 
export default App;
