import { shallow } from 'enzyme'
import * as React from 'react'
import Pane from './Pane'

describe('<Pane />', () => {
  describe('Props', () => {
    it('Will use the open state provided as props', () => {
      const header = <span>This is my header</span>
      const sut = shallow(<Pane header={header} open={ true }>Hi</Pane>)
      expect(sut.state().open).toBe(true)
    })
  })

  describe('Toggling', () => {
    it('Will toggle when the header is clicked', () => {
      const header = <span>This is my header</span>
      const sut = shallow(<Pane header={header}>Hi</Pane>)

      sut.find('div[onClick]').simulate('click')
      expect(sut.state().open).toBe(true)

      sut.find('div[onClick]').simulate('click')
      expect(sut.state().open).toBe(false)

    })

    it('will toggle when focused and the enter key is pressed', () => {
      const header = <span>This is my header</span>
      const sut = shallow(<Pane header={header}>body</Pane>)

      sut.find('div[onKeyUp]').simulate('keyup', {key: 'Enter'})
      expect(sut.state().open).toBe(true)

      sut.find('div[onKeyUp]').simulate('keyup', {key: 'Enter'})
      expect(sut.state().open).toBe(false)
    })
  })
})
