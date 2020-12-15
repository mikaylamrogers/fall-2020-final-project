import React from 'react';

function LoginForm({ LoginFunction }) {
    return (
        <div className="Login">
            <form className="SignupForm" onSubmit={(e) => LoginFunction(e)}>
                <label htmlFor="loginEmail"><span class="Title">email</span></label>
                <input type="email" name="loginEmail" />

                <label htmlFor="loginPassword"><span class="Title">password</span></label>
                <input type="password" name="loginPassword" />

                <button>let me in</button>
            </form>
        </div>
    );
}

export default LoginForm;