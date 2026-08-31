import { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { contact } from '../data/siteData';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (email) => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const helper = document.createElement('textarea');
      helper.value = email;
      document.body.appendChild(helper);
      helper.select();
      document.execCommand('copy');
      document.body.removeChild(helper);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-layout">
        <h2>{contact.heading}</h2>
        <p className="contact-intro">{contact.description}</p>

        <div className="contact-pill-row">
          {contact.primaryChannels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              className="contact-pill"
            >
              {channel.icon ? <channel.icon className="contact-icon" /> : null}
              <span>{channel.value}</span>
            </a>
          ))}
        </div>

        <div className="contact-social-row">
          {contact.socialChannels.map((channel) => {
            if (channel.href.startsWith('mailto:')) {
              const email = channel.href.replace('mailto:', '');
              return (
                <button
                  key={channel.label}
                  type="button"
                  className="contact-social contact-social-copy"
                  aria-label={copied ? 'Email address copied' : 'Copy email address'}
                  onClick={() => handleCopyEmail(email)}
                >
                  {copied ? <FaCheck className="contact-social-icon" /> : <channel.icon className="contact-social-icon" />}
                  <span className="copy-tooltip">{copied ? 'Copied!' : 'Copy email'}</span>
                </button>
              );
            }

            return (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="contact-social"
                aria-label={channel.label}
              >
                {channel.icon ? <channel.icon className="contact-social-icon" /> : null}
              </a>
            );
          })}
        </div>

        {contact.languages ? (
          <p className="contact-languages">
            {contact.languageIcon ? <contact.languageIcon className="contact-language-icon" /> : null}
            <strong>Languages:</strong> {contact.languages}
          </p>
        ) : null}
      </div>
    </section>
  );
};

export default Contact;
