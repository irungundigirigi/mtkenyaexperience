import styles from './posts.module.css';
import Post from '../post/post';

async function getPosts() {
    const response = await fetch('https://mt-kenya-experience-api.vercel.app/posts');
    return response.json()
  }

const Posts = async () => {

    const posts = await getPosts()

    // Check if posts is not defined or empty
    if (!posts || posts.length === 0) {
        return <div>No posts found</div>;
    }

    return (
        <div className={styles.postsContainer}>
            {/* Map over the posts array and render Post components */}
            {posts.map((post, index) => (
                <Post
                    key={index} // Ensure each component has a unique key
                    author={post.author}
                    title={post.title}
                    body={post.body}
                    timestamp={post.created_at}
                />
            ))}
        </div>
    );
};
export default Posts;


