import { useState } from 'react';
import Icon from '@/components/ui/Icon/Icon.jsx';
import styles from './ShareButtons.module.css';

/* Botões de compartilhamento da matéria (abrem o compartilhamento de cada rede) */
export default function ShareButtons({ title, label = 'Compartilhar esta notícia', className = '' }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const text = encodeURIComponent(title);
  const link = encodeURIComponent(url);

  const networks = [
    { name: 'WhatsApp', icon: 'whatsapp', href: `https://wa.me/?text=${text}%20${link}` },
    { name: 'LinkedIn', icon: 'linkedin', href: `https://www.linkedin.com/sharing/share-offsite/?url=${link}` },
    { name: 'X', icon: 'x', href: `https://x.com/intent/post?text=${text}&url=${link}` },
    { name: 'Facebook', icon: 'facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${link}` },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={`${styles.share} ${className}`.trim()}>
      {label && <span className={styles.label}>{label}</span>}
      {networks.map((network) => (
        <a
          key={network.name}
          className={styles.button}
          href={network.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Compartilhar no ${network.name}`}
        >
          <Icon name={network.icon} size={16} />
        </a>
      ))}
      <button
        className={styles.button}
        type="button"
        onClick={copyLink}
        aria-label={copied ? 'Link copiado' : 'Copiar link'}
        title={copied ? 'Link copiado!' : 'Copiar link'}
      >
        <Icon name="link" size={16} />
      </button>
    </div>
  );
}
