
import {Routes, Route} from 'react-router-dom/index';
import { Navbar } from './Component';
import {Home} from './Pages';



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
