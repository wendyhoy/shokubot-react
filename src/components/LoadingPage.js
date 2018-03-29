import React from 'react';

function LoadingPage () {
  return (
    <div className="uk-container">
      <header className="uk-margin-large-top uk-margin-large-bottom">
        <div className="uk-position-center" uk-spinner=""></div>
      </header>
    </div>
  );
}

export default LoadingPage;