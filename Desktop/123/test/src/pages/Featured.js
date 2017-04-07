import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postsActions';
import Article from '../components/Article';


@connect((store) => {
  return {
    posts: store.post.posts,
  };
})

export default class Featured extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    const { posts } = this.props;
    //console.log(this.props.posts)
    const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    const Articles = posts.map((post, i) => <Article key={post.key} title={post.title} content={post.content} />);

    return (
      <div>
        <div className="row">{Articles}</div>
      </div>
    );
  }
}
