import React from 'react';
import styles from './StatusPrice.module.css'
import cx from 'classnames'

const StatusPrice = (props) => {
    const {status, subtitle, price, children} = props

    const squareWrapper = cx ([styles['square-wrapper']], [styles[`background-${status.toLowerCase()}`]], [styles[status.toLowerCase()]])

    const btn = cx ([styles[`background-${status.toLowerCase()}`]], [styles.btn])


    return (
        <>
        <div className={styles.card}>
            <div className={squareWrapper}>
                <div className={styles.square}>
                    <h2 className={styles.title}>{status}</h2>
                    <p className={styles.subtitle}>{subtitle}</p>
                    <span className={styles.price}>{price}</span>
                </div>
            </div>
            <div className={styles['block-text']}>
                {children}
            </div>


            <a className={btn} href='#'><i class="fas fa-check"></i> <span className={styles.text}>Start</span></a>

        </div>
        </>
    );
}

export default StatusPrice;
