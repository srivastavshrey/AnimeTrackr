import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { pageRoutes } from './Routes/routes';
import Header from 'Layout/Header';

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        {pageRoutes.map(({ id,path, Component }: any) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
