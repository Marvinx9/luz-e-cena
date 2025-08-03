import styles from "./Logo.module.css";

const Logo = ({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img className={styles.logo} {...props} />;
};

export default Logo;
