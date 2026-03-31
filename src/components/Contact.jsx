import { contact } from '../data/siteData';

const Contact = () => (
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
        {contact.socialChannels.map((channel) => (
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
        ))}
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

export default Contact;
