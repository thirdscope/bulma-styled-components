import styled, { css } from "styled-components";
import Vars from "../utilities/vars";
import { fromTheme } from "../utilities/functions";
import { TODO } from "../utilities/typeutil";

Vars.addDerivedDefault(vars => ({
  "help-size": vars["size-small"]
}));

const HelpColorClasses = ({ theme }) =>
  Object.entries(theme["colors"]).reduce<TODO>(
    (acc, [name, [color]]: TODO) => css`
  ${acc}
  &.is-${name} {
    color: ${color};
  }
`,
    ""
  );

export const Help = styled.p`
  display: block;
  font-size: ${fromTheme("help-size")};
  margin-top: 0.25rem;
  ${HelpColorClasses}
`;
Help.defaultProps = { theme: Vars.getVariables() };
