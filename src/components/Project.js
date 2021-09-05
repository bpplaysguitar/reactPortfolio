import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Project(props) {

  return (
    <div>
      
      {props.projectItems.map(projectItems => (
      
      <div>
      <section className="container">
      <div className="mt-3 mb-5 border-bottom">

      <div className="carousel-inner">
        {/* <!-- Project --> */}
        <div className="carousel-item active">
          <div className="container d-flex flex-column" key={projectItems.id}>
            <h2>{projectItems.name}</h2>
            <div className="shadow border border-2 border-dark mb-3 mx-2 rounded">
              <div className={projectItems.backgroundImg}>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            
            <p className="px-5">{projectItems.languages}
            </p>
            <p>
              {/* Link Buttons */}
              <a className="btn btn-lg btn-dark text-white mx-1" target="_blank" rel="noreferrer"
                href={projectItems.deployedDemoLink}>{projectItems.deployedDemoBtnText}</a>
              <a className="btn btn-lg btn-dark text-white mx-1" target="_blank" rel="noreferrer"
                href={projectItems.repository}>Repository</a>
            </p>
          </div>
        </div>
      </div>
      
    </div>
    </section>
    </div>
 
      ))}
    </div>
  );
}

export default Project;