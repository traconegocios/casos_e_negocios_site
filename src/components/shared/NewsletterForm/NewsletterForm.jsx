import { useState } from 'react';
import styles from './NewsletterForm.module.css';

/*
 * Bloco roxo de inscrição na newsletter.
 * O envio ainda não está ligado a um serviço: troque o trecho marcado
 * em handleSubmit pela chamada real (ex.: Resend, RD Station, API própria).
 */
export default function NewsletterForm({ className = '', headingLevel: Heading = 'h2' }) {
  const [form, setForm] = useState({ nome: '', email: '', aceite: false });
  const [status, setStatus] = useState('idle');

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    // TODO: enviar `form` para o serviço de newsletter.
    await new Promise((resolve) => setTimeout(resolve, 400));
    setStatus('sent');
  }

  return (
    <section className={`${styles.newsletter} ${className}`.trim()} id="newsletter" aria-labelledby="newsletter-title">
      <p className={styles.kicker}>Newsletter Casos e Negócios</p>
      <Heading className={styles.title} id="newsletter-title">
        Casos e Negócios <span className={styles.titleEnd}>no seu email</span>
      </Heading>
      <p className={styles.subtitle}>No seu inbox, toda quarta-feira.</p>

      {status === 'sent' ? (
        <p className={styles.success} role="status">
          Inscrição feita! Você vai receber a próxima edição no seu e-mail.
        </p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span>Nome</span>
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              autoComplete="name"
              value={form.nome}
              onChange={handleChange}
            />
          </label>
          <label className={styles.field}>
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              placeholder="voce@empresa.com.br"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className={styles.consent}>
            <input type="checkbox" name="aceite" required checked={form.aceite} onChange={handleChange} />
            <span>Aceito receber a newsletter do Casos e Negócios e concordo com a Política de Privacidade.</span>
          </label>
          <button className={styles.submit} type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando…' : 'Quero receber'}
          </button>
        </form>
      )}
    </section>
  );
}
