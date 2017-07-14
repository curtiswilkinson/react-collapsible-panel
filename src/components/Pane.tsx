import * as React from 'react'
import * as AnimateHeight from 'react-animate-height'
import * as ArrowDown from 'react-icons/lib/md/keyboard-arrow-down'
import * as ArrowUp from 'react-icons/lib/md/keyboard-arrow-up'

export interface Props {
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
  showIcon?: boolean
  toggleFn?: () => void
}

export interface State {
  open: boolean
}

class Pane extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)

    this.state = { open: this.props.open || false }
  }

  public componentWillReceiveProps(nextProps): void {
    if (nextProps.open) {
      this.setState({ open: nextProps.open })
    }
  }

  private onKeyUpFn = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      this.toggleOpenFn()
    }
  }

  private toggleOpenFn = (): void => {
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
      wrapperClassName,
      openIcon,
      closedIcon,
      showIcon
    } = this.props

    let icon
    if (showIcon !== false) {
      icon = this.state.open ? openIcon || <ArrowUp size={ 30 } /> : closedIcon || <ArrowDown size={ 30 }/>
    }

    return (
      <div style={wrapperStyle} className={wrapperClassName}>
        <div
          onClick={this.props.toggleFn || this.toggleOpenFn}
          style={{...styles.headerWrap, ...headerStyle}}
          className={headerClassName}
          onKeyUp={this.onKeyUpFn}
          tabIndex={0}
        >
          <div style={ styles.headerText }>
            {header}
          </div>
          {icon}
        </div>
        <AnimateHeight
          style={bodyStyle}
          className={bodyClassName}
          duration={this.props.animationDuration}
          height={this.state.open ? 'auto' : 0}
        >
          {children}
        </AnimateHeight>
      </div>
    )
  }
}

const styles: { [index: string]: React.CSSProperties } = {
  headerWrap: {
    display: 'flex',
    alignItems: 'center'
  },
  headerText: {
    flex: '1 1 auto'
  },
  headerIcon: {
  }
}

export default Pane
