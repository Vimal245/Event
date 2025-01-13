import React from 'react';
import styles from './PricingCard.module.css';

const FeatureItem = ({ icon, text }) => {
  return (
    <div className={styles.featureItem}>
      <img 
        loading="lazy"
        src={icon}
        alt=""
        className={styles.featureIcon}
      />
      <div>{text}</div>
    </div>
  );
};

export default FeatureItem;