import React from 'react';

function CreateAccountForm({ CreateAccountFunction }) {
    return (
        <div>
            <form className="SignupForm" onSubmit={(e) => CreateAccountFunction(e)} >
                <label htmlFor="createEmail"><span class="Title">email</span></label>
                <input type="email" name="createEmail" />

                <label htmlFor="createPassword"><span class="Title">password</span></label>
                <input type="password" name="createPassword" />
                
                <button class="SubmitButton">i want free stuff</button>
            </form>
        </div>
    );
}

export default CreateAccountForm;