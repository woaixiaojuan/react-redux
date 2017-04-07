import React from 'react';
import { connect } from 'react-redux';
import { searchFilter } from '../actions/searchAction';
import { searchTable,fetchTable } from '../actions/tableActions';
import { antd, Button, Input } from 'antd';
import classNames from 'classnames';
const InputGroup = Input.Group;

@connect((store) => {
  return {
    posts: store.post.posts,
  };
})

export default class Search extends React.Component {
  constructor() {
    super(),
    this.state = {
      value: '',
      focus: false,
    }
  }

  // filterSearch(e) {
  //   const selectWord = e.target.value;
  //   this.props.dispatch(searchFilter(selectWord));
  // }

  handleInputChange(e) {
    this.setState({
      value: e.target.value,
    });
    if(e.target.value === ''){
      this.props.dispatch(fetchTable());
    }
  }

  handleFocusBlur(e) {
    this.setState({
      focus: e.target === document.activeElement,
    });
  }

  handleSearch(e) {
    const value = this.state.value;
    this.props.dispatch(searchTable(value));
  }

  render() {
    const btnCls = classNames({
      'ant-search-btn': true,
      'ant-search-btn-noempty': !!this.state.value.trim(),
    });
    const searchCls = classNames({
      'ant-search-input': true,
      'ant-search-input-focus': this.state.focus,
    });
    return (
      <div className="ant-search-input-wrapper">
        <InputGroup className={searchCls}>
          <Input size="large" placeholder="输入广告类型名称，如汽车，家具，饮料" onChange={this.handleInputChange.bind(this)} onPressEnter={this.handleSearch.bind(this)} onFocus={this.handleFocusBlur.bind(this)} onBlur={this.handleFocusBlur.bind(this)}/>
          <div className="ant-input-group-wrap">
            <Button icon="search" size="large" className={btnCls} onClick={this.handleSearch.bind(this)} />
          </div>
        </InputGroup>
      </div>
    )
  }
}
