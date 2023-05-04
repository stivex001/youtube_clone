import youtube from "../../assets/Group.png";
import {
  ArticleOutlined,
  DarkModeOutlined,
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
import ActionButton from "../shared/ActionButton";
import { Link } from "react-router-dom";
import { Container, Hr, Img, Login, Logo, Title, Wrapper } from "./menu.styles";

type Props = {
  setDarkMode: (value: boolean) => void;
  darkMode: boolean;
};

const Menu = ({ setDarkMode, darkMode }: Props) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={youtube} />
            BaiTube
          </Logo>
        </Link>

        {/* NavLINKs */}
        <Links
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          icons={<Home />}
          title="Home"
        />
        <Links
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          icons={<ExploreOutlined />}
          title="Explore"
        />
        <Links
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          icons={<SubscriptionsOutlined />}
          title="Subscriptions"
        />
        <Hr />
        <Links
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          icons={<LibraryBooksOutlined />}
          title="Library"
        />
        <Links
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          icons={<HistoryOutlined />}
          title="History"
        />
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe
          <ActionButton>SIGN IN</ActionButton>
        </Login>
        <Hr />
        <Title>BEST OF BAITUBE</Title>
        <Links
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          icons={<LibraryMusicOutlined />}
          title="Music"
        />
        <Links
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          icons={<SportsBasketballOutlined />}
          title="Sport"
        />
        <Links
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          icons={<SportsEsportsOutlined />}
          title="Gaming"
        />
        <Links
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          icons={<MovieOutlined />}
          title="Movies"
        />
        <Links
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          icons={<ArticleOutlined />}
          title="News"
        />
        <Links
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          icons={<LiveTvOutlined />}
          title="Live"
        />
        <Hr />
        <Links
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          icons={<SettingsOutlined />}
          title="Settings"
        />
        <Links
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          icons={<ReportOutlined />}
          title="Report"
        />
        <Links
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          icons={<HelpOutlineOutlined />}
          title="Help"
        />
        <Links
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          icons={darkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
          title={darkMode ? "Light Mode" : "Dark Mode"}
        />
      </Wrapper>
    </Container>
  );
};

export default Menu;
