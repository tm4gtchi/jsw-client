import React from "react";
import { getAllProjects } from "../api";
import { NavLink } from "react-router-dom";

class ListProjects extends React.Component {
  state = {
    projects: [],
  };

  async componentDidMount() {
    const response = await getAllProjects();
    this.setState({
      projects: response.data,
    });
  }

  render() {
    return (
      <ul>
        {this.state.projects.map((project) => {
          return (
            <li key={project._id}>
              <NavLink exact to={`/projects/${project._id}`}>{project.title}</NavLink>
              &nbsp;
              <NavLink exact to={`/projects/${project._id}/edit`}>Edit</NavLink>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListProjects;
