import ThemeProvider from '@app/theme/ThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '@app/routes/AppRoutes';
import { Provider } from 'react-redux';
import store from '@app/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;
