import { AppRouter } from "./routers/AppRouter";
import { AuthProvider } from "./auth/AuthContext";

import './css/bootstrap.css'
import { SocketProvider } from "./context/SocketContext";
import { ChatProvider } from "./context/chat/ChatContext";

import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

function App() {
  return (

          <ChatProvider>
            <AuthProvider>
                <SocketProvider>
                    <AppRouter />
                </SocketProvider>
              </AuthProvider>
          </ChatProvider>
  );
}

export default App;
