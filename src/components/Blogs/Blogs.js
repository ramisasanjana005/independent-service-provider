import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Blogs</h2>

            <h3>Difference between authorization and authentication</h3>
            <p>The identity of users is validated during the authentication process before they are granted access to the system whereas the authority of the individual or user to access the resources is evaluated during the authorisation procedure.
                Users or individuals are validated during the authentication procedure. However, Users or individuals are verified during the authorization procedure.</p>

            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>I am using Firebase because it provides backend services and has easy-to-use SDKs and also has ready-made UI libraries to help authenticate users to my site. It supports authentication using passwords, mobile numbers and other identity providers such as Google, Twitter, Facebook etc.
                Alternatives to Firebase could be Parse, Flutter etc.</p>

            <h3>What other services does firebase provide other than authentication</h3>
            <p>Firebase provides a range of services other than authentication. Some of these are- Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics etc.</p>
        </div>
    );
};

export default Blogs;