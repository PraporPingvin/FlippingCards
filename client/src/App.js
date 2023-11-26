import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {PageViewSet} from './components/PageViewSet/PageViewSet';
import {PageCreateSet} from './components/PageCreateSet/PageCreateSet';

import { PageSelectSet } from './components/PageSelectSet/PageSelectSet';

import { FormCreateSet } from './components/FormCreateSet/FormCreateSet';
import { FormCreateCard } from './components/FormCreateCard/FormCreateCard';
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
          <Route path='/admin/createcard/:id' element={<FormCreateCard/>}/>
        <Route path="*" element={<PageSelectSet/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
