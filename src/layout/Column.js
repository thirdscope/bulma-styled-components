import { css as emotion_css } from 'emotion'
import Vars from '../utilities/vars'
import Columns from './Columns'
import { BaseWithConsumer } from '../base/Class'
import {
  mobile,
  tablet,
  touch,
  desktop,
  widescreen,
  fullhd,
} from '../utilities/mixins'

Vars.addDerivedDefault(() => ({
  'column-gap': '0.75rem',
}))

const onetotwelve = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
function map1to12(onEach) {
  return onetotwelve.reduce((acc, num) => emotion_css`
    ${acc}
    ${onEach(num)}
  `, '')
}

function percentage(num) {
  return `${num * 100}%`
}

export default class Column extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => emotion_css`
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: ${theme['column-gap']};
    .${Columns.name}.is-gapless > & {
      margin: 0;
      padding: 0;
    }
    .${Columns.name}.is-mobile > &.is-narrow {
      flex: none;
    }
    .${Columns.name}.is-mobile > &.is-full {
      flex: none;
      width: 100%;
    }
    .${Columns.name}.is-mobile > &.is-three-quarters {
      flex: none;
      width: 75%;
    }
    .${Columns.name}.is-mobile > &.is-two-thirds {
      flex: none;
      width: 66.6666%;
    }
    .${Columns.name}.is-mobile > &.is-half {
      flex: none;
      width: 50%;
    }
    .${Columns.name}.is-mobile > &.is-one-third {
      flex: none;
      width: 33.3333%;
    }
    .${Columns.name}.is-mobile > &.is-one-quarter {
      flex: none;
      width: 25%;
    }
    .${Columns.name}.is-mobile > &.is-one-fifth {
      flex: none;
      width: 20%;
    }
    .${Columns.name}.is-mobile > &.is-two-fifths {
      flex: none;
      width: 40%;
    }
    .${Columns.name}.is-mobile > &.is-three-fifths {
      flex: none;
      width: 60%;
    }
    .${Columns.name}.is-mobile > &.is-four-fifths {
      flex: none;
      width: 80%;
    }
    .${Columns.name}.is-mobile > &.is-offset-three-quarters {
      margin-left: 75%;
    }
    .${Columns.name}.is-mobile > &.is-offset-two-thirds {
      margin-left: 66.6666%;
    }
    .${Columns.name}.is-mobile > &.is-offset-half {
      margin-left: 50%;
    }
    .${Columns.name}.is-mobile > &.is-offset-one-third {
      margin-left: 33.3333%;
    }
    .${Columns.name}.is-mobile > &.is-offset-one-quarter {
      margin-left: 25%;
    }
    .${Columns.name}.is-mobile > &.is-offset-one-fifth {
      margin-left: 20%;
    }
    .${Columns.name}.is-mobile > &.is-offset-two-fifths {
      margin-left: 40%;
    }
    .${Columns.name}.is-mobile > &.is-offset-three-fifths {
      margin-left: 60%;
    }
    .${Columns.name}.is-mobile > &.is-offset-four-fifths {
      margin-left: 80%;
    }
    ${map1to12(i => `
      .${Columns.name}.is-mobile > &.is-${i} {
        flex: none;
        width: ${percentage(i / 12)};
      }
      .${Columns.name}.is-mobile > &.is-offset-${i} {
        margin-left: ${percentage(i / 12)};
      }
    `)}
    ${mobile(theme)`
      &.is-narrow-mobile {
        flex: none;
      }
      &.is-full-mobile {
        flex: none;
        width: 100%;
      }
      &.is-three-quarters-mobile {
        flex: none;
        width: 75%;
      }
      &.is-two-thirds-mobile {
        flex: none;
        width: 66.6666%;
      }
      &.is-half-mobile {
        flex: none;
        width: 50%;
      }
      &.is-one-third-mobile {
        flex: none;
        width: 33.3333%;
      }
      &.is-one-quarter-mobile {
        flex: none;
        width: 25%;
      }
      &.is-one-fifth-mobile {
        flex: none;
        width: 20%;
      }
      &.is-two-fifths-mobile {
        flex: none;
        width: 40%;
      }
      &.is-three-fifths-mobile {
        flex: none;
        width: 60%;
      }
      &.is-four-fifths-mobile {
        flex: none;
        width: 80%;
      }
      &.is-offset-three-quarters-mobile {
        margin-left: 75%;
      }
      &.is-offset-two-thirds-mobile {
        margin-left: 66.6666%;
      }
      &.is-offset-half-mobile {
        margin-left: 50%;
      }
      &.is-offset-one-third-mobile {
        margin-left: 33.3333%;
      }
      &.is-offset-one-quarter-mobile {
        margin-left: 25%;
      }
      &.is-offset-one-fifth-mobile {
        margin-left: 20%;
      }
      &.is-offset-two-fifths-mobile {
        margin-left: 40%;
      }
      &.is-offset-three-fifths-mobile {
        margin-left: 60%;
      }
      &.is-offset-four-fifths-mobile {
        margin-left: 80%;
      }
      ${map1to12(i => `
        &.is-${i}-mobile {
          flex: none;
          width: ${percentage(i / 12)};
        }
        &.is-offset-${i}-mobile {
          margin-left: ${percentage(i / 12)};
        }
      `)}
    `}
    ${tablet(theme)`
      &.is-narrow,
      &.is-narrow-tablet {
        flex: none;
      }
      &.is-full,
      &.is-full-tablet {
        flex: none;
        width: 100%;
      }
      &.is-three-quarters,
      &.is-three-quarters-tablet {
        flex: none;
        width: 75%;
      }
      &.is-two-thirds,
      &.is-two-thirds-tablet {
        flex: none;
        width: 66.6666%;
      }
      &.is-half,
      &.is-half-tablet {
        flex: none;
        width: 50%;
      }
      &.is-one-third,
      &.is-one-third-tablet {
        flex: none;
        width: 33.3333%;
      }
      &.is-one-quarter,
      &.is-one-quarter-tablet {
        flex: none;
        width: 25%;
      }
      &.is-one-fifth,
      &.is-one-fifth-tablet {
        flex: none;
        width: 20%;
      }
      &.is-two-fifths,
      &.is-two-fifths-tablet {
        flex: none;
        width: 40%;
      }
      &.is-three-fifths,
      &.is-three-fifths-tablet {
        flex: none;
        width: 60%;
      }
      &.is-four-fifths,
      &.is-four-fifths-tablet {
        flex: none;
        width: 80%;
      }
      &.is-offset-three-quarters,
      &.is-offset-three-quarters-tablet {
        margin-left: 75%;
      }
      &.is-offset-two-thirds,
      &.is-offset-two-thirds-tablet {
        margin-left: 66.6666%
      }
      &.is-offset-half,
      &.is-offset-half-tablet {
        margin-left: 50%;
      }
      &.is-offset-one-third,
      &.is-offset-one-third-tablet {
        margin-left: 33.3333%
      }
      &.is-offset-one-quarter,
      &.is-offset-one-quarter-tablet {
        margin-left: 25%;
      }
      &.is-offset-one-fifth,
      &.is-offset-one-fifth-tablet {
        margin-left: 20%;
      }
      &.is-offset-two-fifths,
      &.is-offset-two-fifths-tablet {
        margin-left: 40%;
      }
      &.is-offset-three-fifths,
      &.is-offset-three-fifths-tablet {
        margin-left: 60%;
      }
      &.is-offset-four-fifths,
      &.is-offset-four-fifths-tablet {
        margin-left: 80%;
      }
      ${map1to12(i => `
        &.is-${i},
        &.is-${i}-tablet {
          flex: none;
          width: ${percentage(i / 12)};
        }
        &.is-offset-${i},
        &.is-offset-${i}-tablet {
          margin-left: ${percentage(i / 12)};
        }
      `)}
    `}
    ${touch(theme)`
      &.is-narrow-touch {
        flex: none;
      }
      &.is-full-touch {
        flex: none;
        width: 100%;
      }
      &.is-three-quarters-touch {
        flex: none;
        width: 75%;
      }
      &.is-two-thirds-touch {
        flex: none;
        width: 66.6666%;
      }
      &.is-half-touch {
        flex: none;
        width: 50%;
      }
      &.is-one-third-touch {
        flex: none;
        width: 33.3333%;
      }
      &.is-one-quarter-touch {
        flex: none;
        width: 25%;
      }
      &.is-one-fifth-touch {
        flex: none;
        width: 20%;
      }
      &.is-two-fifths-touch {
        flex: none;
        width: 40%;
      }
      &.is-three-fifths-touch {
        flex: none;
        width: 60%;
      }
      &.is-four-fifths-touch {
        flex: none;
        width: 80%;
      }
      &.is-offset-three-quarters-touch {
        margin-left: 75%;
      }
      &.is-offset-two-thirds-touch {
        margin-left: 66.6666%;
      }
      &.is-offset-half-touch {
        margin-left: 50%;
      }
      &.is-offset-one-third-touch {
        margin-left: 33.3333%;
      }
      &.is-offset-one-quarter-touch {
        margin-left: 25%;
      }
      &.is-offset-one-fifth-touch {
        margin-left: 20%;
      }
      &.is-offset-two-fifths-touch {
        margin-left: 40%;
      }
      &.is-offset-three-fifths-touch {
        margin-left: 60%;
      }
      &.is-offset-four-fifths-touch {
        margin-left: 80%;
      }
      ${map1to12(i => `
        &.is-${i}-touch {
          flex: none;
          width: ${percentage(i / 12)};
        }
        &.is-offset-${i}-touch {
          margin-left: ${percentage(i / 12)};
        }
      `)}
    `}
    ${desktop(theme)`
      &.is-narrow-desktop {
        flex: none;
      }
      &.is-full-desktop {
        flex: none;
        width: 100%;
      }
      &.is-three-quarters-desktop {
        flex: none;
        width: 75%;
      }
      &.is-two-thirds-desktop {
        flex: none;
        width: 66.6666%;
      }
      &.is-half-desktop {
        flex: none;
        width: 50%;
      }
      &.is-one-third-desktop {
        flex: none;
        width: 33.3333%;
      }
      &.is-one-quarter-desktop {
        flex: none;
        width: 25%;
      }
      &.is-one-fifth-desktop {
        flex: none;
        width: 20%;
      }
      &.is-two-fifths-desktop {
        flex: none;
        width: 40%;
      }
      &.is-three-fifths-desktop {
        flex: none;
        width: 60%;
      }
      &.is-four-fifths-desktop {
        flex: none;
        width: 80%;
      }
      &.is-offset-three-quarters-desktop {
        margin-left: 75%;
      }
      &.is-offset-two-thirds-desktop {
        margin-left: 66.6666%;
      }
      &.is-offset-half-desktop {
        margin-left: 50%;
      }
      &.is-offset-one-third-desktop {
        margin-left: 33.3333%;
      }
      &.is-offset-one-quarter-desktop {
        margin-left: 25%;
      }
      &.is-offset-one-fifth-desktop {
        margin-left: 20%;
      }
      &.is-offset-two-fifths-desktop {
        margin-left: 40%;
      }
      &.is-offset-three-fifths-desktop {
        margin-left: 60%;
      }
      &.is-offset-four-fifths-desktop {
        margin-left: 80%;
      }
      ${map1to12(i => `
        &.is-${i}-desktop {
          flex: none;
          width: ${percentage(i / 12)};
        }
        &.is-offset-${i}-desktop {
          margin-left: ${percentage(i / 12)};
        }
      `)}
    `}
    ${widescreen(theme)`
      &.is-narrow-widescreen {
        flex: none;
      }
      &.is-full-widescreen {
        flex: none;
        width: 100%;
      }
      &.is-three-quarters-widescreen {
        flex: none;
        width: 75%;
      }
      &.is-two-thirds-widescreen {
        flex: none;
        width: 66.6666%;
      }
      &.is-half-widescreen {
        flex: none;
        width: 50%;
      }
      &.is-one-third-widescreen {
        flex: none;
        width: 33.3333%;
      }
      &.is-one-quarter-widescreen {
        flex: none;
        width: 25%;
      }
      &.is-one-fifth-widescreen {
        flex: none;
        width: 20%;
      }
      &.is-two-fifths-widescreen {
        flex: none;
        width: 40%;
      }
      &.is-three-fifths-widescreen {
        flex: none;
        width: 60%;
      }
      &.is-four-fifths-widescreen {
        flex: none;
        width: 80%;
      }
      &.is-offset-three-quarters-widescreen {
        margin-left: 75%;
      }
      &.is-offset-two-thirds-widescreen {
        margin-left: 66.6666%;
      }
      &.is-offset-half-widescreen {
        margin-left: 50%;
      }
      &.is-offset-one-third-widescreen {
        margin-left: 33.3333%;
      }
      &.is-offset-one-quarter-widescreen {
        margin-left: 25%;
      }
      &.is-offset-one-fifth-widescreen {
        margin-left: 20%;
      }
      &.is-offset-two-fifths-widescreen {
        margin-left: 40%;
      }
      &.is-offset-three-fifths-widescreen {
        margin-left: 60%;
      }
      &.is-offset-four-fifths-widescreen {
        margin-left: 80%;
      }
      ${map1to12(i => `
        &.is-${i}-widescreen {
          flex: none;
          width: ${percentage(i / 12)};
        }
        &.is-offset-${i}-widescreen {
          margin-left: ${percentage(i / 12)};
        }
      `)}
    `}
    ${fullhd(theme)`
      &.is-narrow-fullhd {
        flex: none;
      }
      &.is-full-fullhd {
        flex: none;
        width: 100%;
      }
      &.is-three-quarters-fullhd {
        flex: none;
        width: 75%;
      }
      &.is-two-thirds-fullhd {
        flex: none;
        width: 66.6666%;
      }
      &.is-half-fullhd {
        flex: none;
        width: 50%;
      }
      &.is-one-third-fullhd {
        flex: none;
        width: 33.3333%;
      }
      &.is-one-quarter-fullhd {
        flex: none;
        width: 25%;
      }
      &.is-one-fifth-fullhd {
        flex: none;
        width: 20%;
      }
      &.is-two-fifths-fullhd {
        flex: none;
        width: 40%;
      }
      &.is-three-fifths-fullhd {
        flex: none;
        width: 60%;
      }
      &.is-four-fifths-fullhd {
        flex: none;
        width: 80%;
      }
      &.is-offset-three-quarters-fullhd {
        margin-left: 75%;
      }
      &.is-offset-two-thirds-fullhd {
        margin-left: 66.6666%
      }
      &.is-offset-half-fullhd {
        margin-left: 50%;
      }
      &.is-offset-one-third-fullhd {
        margin-left: 33.3333%
      }
      &.is-offset-one-quarter-fullhd {
        margin-left: 25%;
      }
      &.is-offset-one-fifth-fullhd {
        margin-left: 20%;
      }
      &.is-offset-two-fifths-fullhd {
        margin-left: 40%;
      }
      &.is-offset-three-fifths-fullhd {
        margin-left: 60%;
      }
      &.is-offset-four-fifths-fullhd {
        margin-left: 80%;
      }
      ${map1to12(i => `
        &.is-${i}-fullhd {
          flex: none;
          width: ${percentage(i / 12)};
        }
        &.is-offset-${i}-fullhd {
          margin-left: ${percentage(i / 12)};
        }
      `)}
    `}
  `
}
