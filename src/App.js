import React from 'react';
import Post from './Post';
import PostForm from './PostForm';

const posts = [
    { id: 1, name: 'Тест 1', description: 'Fugit eligendi dolorum numquam dignissimos velit.'},
    { id: 2, name: 'Тест 2', description: 'Fugit eligendi dolorum dignissimos velit.'},
    { id: 3, name: 'Тест 3', description: 'Fugit dolorum numquam dignissimos velit.'}
];

export default class App extends React.Component {
    render() {
        return (
                <div>
                <Post news={posts}/>
                <PostForm />
                </div>
        );
    }
}
