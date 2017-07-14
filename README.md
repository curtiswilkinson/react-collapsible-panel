# React Collapsible Panel
A simple Accordion component with sensible defaults.

React collapsible simply takes a header, wrappers children, and displays them as an accordion with default animation, toggle icons, keyboard control and tab focusing.

## Props
| Prop Name                    | Type                | Default    | Description                                                                        |
|------------------------------|---------------------|------------|------------------------------------------------------------------------------------|
| header                       | JSX.Element         | None       | The element to be displayed as the header of the Pane                              |
| animationDuration (optional) | number              | 300        | The duration of the time it takes to toggle the content in milliseconds            |
| openIcon (optional)          | JSX.Element         | Caret Icon | The icon displayed when the pane is open                                           |
| closedIcon (optional)        | JSX.Element         | Caret Icon | The Icon displayed when the pane is closed                                         |
| showIcon (optional)          | boolean             | True       | A boolean dictation whether to show the toggle icon or not                         |
| wrapperClassName (optional)  | string              | None       | The className property applied to the wrapper of the entire pane                   |
| wrapperStyle (optional)      | React.CSSProperties | None       | An object of styles that will be applied inline to the wrapper of the pane content |
| bodyClassName (optional)     | string              | None       | The className property applied to the wrapper of the pane content                  |
| bodyStyle (optional)         | React.CSSProperties | None       | An object of styles that will be applied inline to the wrapper of the pane content |
| headerClassName (optional)   | string              | None       | The className property applied to the wrapper of the pane content                  |
