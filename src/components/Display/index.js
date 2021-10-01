import { useSelector } from "react-redux";
import User from "../User";
import { Container, UserBox } from "./style";

function Display() {
  const { comments, name } = useSelector((state) => state.user);

  return (
    <Container>
      <UserBox>
        <div>KA</div>
        <h3>{name}</h3>
      </UserBox>
      <ul>
        {comments && comments.map((msg, idx) => <li key={idx}>{msg}</li>)}
      </ul>
      <User />
    </Container>
  );
}
export default Display;
