import styles from './posts.module.css';
import Post from '../post/post'
import {auth} from "../../auth"

async function getPosts() {
    const response = await fetch('https://mt-kenya-experience-api.vercel.app/posts');
    return response.json()
  }

const Posts = async () => {

    const posts = await getPosts()
    const session = await auth()

    // Check if posts is not defined or empty
    if (!posts || posts.length === 0) {
        return <div>No posts found</div>;
    }

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
                    timestamp={post.created_at}
                />
                </div>
            ))}
        </div>
    );
};
export default Posts;


