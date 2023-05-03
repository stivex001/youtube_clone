import styled from "styled-components";

type Props = {};
const Container = styled.div`
  width: 300px;
  margin-bottom: 45px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
  height: 247px;
  background-color: #999;
`;
const Details = styled.div`
display: flex;
gap: 12px;
margin-top: 12px;
`;
const Title = styled.p``;
const Subt = styled.span``;

const Profile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 24px;
`;

const Card: React.FC = (props: Props) => {
  return (
    <Container>
      <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4tRzWXEimLwK6AxnxsBiXFbf9SEfXwV0D099QhjYsg&s" />
      <Details>
        <Profile
          src="https://avatars.githubusercontent.com/u/87942124?v=4"
          alt=""
        />
        <div>
          <Title>To create a roduction build, use npm run build...</Title>
          <Subt>Bai Codes</Subt>
          <Subt>660,908 views - 1 day ago</Subt>
        </div>
      </Details>
    </Container>
  );
};

export default Card;
