import classNames from "classnames";
import styles from "./Banner.module.css";

type BannerProps = {
  src_desktop?: string;
  src_mobile?: string;
  alt: string;
  variant?: "default" | "combo";
};

const Banner = ({
  src_desktop,
  src_mobile,
  alt,
  variant = "default",
}: BannerProps) => {
  const larguraDoWidth: number = document.documentElement.clientWidth;

  const classMap = {
    default: "",
    combo: styles.combo,
  };

  return (
    <div className={classNames(styles.container, classMap[variant])}>
      <img
        src={`${larguraDoWidth <= 986 ? src_mobile : src_desktop}`}
        alt={alt}
        className={styles.banner}
      />
    </div>
  );
};

export default Banner;
