import "./navbar.css"
function Navbar(){
    return(
        <nav class="menu-container">
  
  <input type="checkbox" aria-label="Toggle menu" />
  <span></span>
  <span></span>
  <span></span>
  <a href="#" class="menu-logo">
    <img src="https://cdn5.vectorstock.com/i/1000x1000/68/89/team-or-friends-icon-digital-purple-vector-26326889.jpg" alt="My Awesome Website"/>
  </a>


  <div class="menu">
    <ul>
      <li>
        <a href="#home">
          Home
        </a>
      </li>
      <li>
        <a href="#pricing">
          Pricing
        </a>
      </li>
      <li>
        <a href="#blog">
          Blog
        </a>
      </li>
      <li>
        <a href="#docs">
          Docs
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="#login">
          Logout
        </a>
      </li>
    </ul>
  </div>
</nav>

    )
}
export default Navbar