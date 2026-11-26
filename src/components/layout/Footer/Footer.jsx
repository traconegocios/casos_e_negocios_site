import { Link } from 'react-router-dom';
import Icon from '@/components/ui/Icon/Icon.jsx';
import { ABOUT_TEXT, FOOTER_SECTIONS, LEGAL_LINKS, SITE_NAME, SOCIAL_LINKS } from '@/constants/site.js';
import styles from './Footer.module.css';

function FooterLink({ item, className, children }) {
  if (item.href) {
    return (
      <a className={className} href={item.href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={className} to={item.to}>
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.sitemap}>
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className={styles.heading}>
                <FooterLink item={section}>{section.title}</FooterLink>
              </h3>
              <p className={styles.text}>
                <span className="desktop-only">{section.text}</span>
                <span className="mobile-only">{section.textShort}</span>
              </p>
              <FooterLink item={section} className={styles.go}>
                {section.linkLabel} →
              </FooterLink>
            </div>
          ))}
        </div>

        <div className={`${styles.social} mobile-only`}>
          {SOCIAL_LINKS.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
              <Icon name={social.icon} size={20} />
            </a>
          ))}
        </div>

        <div className={styles.legal}>
          {LEGAL_LINKS.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>

        <p className={styles.about}>{ABOUT_TEXT}</p>
      </div>

      <p className={styles.copy}>Copyright © {SITE_NAME} – todos direitos reservados</p>
    </footer>
  );
}
