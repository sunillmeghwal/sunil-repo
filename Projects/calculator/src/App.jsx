import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Dispaly from "./components/Display";
import { evaluate } from "mathjs"; // ✅ import mathjs

function App() {
  const [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "Clear") {
      setCalValue("");
    } else if (buttonText === "=") {
      //     const result = eval(calValue);
      //     setCalValue(result);
      //   } else {
      //     const newDisplayValue = calValue + buttonText;
      //     setCalValue(newDisplayValue);
      //   }
      // };

      try {
        const result = evaluate(calValue); // ✅ evaluate expression
        setCalValue(result.toString());
      } catch (error) {
        setCalValue("Error");
      }
    } else {
      setCalValue((prev) => prev + buttonText);
    }
  };

  return (
    <div className={styles.calculator}>
      <Dispaly displayValue={calValue} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
