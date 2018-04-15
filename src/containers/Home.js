import { connect } from "react-redux";

import { changeSubreddit } from "../actions";
import { SubredditForm } from "../components/SubredditForm";

const mapStateToProps = state => ({
  subreddit: state.subreddit
});

const mapDispatchToProps = {
  changeSubreddit
};

export default connect(mapStateToProps, mapDispatchToProps)(SubredditForm);
