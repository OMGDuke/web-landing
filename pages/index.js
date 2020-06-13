import styled from 'styled-components';
import GradientTitle from '../components/GradientTitle';
import SearchBar from '../components/SearchBar';
import News from '../components/News';

export default function Home() {
  return (
    <Container>
      <GradientTitle>OMGDuke</GradientTitle>
      <SearchBar />
      <News />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-areas: '. title weather' 'search search search' 'news news news';
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px;
  justify-content: center;
`;
