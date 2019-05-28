import * as React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Vars from "../utilities/vars";
import minireset from "./minireset";
import getGeneric from "./generic";
import Helpers from "./helper";

const BulmaStyledContainer = styled.div`
  ${Helpers}
`;

const GlobalStyle = createGlobalStyle<{ vars: any }>`
${minireset}
${props => getGeneric(props.vars)}
`;

class BulmaStyledTheme extends React.PureComponent<{ overrides: any }> {
  static propTypes = {
    overrides: () => {}
  };

  static defaultProps = {
    overrides: {}
  };

  componentWillMount() {
    this.vars = Vars.getVariables(this.props.overrides);
  }

  vars = Vars.getVariables();

  render() {
    const { overrides, ...props } = this.props;
    return (
      <ThemeProvider theme={this.vars}>
        <>
          <GlobalStyle vars={this.vars} />
          <BulmaStyledContainer {...props} />
        </>
      </ThemeProvider>
    );
  }
}

export default BulmaStyledTheme;
