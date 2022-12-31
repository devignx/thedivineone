import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';
import Wallet from './pages/Wallet';
import ComingSoon from './pages/ComingSoon';
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ComingSoon/>} path="/"/>
        <Route element={<Chat/>} path="/chat"/>
        <Route element={<Wallet/>} path="/wallet"/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
