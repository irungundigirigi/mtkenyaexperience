import React from 'react';
import Image from 'next/image'
import styles from './post.module.css';


const Post = async ({ author, title, body, timestamp }) => {
    return (
        <div className={styles.postContainer}>
            <div className={styles.authorContainer}>Posted by {author} on {timestamp}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.body}>{body}</div>
        </div>
    );
};

export default Post;
