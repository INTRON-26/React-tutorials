
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const loginhandler = async () => {
        await signInWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                const user = userCredential;
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <Header />
            <div>
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={loginhandler}>Login</button>
            </div>
        </div>
    )
}

export default Login;
