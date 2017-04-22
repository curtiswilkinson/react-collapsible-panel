import * as React from 'react'
import * as AnimateHeight from 'react-animate-height'

interface Props {
  animationDuration?: number
  bodyClassName?: string
  bodyStyle?: React.CSSProperties
  closedIcon?: JSX.Element
  header: JSX.Element
  headerClassName?: string
  headerStyle?: React.CSSProperties
  open?: boolean
  openIcon?: JSX.Element
  wrapperClassName?: string
  wrapperStyle?: React.CSSProperties
}

interface State {
  open: boolean
}

class Pane extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)

    this.state = { open: this.props.open || false }
  }

  componentWillReceiveProps(nextProps): void {
    if (nextProps.open) {
      this.setState({ open: nextProps.open })
    }
  }
  
  private keyListenerFn = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      this.toggleOpenFn()
    }
  }

  private onFocusFn = (event: React.FocusEvent<HTMLDivElement>): void => {
    document.addEventListener( 'keyup', this.keyListenerFn)
  }

  private onBlurFn = (event: React.FocusEvent<HTMLDivElement>): void => {
    document.removeEventListener('keyup')
  }

  private toggleOpenFn = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  public render(): JSX.Element {
    const {
      header,
      children,
      headerStyle,
      bodyStyle,
      headerClassName,
      bodyClassName,
      wrapperStyle,
      wrapperClassName
    } = this.props

    return (
      <div style={ wrapperStyle } className={ wrapperClassName }>
        <div
          onClick={ this.toggleOpenFn }
          style={ headerStyle }
          className={ headerClassName }
          onFocus={ this.onFocusFn }
          onBlur={ this.onBlurFn }
        >
          { header }
        </div>
        <AnimateHeight
          style={ bodyStyle }
          className={ bodyClassName }
          duration={ this.props.animationDuration }
          height={ this.state.open ? 'auto' : 0 }
          onFocus={ this.onFocusFn }
          onBlur={ this.onBlurFn }
        >
          { children }
        </AnimateHeight>
      </div>
    )
  }
}

export default Pane