import styles from './Panel.module.css';

/* Faixa escura que agrupa as seções da Home no desktop */
export default function Panel({ as: Tag = 'section', className = '', children, ...props }) {
  return (
    <Tag className={`${styles.panel} ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
