import React from 'react';

import './Post.css';

function Comment({ comment }) {
    return (
        <div className="comment">
            <img className="avatar" src={comment.author.avatar} />
            <p>
                <span>{comment.author.name}</span>
                {comment.content}
            </p>
        </div>
    );
}

export default function Post({ author, date, content, comments }) {
    return (
        <div className="post">
            <div className="header">
                <img className="avatar" src={author.avatar} />
                <div className="detail">
                    <span>{author.name}</span>
                    <span>{date}</span>
                </div>
            </div>

            <p className="content">
                {content}
            </p>


            {comments.map(comment => (<Comment key={comment.id} comment={comment} />))}


        </div>
    );
}