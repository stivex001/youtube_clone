import styled from "styled-components";
import youtube from "../../assets/Group.png";
import {
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
        <hr />
        <Links icons={<LibraryBooksOutlined />} title="Library" />
        <Links icons={<HistoryOutlined />} title="History" />
        <Links icons={<LibraryMusicOutlined />} title="Music" />
        <Links icons={<SportsBasketballOutlined />} title="Sport" />
        <Links icons={<SportsEsportsOutlined />} title="Gaming" />
        <Links icons={<MovieOutlined />} title="Movies" />
        <Links icons={<ArticleOutlined />} title="News" />
        <Links icons={<LiveTvOutlined />} title="Live" />
        <Links icons={<SettingsOutlined />} title="Settings" />
        <Links icons={<ReportOutlined />} title="Report" />
        <Links icons={<HelpOutlineOutlined />} title="Help" />
        <Links icons={<LightModeOutlined />} title="Light Mode" />
      </Wrapper>
    </Container>
  );
};

export default Menu;
