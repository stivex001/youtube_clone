import {
  AddTaskOutlined,
  ReplyAllOutlined,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import Comments from "../../components/comments/Comments";
import Card from "../../components/shared/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChanneInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Desc = styled.p`
  font-size: 14px;
`;
const Subscripe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Video: React.FC = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/k3vfj-e1Ma4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </VideoWrapper>
        <Title>Test</Title>
        <Details>
          <Info>7,948,154 views . Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlined /> 123
            </Button>
            <Button>
              <ThumbDownOutlined /> Dislike
            </Button>
            <Button>
              <ReplyAllOutlined /> share
            </Button>
            <Button>
              <AddTaskOutlined /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChanneInfo>
            <Img src="https://avatars.githubusercontent.com/u/87942124?v=4" />
            <ChannelDetail>
              <ChannelName>Bai Codes</ChannelName>
              <ChannelCounter>200k subscribers</ChannelCounter>
              <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                laboriosam.
              </Desc>
            </ChannelDetail>
          </ChanneInfo>
          <Subscripe>SUBSCRIBE</Subscripe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card title="sm" />
        <Card title="sm" />
        <Card title="sm" />
        <Card title="sm" />
        <Card title="sm" />
        <Card title="sm" />
      </Recommendation>
    </Container>
  );
};

export default Video;
