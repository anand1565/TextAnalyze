import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import TermsAndConditions from './components/TermsAndConditions';
import { useState } from 'react';
import Alert from './components/Alert';
import PageNotFound from './components/PageNotFound';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#102237';
      ShowAlert('Dark mode has been enabled', 'success');
      document.title = 'Text Analyzer - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      ShowAlert('Light mode has been enabled', 'warning');
      document.title = 'Text Analyzer - Light Mode';
    }
  }

  return (
    <>
      <Navbar title="TextAnalyzer" home='HOME' about='ABOUT' mode={mode} toggleMode={toggleMode} />
      <Alert mode={mode} alert={alert} />
      <div className="container">
        <Routes>
          <Route path='/' exact element={<TextForm mode={mode} ShowAlert={ShowAlert} />} />
          <Route path='/Login' exact element={<Login />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/signup' exact element={<SignUp />} />
          <Route path='*' exact element={<PageNotFound />} />
          <Route path='/conditions' exact element={<TermsAndConditions />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
