import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import Header from '../../Header/Header'
//import Upload from './upload'
import './artistdash.css'

class ArtistDash extends Component{
    // constructor(props){
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this)
    //   }
    //   handleClick(e, {key}){
    //       if(key==='1'){
    //             this.props.history.push(`/fan_home`)
    //       }
    //   }
    // render(){
    //     return(
    //         <div>
    //             <Grid columns={1}>
    //                 <Grid.Column>
    //                     <Menu
    //                     items={[
    //                         { key: '1', name: 'link-1', content: 'Upload Music' },
    //                         { key: '2', name: 'link-2', content: 'My Sales' },
    //                         { key: '3', name: 'link-3', content: 'My Songs' },
    //                         { key: '4', name: 'link-4', content: 'In Progress' },
    //                         { key: '5', name: 'link-5', content: 'Scheduled' },
    //                         { key: '6', name: 'link-6', content: 'Live' },
    //                     ]}
    //                     onClick={() => this.handleClick()}
    //                     pointing
    //                     tabular
    //                     />
    //                 </Grid.Column>
    //             </Grid>
                
                
    //         </div>
    //     )
    // }
    state = { activeItem: 'Upload Music' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    showSegment(state){
        if(this.state.activeItem==='Upload Music'){
            return(<div><h2>To Do</h2></div>)
        }else if(this.state.activeItem==='My Sales'){
            return(<div><h2>To Do </h2></div>)
        }else if(this.state.activeItem==='My Songs'){
            return(<div><h2>To Do </h2></div>)
        }else if(this.state.activeItem==='In-Progress'){
            return(<div><h2>To Do </h2></div>)
        }else if(this.state.activeItem==='Scheduled'){
            return(<div><h2>To Do </h2></div>)
        }else if(this.state.activeItem==='Live'){
            return(<div><h2>To Do </h2></div>)
        }
    }
    
    render() {
      const { activeItem } = this.state
  
      return (
        <div className="artistdashheader">
          <Header />
          <Menu pointing tabular>
            <Menu.Item
                name='Upload Music'
                active={activeItem === 'Upload Music'}
                onClick={this.handleItemClick} 
            />
            <Menu.Item
              name='My Sales'
              active={activeItem === 'My Sales'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='My Songs'
              active={activeItem === 'My Songs'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='In-Progress'
              active={activeItem === 'In-Progress'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Scheduled'
              active={activeItem === 'Scheduled'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Live'
              active={activeItem === 'Live'}
              onClick={this.handleItemClick}
            />
          </Menu>
  
          <Segment>
                {this.showSegment()}
          </Segment>
        </div>
      )
    }
}

export default ArtistDash;