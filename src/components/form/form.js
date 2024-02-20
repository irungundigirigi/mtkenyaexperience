'use client'
import { useState } from 'react';
import styles from './form.module.css';
import { auth } from '../../auth';

const Form = ({ session }) => {
    const [formData, setFormData] = useState({
        author: session.user.name,
        title: '',
        body: '',
        image: null // New state for the image file
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData(prevState => ({
                ...prevState,
                [name]: files[0] // Store the first selected image file
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const postData = new FormData();
            postData.append('email', session.user.email);
            postData.append('author', session.user.name);
            postData.append('title', formData.title);
            postData.append('body', formData.body);
            postData.append('image', formData.image); // Append the image file to FormData

            console.log(postData);

            const response = await fetch('https://mt-kenya-experience-api.vercel.app/share', {
                method: 'POST',
                body: postData, // Send FormData instead of JSON.stringify(postData)
            });
            if (response.ok) {
                setFormData({
                    author: '',
                    title: '',
                    body: '',
                    image: null // Reset the image state
                });
                console.log('Form submitted successfully');
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.authorContainer}>
                    Writing as @{session.user.name}
                </div>
                <div className={styles.title}>
                    <input
                        type="text"
                        className='tinput'
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.body}>
                    <textarea
                        name="body"
                        placeholder="Body"
                        value={formData.body}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.imageInput}>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                    />
                </div>
                <button className={styles.submit} type="submit">Post</button>
            </form>
        </div>
    );
};

export default Form;
