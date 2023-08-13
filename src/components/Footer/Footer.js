const Footer = () => {
  return (
    <div className="footer block">
      <p className="footerLogo">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <hr className="footer__line" />
      <div className="footer__copywrite">
        <div className="footer__links">
          <a
            href="https://practicum.yandex.ru/"
            className="footerYaLogo"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/Nikonovi4"
            className="footerGitLogo"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <p className="footer__date">&copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
