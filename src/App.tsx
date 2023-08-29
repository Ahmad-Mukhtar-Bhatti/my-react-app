// import ListGroup from "./components/ListGroup";
// import Message from './message'
// import Alert from "./components/Alert";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  // const items = ["New york", "San fransisco", "Lahore", "Delhi", "Tokyo"];
  // const handleSelectItem = (item: string) => {
  //   console.log("The selected item is:\t", item);
  // };

  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cities"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );
  const [visible, setVisible] = useState(false);

  return (
    
    <div>
      {visible && <Alert onClose = {() => setVisible(false)}>This is alert</Alert>}
      <Button onClick={() => {console.log("Clicked"); setVisible(true);}}>My Button</Button>
    </div>
  );
}

export default App;
