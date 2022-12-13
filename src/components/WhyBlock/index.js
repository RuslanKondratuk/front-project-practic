import React from 'react';
import styles from './WhyBlock.module.css'

const WhyBlock = () => {
    return (
        <section className={styles['why-block']}>
            <div className={styles.container}>
                <div className={styles['container-left']}>
                    <div className={styles['container-left-inner']}>
                        <h1 className={styles.title}> Find The Perfect Brand Name Today!</h1>
                        <div className={styles['link-row']}>
                            <a href='#' className={styles.link}><span className={styles['text-link']}>Eplore Names for Sale</span> <i class="fas fa-arrow-right"></i></a>
                            <span className={styles.or}>or</span>
                            <a href='#' className={styles.link}>I want a Custom Name</a>
                        </div>
                    </div>
                </div>
                <div className={styles['container-right']}>
                    <div className={styles['container-right-inner']}>
                        <h1 className={styles['container-right-title']}>Why Squahelp?</h1>
                        <div className={styles['block']}>
                            <h3 className={styles['block-title']}>Disrupting The Traditional Agency Model</h3>
                            <p className={styles['block-text']}>Squadhelp is reimagining how naming is done, providing fast, affordable, high-quality, soup-to-nuts
                            solutions unlike anyone else.</p>
                        </div>
                        <div className={styles['block']}>
                            <h3 className={styles['block-title']}>Setisfaction Guarantee</h3>
                            <p className={styles['block-text']}>We have policies in place to ensure that you are satisfied with your experience.</p>
                            <div className={styles['block-link']}>
                                <a href='#' className={styles['btn']}>Content Policies</a>
                                <a href='#' className={styles['btn']}>Marketplace Policies</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default WhyBlock;
