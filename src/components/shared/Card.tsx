import { Link } from "react-router-dom";

import {
  Container,
  Details,
  Img,
  Info,
  Profile,
  Subt,
  Texts,
  Title,
} from "./card.styles";

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
