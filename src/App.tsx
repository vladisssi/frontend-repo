import './styles/reset.css';
import './styles/common.css';
import { Header } from './components/header/Header';
import { Outlet } from 'react-router';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
