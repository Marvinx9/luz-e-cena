import classNames from "classnames";
import styles from "./Banner.module.css";

type BannerProps = {
  variant?: "default" | "combo";
};

const Banner = ({ variant = "default" }: BannerProps) => {
  const classMap = {
    default: styles.default,
    combo: styles.combo,
  };

  return (
    <div className={classNames(styles.container, classMap[variant])}>
      <img className={styles.banner} />
    </div>
  );
};

export default Banner;
