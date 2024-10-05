import './App.css';
import { Component } from 'react';
import HomeComponent from './pages/homeComponent'
import LoginComponent from './pages/loginComponent';
import CreateUserComponent from './pages/createUserComponent';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginComponent />}></Route>
        <Route path="Home" element={<HomeComponent />}></Route>
        <Route path="CreateAccount" element={<CreateUserComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}