import React from 'react';

function AddToSlack () {

  const add_to_slack_href = `https://slack.com/oauth/authorize?client_id=305695056211.305695845171&scope=bot,commands,chat:write:bot&redirect_uri=${encodeURIComponent('https://f101fc2f.ngrok.io/slack/teams')}`;

  return (
    <a href={add_to_slack_href}><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
  );
}

export default AddToSlack;
