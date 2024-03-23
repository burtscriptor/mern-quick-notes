import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css'
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar';
import Note from '../Note/Note';


function App() {
 const [user, setUser] = useState (getUser());

  return (
    <main className="container">
     { user ? 
       <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Note user={user} />}/>
          </Routes>   
      </>
    :
    <AuthPage setUser={setUser} />
    }
    </main>
  );
};

export default App;
