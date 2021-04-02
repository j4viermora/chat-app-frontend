import { AppRouter } from "./routers/AppRouter";
import { AuthProvider } from "./auth/AuthContext"

import './css/bootstrap.css'
import { SocketProvider } from "./context/SocketContext";
import { ChatProvider } from "./context/chat/ChatContext";

function App() {
  return (

    <AuthProvider>
        <SocketProvider>
          <ChatProvider>
            <AppRouter />
          </ChatProvider>
        </SocketProvider>
      </AuthProvider>
  );
}

export default App;
