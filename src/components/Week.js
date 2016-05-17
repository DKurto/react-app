import React, {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Day from './Day';

var clickHandler = () => {
  browserHistory.push('/new_day')
};
var week = {
 days: [
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

 ]
 }
localStorage.setItem( 'Week', JSON.stringify(week))

export default class Week extends React.Component {
  constructor(props) {
    super(props);

    this.state = JSON.parse(localStorage.getItem('Week'));
  }

  render(){
    return (
        <div className="panel panel-default">
          <div className="panel-body">
            <p>Week starting: xxx</p>
            <button className="btn btn-primary" onClick={clickHandler}>Add new day</button>
            <Day data={this.state.days} />
          </div>
          <div className="panel-footer">Total:</div>
        </div>
    )
  }
};