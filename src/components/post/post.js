import React from 'react';
import Image from 'next/image'
import styles from './post.module.css';


const Post = async ({ author, title, body,image_url, timestamp }) => {
    return (
        <div className={styles.postContainer}>
            <div className={styles.authorContainer}>Posted by {author} on {timestamp}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.body}>{body}</div>
            <div className={styles.img}><img className={styles.postImage} width='200' height='100' src={image_url}/></div>
        </div>
    );
};

export default Post;
