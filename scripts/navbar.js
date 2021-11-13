var navbar = document.getElementById("navbar")

navbar.outerHTML = `
<nav class="navbar fixed-top navbar-expand-sm bg-dark navbar-dark justify-content-center">

    <ul class="navbar-nav">
        <!-- Brand/Logo -->
        <a id="homeLogo" class="navbar-brand"  href="index.html">
            <img src="Images/logo.png" alt="Logo" style="width:40px;"/>
        </a>

        <!-- Links  -->
        <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
        </li>
       
        <li class="nav-item">
            <a class="nav-link" href="experience.html">Experience</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
        </li>
    </ul>

</nav>
`;
{/* <li class="nav-item">
<a class="nav-link" href="projects.html">Projects</a>
</li> */}