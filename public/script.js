/* On PC, the cat icons on the home page will show each cat's name on hover. */
function iconToName(name) {
    if (name == 'cheshire')
    {
        document.getElementById("cheshire-icon-img").src = "./assets/images/cheshire-name.JPG";
    }
    else if (name == 'bandit')
    {
        document.getElementById("bandit-icon-img").src = "./assets/images/bandit-name.JPG";
    }
    else if (name == 'montessa')
    {
        document.getElementById("montessa-icon-img").src = "./assets/images/montessa-name.JPG";
    }
    else if (name == 'hugo')
    {
        document.getElementById("hugo-icon-img").src = "./assets/images/hugo-name.JPG";
    }
    else if (name == 'duma')
    {
        document.getElementById("duma-icon-img").src = "./assets/images/duma-name.JPG";
    }
    else if (name == 'lotte')
    {
        document.getElementById("lotte-icon-img").src = "./assets/images/lotte-name.JPG";
    }
    else if (name == 'freckles')
    {
        document.getElementById("freckles-icon-img").src = "./assets/images/freckles-name.JPG";
    }
    else if (name == 'teddy')
    {
        document.getElementById("teddy-icon-img").src = "./assets/images/teddy-name.JPG";
    }
    else if (name == 'monkey')
    {
        document.getElementById("monkey-icon-img").src = "./assets/images/monkey-name.JPG";
    }
    else if (name == 'tictac')
    {
        document.getElementById("tictac-icon-img").src = "./assets/images/tictac-name.JPG";
    }
    else if (name == 'prince')
    {
        document.getElementById("prince-icon-img").src = "./assets/images/prince-name.JPG";
    }
    else if (name == 'blondie')
    {
        document.getElementById("blondie-icon-img").src = "./assets/images/blondie-name.JPG";
    }
    else if (name == 'cinni')
    {
        document.getElementById("cinni-icon-img").src = "./assets/images/cinni-name.JPG";
    }
    else
    {
        alert("The 'name' tag in the iconToName function is invalid. Check the home page HTML!");
    }
}

/* When the mouse stops hovering over a cat icon, show the photo of the cat again. */
function nameToIcon(name) {
    if (name == 'cheshire')
    {
        document.getElementById("cheshire-icon-img").src = "./assets/images/cheshire-icon.JPG";
    }
    else if (name == 'bandit')
    {
        document.getElementById("bandit-icon-img").src = "./assets/images/bandit-icon.JPG";
    }
    else if (name == 'montessa')
    {
        document.getElementById("montessa-icon-img").src = "./assets/images/montessa-icon.JPG";
    }
    else if (name == 'hugo')
    {
        document.getElementById("hugo-icon-img").src = "./assets/images/hugo-icon.JPG";
    }
    else if (name == 'duma')
    {
        document.getElementById("duma-icon-img").src = "./assets/images/duma-icon.JPG";
    }
    else if (name == 'lotte')
    {
        document.getElementById("lotte-icon-img").src = "./assets/images/lotte-icon.JPG";
    }
    else if (name == 'freckles')
    {
        document.getElementById("freckles-icon-img").src = "./assets/images/freckles-icon.png";
    }
    else if (name == 'teddy')
    {
        document.getElementById("teddy-icon-img").src = "./assets/images/teddy-icon.JPG";
    }
    else if (name == 'monkey')
    {
        document.getElementById("monkey-icon-img").src = "./assets/images/monkey-icon.JPG";
    }
    else if (name == 'tictac')
    {
        document.getElementById("tictac-icon-img").src = "./assets/images/tictac-icon.JPG";
    }
    else if (name == 'prince')
    {
        document.getElementById("prince-icon-img").src = "./assets/images/prince-icon.JPG";
    }
    else if (name == 'blondie')
    {
        document.getElementById("blondie-icon-img").src = "./assets/images/blondie-icon.JPG";
    }
    else if (name == 'cinni')
    {
        document.getElementById("cinni-icon-img").src = "./assets/images/cinni-icon.JPG";
    }
    else
    {
        alert("The 'name' tag in the nameToIcon function is invalid. Check the home page HTML!");
    }
}