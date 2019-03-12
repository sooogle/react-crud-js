import * as React from "react";
import { withRouter } from "react-router-dom";
import EmployeeService from "../common/EmployeeService";

export class EmployeeUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = EmployeeService.find(this.props.match.params.id);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <div className="control">
            <label className="label" htmlFor="id">
              従業員No.
            </label>
            <input
              className="input"
              type="text"
              name="id"
              id="id"
              value={this.state.id}
              onChange={this.handleChange}
            />
          </div>
          <div className="control">
            <label className="label" htmlFor="name">
              氏名
            </label>
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="control">
            <label className="label" htmlFor="age">
              年齢
            </label>
            <input
              className="input"
              type="number"
              name="age"
              id="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label className="label">性別</label>
            <label className="radio">
              <input
                type="radio"
                name="sex"
                value="1"
                checked={this.state.sex === "1"}
                onChange={this.handleChange}
              />
              男
            </label>
            <label className="radio">
              <input
                type="radio"
                name="sex"
                value="2"
                checked={this.state.sex === "2"}
                onChange={this.handleChange}
              />
              女
            </label>
          </div>
          <div>
            <input type="submit" className="button" value="登録" />
          </div>
        </div>
      </form>
    );
  }

  handleChange(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    EmployeeService.update(this.state);
    if (window.confirm(JSON.stringify(this.state))) {
      this.props.history.push("/");
    }
  }
}

export default withRouter(EmployeeUpdate);
