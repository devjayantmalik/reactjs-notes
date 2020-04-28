import React from 'react';


class EditText extends React.Component{
	constructor(props){
		super(props);

		this.state = {term: ''}
	}

	searchFormSubmitted = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.term);
		this.setState({term: ''})
	}

	render(){
		return(
			<form onSubmit={this.searchFormSubmitted}>
				<div className="ui fluid icon input">
					<input
						onChange={e => this.setState({term: e.target.value})}
						type="text"
						placeholder={this.props.placeholder}
						value={this.state.term}
					/>
					<i className="search icon"></i>
				</div>
			</form>
		);
	}
}

export default EditText;
