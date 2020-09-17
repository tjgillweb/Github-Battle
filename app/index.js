import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'
import Battle from './components/Battle'
import Results from './components/Results'
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            theme: 'light',
            toggleTheme: () => {
                this.setState(({ theme }) => ({
                    theme: theme === 'light' ? 'dark' : 'light' 
                }))
            }
        }
    }
    render(){
        return (
            <Router>
                <ThemeProvider value={this.state}>
                    <div className={this.state.theme}>
                        <div className='container'>
                            <Nav />
                            {/* Switch: If we have two routes that match only render the first one */}
                            <Switch> 
                                <Route exact path='/' component={Popular} />
                                <Route exact path='/battle' component={Battle} />
                                <Route path='/battle/results' component={Results} />
                                <Route render={() => <h1>404</h1>} />
                                {/* If we leave out the path that Route is always going to render */}
                            </Switch>
                        </div>
                    </div>
                </ThemeProvider>
            </Router>
        )
    }
}
ReactDOM.render(
    //React element
    //where to render the element to
    <App />, 
    document.getElementById('app')
)