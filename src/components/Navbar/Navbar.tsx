import styled from "styled-components";
import ActionButton from "../shared/ActionButton";
import {
  DarkModeOutlined,
  LightModeOutlined,
  SearchOutlined,
} from "@mui/icons-material";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
const Search = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  padding: 5px;
  border: 1px solid #cccccc;
  border-radius: 3px;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

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
