import { AppRouter } from "./routers/AppRouter";
import { AuthProvider } from "./auth/AuthContext"

import './css/bootstrap.css'

function App() {
  return (
    <AuthProvider>
          <AppRouter />
    </AuthProvider>
  );
}

export default App;
