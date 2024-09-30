import { RiMailFill, RiPhoneFill } from "react-icons/ri";

import * as styles from "./style.css";

export const ContactPart = () => {
  return (
    <div className={styles.container}>
      <a className={styles.contactLink} href="mailto:iwannaberealnerd@gmail.com">
        <RiMailFill />
        <p>iwannaberealnerd@gmail.com</p>
      </a>
      <a className={styles.contactLink} href="tel:+821051200592">
        <RiPhoneFill />
        <p>+82 10 5120 0592</p>
      </a>
    </div>
  );
};
