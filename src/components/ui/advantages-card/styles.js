import styled from "styled-components";

export const StyledCard = styled.div`
  width: 540px;
  height: 197px;
  background-color: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
  padding: ${(props) => props.theme.indent};
`;

export const Header = styled.header`
  display: flex;
  text-align: left;
  column-gap: ${(props) => props.theme.indent};
`;

export const Feature = styled.span`
  display: inline-block;
  min-height: 25px;
  margin-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 25px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.panelBackgroundColorDanger
      : props.theme.panelBackgroundColor};
`;
