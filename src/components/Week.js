import React, {Component} from 'react';
import Day from './Day';
import { browserHistory } from 'react-router';
import { Router, Route } from 'react-router'



var days = [
  {
    date: '25/04',
    nameDay: 'Monday',
    charges: [
      {
        place: 'Cafe',
        cost: '30'
      },
      {
        place: 'Taxi',
        cost: '10'
      }
    ],
    totalDay: '40'
  },
  {
    date: '29/04',
    nameDay: 'Friday',
    charges: [
      {
        place: 'Taxi',
        cost: '10'
      },
      {
        place: 'Ticket',
        cost: '1'
      },
      {
        place: 'Cafe',
        cost: '30'
      }

    ],
    totalDay: '41'
  }

];

var clickHandler = () =>
  {browserHistory.push('/new_day')};


export default class Week extends React.Component {
  render(){
    return (
        <div className="panel panel-default">
          <div className="panel-body">
            <p>Week starting: xxx</p>
            <button className="btn btn-primary" onClick={clickHandler}>Add new day</button>
            <Day data={days} />
          </div>
          <div className="panel-footer">Total:</div>
        </div>
    )
  }
};