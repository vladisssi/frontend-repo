import './styles/reset.css';
import './styles/common.css';
import { Header } from './components/header/Header';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>footer</footer>
    </div>
  );
}

export default App;
