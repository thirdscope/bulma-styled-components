import React from 'react'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import Vars from '../utilities/vars'
import minireset from './minireset'
import getGeneric from './generic'
import Helpers from './helper'

const StyledBulmaContainer = styled.div`
  ${Helpers}
`

class StyledBulmaTheme extends React.PureComponent {
  static propTypes = {
    overrides: () => {},
  }

  static defaultProps = {
    overrides: {},
  }

  componentWillMount() {
    this.vars = Vars.getVariables(this.props.overrides)
    return injectGlobal`
      ${minireset}
      ${getGeneric(this.vars)}
    `
  }

  vars = Vars.getVariables();

  render() {
    const { overrides, ...props } = this.props
    return (
      <ThemeProvider theme={this.vars}>
        <StyledBulmaContainer {...props} />
      </ThemeProvider>
    )
  }
}

export default StyledBulmaTheme
