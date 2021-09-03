import React from 'react';
import Footer from './Footer';


function Resume() {
  return (
    <div>
      
  <main class="container">
  <h2 class="container pb-3 pt-4 border-bottom" id="resume">Resume</h2>
    
    
    <section class="text-center">
      <section id="resume-page-main">
        <iframe class="mt-2 border border-5 border-dark rounded container" id="resume-frame"
          src="https://docs.google.com/document/d/e/2PACX-1vThVKzVWs42-s2mDLaNJOgwnq0H7QIPqj8HofS7Jqs-hgSOQPymY5Xpxswy5y4qRXaErUxiYfXo7SnR/pub?embedded=true"></iframe>
      </section>
    </section>
    <div class="container my-4" id="downloadPDF">
      <a class="connect-icon text-decoration-none"
        href="https://docs.google.com/document/d/1WpyxvRmBK-cVAEvmlsP6VVuIk2jKpXs0bbJBGRDWTCE/export?format=pdf"><i
          class="me-1 fas fa-2x fa-file-pdf"></i>Download PDF</a>
    </div>

</main>
       <Footer />
    </div>
  );
}

export default Resume;
