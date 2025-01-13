import React from 'react';
import PricingCard from './PricingCard';
import styles from './Pricing.module.css';

const freeFeatures = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/c8c670b67f409ef9ce563562ee04c89b63acd7b9746c845d45f6820b4f8a515a?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Unlimited number of events' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/c8c670b67f409ef9ce563562ee04c89b63acd7b9746c845d45f6820b4f8a515a?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Unlimited number of guests per event' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/c8c670b67f409ef9ce563562ee04c89b63acd7b9746c845d45f6820b4f8a515a?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Blasts and automated reminders via email, SMS, push notification and WhatsApp' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/c8c670b67f409ef9ce563562ee04c89b63acd7b9746c845d45f6820b4f8a515a?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Send up to 500 invites or newsletters per week through Luma' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/c8c670b67f409ef9ce563562ee04c89b63acd7b9746c845d45f6820b4f8a515a?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Check in guests to your events through Luma' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/c8c670b67f409ef9ce563562ee04c89b63acd7b9746c845d45f6820b4f8a515a?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Accept all credit cards, Apple Pay & Google Pay' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/c8c670b67f409ef9ce563562ee04c89b63acd7b9746c845d45f6820b4f8a515a?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Accept regional payment methods such as iDEAL, Konbini and PayNow' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/c8c670b67f409ef9ce563562ee04c89b63acd7b9746c845d45f6820b4f8a515a?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Set up ticket types, group purchasing and coupons' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/e899da840862587367707d1cb6ed99c090d9e3f0e7eb344ed9ff3511e9bd9084?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: '5% platform fee for paid events' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/e899da840862587367707d1cb6ed99c090d9e3f0e7eb344ed9ff3511e9bd9084?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Unlimited cohosts and event managers' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/e899da840862587367707d1cb6ed99c090d9e3f0e7eb344ed9ff3511e9bd9084?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Up to 3 admins for your calendar' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/e899da840862587367707d1cb6ed99c090d9e3f0e7eb344ed9ff3511e9bd9084?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Require approval or token gating for registration' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/e899da840862587367707d1cb6ed99c090d9e3f0e7eb344ed9ff3511e9bd9084?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Import and export data via CSV' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/e899da840862587367707d1cb6ed99c090d9e3f0e7eb344ed9ff3511e9bd9084?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Zoom integration with attendance tracking' }
];

const plusFeatures = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/771f5f28c4b46caedb8a84bda422671df086009a9b83e2b0e243de85d78d395c?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: '0% platform fee for paid events' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/771f5f28c4b46caedb8a84bda422671df086009a9b83e2b0e243de85d78d395c?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Send up to 5,000 invites and newsletters per week through Luma' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/771f5f28c4b46caedb8a84bda422671df086009a9b83e2b0e243de85d78d395c?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Ability to collect taxes for ticket sales' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/771f5f28c4b46caedb8a84bda422671df086009a9b83e2b0e243de85d78d395c?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Check-in manager role for your events' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/771f5f28c4b46caedb8a84bda422671df086009a9b83e2b0e243de85d78d395c?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Custom URL for event pages' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/771f5f28c4b46caedb8a84bda422671df086009a9b83e2b0e243de85d78d395c?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Up to 5 admins for your calendar' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/771f5f28c4b46caedb8a84bda422671df086009a9b83e2b0e243de85d78d395c?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Automate workflows with Zapier' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/771f5f28c4b46caedb8a84bda422671df086009a9b83e2b0e243de85d78d395c?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'API access' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/771f5f28c4b46caedb8a84bda422671df086009a9b83e2b0e243de85d78d395c?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Priority support' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/771f5f28c4b46caedb8a84bda422671df086009a9b83e2b0e243de85d78d395c?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Expedited review for featured events' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/360b3244e7924f3a8cb6b4b762a23b77/771f5f28c4b46caedb8a84bda422671df086009a9b83e2b0e243de85d78d395c?apiKey=360b3244e7924f3a8cb6b4b762a23b77&', text: 'Early access to select features' }
];

const Pricing = () => {
  return (
    <div>
    <div className={styles.pricingContainer}>
      <div className={styles.pricingContent}>
        <h1 className={styles.title}>Pricing</h1>
        <p className={styles.subtitle}>
          Use Luma for free with unlimited events and guests.
          <br />
          Upgrade for more invites, 0% platform fee, and more.
        </p>
        
        <div className={styles.cardsContainer}>
          <div className={styles.cardsGrid}>
            <PricingCard
              theme="light"
              planName="Luma"
              price="Free"
              interval="Forever"
              buttonText="Get Started"
              description="Use Luma for free with :"
              features={freeFeatures}
            />
            
            <PricingCard
              theme="dark"
              planName="Luma"
              price="$29"
              interval="per month"
              buttonText="Get Luma Plus"
              description="Everything in free plan, plus :"
              features={plusFeatures}
            />
          </div>
        </div>
        
        <p className={styles.footnote}>
          Stripe, our payment processor, charges a credit card fee (typically 2.9% + 30 cents). The platform fee is
          <br />
          on top of the Stripe fee. Prices for Luma Plus subscriptions are in US dollars.
        </p>
      </div>
      </div><br></br>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>EventPlatform</h3>
            <p>Where communities thrive</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#enterprise">Enterprise</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#careers">Careers</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <h4>Resources</h4>
              <a href="#blog">Blog</a>
              <a href="#help">Help Center</a>
              <a href="#guides">Guides</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 EventPlatform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;