import React, { Component } from 'react';
import FlatButton           from 'material-ui/FlatButton';
import Avatar               from 'material-ui/Avatar';
import Paper                from 'material-ui/Paper';
import TextField            from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import SearchBar            from 'material-ui-search-bar-enhanced';
import DropDownMenu         from 'material-ui/DropDownMenu';
import MenuItem             from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd           from 'material-ui/svg-icons/content/add';



const style = {
  height: 300,
  width: 300,
  margin: 20,
 verticalAlign:'top',
 float:'left'
};
const style1 = {
  height: 300,
  width: 500,
  margin: 20,
  textAlign: 'left',
  display: 'inline-block',
  verticalAlign:'top',
  float:'left'
};
const style3 = {
marginRight: 20,

}

const bluestyle={
  backgroundColor:blue300,
  textAlign:'center',
  verticalAlign:'bottom',
  height:100,
  padding:10
}
const divStyle={
  margin:20,
  textAlign: 'center',
  display: 'inline-block',
  verticalAlign:'top',
  float:'left'

}


/* component styles */
import { styles } from './styles.scss';
import { Divider } from 'material-ui';
import { Tab } from 'material-ui/Tabs';
import { Tabs } from 'material-ui/Tabs/Tabs';
import { GridList } from 'material-ui/GridList';
import { blue300 } from 'material-ui/styles/colors';

export default class Home extends Component {
  constructor(props) {
    super(props);
   this.state ={dataSource : [], };
   
  
  }
 
  handleChange(event, index, value){
    this.setState({value});

  }
  changeValue(event,value){
   this.setState({dataSource:[ value, value+value, value+value+value]});
  }


  search(){
    window.location.href='https://twitter.com/search?q=aadhaar';
    
  }
  render() {
    
    return (
      <div className="main_profile" style={{padding:20}} >
      <Paper style={style} zDepth={1}> 
    
    
    <Paper style={bluestyle}/>
    
      <div className="SubConatiners">
      <div >
        
        <FloatingActionButton style={style3}>
              <ContentAdd />
          </FloatingActionButton>
        
     <b>Kamini Esther Priscilla</b><br/>
      
       </div>
     <div className="Tweets" style={divStyle}>
      <small><b>Tweets</b></small><br/>
      0
      </div>
      <div className="Following" style={divStyle} >
      <small><b>Following</b></small><br/>
      17
      </div>
      <div className="Followers" style={divStyle} >
      <small><b>Followers</b></small><br/>
      3
      </div>
      </div>
     
      </Paper>

      <Paper style={style1} zDepth={1} >
      <SearchBar
      // dataSource={this.state.dataSource}
      onChange={this.changeValue}
      onRequestSearch={this.search}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    />
      <Card>
    <CardHeader
      title="sachin tendulkar"
      subtitle="Happy Birthday, @imjadeja!"
      avatar="./src/images/sachin.jpg"
    />
    <CardMedia>
      <img src="https://pbs.twimg.com/media/DQYE95wVAAAOk11.jpg" alt="" />
    </CardMedia>
    <CardActions>
    <FlatButton label="Retweet" />
      <FlatButton label="like" />
    </CardActions>
  </Card>
  <Card>
    <CardHeader
      title="Narendra Modi"
      subtitle="At 10 AM today, will interact with @BJP4Gujarat SC, ST Morcha Karyakartas and Karyakartas belonging to coastal areas of Gujarat. At 11 AM will inaugurate the Dr. Ambedkar International Centre and will then go to Surat, where I will address a rally."
      avatar="./src/images/pm.jpg"
    />
    
    <CardActions>
      <FlatButton label="Retweet" />
      <FlatButton label="like" />
    </CardActions>
  </Card>
  <Card>
    <CardHeader
      title="Donald Trump"
      subtitle="I have determined that it is time to officially recognize Jerusalem as the capital of Israel. I am also directing the State Department to begin preparation to move the American Embassy from Tel Aviv to Jerusalem..."
      avatar="./src/images/Trump.jpg"
    />
    <CardMedia>
    <img src="https://pbs.twimg.com/media/DQSQDpJUEAs2PVe.jpg" alt="" />
    </CardMedia>
  
    <CardActions>
      <FlatButton label="Retweet" />
      <FlatButton label="like" />
    </CardActions>
  </Card>

      </Paper>
      
      
      <Paper zDepth={2} style={style}>
      <b> Who to follow</b>
      <small>. <a href="">Refresh</a>.<a href="">View all</a></small>
     
      <Divider/>
      <Avatar src="./src/images/Jeff.jpg" />
      Jeff Bezos<br/>
      <FlatButton label="Follow" />
      <Divider/>
      <Avatar src="./src/images/amazon kindle.jpg" />
      Amazon Kindle India <br/>
      <FlatButton label="Follow" />
      <Divider/>
      <Avatar src="./src/images/TOI.jpg" />
      Times of India<br/>
      <FlatButton label="Follow" />
      
      </Paper>
      <Paper zDepth={2}>
      
      
      </Paper>
      
      </div>
    );
  }
}
