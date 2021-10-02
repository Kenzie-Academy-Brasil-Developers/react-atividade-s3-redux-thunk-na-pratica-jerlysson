import { useSelector } from "react-redux";
import User from "../User";
import { Container, UserBox, BoxText } from "./style";

function Display() {
  const { comments, name } = useSelector((state) => state.user);

  return (
    <Container>
      <UserBox>
        <div>KA</div>
        <h3>{name}</h3>
      </UserBox>
      <BoxText>
        {comments && comments.map((msg, idx) => <p key={idx}>{msg}</p>)}
      </BoxText>
      <User />
    </Container>
  );
}
export default Display;
