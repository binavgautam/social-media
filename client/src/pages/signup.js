import { Link } from "react-router-dom";
import { useField } from "../hooks/useField";

export default function SignUp() {
  const username = useField();
  const name = useField();
  const email = useField();
  const password = useField();

  const onSubmit = (e) => {
    e.preventDefault();
    username.reset();
    password.reset();
    name.reset();
    email.reset();
  };
  return (
    <div className="container flex flex-col mx-auto max-w-screen-sm items-center h-screen justify-center">
      <div>
        <img
          className="flex mt-2 mb-4"
          src="/images/logo.png"
          alt="Instagram"
        />
      </div>

      <form onSubmit={onSubmit}>
        <input
          className="test-sm text-gray w-full mr-3 py-5 px-4 h-2 outline-none mb-2"
          placeholder="Full Name"
          {...name.fields}
        />
        <input
          className="test-sm text-gray w-full mr-3 py-5 px-4 h-2 outline-none mb-2"
          placeholder="Email id"
          {...email.fields}
        />
        <input
          className="test-sm text-gray w-full mr-3 py-5 px-4 h-2 outline-none mb-2"
          placeholder="Username"
          {...username.fields}
        />
        <input
          className="test-sm text-gray w-full mr-3 py-5 px-4 h-2 outline-none mb-2"
          placeholder="Password"
          {...password.fields}
        />
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-00 text-white font-bold py-2 px-4 rounded mx-5">
            Sign Up
          </button>
        </div>
      </form>
      <div className="py-5">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-700">
          Sign In
        </Link>
      </div>
    </div>
  );
}
