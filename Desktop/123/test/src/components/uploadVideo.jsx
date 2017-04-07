import React from 'react';
import { Modal, Button, Form, Input, Upload, Icon, message } from 'antd';
import { addTableItem } from '../actions/tableActions';

const createForm = Form.create;
const FormItem = Form.Item;
const Dragger = Upload.Dragger;

function noop() {
  return false;
}

//function TestForm(props){
class AddVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      fileList: [],
    };
  }
  showModal() {
    this.setState({
      visible: true,
    });
  }
  handleOk() {
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        return;
      } else {
        // this.props.dispatch(addTableItem(values));
        this.props.form.resetFields();
        this.setState({
          visible: false,
          fileList: [],
        });
      }
    });
  }
  handleCancel(e) {
    this.setState({
      visible: false,
      fileList: [],
    });
    this.props.form.resetFields();
  }
  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  }

  checkVideoName(rule, value, callback) {
    if (value) {
      callback();
    } else {
      callback('请输入视频名称');
    }
  }
  checkAdVideo(rule, value, callback) {
    if (value && this.props.form.getFieldValue('videoName')) {
      callback();
    } else {
      if(this.props.form.getFieldValue('videoName')){
        callback('请上传视频！');
      }else{
        callback('请先输入视频名称');
      }
    }
  }

  onChange(info) {
    if (info.file.status !== 'uploading') {
      //console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 上传成功.`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败.`);
      this.setState({ fileList: [] });
    }
    this.setState({ fileList: info.fileList });
  }

  beforeUpload() {
    if(!this.form.getFieldValue('videoName')){
      this.setState({ fileList: [] });
      this.form.resetFields();
      message.error(`请先输入视频名称.`);
      return false;
    }
  }

  render() {
    const { getFieldDecorator, getFieldError, isFieldValidating, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };

    const videoName = getFieldValue('videoName');

    const props = {
      name: 'filename',
      accept: 'video/mp4',
      showUploadList: true,
      data: {
        videoname: videoName,
      },
      headers: {
        'X-Requested-With': null,
      },
      action: ENV.api + '/upload/video.do',
      onChange: this.onChange,
      beforeUpload: this.beforeUpload,
      defaultFileList: [],
    };


    return (
      <div>
        <Button type="primary" onClick={this.showModal.bind(this)}>上传视频</Button>
        <Modal title="上传新视频" visible={this.state.visible} onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}>

      <Form horizontal>
        <FormItem
          {...formItemLayout}
          label="视频名称"
          hasFeedback
          help={isFieldValidating('videoName') ? 'validating...' : (getFieldError('videoName') || []).join(', ')}
        >
          {getFieldDecorator('videoName', {
            rules: [
              { required: true, min: 1, message: '请输入正确的视频名称' },
              { validator: this.checkVideoName.bind(this) },
            ],
          })(
            <Input placeholder="请输入视频名称" />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="上传视频"
          hasFeedback
          help={isFieldValidating('adVideo') ? 'validating...' : (getFieldError('adVideo') || []).join(', ')}
        >
          {getFieldDecorator('adVideo', {
            rules: [
              { required: true, min: 10, message: '请上传视频' },
              { validator: this.checkAdVideo.bind(this) },
            ],
          })(
            <div style={{ height: 'auto' }} >
              <Dragger {...props} form={this.props.form} fileList={this.state.fileList} setState={this.setState.bind(this)}>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
              </Dragger>
            </div>
          )}
        </FormItem>
      </Form>
       </Modal>
       </div>
    );
  }
}

export default AddVideo = Form.create({})(AddVideo);
