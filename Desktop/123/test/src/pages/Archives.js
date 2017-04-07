import React from 'react';
import { Link } from 'react-router';

import Article from '../components/Article';

export default class Archives extends React.Component {

	  render() {
		  const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
		  const { query } = this.props.location;
		  const { article } = this.props.params;
		  const { date, filter } = query;
		//console.log(this.props);
		  const Articles = [
			  'Some Article',
			  'Some Other Article',
			  'Yet  Another Article ',
			  'Still More',
			  'Fake Article',
			  'Partial Another  ',
			  'Still More',
		].map((title, i) => <Article key={i} title={title} content={content} />);

		  const filters = ['date:' + date, '  filter:' + filter];
		  return (
			<div>
				<h1> Archives </h1>
				<p>hello  this  is  archives</p>
				<h4>{filters} </h4>
				<div className="row">{Articles}</div>
			</div>
		);
	}
}
