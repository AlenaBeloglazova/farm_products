import styled from "styled-components";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";

export const AdvantagesSection = styled.section`
  margin: 0 auto;
`;

export const AdvantagesList = styled.ul`
  display: grid;
  grid-template-columns: 540px 540px;
  list-style: none;
  gap: ${(props) => props.theme.indent};
  justify-content: center;
`;
export const StyledTitle = styled(Title)`
  margin-bottom: 64px;
  text-align: center;
  margin-top: 100px;
`;

export const AdvantagesItem = styled.li`
  width: 540px;
`;

export const StyledButton = styled(Button)`
  margin: 0 auto;
  margin-top: 64px;
  margin-bottom: 100px;
`;
