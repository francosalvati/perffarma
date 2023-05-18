
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'primeflex/primeflex.css';
import { Toolbar } from './pages/Header/ToolBar/Toolbar';
import { Home } from './pages/home/Home';
// import { Contact } from './pages/Contact/Contact';
import { I18nextProvider } from 'react-i18next';
import { Clients } from './pages/Clients/Clients';
import i18n from './i18/i18';

function App() {


  return (
    <I18nextProvider i18n={i18n}>
      <Toolbar />
      <Home />
      <Clients/>
      {/* <Contact /> */}
    </I18nextProvider>
  )
}

export default App
