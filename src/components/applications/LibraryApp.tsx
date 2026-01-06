'use client';

import { useState } from 'react';
import { LIBRARY_DATA } from '@/constants/data';
import { BookItem } from '@/types';
import styles from './LibraryApp.module.css';

export default function LibraryApp() {
  const [filter, setFilter] = useState<'all' | 'book' | 'article'>('all');
  const [selectedItem, setSelectedItem] = useState<BookItem | null>(null);

  const filteredItems = filter === 'all' 
    ? LIBRARY_DATA 
    : LIBRARY_DATA.filter(item => item.type === filter);

  return (
    <div className={styles.libraryContainer}>
      <div className={styles.toolbar}>
        <button 
          className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`${styles.filterButton} ${filter === 'book' ? styles.active : ''}`}
          onClick={() => setFilter('book')}
        >
          Books
        </button>
        <button 
          className={`${styles.filterButton} ${filter === 'article' ? styles.active : ''}`}
          onClick={() => setFilter('article')}
        >
          Articles
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.list}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.listItem} ${selectedItem?.id === item.id ? styles.selected : ''}`}
              onClick={() => setSelectedItem(item)}
            >
              <div className={styles.itemIcon}>
                {item.type === 'book' ? '📚' : '📄'}
              </div>
              <div className={styles.itemInfo}>
                <div className={styles.itemTitle}>{item.title}</div>
                <div className={styles.itemAuthor}>{item.author}</div>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className={styles.details}>
            <h3 className={styles.detailsTitle}>{selectedItem.title}</h3>
            <div className={styles.detailsAuthor}>by {selectedItem.author}</div>
            {selectedItem.year && (
              <div className={styles.detailsYear}>Year: {selectedItem.year}</div>
            )}
            <div className={styles.detailsType}>
              Type: {selectedItem.type === 'book' ? 'Book' : 'Article'}
            </div>
            <p className={styles.detailsDescription}>{selectedItem.description}</p>
            {selectedItem.tags && selectedItem.tags.length > 0 && (
              <div className={styles.tags}>
                <strong>Tags: </strong>
                {selectedItem.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {selectedItem.url && (
              <div className={styles.link}>
                <a href={selectedItem.url} target="_blank" rel="noopener noreferrer">
                  View Resource
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
