import { Component } from "react";

import "./styles.css";

import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Posts",
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 6,
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
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    return (
      <section className="container">
        <h1 className="title">Olá {this.state.name}</h1>
        <Posts posts={posts} />
        <div className="button-container">
          <Button
            text="Load more posts"
            disabled={noMorePosts}
            onClick={this.loadMorePosts}
          />
        </div>
      </section>
    );
  }
}
