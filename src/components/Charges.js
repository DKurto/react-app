import React, {Component} from 'react';

export default class Charges extends React.Component {
  render(){
    var data = this.props.data;
    var chargesTemplate = data.map(function(item, index) {
      return (
          <div key={index}>
            <p>{index+1}. {item.place}: {item.cost}</p>
          </div>
      )
    });
    return (
        <div className="charges">
          {chargesTemplate}
        </div>
    );
  }
};