import React from 'react';
import Header from '../../components/Header/Header';
import PricingFor from '../../components/PricingFor';
import StatusPrice from '../../components/StatusPrice';
import styles from './PricePage.module.css'

const PricePage = (props) => {

    const serviceList = ['Name', 'Logo', 'Tagline', 'Name and Logo', 'Name and Tagline', 'Name, Tagline and Logo', 'Name, Logo and Business Cards', 'Logo and Business Cards', 'Logo, Business Cards', 'Logo and Tagline', 'Business Cards', 'Stationery', 'Product Feedback and research']




    return (
        <>
        <Header/>
        <section className={styles['price-page']}>
            <PricingFor serviceList={serviceList}/>
            <section className={styles['order-price-section']}>
                <div className={styles['order-price-container']}>

                     <StatusPrice status={'Bronze'} subtitle={'Branding on a budget'} price={'US $299'}>
                        <p className={styles.text}>Prize ro Winner - $135 (Included)</p>
                        <div className={styles.line}></div>
                        <p className={styles.text}>Expected 30+ Entries</p>
                     </StatusPrice>

                     <StatusPrice status={'Gold'} subtitle={'Increase participation and basic brand validation'} price={'US $449'}>
                        <p className={styles.text}>Prize ro Winner - $225 (Included)</p>
                        <div className={styles.line}></div>

                        <div className={styles['block-list']}>
                            <p className={styles["list-title"]}>Validation Services & Upgrades ($267 value)</p>
                            <p className={styles['sub-text']}><i class="fas fa-check"></i> <span>NDA and More Privacy</span></p>
                            <p className={styles['sub-text']}><i class="fas fa-check"></i> <span>Project Promotion (Basic)</span></p>
                        </div>

                        <div className={styles.line}></div>
                        <p className={styles.text}>Expected 50+ Entries</p>
                        <div className={styles.line}></div>
                        <p className={styles.text}>Partial Refund Option</p>
                     </StatusPrice>

                     <StatusPrice status={'Platinum'} subtitle={'Work with top-level creatives, plus agency-style brand validation'} price={'US $749'}>
                     <p className={styles.text}>Prize ro Winner - $300 (Included)</p>
                        <div className={styles.line}></div>

                        <div className={styles['block-list']}>
                            <p className={styles["list-title"]}>Validation Services & Upgrades ($644 value)</p>
                            <p className={styles['sub-text']}><i class="fas fa-check"></i> <span>Audience Testing (Up to 5 Logos) <a className={styles.link} href='#'>View Sample Report</a></span></p>
                            <p className={styles['sub-text']}><i class="fas fa-check"></i> <span>Tier A Creatives</span></p>
                            <p className={styles['sub-text']}><i class="fas fa-check"></i> <span>NDA and More Privacy</span></p>
                            <p className={styles['sub-text']}><i class="fas fa-check"></i> <span>Enhanced Project Promotion</span></p>
                            <p className={styles['sub-text']}><i class="fas fa-check"></i> <span>Team Collaboration Tools</span></p>
                        </div>

                        <div className={styles.line}></div>
                        <p className={styles.text}>Expected 60+ Entries</p>
                        <div className={styles.line}></div>
                        <p className={styles.text}>Partial Refund Option</p>
                     </StatusPrice>


                     <StatusPrice status={'Managed'} subtitle={'A full agency experience without the agency price tag'} price={'US $1499'}>
                        <p className={styles.text}>Receive optimum results from your Platinum Contest by launching a Managed Contest Package and working one-on-one with an experienced Squadhelp Branding Consultant.</p>
                        <p className={styles.text}>
                            With significantly more validation services, professional brief creation, and daily management of your contest by your Branding Expert, you'll receive an enhanced branding experience to closeout your branding project.</p>
                        <p className={styles.text}>Lear More about <a className={styles.link} href='#' >Managed Contest Services</a>
                        </p>
                     </StatusPrice>
                </div>
            </section>
            <section className={styles.row}>
                <div className={styles['row-container']}>
                    <p className={styles.text}>All packages include the award amount <br/> for the winning creative and all fees and commissions</p>
                    <a className={styles.btn}>Get started now</a>
                    <div className={styles.line}></div>
                </div>

            </section>
        </section>
        </>
    );
}

export default PricePage;
