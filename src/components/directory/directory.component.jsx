import React, { Component } from "react";

import { sections } from "../../utils/data";
import MenuItem from "../menu-item/menu-item.components";

// SCSS
import "./directory.styles.scss";

class Directory extends Component {
  state = {
    sections,
  };
  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
