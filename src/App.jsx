
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'primeflex/primeflex.css';
import { Toolbar } from './pages/Header/ToolBar/Toolbar';
// import { Contact } from './pages/Contact/Contact';
import { I18nextProvider } from 'react-i18next';
import { Clients } from './pages/Clients/Clients';
import i18n from './i18/i18';
import { Services } from './pages/Services/Services';
import { Contact } from './pages/Contact/Contact';
import { Home } from './pages/Home/Home';

function App() {


  return (
    <I18nextProvider i18n={i18n}>
      <Toolbar />
      <Home />
      <Services/>
      <Clients/>
      <Contact/>
    </I18nextProvider>
  )
}

export default App
