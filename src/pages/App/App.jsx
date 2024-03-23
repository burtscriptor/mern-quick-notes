import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css'
import NewNote from '../NewNote/NewNote';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar';
import Note from '../../components/Note';


function App() {
 const [user, setUser] = useState (getUser());

  return (
    <main className="App">
     { user ? 
       <>
     
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/notes/new" element={<NewNote user={user}/> } />

            <Route path="/notes" element={<Note user={user} />}/>
          </Routes>
         
          
      </>
    :
    <AuthPage setUser={setUser} />
    }
    </main>
  )
}

export default App;
