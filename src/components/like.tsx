import "./like.css";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const Like = () => {
  const [clicked, setclicked] = useState(false);

  return (
    <div>
      {!clicked && (
        <AiFillHeart
          className="heart clicked"
          onClick={() => {
            setclicked(true);
            console.log("like button has been clicked");
          }}
        />
      )}
      {clicked && (
        <AiOutlineHeart className="heart" onClick={() => {setclicked(false); setTimeout(()=>setclicked(true),2000);}} />
      )}
    </div>
  );
};

export default Like;
