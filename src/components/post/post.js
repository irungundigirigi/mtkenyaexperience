'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './post.module.css';

const Post = ({ author, title, body, image_url, timestamp }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleImageSize = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.postContainer} onClick={toggleImageSize}>
            <div className={styles.authorContainer}>Posted by {author} on {timestamp}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.body}>{body}</div>
            {isExpanded && (
                <div className={styles.imageContainer}>
                    <img
                        src={image_url}
                        alt="Post Image"
                        className={styles.postImage}
                    />
                </div>
            )}
        </div>
    );
};

export default Post;
