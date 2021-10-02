import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";
import { BoxMessage } from "./style";

const User = () => {
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState("");

  const AddMsg = () => {
    if (userInput.length > 0) {
      dispatch(addCommentThunk(userInput));
      setUserInput("");
    }
  };

  return (
    <>
      <BoxMessage>
        <textarea
          rows={5}
          type="text"
          value={userInput}
          onChange={(evt) => setUserInput(evt.target.value)}
        />
        <button onClick={AddMsg}>New comment</button>
      </BoxMessage>
    </>
  );
};

export default User;
