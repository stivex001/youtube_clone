import styled from "styled-components";
import ActionButton from "../shared/ActionButton";
import { SearchOutlined } from "@mui/icons-material";

const Container = styled.div`
position: sticky;
top: 0;
background-color: ${({theme}) => theme.bgLighter};
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
margin: 0 auto;
padding: 5px;
border: 1px solid #cccccc;
`;
const Input = styled.input`

`;

type Props = {}

const Navbar = (props: Props) => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlined />
        </Search>
        <ActionButton>
          SIGN IN
        </ActionButton>
      </Wrapper>
    </Container>
  )
}

export default Navbar