import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/firebaseSlice";


const Login = () => {
    const isLogin = useSelector(state => state.userAuth.initialized)

    if (!isLogin) {
        return <div>Loading...</div>;
    }

    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();
    const onSubmit = data => {
        console.log(data);
        dispatch(login({email: data.email, password: data.password}));
    };

    return <div className={"container_login"}>
        <form className={"form_login"} onSubmit={handleSubmit(onSubmit)}>

            <input type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
            {errors.email && <span>This field is email</span>}
            <input type="text" placeholder="Password" {...register("password", {required: true, min: 1})} />
            {errors.password && <span>This field is required</span>}

            <input type="submit"/>
        </form>
    </div>
}
export default Login;