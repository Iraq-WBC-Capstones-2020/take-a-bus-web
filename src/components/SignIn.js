import React, { useRef, useContext, useEffect } from 'react';
import RedXBtn from './RedXBtn';
import OrSeperator from './OrSeperator';
import FacebookGoogleBtn from './FacebookGoogleBtn';
import AuthContext from '../providers/AuthProvider';
import PropTypes from 'prop-types';
export default function SignIn({ onClose }) {
  const actionString = 'Login';
  const formRef = useRef();
  const { user, signIn, authInProgress, authError } = useContext(AuthContext);

  useEffect(() => {
    if (user) onClose();
  }, [user, onClose]);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(formRef.current);
    signIn(form.get('email'), form.get('password'));
  };
  return (
    <div className="container relative grid grid-cols-12 bg-white my-32 rounded-lg pt-16">
      <div className="col-span-6 flex flex-col pl-10 my-auto">
        <div>
          <h1 className="text-2xl font-bold pb-4">Login Now</h1>
        </div>
        <form ref={formRef} onSubmit={handleLogin}>
          <div>
            <div className="text-xs text-red-500">
              {authError ? authError.message : ''}
            </div>
            <input
              className="mt-8 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid border-2 border-gray-500"
              aria-label="Email Address"
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
          <div>
            <input
              className="mt-8 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid border-2 border-gray-500"
              aria-label="Password"
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <div className="flex flex-row-reverse">
            <a href="#forgetpass" className="mt-2">
              Forgot Password?
            </a>
          </div>
          <div>
            <button
              aria-label="Login"
              type="submit"
              className="btn-md btn primary boxshadow"
              disabled={authInProgress}
            >
              {!authInProgress && 'Login'}
              {authInProgress && '...'}
            </button>
          </div>
          <div className="py-6">
            <p className="text-sm">
              Not on Take a Bus yet?&nbsp;
              <a href="#signup" className="text-primary">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="col-span-1 flex justify-end">
        <OrSeperator />
      </div>
      <div className="col-span-5 flex flex-col w-100 justify-center items-start px-5">
        <FacebookGoogleBtn actionString={actionString} />
        <div className="absolute right-0 top-0">
          <RedXBtn onClick={onClose} />
        </div>
      </div>
    </div>
  );
}
SignIn.propTypes = {
  onClose: PropTypes.func,
};
