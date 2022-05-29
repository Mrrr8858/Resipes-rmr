import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header-Search';
import MenuContainer from './components/menuContainer';
import DetailContainer from './components/detailContainer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Container>
          <Routes>
            <Route exact path="/menu" element={<MenuContainer />}></Route>
            <Route path="menu/:id" element={<DetailContainer/>}></Route>
            <Route path="*" element={<h2>Ресурс не найден</h2>} />
          </Routes>
        </Container>
      </div>      
    </BrowserRouter>
  );
}

export default App;
