import React from 'react';

/* This is the point where I go completely off the rails and wind up generating
 * a react? redux? library that consists entirely of "dumb" form components with
 * an incredibly naive 1:1 mapping to form input widgets.
 * This is also where I then probably realize that either forms wreak havoc on
 * Redux state->prop model or that well-designed state structures & mappings
 * wind up making this really easy as long as you define the appropriate value
 * changer actions and submit actions.
 */
/*
 * Oh dear shai-hulud how would the submit action know about all the input
 * values that were sliced up and distributed into different components--oh
 * wait a minute the submit function would call an action and that action would
 * have access to the state so as long as there was a section for the form I suppose * this is ok although in a complicated web app this seems a bit dodgy but maybe
 * ... ok this is above my understanding so I'll just run with it.
 */


 /* That onClick seems incredibly dodgy b/c it is a side-effect.
  * But I'm pretending I don't know about react-router-redux just yet.
  */
export const SubredditForm = ({subreddit, changeSubreddit, history}) => (
  <div>
    <input onChange={(event) => changeSubreddit(event.target.value)} />
    <button onClick={(ignored) => history.push(`/r/${subreddit}`)}>GO</button>
  </div>
);
