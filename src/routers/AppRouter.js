import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import { ChatPage }     from '../pages/ChatPage';
import { AouthRouter } from './AouthRouter';
import '../css/Login_register.css'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                        <Route path="/auth" component={ AouthRouter} />
                        <Route exact path="/" component={ ChatPage } />

                        <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
