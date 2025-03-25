import { Component } from "react";

import "./styles.css";

import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Adriano",
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 2,
    };
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <h1 className="title">Olá {this.state.name}</h1>
        <Posts posts={posts} />
        <Button text="Load more posts" onClick={this.loadMorePosts} />
      </section>
    );
  }
}
