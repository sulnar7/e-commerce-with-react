import styles from"./Modal.module.css";
import { createPortal } from "react-dom";

const Modal = ({
  isOpenPortal,
  setIsOpenPortal,
  product,
}) => {
  if (!isOpenPortal) return null;

  return createPortal(
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={product.image} alt="" />
        <div>
        <p>{product.title}</p>
        <p>${product.price}</p>

        </div>
      </div>
      <button onClick={() => setIsOpenPortal(false)} className={styles.button}>Close </button>
    </div>,
    document.getElementById("basket-item")
  );
};

export default Modal;
