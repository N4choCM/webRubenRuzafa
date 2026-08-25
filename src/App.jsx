import { BrowserRouter as Router } from 'react-router-dom';
import { AppStateProvider } from './state/AppProvider';
import MainRoutes from './routes/MainRoutes';
import PageMeta from './components/core/PageMeta';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App() {
  return (
    <AppStateProvider>
      <PageMeta />
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
