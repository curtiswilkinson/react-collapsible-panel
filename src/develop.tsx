import * as ReactDOM from 'react-dom'
import * as React from 'react'
import * as AddCircle from 'react-icons/lib/md/add-circle'
import * as AddCircleOutline from 'react-icons/lib/md/add-circle-outline'

import { Pane } from './index'

const Dev = (props) => {
  return (
    <div>
      <Pane header={<h3>Default Configuration</h3>} >
        <p>Here is some content</p>
        <p>Here is some content</p>
        <p>Here is some content</p>
        <p>Here is some content</p>
      </Pane>
      <Pane
        header={<h3>Custom Icons</h3>}
        openIcon={<AddCircle size={ 30 } />}
        closedIcon={<AddCircleOutline size={ 30 } />}
      >
        <p>Here is some content</p>
        <p>Here is some content</p>
        <p>Here is some content</p>
        <p>Here is some content</p>
      </Pane>
    </div>
  )
}

ReactDOM.render(
  <Dev />,
  document.getElementById('mount')
)
