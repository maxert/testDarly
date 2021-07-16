import {useDispatch} from "react-redux";
import {logout} from "../../store/firebaseSlice";

const Home = () => {
    const dispatch = useDispatch();

    return <div>
        <div className={"button_logout"} onClick={() => dispatch(logout())}>Logout</div>
        <h1>Это Главная страница</h1>
    </div>
}
export default Home;