import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import { Router, Route } from 'react-router'

var clickCancel = () =>
{browserHistory.goBack()};

export default class NewDay extends Component {
  render(){

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="form-group">
            <input  type="text" className="form-control" placeholder="Enter date"/>
          </div>

          <div className="form-group">
            <input  type="text" className="form-control" placeholder="Enter Location"/>
          </div>
          <button className="btn btn-primary">Add new charge</button>

          <div>
            <button className="btn btn-success">Save</button>
            <button className="btn btn-default" onclick={clickCancel}>Cancel</button>
          </div>

        </div>
        <div className="panel-footer">Total:</div>
      </div>
    )
  }
}