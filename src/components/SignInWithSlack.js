import React from 'react';

function SignInWithSlack () {

  const sign_in_with_slack_href = `https://slack.com/oauth/authorize?scope=identity.basic&client_id=305695056211.305695845171&redirect_uri=${encodeURIComponent('https://f101fc2f.ngrok.io/slack/users')}`;

  return (
    <a href={sign_in_with_slack_href}><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>
  );
}

export default SignInWithSlack;
