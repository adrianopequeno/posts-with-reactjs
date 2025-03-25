import { Component } from "react";

import "./styles.css";

import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Adriano",
      posts: [],
      allPosts: [],
    };
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos,
      allPosts: postsAndPhotos,
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <h1 className="title">Olá {this.state.name}</h1>
        <Posts posts={posts} />
      </section>
    );
  }
}
