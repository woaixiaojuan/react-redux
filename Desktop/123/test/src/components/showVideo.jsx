import React from 'react';
import { message } from 'antd';

export default class ShowVideo extends React.Component {
  constructor() {
    super();
    this.state = {
      imgShow: true,
      fullscreen: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      const totalTime = this.refs.video.duration;
      const startTime = this.setStartTime(this.props.startTime);
      if (startTime > totalTime) {
        message.warning('开始时间大于视频总长度.');
      }
      this.refs.video.currentTime = startTime < totalTime ? startTime : 0;
    }, 350)
  }

  onTimeUpdate() {
    const startShowTime = this.setStartTime(this.props.startTime);
    const endShowTime = startShowTime + 30;
    const currentTime = this.refs.video.currentTime;

    if (currentTime > endShowTime || currentTime < startShowTime) {
      this.setState({
        imgShow: false,
      })
    } else {
      this.setState({
        imgShow: true,
      })
    }
  }

  toggleFullscreen() {
    const videoEle = this.refs.videoBox;
    const position = videoEle.style.position;

    if (position === 'relative') {
      this.setState({
        fullscreen: true,
      });
    } else if (position === 'fixed') {
      this.setState({
        fullscreen: false,
      });
    }
  }

  setStartTime(time) {
    if (time.indexOf(':') !== -1) {
      const arr = time.split(':');
      return Number(arr[0]) * 3600 + Number(arr[1]) * 60 + Number(arr[2]);
    } else if (!isNaN(Number(time))) {
      return Number(time);
    } else {
      //message.error('请注意检查时间格式和长度.');
      return 0;
    }
  }

  render() {
    const imgFullscreen = {
      position: 'absolute',
      right: '0',
      bottom: '35px',
      maxWidth: '30%',
      zIndex: '9999999998',
      display: this.state.imgShow ? 'block' : 'none',
    };
    const imgSmallscreen = {
      position: 'absolute',
      right: '0',
      bottom: '35px',
      maxWidth: '25%',
      display: this.state.imgShow ? 'block' : 'none',
    };
    const toggleScreenBtn = {
      position: 'absolute',
      right: '0',
      bottom: '2px',
      zIndex: 1000,
      display: 'inline-block',
      height: '34px',
      width: '40px',
    };

    const divSmallScreen = {
      position: 'relative',
      width: '500px',
      overflow: 'hidden',
    }
    const divFullScreen = {
      position: 'fixed',
      top: '0px',
      right: '0',
      bottom: '0',
      left: '0',
      zIndex: '999999999',
      overflow: 'hidden',
      background: '#f8f8f8',
    }
    const videoStyle = {
      width: '100%',
      height: '100%',
      zIndex: '10000',
    }
    const imgStyle = this.state.fullscreen ? imgFullscreen : imgSmallscreen;
    const divStyle = this.state.fullscreen ? divFullScreen : divSmallScreen;

    return (
      <div style={divStyle} ref="videoBox">
        <video controls src={this.props.videoSrc} style={videoStyle} ref="video" onTimeUpdate={this.onTimeUpdate.bind(this)} />
        <img src={this.props.imgSrc} style={imgStyle} />
        <div onClick={this.toggleFullscreen.bind(this)} style={toggleScreenBtn} />
      </div>
    )
  }
}
