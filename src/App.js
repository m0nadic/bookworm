import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, login, logout } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div className="container my-4">
      <h1>Hello World</h1>
      {isLoggedIn && <h2>Logged In as Guest</h2>}
      <p>
        Counter Value: <span className="badge bg-primary">{counter}</span>{" "}
      </p>
      <div className="row">
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(increment(5))}
          >
            +
          </button>
        </div>

        <div className="col">
          <button
            className="btn btn-danger"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
      </div>
      <div className="row my-2">
        {!isLoggedIn && (<button className="btn btn-primary" onClick={() => dispatch(login())}>
          Login
        </button>)}
        {isLoggedIn && (<button className="btn btn-danger" onClick={() => dispatch(logout())}>
          Logout
        </button>)}
      </div>
    </div>
  );
}

export default App;
