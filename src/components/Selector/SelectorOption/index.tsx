import styles from "./SelectorOption.module.css";

interface SelectorOption extends React.OptionHTMLAttributes<HTMLOptionElement> {
  label: string;
  value: string;
}

const SelectorOption = ({ label, value, ...rest }: SelectorOption) => {
  return (
    <option className={styles.option} value={value} {...rest}>
      {label}
    </option>
  );
};

export default SelectorOption;
