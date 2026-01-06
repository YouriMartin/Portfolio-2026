'use client';

import styles from './DesktopIcon.module.css';

interface DesktopIconProps {
  label: string;
  icon: string;
  onDoubleClick: () => void;
}

export default function DesktopIcon({ label, icon, onDoubleClick }: DesktopIconProps) {
  return (
    <div
      className={styles.icon}
      onDoubleClick={onDoubleClick}
    >
      <div className={styles.iconImage}>{icon}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
