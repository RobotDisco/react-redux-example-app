// I do not like this name, but everything else I think of is too verbose.
export const changeSubreddit = subreddit => ({
  type: "CHANGE_SUBREDDIT",
  subreddit
});

export const fetchSubreddit = () => ({
  type: "FETCH_SUBREDDIT"
});

export const loadSubreddit = (data) => ({
  type: "LOAD_SUBREDDIT",
  data
});
