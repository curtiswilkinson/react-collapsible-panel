import * as React from 'react'

export interface Props {
  defaultOpen?: number | null
  wrapperStyle?: React.CSSProperties
}

export interface State {
  openIndex: number | null
}

class PaneGroup extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      openIndex: this.props.defaultOpen || null
    }
  }

  private _setSelfOpen = (index) => () =>  this.setState({ openIndex: index})

  public componentWillReceiveProps(nextProps): void {
    if (nextProps.defaultOpen !== this.state.openIndex) {
      this.setState({ openIndex: nextProps.defaultOpen })
    }
  }

  public render(): JSX.Element {
    const children = React.Children.map(this.props.children, (child: JSX.Element, index) => React.cloneElement(child, {
      toggleFn: this._setSelfOpen(index),
      open: index === this.state.openIndex
    }))

    return (
      <div style={ this.props.wrapperStyle }>
        { children }
      </div>
    )
  }
}

export default PaneGroup
