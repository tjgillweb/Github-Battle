import React from 'react';

export default class Popular extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            selectedLanguage: 'All'
        }
    }
    updateLanguage(selectedLanguage){
        this.setState({
            selectedLanguage
        })
    }
    render(){
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
        return (
            <ul className='flex-center'>
                {languages.map((language) => (
                    <li key={language}>
                        <button 
                            className="btn-clear nav-link"
                            style={language === this.state.selectedLanguage ? {color: '#9c0c0b'} : null}
                            onClick={() => this.updateLanguage(language)}>
                            {language}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}