import styled from "styled-components";
import Clicker from "../components/Clicker";

const Container = styled.div`
  background-color: #22223f;
  min-height: 100vh;
  min-height: 100dvh;
`

const IndexPage = () => {
  return (
    <Container>
      <p>Index Page</p>
      <Clicker />
    </Container>
  );
};

export default IndexPage;