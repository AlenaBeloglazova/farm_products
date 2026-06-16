import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const StyledHeader = styled.header`
  max-width: 1280px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  padding: 0 ${(props) => props.theme.pagePadding};
`;

export const StyledButton = styled(Button)`
  height: 60px;
`;
