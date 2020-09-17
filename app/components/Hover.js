import React from 'react'

export default class Hover extends React.Component {
    state = {
        hovering: false
    }
    mouseOver = () => {
        this.setState({
            hovering: true
        })
    }

    mouseOut = () => {
        this.setState({
            hovering: false
        })
    }
    render() {
        return (
            <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
               {this.props.children(this.state.hovering)} {/* render props using children prop */}
               {/* {this.props.render(this.state.hovering)}   render props using render prop */}
            </div>
        )
    }
}