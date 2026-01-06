'use client';

import { useState, useEffect } from 'react';
import styles from './Taskbar.module.css';

interface TaskbarItem {
  id: string;
  title: string;
  icon: string;
  isMinimized: boolean;
}

interface TaskbarProps {
  windows: TaskbarItem[];
  onWindowClick: (id: string) => void;
}

export default function Taskbar({ windows, onWindowClick }: TaskbarProps) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.taskbar}>
      <button className={styles.startButton}>
        <span className={styles.startIcon}>🪟</span>
        <span className={styles.startText}>Start</span>
      </button>
      <div className={styles.taskList}>
        {windows.map((window) => (
          <button
            key={window.id}
            className={`${styles.taskButton} ${window.isMinimized ? '' : styles.active}`}
            onClick={() => onWindowClick(window.id)}
          >
            <span className={styles.taskIcon}>{window.icon}</span>
            <span className={styles.taskTitle}>{window.title}</span>
          </button>
        ))}
      </div>
      <div className={styles.tray}>
        <div className={styles.clock}>{currentTime}</div>
      </div>
    </div>
  );
}
