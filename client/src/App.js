import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {PageViewSet} from './components/PageViewSet';
import {PageCreateSet} from './components/PageCreateSet';

import { PageSelectSet } from './components/PageSelectSet';

import { FormCreateSet } from './components/FormCreateSet';
import { FormCreateCard } from './components/FormCreateCard';
import './App.css';


// !!!
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSelectSet/>} />
        <Route path="/set/:id" element={<PageViewSet/>} />
        <Route path="/admin" element={<PageCreateSet/>} />
          <Route path='/admin/createset' element={<FormCreateSet/>}/>
          <Route path='/admin/createcard' element={<FormCreateCard/>}/>
        <Route path="*" element={<PageSelectSet/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
