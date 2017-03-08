import React from 'react';
import Post from './Post';
import PostForm from './PostForm';

export default class App extends React.Component {
    render() {
        return (
                <div>
                <Post />
                <PostForm />
                </div>
        );
    }
}
