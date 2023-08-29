import ListGroup from "./components/ListGroup";
// import Message from './message'
// import Alert from "./components/Alert";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import { BsLinkedin } from 'react-icons/bs'
import Like from "./components/like";

function App() {

  const [visible, setVisible] = useState(false);

  const items = ["New york", "San fransisco", "Lahore", "Delhi", "Tokyo"];
  const handleSelectItem = (item: string) => {
    console.log("The selected item is:\t", item);
  };

  

  return (
    <>
    <BsLinkedin color= "blue" size="40"/>
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  {/* // );

  // return ( */}
    
    <div>
      {visible && <Alert onClose = {() => setVisible(false)}>This is alert</Alert>}
      <Button onClick={() => {console.log("Clicked"); setVisible(true);}}>My Button</Button>
    </div>
    <Like />
    </>
  );
}

export default App;
