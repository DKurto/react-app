import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import { Router, Route } from 'react-router';

var clickCancel = () => {
  browserHistory.goBack()
};

var ChargesList = React.createClass({
  render() {

    var createItem = (item, index) => {
      return <li key={item.id} className="list-group-item">{index +1}. {item.place} {item.cost}$ {item.type}
        <button className="btn btn-danger" onClick={this.props.onDeleteCharge} value={index}><span value={index} className="glyphicon glyphicon-trash"/></button>
        </li>
    };
    return <ul className="list-group">{this.props.charges.map(createItem)}</ul>
  }
});



export default class NewDay extends Component {
  constructor(props) {
    super(props);
    this.onPlaceInput = this.onPlaceInput.bind(this);
    this.onCostInput = this.onCostInput.bind(this);
    this.onTypeSelect = this.onTypeSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      charges: [],
      place: '',
      cost: '',
      type: 'EMP'
    };

  }

  onPlaceInput = (e) => {
    this.setState({place: e.target.value})
  };
  onCostInput = (e) => {
    this.setState({cost: e.target.value})
  };
  onTypeSelect= (e) => {
    this.setState({type: e.target.value})
  };
  onDeleteCharge= (e) => {
    var itemIndex = parseInt(e.target.value, 10);

    this.setState((state) => {
      state.charges.splice(itemIndex, 1);
      return {charges: state.charges}
    })
  };


  handleSubmit =  (e) => {
    e.preventDefault();
    var nextItems = this.state.charges.concat([{place: this.state.place, cost:this.state.cost, type:this.state.type, id: Date.now()}]);
    var nextText = '';
    this.setState({charges: nextItems, place: nextText, cost: nextText, type: 'EMP'});
  };


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

          <form className="form-inline" onSubmit={this.handleSubmit}>
            <button className="btn btn-primary" type="submit" >Add new charge</button>

            <div className="row">
              <div className="form-group col-sm-2">
                <div className="input-group">
                  <d className="input-group-addon"><span className="glyphicon glyphicon-map-marker"/></d>
                  <input onChange={this.onPlaceInput} value={this.state.place} type="text" className="form-control" placeholder="place"  />
                </div>
              </div>
              <div className="form-group col-sm-2">
                <div className="input-group">
                  <div className="input-group-addon">$</div>
                  <input onChange={this.onCostInput} value={this.state.cost} type="number" className="form-control" placeholder="cost" />
                </div>
              </div>
              <div className="form-group col-sm-2">
                <select onChange={this.onTypeSelect} value={this.state.type} type="text" className="form-control" >
                  <option value="EMP">EMP</option>
                  <option value="CO">CO</option>
                </select>
              </div>
            </div>
          </form>

          <ChargesList charges={this.state.charges} onDeleteCharge={this.onDeleteCharge}/>

          <div>
            <button type="submit" className="btn btn-success">Save</button>
            <button className="btn btn-default" onClick={clickCancel}>Cancel</button>
          </div>

        </div>
        <div className="panel-footer">Total: </div>
      </div>
    )
  }
}