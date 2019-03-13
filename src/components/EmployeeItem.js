import * as React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class EmployeeItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    return (
      <tr>
        <td>
          <Link to={`emp/${this.props.emp.id}/update`}>
            {this.props.emp.id}
          </Link>
        </td>
        <td>{this.props.emp.name}</td>
        <td>{this.props.emp.age}</td>
        <td>{this.props.emp.sex === "1" ? "男" : "女"}</td>
        <td>
          <button
            className="button is-danger is-small"
            onClick={this.handleDelete}
          >
            削除
          </button>
        </td>
      </tr>
    );
  }

  handleDelete() {
    this.props.onDelete(this.props.emp.id);
  }
}

EmployeeItem.propTypes = {
  emp: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};
