import styled from "styled-components";

const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 8px 0px;
`;

type Props = {
  icons: React.ReactNode;
  title: string;
};

const Links = ({ icons, title }: Props) => {
  return (
    <div>
      <Items>
        {icons}
        {title}
      </Items>
    </div>
  );
};

export default Links;
