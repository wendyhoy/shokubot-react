import React from 'react';

function SignInWithSlack () {

  const REDIRECT_URL = `${process.env.REACT_APP_DOMAIN}/slack/users`
  const HREF = `https://slack.com/oauth/authorize?scope=identity.basic&client_id=305695056211.305695845171&redirect_uri=${encodeURIComponent(REDIRECT_URL)}`;

  return (
    <a href={HREF}>
      <img 
        alt="Sign in with Slack" 
        height="40" 
        width="172" 
        src="https://platform.slack-edge.com/img/sign_in_with_slack.png" 
        srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" />
    </a>
  );
}

export default SignInWithSlack;
