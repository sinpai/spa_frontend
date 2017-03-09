import React from 'react';

export default class Post extends React.Component {
    render() {
        let postsdata = this.props.news.map((item) => {
            return (
                <div key = {item.id}>
                  <p>{item.name}:</p>
                  <p>{item.description}</p>
                </div>
            );
        })
        return (
            <div>
              {postsdata}
            </div>
        )
    }
}

Post.propTypes = {
    news: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string
    }))
}
