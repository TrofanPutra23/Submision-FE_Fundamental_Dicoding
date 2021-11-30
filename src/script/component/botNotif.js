class NotifikasiBarBot extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div style="background:grey;color:white;"class="alert alert-primary animated fadeInRight" role="alert">
                <marquee behavior="" direction="left">#AyoGabungKampusMerdeka Daftarkan Dirimu di Kampus Merdeka </marquee>
            </div>
        `;
    }
}

customElements.define("notifikasi-bar-bot", NotifikasiBarBot);