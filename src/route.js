import React from 'react';
import {
  Routes,
  Route 
} from "react-router-dom";
import App from './App';
import Timer from './pages/CountDownTimer'
import Timer3 from './pages/CountDownTimer3'
import NotFound from './pages/NotFound'




function route() {
    return (
        <Routes>
            <Route path={"/"} element={<App />}></Route>
            <Route path={"/timer"} element={<Timer timeInit={{hours:0,minutes:2,seconds:30}} />}></Route>
            <Route path={"/timer3"} element={<Timer3 timeInit={{hours:0,minutes:3,seconds:0}} />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    )
}

export default route
