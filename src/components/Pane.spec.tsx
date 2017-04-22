import { shallow } from 'enzyme'
import * as React from 'react'
import * as ArrowDown from 'react-icons/lib/md/keyboard-arrow-down'
import * as ArrowUp from 'react-icons/lib/md/keyboard-arrow-up'
import Pane from './Pane'

describe('<Pane />', () => {
  describe('Render', () => {
    it('Will render the header prop', () => {
      const header = <span id='header' />
      const sut = shallow(<Pane header={header}>Body</Pane>)

      const headerSearch = sut.find('#header')
      expect(headerSearch.length).toEqual(1)
    })

    it('will render the children as the body', () => {
      const body = <span id='body' />
      const sut = shallow(<Pane header={<div />}>{body}</Pane>)

      const bodySearch = sut.find('#body')
      expect(bodySearch.length).toEqual(1)
    })
  })

  describe('Props', () => {
    it('Will use the open state provided as props', () => {
      const header = <span>This is my header</span>
      const sut = shallow(<Pane header={header} open={true}>Hi</Pane>)
      expect(sut.state().open).toBe(true)
    })

    it('Will setState if passed a open "open" prop post-mounting', () => {
      const header = <span>This is my header</span>
      const sut = shallow(<Pane header={header}>body</Pane>)

      expect(sut.state().open).toBe(false)
      sut.setProps({ open: true })
      expect(sut.state().open).toBe(true)
    })

    it('Will render the openIcon & closedIcon if provided', () => {
      const closedIcon = <span id='closed' />
      const openIcon = <span id='open' />

      const sut = shallow(
        <Pane header={<div />} closedIcon={ closedIcon } openIcon={ openIcon }>body</Pane>
      )

      expect(sut.find('#closed').length).toEqual(1)
      expect(sut.find('#open').length).toEqual(0)

      sut.find('div[onClick]').simulate('click')

      expect(sut.find('#closed').length).toEqual(0)
      expect(sut.find('#open').length).toEqual(1)
    })

    it('will render no icons if showIcon props is false', () => {
      const sut = shallow(<Pane header={<div />} showIcon={ false }>Hi</Pane>)

      expect(sut.find(ArrowUp).length).toEqual(0)
      expect(sut.find(ArrowDown).length).toEqual(0)
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

      sut.find('div[onKeyUp]').simulate('keyup', { key: 'Enter' })
      expect(sut.state().open).toBe(true)

      sut.find('div[onKeyUp]').simulate('keyup', { key: 'Enter' })
      expect(sut.state().open).toBe(false)
    })

    it('will toggle the icon based on the open state', () => {
      const sut = shallow(<Pane header={<div />}>Hi</Pane>)

      expect(sut.find(ArrowUp).length).toEqual(1)
      expect(sut.find(ArrowDown).length).toEqual(0)

      sut.find('div[onClick]').simulate('click')

      expect(sut.find(ArrowUp).length).toEqual(0)
      expect(sut.find(ArrowDown).length).toEqual(1)
    })
  })
})
