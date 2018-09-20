/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import { Catalog, pageLoader } from 'catalog'
import './static/fontawesome/css/font-awesome.min.css'
import * as Components from '../src'
import Elements from '../src/elements/catalog'
import Layout from '../src/layout/catalog'
import Comps from '../src/components/catalog'
import Form from '../src/form/catalog'
import README from '../README.md'

const { BulmaStyledTheme } = Components

const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: README,
  },
  Elements,
  Layout,
  Form,
  Comps,
]

ReactDOM.render(
  <BulmaStyledTheme>
    <Catalog
      title="Bulma Styled Components"
      pages={pages}
      imports={Components}
      styles={['fontawesome/css/fontawesome.min.css']}
      theme={{
        checkerboardPatternLight: 'white'
      }}
    />
  </BulmaStyledTheme>,
  document.getElementById('catalog'),
)
