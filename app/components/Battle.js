import React from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy, FaTimesCircle } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Results from './Results'
import { ThemeConsumer } from '../contexts/theme'
import { Link } from 'react-router-dom'

function Instructions() {
    return (
        <ThemeConsumer>
            {({ theme }) => (
                <div className='instructions-container'>
                    <h1 className='center-text header-lg'>
                        Instructions
                    </h1>
                    <ol className='container-sm grid center-text battle-instructions'>
                        <li>
                            <h3 className='header-sm'>Enter two Github Users</h3>
                            <FaUserFriends className={`bg-${theme}`} color='rgb(255, 191, 116)' size={140} />
                        </li>
                        <li>
                            <h3 className='header-sm'>Battle</h3>
                            <FaFighterJet className={`bg-${theme}`} color='#727272' size={140} />
                        </li>
                        <li>
                            <h3 className='header-sm'>Winners</h3>
                            <FaTrophy className={`bg-${theme}`} color='rgb(255, 215, 0)' size={140} />
                        </li>
                    </ol>
                </div>
            )}
        </ThemeConsumer>
    )
}

class PlayerInput extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            username: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.onSubmit(this.state.username)
    }
    handleChange(event){
        this.setState({
            username: event.target.value
        })
    }
    render(){
        return (
            <ThemeConsumer>
            {({ theme }) => (
                <form className='column player' onSubmit={this.handleSubmit} >
                    <label htmlFor='username' className='player-label'>
                        {this.props.label}
                    </label>
                    <div className='row player-inputs'>
                        <input 
                            type='text'
                            id='username'
                            className={`input-${theme}`}
                            placeholder='github username'
                            autoComplete='off'
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <button
                            type='submit'
                            className={`btn ${theme === 'dark' ? 'light-btn' : 'dark-btn'}`}
                            disabled={!this.state.username}
                        >
                        Submit
                        </button>
                    </div>
                </form>
            )}
            </ThemeConsumer>
        )
    }   
}

PlayerInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

function PlayerPreview({ username, onReset, label }){
    return (
        <ThemeConsumer>
            {({ theme }) => (
                <div className='column player'>
                    <h3 className='player-label'>{label}</h3>
                    <div className={`row bg-${theme}`}>
                        <div className='player-info'>
                            <img
                                className='avatar-small'
                                src={`https://github.com/${username}.png?size=200`}
                                alt={`Avatar for ${username}`}
                            />
                            <a
                                href={`https://github.com/${username}`}
                                className='link'>
                                    {username}
                            </a>
                        </div>
                        <button className='btn-clear flex-center' onClick={onReset}>
                            <FaTimesCircle color='rgb(194, 57, 42)' size={26} />
                        </button>
                    </div>
                </div>
            )}
        </ThemeConsumer>
    )   
}

PlayerPreview.propTypes = {
    username: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default class Battle extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            playerOne: null,
            playerTwo: null,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }
    handleSubmit(id, player){
        this.setState({
            [id]: player //ES6 computed property
        })
    }
    handleReset(id){
        this.setState({
            [id]: null
        })
    }
    render(){
        const { playerOne, playerTwo } = this.state

        return (
            <React.Fragment>
                <Instructions />
                <div className='players-container'>
                    <h1 className='center-text header-lg'>Players</h1>
                    <div className='row space-around'>
                    {/* get the input field if player is null */}
                    {playerOne === null 
                        ?  <PlayerInput
                                label='Player One'
                                onSubmit={(player) => this.handleSubmit('playerOne', player)}
                            />
                        :   <PlayerPreview 
                                username={playerOne} 
                                label='Player One' 
                                onReset={() => this.handleReset('playerOne')}
                            />
                    }
                    {playerTwo === null 
                       ?  <PlayerInput
                                label='Player Two'
                                onSubmit={(player) => this.handleSubmit('playerTwo', player)}
                            />
                        :   <PlayerPreview 
                                username={playerTwo} 
                                label='Player Two' 
                                onReset={() => this.handleReset('playerTwo')}
                            />
                    }
                    </div>
                   {playerOne && playerTwo && (
                        <Link
                            className='btn dark-btn btn-space'
                            to={{
                                pathname: '/battle/results',
                                search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
                            }}
                            >
                                Battle
                        </Link>
                    )}
                </div>
            </React.Fragment>
        )
    }
}