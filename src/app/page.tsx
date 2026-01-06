'use client';

import { useState, useCallback } from 'react';
import { WindowState } from '@/types';
import Window from '@/components/ui/Window';
import DesktopIcon from '@/components/ui/DesktopIcon';
import Taskbar from '@/components/ui/Taskbar';
import CVApp from '@/components/applications/CVApp';
import LibraryApp from '@/components/applications/LibraryApp';
import SkillsApp from '@/components/applications/SkillsApp';
import LinksApp from '@/components/applications/LinksApp';
import styles from './page.module.css';

const DESKTOP_ICONS = [
  { id: 'cv', label: 'CV', icon: '📄', component: 'cv' },
  { id: 'library', label: 'Library', icon: '📚', component: 'library' },
  { id: 'skills', label: 'Skills', icon: '⚡', component: 'skills' },
  { id: 'links', label: 'Links', icon: '🔗', component: 'links' }
];

export default function Home() {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [nextZIndex, setNextZIndex] = useState(1);

  const openWindow = useCallback((component: string) => {
    const existingWindow = windows.find(w => w.component === component);
    
    if (existingWindow) {
      if (existingWindow.isMinimized) {
        setWindows(prev => prev.map(w => 
          w.id === existingWindow.id 
            ? { ...w, isMinimized: false, zIndex: nextZIndex }
            : w
        ));
        setNextZIndex(prev => prev + 1);
      } else {
        setWindows(prev => prev.map(w => 
          w.id === existingWindow.id 
            ? { ...w, zIndex: nextZIndex }
            : w
        ));
        setNextZIndex(prev => prev + 1);
      }
      return;
    }

    const icon = DESKTOP_ICONS.find(i => i.component === component);
    if (!icon) return;

    const newWindow: WindowState = {
      id: `window-${Date.now()}`,
      title: icon.label,
      icon: icon.icon,
      component,
      isMinimized: false,
      isMaximized: false,
      position: { 
        x: 100 + (windows.length * 30), 
        y: 100 + (windows.length * 30) 
      },
      size: { width: 700, height: 500 },
      zIndex: nextZIndex
    };

    setWindows(prev => [...prev, newWindow]);
    setNextZIndex(prev => prev + 1);
  }, [windows, nextZIndex]);

  const closeWindow = useCallback((id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, isMinimized: true } : w
    ));
  }, []);

  const maximizeWindow = useCallback((id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
    ));
  }, []);

  const focusWindow = useCallback((id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, zIndex: nextZIndex, isMinimized: false } : w
    ));
    setNextZIndex(prev => prev + 1);
  }, [nextZIndex]);

  const renderWindowContent = (component: string) => {
    switch (component) {
      case 'cv':
        return <CVApp />;
      case 'library':
        return <LibraryApp />;
      case 'skills':
        return <SkillsApp />;
      case 'links':
        return <LinksApp />;
      default:
        return <div>Unknown application</div>;
    }
  };

  return (
    <main className={styles.desktop}>
      <div className={styles.icons}>
        {DESKTOP_ICONS.map(icon => (
          <DesktopIcon
            key={icon.id}
            label={icon.label}
            icon={icon.icon}
            onDoubleClick={() => openWindow(icon.component)}
          />
        ))}
      </div>

      {windows.filter(w => !w.isMinimized).map(window => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          icon={window.icon}
          onClose={() => closeWindow(window.id)}
          onMinimize={() => minimizeWindow(window.id)}
          onMaximize={() => maximizeWindow(window.id)}
          onFocus={() => focusWindow(window.id)}
          isMaximized={window.isMaximized}
          initialPosition={window.position}
          initialSize={window.size}
          zIndex={window.zIndex}
        >
          {renderWindowContent(window.component)}
        </Window>
      ))}

      <Taskbar
        windows={windows.map(w => ({
          id: w.id,
          title: w.title,
          icon: w.icon,
          isMinimized: w.isMinimized
        }))}
        onWindowClick={focusWindow}
      />
    </main>
  );
}
