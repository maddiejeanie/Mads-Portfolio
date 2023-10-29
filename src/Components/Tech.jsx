function Tech({ isDarkMode }) {
    return (
   <div className={`Card Tech  ${isDarkMode ? "Dark" : null}`} id='Tech'>
      <div className="list">
        <p className="bold-text">Programming Languages:</p>
        <div>
          <i class="fi fi-brands-html5"></i>
          <span>HTML</span>
        </div>
        <div>
          <i class="fi fi-brands-css3"></i>
          <span>CSS</span>
        </div>
        <div>
          <i class="fi fi-brands-js"></i>
          <span>JavaScript</span>
        </div>
        <div>
        <i class="fi fi-brands-typescript"></i>
              <span>TypeScript</span>
        </div>
        <div>
          <i class="fi fi-brands-python"></i>
          <span>Python</span>
        </div>

        <p className="bold-text">Front-End Development:</p>
        <div>
        <i class="fa-brands fa-react"></i>
              <span>React.js</span>
        </div>
        <div>
          <i class="fi fi-brands-css"></i>
          <span>Tailwind CSS</span>
        </div>
        <div>
          <i class="fi fi-brands-css"></i>
          <span>Material UI</span>
        </div>
        <div>
          <i class="fi fi-brands-vite"></i>
          <span>Vite</span>
        </div>

        <p className="bold-text">Databases:</p>
        <div>
          <i class="fi fi-brands-googele"></i>
          <span>Firebase</span>
        </div>

        <p className="bold-text">Content Management Systems:</p>
      <div>
        <i class="fi fi-brands-flaticon"></i>
        <span>Sanity CMS</span>
      </div>
      <div>
        <i class="fi fi-brands-wordpress"></i>
        <span>WordPress</span>
      </div>

      <p className="bold-text">Version Control and Collaboration:</p>
      <div>
      <i class="fa-brands fa-git"></i>
        <span>Git</span>
      </div>
      <div>
        <i class="fi fi-brands-microsoft"></i>
        <span>Azure DevOps</span>
      </div>

      <p className="bold-text">Build Tools and Testing:</p>
      <div>
        <i class="fi fi-regular-folder-open"></i>
        <span>Babel</span>
      </div>
      <div>
      <i class="fi fi-rr-flower"></i>
          <span>Jasmine</span>
      </div>

      <p className="bold-text">Deployment and Hosting:</p>
      <div>
        <i class="fi fi-cloud-upload-alt"></i>
        <span>Vercel</span>
      </div>
      <div>
        <i class="fi fi-cloud-upload-alt"></i>
        <span>Netlify</span>
      </div>

      <p className="bold-text">Design and Graphics:</p>
      <div>
        <i class="fi fi-brands-figma"></i>
        <span>Figma</span>
      </div>
      <div>
        <i class="fi fi-brands-xd"></i>
        <span>Adobe XD</span>
      </div>
    </div>
</div>

    )}

export default Tech