const Footer = () => {
  return (
    <footer className="footer block">
      <p className="footer_logo">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <hr className="footer__line" />
      <div className="footer__copywrite">
        <div className="footer__links">
          <a
            href="https://practicum.yandex.ru/"
            className="footer__yaLogo"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/Nikonovi4"
            className="footer__gitLogo"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <p className="footer__date">&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
