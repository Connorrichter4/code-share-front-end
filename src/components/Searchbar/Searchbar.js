import React from 'react';
import { useHistory } from 'react-router-dom';
import './Searchbar.css';

function SearchBar(props) {
	const { searchString, setSearchString } = props;

	const handleChange = (event) => {
		event.persist();
		setSearchString(event.target.value);
	};

	let history = useHistory();

	const handleSubmit = (event) => {
		console.log(history);
		event.preventDefault();
		console.log(searchString);
		history.push('/');
	};

	return (
		<form onSubmit={handleSubmit} className='form-horizontal'>
			<input
				type='text'
				className='searchbar'
				name='searchString'
				required
				placeholder='Search'
				onChange={handleChange}
				value={searchString}
			/>
		</form>
	);
}
export default SearchBar;
