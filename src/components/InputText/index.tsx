import styles from "./InputText.module.css";

const InputText = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input id="1" className={styles.input} {...props} />;
};

export default InputText;
