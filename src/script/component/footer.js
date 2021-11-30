class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container text-center">
            <h3>Copyright &copy; Trofan </h3>
        </div>
        `;
    }
}

customElements.define("footer-bar", Footer);