import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Project(props) {
  return (
    <div className="container ">
      {/* Here we map over each project item and return a new array of `li` elements that contains the project */}
      {/* When using map you must provide a unique key attribute to each item. I've used `item.id` */}
      {props.projectItems.map(projectItems => (
        <div className="ms-3 " key={projectItems.id}>
          {projectItems.name} | {projectItems.img}
        </div>
      ))}
    </div>
  );
}

export default Project;