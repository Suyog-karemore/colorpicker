import styles from "./SelectColor.module.css";
const SelectColor = ({ clr, clickHandler }) => {
  return (
    <button
      className={styles.selectBtn}
      style={{ backgroundColor: clr }}
      onClick={() => {
        clickHandler(clr);
      }}
    ></button>
  );
};
export default SelectColor;
