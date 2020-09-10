import React from 'react'

export default function withHover(Component) {
    return class WithHover extends React.Component {
        constructor(props){
            super(props)

            this.state = {
                hovering: false
            }

            this.mouseOver = this.mouseOver.bind(this)
            this.mouseOut = this.mouseOut.bind(this)
        }
        mouseOver(){
            this.setState({
                hovering: true
            })
        }

        mouseOut(){
            this.setState({
                hovering: false
            })
        }
        render() {
            const { hovering } = this.state

            return (
                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    <Component hovering={hovering} {...this.props}/>
                </div>
            )
        }
    }
}