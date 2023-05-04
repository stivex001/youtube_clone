import styled from "styled-components";

export const Container = styled.div`
  width: ${(prop) => prop.title !== "sm" && "360px"};
  margin-bottom: ${(prop) => (prop.title === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(prop) => prop.title === "sm" && "flex"};
  gap: 10px;
`;
export const Img = styled.img`
  width: 100%;
  height: ${(prop) => (prop.title === "sm" ? "100px" : "202px")};
  background-color: #999;
  flex: 1;
`;
export const Details = styled.div`
  display: flex;
  gap: 12px;
  margin-top: ${(prop) => prop.title !== "sm" && "16px"};
  flex: 1;
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
export const Subt = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
export const Info = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
export const Profile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 24px;
  display: ${(prop) => prop.title === "sm" && "none"};
`;
