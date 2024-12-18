import './app.scss'
import './main.sass';



function App() {
  const fireflies = Array.from({ length: 20 });


  return (
    <div className='container'>
      <div className='left-section'>
      </div>
      <div className='right-section'>
      {fireflies.map((_, index) => (
        <div className="firefly" key={index}></div>
      ))}

         <div className='content'>
          <h1>Hello, World! <span>❤️</span> </h1>
            <p className='role'>I am a  Frontend &  Backend developer</p>
            <p></p>

            <div className="skills">
              <h2>Here are some of the main technologies I work with:</h2>
              <div className="skills-section">
              <h3>Frontend:</h3>
              <ul>
                <li>Html</li>
                <li>Css, Sass, Scss</li>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React / Next.js</li>
                <li>Redux | Redux-Toolkit</li>
              </ul>
            </div>

            <div className="skills-section">
              <h3>Backend:</h3>
              <ul>
                <li>PHP / Laravel</li>
                <li>Swoole (octane) </li>
                <li>php-fpm</li>
                <li>SQL / MySQL</li>
                <li>Redis</li>
                <li>REST API</li>
                <li>OOP</li>
                <li>Swagger / OpenAPI</li>
              </ul>
            </div>

            <div className="skills-section">
              <h3>Others:</h3>
              <ul>
                <li>docker</li>
                <li>nginx</li>
                <li>Linux (I use Arch btw)</li>
                <li>Bash</li>
                <li>Git</li>
              </ul>
            </div>
            </div>

            <div className="contacts">
            <a href="https://github.com/hondahotai" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="mailto:hondahotai666@gmail.com">Email Me</a>
          </div>
         </div>
      </div>
    </div>
  )
}

export default App
