import {
  Button,
  Container,
  Input,
  LinkI,
  Links,
  More,
  SubTitle,
  Title,
  Wrapper,
} from "./signin.styles";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to BaiTube</SubTitle>
        <Input placeholder="username" />
        <Input placeholder="password" type="password" />
        <Button>Sign In</Button>
        <Title>or</Title>
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input placeholder="password" type="password" />
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <LinkI>Help</LinkI>
          <LinkI>Privacy</LinkI>
          <LinkI>Terms</LinkI>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
