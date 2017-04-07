import React from 'react';
import { IndexLink, Link } from 'react-router';


export default class Nav extends React.Component {
	      constructor() {
		      super()
		      this.state = {
			      collapsed: true,
		};
	}
	      toggleCollapse() {
		      const collapsed = !this.state.collapsed;
		      this.setState({ collapsed });
	}
	      render() {
		      const { location } = this.props;
		      const { collapsed } = this.state;
		      const featuredClass = location.pathname === '/' ? 'active' : '';
		      const archivesClass = location.pathname.match(/^\/archives/) ? 'active' : '';
   	 const settingsClass = location.pathname.match(/^\/settings/) ? 'active' : '';
		      const testformClass = location.pathname.match(/^\/testform/) ? 'active' : '';
		      const navClass = collapsed ? 'collapse' : '';

		      return (
			   <nav className="navbar navbar-default navbar-fixed-top" role="navgation">
			      <div className="container">
				        <div className="navbar-header">
				          <button className="navbar-toggle" type="button" onClick={this.toggleCollapse.bind(this)}>
					            <span className="icon-bar"></span>
					            <span className="icon-bar"></span>
					            <span className="icon-bar"></span>
				          </button>
				        </div>

			        	<div className={'navbar-collapse ' + navClass} id="navbar-main">
				          <ul className="nav navbar-nav">
						  	<li className="{settingsClass}">
								<IndexLink to="/" onClick={this.toggleCollapse.bind(this)}> 主页 </IndexLink>
								</li>
								<li className="{featuredClass}">
								<Link to="featured" onClick={this.toggleCollapse.bind(this)}> Featured </Link>
								</li>
								<li className="{archivesClass}">
								<Link to="archives" onClick={this.toggleCollapse.bind(this)}> Archives </Link>
								</li>


				          </ul>
			        	</div>

			      </div>
			    </nav>

			);
	}
}

