'use client'
import { useState } from 'react';
import styles from './form.module.css';
import { auth } from '../../auth';

const Form = ({ session }) => {
    const [formData, setFormData] = useState({
        author: session.user.name,
        title: '',
        body: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const postData = {
                email: session.user.email,
                author: session.user.name,
                title: formData.title,
                body: formData.body
            };
            const response = await fetch('https://mt-kenya-experience-api.vercel.app/share', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });
            if (response.ok) {
                setFormData({
                    author: '',
                    title: '',
                    body: ''
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
        <div className={styles.postContainer}>
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
                <button className={styles.submit} type="submit">Post</button>
            </form>
        </div>
    );
};

export default Form;

