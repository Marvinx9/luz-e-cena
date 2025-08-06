import styles from "./MenuBurger.module.css";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import Button from "../../Button";

const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Button onClick={() => setIsOpen(!isOpen)} variant="icon">
        <IoMenuSharp />
      </Button>
      {isOpen && (
        <div className={styles.menu}>
          <nav>
            <ul>
              <li>
                <a href="#">Eventos</a>
              </li>
              <li>
                <a href="#">Club fidelidade</a>
              </li>
              <li>
                <a href="#">Sobre nós</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MenuBurger;
