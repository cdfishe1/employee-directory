import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Table from './components/Table';


function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <Header />
      <Search />
      <Table />
    </div>
  );
}

export default App;