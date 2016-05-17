import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import Charges from './Charges';


export default class Day extends React.Component {
  render(){
    var data= this.props.data,
      daysTemplate = data.map(function(item, index){
      return (
        <div key={index}>
          <div className="panel panel-default">
            <div className="panel-body">
              {item.date} {item.location}
              <Charges data={item.charges} />
            </div>
            <div className="panel-footer">Total: {item.totalDay}$</div>
          </div>
        </div>
      )
    });

    return (
      <div>
        {daysTemplate}
      </div>
    )
  }
};