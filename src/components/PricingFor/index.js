import React from 'react';
import styles from './PricingFor.module.css'

const PricingFor = (props) => {
    const {serviceList} = props;

    const listCreate = () => {
        return serviceList.map((str) => <option value= {str}>{str}</option>)
    };

    return (
        <section className={styles['pricing-section']}>
            <div className={styles.container}>
                <div className={styles['pricing-for']}>
                    <span className={styles['pricing-for-text']}>Pricing for</span>
                    <select name='list' className={styles.select}>
                        {listCreate()}
                    </select>
                </div>
                <div>
                    <img src='./staticImages/price.png' className={styles.logo}/>
                </div>
            </div>
        </section>
    );
}

export default PricingFor;
