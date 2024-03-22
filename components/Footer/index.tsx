// Node Modules
import * as React from 'react';
import Image from 'next/image';

// Styles
import styles from "./index.module.css";

// Assets
import CommsultIcon from "@/public/commsult.svg"; 
import SAPPartnerLogo from "@/public/sap_partner_open_ecosystem.png"

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_content}>
          <div className={styles.content_wrapper}>
            <div className={styles.first_top_content}>
              <h6 className={styles.label_h6}>Contact</h6>
              <div className={styles.caption}>
                <p>Lindenstraße 6</p>
                <p>14467 Potsdam</p>
                <p>Telephone: 0331-730 73-0</p>
                <p>Fax: 0331-730 73-99</p>
                <p>office@commsult.de</p>
              </div>
            </div>
            <div className={styles.first_bottom_content} style={{display: 'flex', gap: '16px;'}}>
              <p>Imprint</p>
              <p>Data Protection</p>
            </div>
          </div>
          <div className={styles.content_wrapper}>
            <h6 className={styles.label_h6} style={{marginBottom: '13px'}}>Upcoming Events</h6>
            <div className={styles.caption}>
              <p>Get to know the experts for mobile solutions!</p>
            </div>
            <div className={styles.bottom_content} style={{marginTop: '13px'}}>
              <p>
                Congress<br/>
                VLB Logistics Congress 2024<br/>
                March 4th – 6th, 2024 in Chemnitz
              </p>
            </div>
            <div className={styles.bottom_content} style={{marginTop: '26px'}}>
              <p>
                LogiMAT 2024 trade fair<br/>
                March 19 – 21, 2024 in Stuttgart
              </p>
            </div>
          </div>
          <div className={styles.content_wrapper}>
            <Image className={styles.commsult_icon} src={CommsultIcon} alt={'commsult-icon'}/>
            <div className={styles.caption} style={{margin: '16px 0'}}>
              <p>
                The specialists<br/>
                for mobile software in business processes.
              </p>
            </div>
            <a className={styles.commsult_link}>www.commsult.de</a>
            <Image className={styles.sap_icon} src={SAPPartnerLogo} alt={'sap-partner'} width={'50'} height={'30'}/>
          </div>
        </div>
      </div>
    </footer>
  );
};
