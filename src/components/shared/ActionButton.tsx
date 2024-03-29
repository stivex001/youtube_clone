import { AccountCircleOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

type Props = {
    children: React.ReactNode
};

const ActionButton = ({children}: Props) => {
  return (
    <Link to='/signin' style={{textDecoration: 'none'}}>
        <Button>
      <AccountCircleOutlined /> {children}
    </Button>
    </Link>

  );
};

export default ActionButton;
