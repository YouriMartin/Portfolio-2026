'use client';

import { CV_DATA } from '@/constants/data';
import styles from './CVApp.module.css';

export default function CVApp() {
  const cv = CV_DATA;

  return (
    <div className={styles.cvContainer}>
      <div className={styles.header}>
        <h1 className={styles.name}>{cv.name}</h1>
        <h2 className={styles.title}>{cv.title}</h2>
        <div className={styles.contact}>
          <p>📧 {cv.contact.email}</p>
          {cv.contact.phone && <p>📞 {cv.contact.phone}</p>}
          <p>📍 {cv.contact.location}</p>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Summary</h3>
        <p className={styles.summary}>{cv.summary}</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Experience</h3>
        {cv.experience.map((exp, index) => (
          <div key={index} className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <strong>{exp.position}</strong> at <strong>{exp.company}</strong>
            </div>
            <div className={styles.period}>{exp.period}</div>
            <p className={styles.description}>{exp.description}</p>
            {exp.achievements && exp.achievements.length > 0 && (
              <ul className={styles.achievements}>
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Education</h3>
        {cv.education.map((edu, index) => (
          <div key={index} className={styles.educationItem}>
            <div className={styles.educationHeader}>
              <strong>{edu.degree}</strong>
            </div>
            <div>{edu.institution}</div>
            <div className={styles.period}>{edu.period}</div>
            {edu.details && <p className={styles.details}>{edu.details}</p>}
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Skills</h3>
        <div className={styles.skillsList}>
          {cv.skills.map((skill, index) => (
            <span key={index} className={styles.skillTag}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
