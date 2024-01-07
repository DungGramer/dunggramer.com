import styled from '@emotion/styled';

const TitleStyle = styled.span`
  font-size: 2em;
`;

const Title = ({ children }: { children: React.ReactNode }) => {
  return <TitleStyle>{children}</TitleStyle>;
};

export default Title;
