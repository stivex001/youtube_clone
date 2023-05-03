import styled from "styled-components";

const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 8px 0px;

  &:hover {
    background-color: ${({theme}) => theme.soft};
  }
`;

type Props = {
  icons: React.ReactNode;
  title: string;
  setDarkMode: (value: boolean) => void;
  darkMode: boolean;
};

const Links = ({ icons, title, setDarkMode, darkMode }: Props) => {
  const handleClick = () => {
    if (title === "Light Mode" || title === "Dark Mode") {
      setDarkMode(!darkMode);
    }
  };

  return (
    <div>
      <Items onClick={handleClick}>
        {icons}
        {title}
      </Items>
    </div>
  );
};

export default Links;
