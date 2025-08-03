import styles from "./Footer.module.css";
import FooterInfo from "./FooterInfo";
import FooterLogo from "./FooterLogo";

const Footer = () => {
  return (
    <>
      <footer className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
          <FooterLogo />
          <FooterInfo />
        </div>
      </footer>
      <h4 className={styles.footer}>
        Desenvolvido por Marvin. Projeto fictício sem fins comerciais.
      </h4>
    </>
  );
};

export default Footer;
