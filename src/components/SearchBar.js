import React, { Component } from 'react'

export class SearchBar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
			tempterm:'',
            term : ''
        }
        this.onInputChange = this.onInputChange.bind(this)
    }
    onInputChange(event){
        this.setState({
            tempterm : event.target.value,
			term : this.state.tempterm
        })
		console.log(this.state.term)
   
    }
	onClickHandler = (event) =>{
		this.props.onSearchTermChange(this.state.term)
	}
    render() {
        return (
            <div className="search-bar">
            <input onChange={this.onInputChange} value={this.state.tempterm} />
			<button type="submit"  onClick={this.onClickHandler} >Search</button>
            </div>
        )
    }
}

export default SearchBar;
