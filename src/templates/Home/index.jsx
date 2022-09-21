import React, { Component } from 'react';

// import PostCard from './components/PostCard';
import Posts from '../../components/Posts';
import Button from '../../components/Button';

import loadPosts from '../../utilities/load-posts';
import './styles.scss';

export default class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 5,
    titleSearched: '',
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    const { page, postsPerPage } = this.state;

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const {
      posts,
      allPosts,
      page,
      postsPerPage,
    } = this.state;

    this.setState({
      postsPerPage: postsPerPage + 5,
      posts: allPosts.slice(page, postsPerPage),
    });
  };

  searchForTitle = (e) => {
    const { titleSearched } = this.state;

    this.setState({ titleSearched: e.target.value }, () => {
      this.loadSearchedPosts();
    });
  };

  loadSearchedPosts = () => {
    const {
      titleSearched, allPosts, page, postsPerPage,
    } = this.state;

    const searchedPosts = [];

    if (titleSearched !== '' && titleSearched !== ' ' && titleSearched !== '  ') {
      for (let i = 0; i < allPosts.length; i++) {
        if (allPosts[i].title.includes(titleSearched)) {
          searchedPosts.push(allPosts[i]);
          this.setState({ posts: searchedPosts });
        }
      }
    }

    if (titleSearched === '' || titleSearched === ' ' || titleSearched === '  ') {
      this.setState({ posts: allPosts.slice(page, postsPerPage) });
    }
  };

  render() {
    const {
      posts,
      allPosts,
      titleSearched,
    } = this.state;

    return (
      <div className="container">
        <h1>
          Título pesquisado:
          {' '}
          {titleSearched}
        </h1>
        <input type="search" name="" id="" onChange={this.searchForTitle} />
        <Posts posts={posts} />
        <Button
          text="Load more posts"
          onClick={this.loadMorePosts}
        />
      </div>
    );
  }
}
