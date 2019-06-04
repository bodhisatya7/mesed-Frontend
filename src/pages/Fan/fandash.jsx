import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Card, Col, Row } from 'antd';
import Header from '../../Header/Header'
import 'antd/dist/antd.css';
import './fandash.css';
import TempData from '../../temp.json';

class FanDash extends Component{
    render() {
        return(
            <div>
                <Header />
                <Breadcrumb className="breadcrumbs">
                <Breadcrumb.Item active>Discover Jukebox</Breadcrumb.Item>
                <Breadcrumb.Item href="/likes">Likes</Breadcrumb.Item>
                <Breadcrumb.Item href="/playlists">Playlists</Breadcrumb.Item>
                <Breadcrumb.Item href="/albums">Albums/Artists</Breadcrumb.Item>
                <Breadcrumb.Item href="/following">Following</Breadcrumb.Item>
                <Breadcrumb.Item href="/history">History</Breadcrumb.Item>
                </Breadcrumb>

                <div className="jukebox" align="left">
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
                <div className="likes" align="left">
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
                <div className="playlists" align="left">
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
            </div>
        );
    }
}

export default FanDash;
