import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Dispaly from "./components/Display";

function App() {
  return (
    <div className={styles.calculator}>
     <Dispaly/>
     <ButtonsContainer/>
     
    </div>
  );
}

export default App;
