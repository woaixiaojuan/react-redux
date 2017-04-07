import React from 'react';
import { Link } from 'react-router';
import { Col, Spin, Tabs } from 'antd';
import { connect } from 'react-redux';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}


@connect((store) => {
  return {
    table: store.table,
  };
})

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    // this.props.dispatch(fetchTable());
    // this.props.dispatch(fetchAdType());
  }


  render() {
    return (
    <Tabs className="hsTab" defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
    </Tabs>
    )
  }

}

// import SelectAd from '../components/SelectAd';
// // import AddVideo from '../components/AddVideo';
// import Search from '../components/Search';
// import ShowVideo from '../components/showVideo';
// import UploadVideo from '../components/uploadVideo';
// import VideoImg from '../components/videoImg';


//<Col span={1} offset={1} ><AddVideo dispatch={this.props.dispatch.bind(this)} /></Col>
//start={this.start.bind(this)}
// export const Settings = React.createClass({
//   getInitialState() {
//     return {
//       selectedRowKeys: [],  // 这里配置默认勾选列
//       loading: false,
//     };
//   },
//   start() {
//     this.setState({ loading: true });
//     // 模拟 ajax 请求，完成后清空
//     setTimeout(() => {
//       this.setState({
//         selectedRowKeys: [],
//         loading: false,
//       });
//     }, 1000);
//   },
//   onSelectChange(selectedRowKeys) {
//     console.log('selectedRowKeys changed: ', selectedRowKeys);
//     this.setState({ selectedRowKeys });
//   },
//   componentWillMount() {
//     this.props.dispatch(fetchTable());
//   },
//   render() {
//     const  {table}  = this.props;
//     const { loading, selectedRowKeys } = this.state;
//     const rowSelection = {
//       selectedRowKeys,
//       onChange: this.onSelectChange,
//     };
//     const hasSelected = selectedRowKeys.length > 0;
//     return (
//       <div>
//         <div style={{ marginBottom: 16 }}>
//           <Button type="primary" onClick={this.start}
//             disabled={!hasSelected} loading={loading}
//           >操作</Button>
//           <span style={{ marginLeft: 8 }}>{hasSelected ? `选择了 ${selectedRowKeys.length} 个对象` : ''}</span>
//         </div>
//         <Table rowSelection={rowSelection} columns={columns} dataSource={table} />
//       </div>
//     );
//   },
// });

//export default Settings;
//
// export default class Settings extends React.Component{

//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedRowKeys: [],  // 这里配置默认勾选列
//       loading: false,
//     };
//     this.start = this.start.bind(this);
//     this.onSelectChange = this.onSelectChange.bind(this);
//   }
//   componentWillMount() {
//       this.props.dispatch(fetchTable());
//   }
//   start(){
//     setState({ loading: true });
//     // 模拟 ajax 请求，完成后清空
//     setTimeout(() => {
//         setState({
//         selectedRowKeys: [],
//         loading: false,
//       });
//     }, 1000)
//   }
//   onSelectChange(selectedRowKeys) {
//     console.log('selectedRowKeys changed: ', selectedRowKeys);
//     this.setState({ selectedRowKeys });
//   }
//   render() {
//     const  {table}  = this.props;
//     const { loading, selectedRowKeys } = this.state;
//     const rowSelection = {
//       selectedRowKeys,
//       onChange: this.onSelectChange,
//     };
//     const hasSelected = selectedRowKeys.length > 0;
//     return (
//       <div>
//         <div style={{ marginBottom: 16 }}>
//           <Button type="primary" onClick={this.start}
//             disabled={!hasSelected} loading={loading}
//           >操作</Button>
//           <span style={{ marginLeft: 8 }}>{hasSelected ? `选择了 ${selectedRowKeys.length} 个对象` : ''}</span>
//         </div>
//         <Table rowSelection={rowSelection} columns={columns} dataSource={table} />
//       </div>
//     );
//   }
// }


// export default class Settings extends React.Component{
// componentWillMount() {
//   this.props.dispatch(fetchTable());
// }

//   render() {
//       const  {table}  = this.props;
//       const pagination = {
//       total: this.props.table.length,
//       showSizeChanger: true,
//     //
//       onShowSizeChange(current, pageSize) {
//         console.log('Current: ', current, '; PageSize: ', pageSize);
//       },
//       onChange(current) {
//         console.log('Current: ', current);
//       },
//     };

//     console.log(table,table.length);
//     return (
//      <Table columns={columns} dataSource={table} pagination={pagination} />
//     );
//   }
// }
// export default class Settings extends React.Component{
//  render() {
//    return (
//      <div>
//        <h1> Settings </h1>
//      </div>
//      );
//  }
// }
