import React from 'react';
import AddToSlack from './AddToSlack';
import SignInWithSlack from './SignInWithSlack';

function HomePage () {

  return (
    <main>
      <header>
        <h1>shokubot</h1>
      </header>
      <p>
        Welcome to shokubot
      </p>

      <AddToSlack />
      <SignInWithSlack />
    </main>
  );

}

export default HomePage;