import styled from "styled-components";
import Clicker from "../components/Clicker";

const Container = styled.div`
  background-color: #22223f;
  min-height: 100vh;
  min-height: 100dvh;
  text-align: center;
  padding: 2rem;
`

const PageTitle = styled.h1`
  font-family: 'Knewave', sans-serif;
  font-size: 3rem;
  text-transform: uppercase;
  color: rgb(220, 253, 253);
  text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  margin-bottom: 2rem;
  line-height: 1.1;
  letter-spacing: 0.5rem;
`

const IndexPage = () => {
  return (
    <Container>
      <PageTitle>The Clicker</PageTitle>
      <Clicker />
    </Container>
  );
};

export default IndexPage;