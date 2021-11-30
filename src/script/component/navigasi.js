class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style> 
        nav {
            background: brown;
            color:white;
        }
        </style>
        <nav style="justify-content:center; "class="navbar bg-dark">
        <a href="https://kampusmerdeka.kemdikbud.go.id/" style="color:white;font-size:1.5em" class="navbar-brand">Daftar Perusahaan Kampus Merdeka</a>
        <form style="padding:20px;width:300px" class="form-inline">
            <input  style="padding:10px" type="text" class="form-control" name="searchBar" id="searchBar"
                placeholder="Cari Perusahaan Anda disini . . .">

        </form>
    </nav>
        `;
    }
}

customElements.define("navigasi-bar", NavBar);