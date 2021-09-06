import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Project(props) {

  return (
    <div>
      {props.projectItems.map((projectItems) => (
        <div>
            {/* <!-- Project --> */}
            <div className="project-item active rounded mb-5 border-bottom border-3">
              <div
                className="container d-flex flex-column mt-4"
                key={projectItems.id}
              >
                <div className="shadow border border-3 border-dark mb-3 mx-2 rounded">
                  <div className={projectItems.backgroundImg}></div>
                </div>
              </div>
              <div className="d-flex flex-column">
                <h2>{projectItems.name}</h2>
                <p className="px-5">{projectItems.languages}</p>
                <p className="mb-5">
                  {/* Link Buttons */}
                  <a
                    className="btn btn-lg btn-dark text-white mx-1"
                    target="_blank"
                    rel="noreferrer"
                    href={projectItems.deployedDemoLink}
                  >
                    {projectItems.deployedDemoBtnText}
                  </a>
                  <a
                    className="btn btn-lg btn-dark text-white mx-1"
                    target="_blank"
                    rel="noreferrer"
                    href={projectItems.repository}
                  >
                    Repository
                  </a>
                </p>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
}

export default Project;