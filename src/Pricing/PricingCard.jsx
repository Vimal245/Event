import React from 'react';
import FeatureItem from './FeatureItem';
import styles from './PricingCard.module.css';

const PricingCard = ({
  theme = 'light',
  planName,
  price,
  interval,
  buttonText,
  features,
  description
}) => {
  const cardClass = `${styles.pricingCard} ${
    theme === 'dark' ? styles.pricingCardDark : styles.pricingCardLight
  }`;
  
  const buttonClass = `${styles.actionButton} ${
    theme === 'dark' ? styles.darkButton : styles.lightButton
  }`;

  return (
    <div className={cardClass}>
      <div className={styles.planName}>{planName}</div>
      <div className={styles.planPrice}>{price}</div>
      <div className={styles.planInterval}>{interval}</div>
      <button className={buttonClass}>{buttonText}</button>
      <div className={styles.divider} />
      <div className={styles.featureList}>
        <div>{description}</div>
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            text={feature.text}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingCard;