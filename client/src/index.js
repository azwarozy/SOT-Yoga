import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import YogaClassPage from "./YogaClassPage";
import AboutUsPage from "./AboutUsPage";
import HomePage from "./HomePage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Layout from "./Layout";
import ClassSchedule from "./components/ClassSchedule";
import BookingPage from "./BookingPage";
import YogaInfoPage from "./YogaInfoPage";
import LoginPage from "./LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage/>}/>
          <Route path="about" element={<AboutUsPage />} />
          <Route path="classes" element={<YogaClassPage />} />
          <Route path="schedule" element={<ClassSchedule/>}/>
          <Route path="bookingpage" element={<BookingPage/>}/>
          <Route path="yogainfo" element={<YogaInfoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
