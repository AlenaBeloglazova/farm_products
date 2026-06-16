import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 1280px;
  height: 80px;
  margin: 0 auto;
  align-items: center;
  padding: 0 ${(props) => props.theme.pagePadding};
  border-top: 1px solid #0000001a;
`;
