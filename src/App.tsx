import ListGroup from "./components/ListGroup";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["Sri Lanka", "India", "USA", "England", "Malaysia"];
  const handleOnSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <br></br>
      <div>
        <Button color="primary" onClick={() => setAlertVisibility(true)}>
          My Button
        </Button>
      </div>

      <br></br>

      {alertVisible && (
        <div>
          <Alert onClose={() => setAlertVisibility(false)}>
            Hello <span>World</span>
          </Alert>
        </div>
      )}

      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleOnSelectItem}
        />
      </div>
    </>
  );
}

export default App;
