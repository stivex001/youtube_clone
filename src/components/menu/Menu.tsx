import styled from "styled-components";
import youtube from "../../assets/Group.png";
import {
  AccountCircleOutlined,
  ArticleOutlined,
  ExploreOutlined,
  HelpOutlineOutlined,
  HistoryOutlined,
  Home,
  LibraryBooksOutlined,
  LibraryMusicOutlined,
  LightModeOutlined,
  LiveTvOutlined,
  MovieOutlined,
  ReportOutlined,
  SettingsOutlined,
  SportsBasketballOutlined,
  SportsEsportsOutlined,
  SubscriptionsOutlined,
} from "@mui/icons-material";
import Links from "../Navbar/Links";

const Container = styled.div`
  flex: 1;
  background-color: #212121;
  height: 100vh;
  color: white;
  font-size: 14px;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;
const Img = styled.img`
  height: 25px;
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #373737;
`;
const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

// type Props = {};

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={youtube} />
          BaiTube
        </Logo>

        {/* NavLINKs */}
        <Links icons={<Home />} title="Home" />
        <Links icons={<ExploreOutlined />} title="Explore" />
        <Links icons={<SubscriptionsOutlined />} title="Subscriptions" />
        <Hr />
        <Links icons={<LibraryBooksOutlined />} title="Library" />
        <Links icons={<HistoryOutlined />} title="History" />
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe
          <Button>
            <AccountCircleOutlined /> SIGN IN
          </Button>
        </Login>
        <Hr />
        <Links icons={<LibraryMusicOutlined />} title="Music" />
        <Links icons={<SportsBasketballOutlined />} title="Sport" />
        <Links icons={<SportsEsportsOutlined />} title="Gaming" />
        <Links icons={<MovieOutlined />} title="Movies" />
        <Links icons={<ArticleOutlined />} title="News" />
        <Links icons={<LiveTvOutlined />} title="Live" />
        <Hr />
        <Links icons={<SettingsOutlined />} title="Settings" />
        <Links icons={<ReportOutlined />} title="Report" />
        <Links icons={<HelpOutlineOutlined />} title="Help" />
        <Links icons={<LightModeOutlined />} title="Light Mode" />
      </Wrapper>
    </Container>
  );
};

export default Menu;
