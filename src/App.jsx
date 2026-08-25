import { BrowserRouter as Router } from 'react-router-dom';
import { AppStateProvider } from './state/AppProvider';
import MainRoutes from './routes/MainRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App() {
  return (
    <AppStateProvider>
      <Router>
        <div className="app">
          <main>
            <MainRoutes />
          </main>
        </div>
      </Router>
    </AppStateProvider>
  );
}

export default App;
