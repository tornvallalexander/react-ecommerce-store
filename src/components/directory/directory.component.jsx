import React, { Component } from "react";

import { sections } from "../../utils/data";
import MenuItem from "../menu-item/menu-item.component";

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
        {sections.map(({ id, ...sectionProps }) => (
          // ...sectionProps === imageUrl={imageUrl} linkUrl={linkUrl} title={title} and so on...
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
