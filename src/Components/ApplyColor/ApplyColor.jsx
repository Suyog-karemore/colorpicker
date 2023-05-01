import { useEffect, useState } from "react";
import SelectColor from "../SelectColor/SelectColor";
import styles from "./ApplyColor.module.css";
const ApplyColor = () => {
  const [bgColor, setBgColor] = useState("white");
  const [color, setColor] = useState(["red", "green", "blue", "black", "grey"]);
  const [text, setText] = useState("");

  useEffect(() => {
    const colorAdded = JSON.parse(localStorage.getItem("colorPicker"));
    setColor(colorAdded);
  }, []);

  useEffect(() => {
    localStorage.setItem("colorPicker", JSON.stringify(color));
  }, [color]);

  const clickHandler = (clr) => {
    setBgColor(clr);
  };

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const btnClickHandler = () => {
    const newColor = [...color];
    const trimText = text.trim();
    if (trimText) {
      newColor.push(trimText);
      setColor(newColor);
    }
    setText("");
  };

  const keyUpHandler = (e) => {
    console.log("keyup");
    if (e.key === "Enter") {
      btnClickHandler();
    }
  };

  const smallColorButton = color.map((shade, index) => {
    return <SelectColor key={index} clr={shade} clickHandler={clickHandler} />;
  });

  return (
    <>
      <div className={styles.disply}>
        <div>
          <input
            type="text"
            onChange={changeHandler}
            value={text}
            onKeyUp={keyUpHandler}
          />
          <span style={{ margin: "0 10px" }}>
            <button
              onClick={() => {
                btnClickHandler();
              }}
              disabled={!text}
            >
              Add Color
            </button>
          </span>
        </div>
        <div
          className={styles.displycont}
          style={{ backgroundColor: bgColor }}
        ></div>
      </div>
      <div>{smallColorButton}</div>
    </>
  );
};
export default ApplyColor;
