import ActionButton from "../shared/ActionButton";
import {
  DarkModeOutlined,
  LightModeOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Action, Container, Input, Search, Wrapper } from "./navbar.styles";

type Props = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const Navbar = ({ darkMode, setDarkMode }: Props) => {
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlined />
        </Search>
        <Action>
          <ActionButton>SIGN IN</ActionButton>

          {darkMode ? (
            <LightModeOutlined onClick={handleClick} />
          ) : (
            <DarkModeOutlined onClick={handleClick} />
          )}
        </Action>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
