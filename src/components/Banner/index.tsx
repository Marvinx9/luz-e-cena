import classNames from "classnames";
import styles from "./Banner.module.css";

type BannerProps = {
  src: string;
  alt: string;
  variant?: "default" | "combo";
  text1?: string;
  text2?: string;
};

const Banner = ({
  src,
  alt,
  text1,
  text2,
  variant = "default",
}: BannerProps) => {
  const classMap = {
    default: "",
    combo: styles.combo,
  };

  return (
    <div className={classNames(styles.container, classMap[variant])}>
      <img src={src} alt={alt} className={styles.banner} />
      <h1>
        {text1}
        <span>{text2}</span>
      </h1>
    </div>
  );
};

export default Banner;
