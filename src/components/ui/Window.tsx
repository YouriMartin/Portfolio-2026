'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import styles from './Window.module.css';

interface WindowProps {
  id: string;
  title: string;
  icon: string;
  children: ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  isMaximized: boolean;
  initialPosition?: { x: number; y: number };
  initialSize?: { width: number; height: number };
  zIndex: number;
}

export default function Window({
  id,
  title,
  icon,
  children,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  isMaximized,
  initialPosition = { x: 100, y: 100 },
  initialSize = { width: 600, height: 400 },
  zIndex
}: WindowProps) {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;
    onFocus();
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !isMaximized) {
        const newX = Math.max(0, Math.min(e.clientX - dragOffset.x, window.innerWidth - 200));
        const newY = Math.max(0, Math.min(e.clientY - dragOffset.y, window.innerHeight - 50));
        setPosition({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, isMaximized]);

  const windowStyle = isMaximized
    ? {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        width: '100vw',
        height: 'calc(100vh - 40px)',
        zIndex
      }
    : {
        position: 'absolute' as const,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        zIndex
      };

  return (
    <div
      ref={windowRef}
      className={styles.window}
      style={windowStyle}
      onClick={onFocus}
    >
      <div
        className={styles.titleBar}
        onMouseDown={handleMouseDown}
      >
        <div className={styles.titleContent}>
          <span className={styles.icon}>{icon}</span>
          <span className={styles.title}>{title}</span>
        </div>
        <div className={styles.controls}>
          <button
            className={styles.controlButton}
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            aria-label="Minimize"
          >
            <span className={styles.minimizeIcon}>_</span>
          </button>
          <button
            className={styles.controlButton}
            onClick={(e) => {
              e.stopPropagation();
              onMaximize();
            }}
            aria-label="Maximize"
          >
            <span className={styles.maximizeIcon}>□</span>
          </button>
          <button
            className={styles.controlButton}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close"
          >
            <span className={styles.closeIcon}>✕</span>
          </button>
        </div>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
