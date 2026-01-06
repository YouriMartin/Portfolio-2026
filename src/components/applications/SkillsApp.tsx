'use client';

import { SKILLS_DATA } from '@/constants/data';
import styles from './SkillsApp.module.css';

export default function SkillsApp() {
  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.mainTitle}>Technical Skills & Competencies</h2>
      
      {SKILLS_DATA.map((category, index) => (
        <div key={index} className={styles.category}>
          <h3 className={styles.categoryTitle}>{category.category}</h3>
          <div className={styles.skillsGrid}>
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className={styles.skillCard}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>{skill.name}</span>
                  {skill.level && (
                    <span className={`${styles.skillLevel} ${styles[skill.level]}`}>
                      {skill.level}
                    </span>
                  )}
                </div>
                {skill.description && (
                  <div className={styles.skillDescription}>{skill.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
