import styles from './posts.module.css';
import Post from '../post/post'

const Posts =  ({session, posts} ) => {


    return (
        <div className={session ? styles.posts : styles.psts}>
            {/* Map over the posts array and render Post components */}

            {posts.map((post, index) => (
                <div className={styles.post}>
                <Post
                    key={index} // Ensure each component has a unique key
                    author={post.author}
                    title={post.title}
                    body={post.body}
                    image_url = {post.image_url}
                    timestamp={post.timestamp}
                />
                </div>
            ))}
        </div>
    );
};
export default Posts;


