import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Card, Col, Row } from 'antd';
import Header from '../../Header/Header'
import 'antd/dist/antd.css';
import './fandash.css';
import TempData from '../../temp.json';

class FanDash extends Component{
    componentDidUpdate() {
        let hash = this.props.location.hash.replace('#', '');
        if (hash) {
            let node = ReactDOM.findDOMNode(this.refs[hash]);
            if (node) {
                node.scrollIntoView();
            }
        }
    }
    render() {
        return(
            <div>
                <Header />
                <Breadcrumb className="breadcrumbs">
                <Breadcrumb.Item active href="#jukebox">Discover Jukebox</Breadcrumb.Item>
                <Breadcrumb.Item href="#likes">Likes</Breadcrumb.Item>
                <Breadcrumb.Item href="#playlists">Playlists</Breadcrumb.Item>
                <Breadcrumb.Item href="#albums">Albums/Artists</Breadcrumb.Item>
                <Breadcrumb.Item href="#following">Following</Breadcrumb.Item>
                {/* <Breadcrumb.Item href="#history">History</Breadcrumb.Item> */}
                </Breadcrumb>

                <div className="jukebox" ref="jukebox" align="left">
                <h4>Jukebox</h4>
            <Row gutter={32}>
            {TempData.map((TempD, index)=>{ return (<div><Col span={3}>
                <Card
                     hoverable
                     style={{ width: 240, height: 240 }}
                     cover={<img alt="example" src={TempD.image} />}
                >
                <h6>{TempD.title}</h6>
                <p>{TempD.song}</p>
                 </Card>
                 </Col>
                 </div>)})}
                </Row>
                </div>
                <div className="likes" ref="likes" align="left">
                <h4>Likes</h4>
                <Row gutter={32}>
                {TempData.map((TempD, index)=>{ return (<div><Col span={3}>
                <Card
                     hoverable
                     style={{ width: 240, height: 240 }}
                     cover={<img alt="example" src={TempD.image} />}
                >
                <h6>{TempD.title}</h6>
                <p>{TempD.song}</p>
                 </Card>
                 </Col>
                 </div>)})}
                </Row>
                </div>
                <div className="playlists" ref="playlists" align="left">
                <h4>Playlists</h4>
                <Row gutter={32}>
                {TempData.map((TempD, index)=>{ return (<div><Col span={3}>
                <Card
                     hoverable
                     style={{ width: 240, height: 240 }}
                     cover={<img alt="example" src={TempD.image} />}
                >
                <h6>{TempD.album}</h6>
                 </Card>
                 </Col>
                 </div>)})}
                </Row>
                </div>
                <div className="albums" ref="albums" align="left">
                <h4>Albums</h4>
                <Row gutter={32}>
                {TempData.map((TempD, index)=>{ return (<div><Col span={3}>
                <Card
                     hoverable
                     style={{ width: 240, height: 240 }}
                     cover={<img alt="example" src={TempD.image} />}
                >
                <h6>{TempD.title}</h6>
                <p>{TempD.album}</p>
                 </Card>
                 </Col>
                 </div>)})}
                </Row>
                </div>
                <div className="following" ref="following" align="left">
                <h4>Following</h4>
                <Row gutter={32}>
                {TempData.map((TempD, index)=>{ return (<div><Col span={3}>
                <Card
                     hoverable
                     style={{ width: 240, height: 240 }}
                     cover={<img alt="example" src={TempD.image} />}
                >
                <h6>{TempD.title}</h6>
                 </Card>
                 </Col>
                 </div>)})}
                </Row>
                </div>
            </div>
        );
    }
}

export default FanDash;
