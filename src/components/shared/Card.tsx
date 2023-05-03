import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(prop) => prop.title !== "sm" && "360px"};
  margin-bottom: ${(prop) => (prop.title === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(prop) => prop.title === "sm" && "flex"};
  gap: 10px;
`;
const Img = styled.img`
  width: 100%;
  height: ${(prop) => (prop.title === "sm" ? "100px" : "202px")};
  background-color: #999;
  flex: 1;
`;
const Details = styled.div`
  display: flex;
  gap: 12px;
  margin-top: ${(prop) => prop.title !== "sm" && "16px"};
  flex: 1;
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Subt = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
const Profile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 24px;
  display: ${(prop) => prop.title === "sm" && "none"};
`;

type Props = {
  title: string;
};

const Card = ({ title }: Props) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container title={title}>
        <Img
          title={title}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4tRzWXEimLwK6AxnxsBiXFbf9SEfXwV0D099QhjYsg&s"
        />
        <Details title={title}>
          <Profile
            title={title}
            src="https://avatars.githubusercontent.com/u/87942124?v=4"
            alt=""
          />
          <Texts>
            <Title>To create a roduction build, use npm run build...</Title>
            <Subt>Bai Codes</Subt>
            <Info>660,908 views - 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
