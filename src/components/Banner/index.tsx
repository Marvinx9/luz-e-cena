import styles from "./Banner.module.css";

type BannerProps = {
  src: string;
  alt: string;
};

const Banner = ({ src, alt }: BannerProps) => {
  return (
    <div className={styles.container}>
      <img src={src} alt={alt} className={styles.banner} />
      <h1>
        Onde a realidade <span>encontra a fantasia!</span>
      </h1>
    </div>
  );
};

export default Banner;
