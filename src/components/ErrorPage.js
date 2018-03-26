import React from 'react';

function ErrorPage (props) {

  const { error } = props;

  return (
    <div className="uk-container">
      <header className="uk-margin-large-top uk-margin-large-bottom">
        <h1 className="uk-heading-primary">{`${error.status}: ${error.json.type}`}</h1>
      </header>
    </div>
  );
}

export default ErrorPage;