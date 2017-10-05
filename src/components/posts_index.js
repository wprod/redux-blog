import React, {Component} from "react";
import _ from "lodash";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";
import {Link} from "react-router-dom";

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li key={post.id} className="list-group-item">
                    {post.title}
                </li>
            );
        });
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>Redux-Blog</h1>
                    <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a post
                    </Link>
                </div>
                <h3>Post-Index</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
