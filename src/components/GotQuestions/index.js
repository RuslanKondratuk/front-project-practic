import React from 'react';
import styles from './GotQuestions.module.css'


const GotQuestions = () => {
    return (
        <section className={styles.container}>
            <div className={styles['column-1']}>
                <h1 className={styles.title}>Got Questions?</h1>
                <p className={styles.text}>Speak with a Squadhelp platform expert to learn more and get your questions answered.</p>
                <a href='#' className={styles.btn}>Shedule Consultation</a>
            </div>
            <div className={styles['column-2']}>
                <a href='#' className={styles['link-support']}>
                    <i className="fas fa-phone"></i>
                    <span className={styles['text-link']}>(877) 355-3585</span></a>
                <a href='#' className={styles['link-support']}>
                <i class="fas fa-comment"></i>
                    <span className={styles['text-link']}>Live Chat</span></a>
                <a href='#' className={styles['link-support']}>
                    <i className="fas fa-envelope"></i>
                    <span className={styles['text-link']}>Contact Us</span></a>
            </div>
        </section>
    );
}

export default GotQuestions;
