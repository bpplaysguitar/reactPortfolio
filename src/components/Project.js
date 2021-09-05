import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Project(props) {

  return (
    <div>
      
      {props.projectItems.map(projectItems => (
      
      <div>
      <section class="container">
      <div class="mt-3 mb-5 border-bottom">

      <div class="carousel-inner">
        {/* <!-- Project --> */}
        <div class="carousel-item active">
          <div class="container d-flex flex-column">
            <h2>{projectItems.name}</h2>
            <div class="shadow border border-2 border-dark mb-3 mx-2 rounded">
              <div class={projectItems.backgroundImg}>
              </div>
            </div>
          </div>
          <div class="row mt-2">
            
            <p class="px-5">{projectItems.languages}
            </p>
            <p>
              {/* Link Buttons */}
              <a class="btn btn-lg btn-dark text-white mx-1" target="_blank"
                href={projectItems.deployedDemoLink}>{projectItems.deployedDemoBtnText}</a>
              <a class="btn btn-lg btn-dark text-white mx-1" target="_blank"
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