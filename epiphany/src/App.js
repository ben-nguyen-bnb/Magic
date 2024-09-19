import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { UsersService } from './service/users';
import HomeComponent from './pages/homeComponent'
import LoginComponent from './pages/loginComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginComponent />}></Route>
        <Route path="Home" element={<HomeComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}