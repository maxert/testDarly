import './style.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {AuthCheck} from "reactfire";
import Login from "./component/auth/Login";
import Home from "./component/layout/Home";
import {setAuthListener} from "./store/firebaseSlice";
import {useDispatch} from "react-redux";


function App() {
    const dispatch = useDispatch();
    (async () => await dispatch(setAuthListener()))();

    return (
        <Router>
            <div className="App">
                <Switch>
                    <AuthCheck fallback={<Login/>}>
                        <Route path="/" component={Home}/>
                    </AuthCheck>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
