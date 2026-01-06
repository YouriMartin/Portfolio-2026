'use client';

import { SOCIAL_LINKS } from '@/constants/data';
import styles from './LinksApp.module.css';

export default function LinksApp() {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return '💻';
      case 'linkedin':
        return '💼';
      default:
        return '🔗';
    }
  };

  const getPlatformName = (platform: string) => {
    switch (platform) {
      case 'github':
        return 'GitHub';
      case 'linkedin':
        return 'LinkedIn';
      default:
        return 'Link';
    }
  };

  return (
    <div className={styles.linksContainer}>
      <h2 className={styles.title}>Professional Links</h2>
      <p className={styles.description}>
        Connect with me on various professional platforms
      </p>

      <div className={styles.linksList}>
        {SOCIAL_LINKS.map((link, index) => (
          <div key={index} className={styles.linkCard}>
            <div className={styles.linkIcon}>{getIcon(link.platform)}</div>
            <div className={styles.linkInfo}>
              <h3 className={styles.platformName}>{getPlatformName(link.platform)}</h3>
              <div className={styles.username}>@{link.username}</div>
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                Visit Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
