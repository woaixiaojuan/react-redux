import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import styles from './layout.less';

@connect((store) => {
  return {
    table: store.table.table,
  };
})


export default class Layout extends React.Component {

  // componentWillMount() {
  //   this.props.dispatch(fetchUser());
  // }
  render() {
    const { user } = this.props;
    const { location } = this.props;

    return (
      <div>
        <Nav location={location} />
        <div className="container {styles.layout}" >
          <div className="row">
            <div className="col-lg-12">
              <h1 style={{ marginTop: '15px', marginBottom: '15px' }}>  React + Redux demo </h1>
              {this.props.children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
