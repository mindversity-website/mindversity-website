import React from "react";
import styles from "./partners.module.scss";

const Partners: React.FC = () => {
    return (
        <section className={styles.container}>
            <div className={styles.partnerTitle}>
                <img src="/logo.svg" alt="MindVersity Logo"></img>
                <h2>Partners</h2>
            </div>
            <br></br>
            <a href="https://www.stevefund.org/">
                <div className={styles.partner}>
                    <img
                        src="https://www.stevefund.org/wp-content/uploads/2019/03/The-Steve-Fund-logo-vertical-color.png"
                        alt="Partner logo"
                    ></img>
                </div>
            </a>
            <a href="https://www.artwithimpact.org/">
                <div className={styles.partner}>
                    <img
                        src="https://www.artwithimpact.org/wp-content/uploads/awi_logo_020711_0-1.png"
                        alt="Partner logo"
                    ></img>
                </div>
            </a>
            <a href="https://theshrinkspace.com/">
                <div className={styles.partner}>
                    <img
                        src="https://theshrinkspace.com/packs/application/images/shrinkspace-logo-white-e79af571ed155beab85f4941eaa1045a.svg"
                        alt="Partner logo"
                    ></img>
                </div>
            </a>
        </section>
    );
};

export default Partners;
