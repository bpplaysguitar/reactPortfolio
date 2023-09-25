import React from 'react';

function Resume() {
  return (
    <div>
      
  <main className="container">
  <h2 className="container pb-2 pt-4 border-bottom" id="resume">Resume</h2>
    
    
    <section className="text-center">
      <section id="resume-page-main">
        <iframe title="resume-frame" className="mt-2 border border-5 border-dark rounded container" id="resume-frame"
          src="https://docs.google.com/document/d/e/2PACX-1vThVKzVWs42-s2mDLaNJOgwnq0H7QIPqj8HofS7Jqs-hgSOQPymY5Xpxswy5y4qRXaErUxiYfXo7SnR/pub?embedded=true"></iframe>
      </section>
    </section>
    <div className="container my-4" id="downloadPDF">
      <a className="download-pdf text-decoration-none"
        href="https://docs.google.com/document/d/1WpyxvRmBK-cVAEvmlsP6VVuIk2jKpXs0bbJBGRDWTCE/export?format=pdf"><i
          className="me-1 fas fa-2x fa-file-pdf"></i>Download PDF</a>
    </div>

</main>
    </div>
  );
}

export default Resume;
