import { AppRouter } from "./routers/AppRouter";
import { AuthProvider } from "./auth/AuthContext"

import './css/bootstrap.css'
import { SocketProvider } from "./context/SocketContext";

function App() {
  return (
      <AuthProvider>
        <SocketProvider>
            <AppRouter />
        </SocketProvider>
      </AuthProvider>
  );
}

export default App;
