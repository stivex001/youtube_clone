import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
export const Search = styled.div`
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
export const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
