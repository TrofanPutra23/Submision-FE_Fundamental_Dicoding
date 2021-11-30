class NotifikasiBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div style="background:grey;color:white;" class="alert alert-primary animated fadeInRight" role="alert">
                <marquee behavior="" direction="left">#AyoGabungKampusMerdeka Akan dibuka Pendaftaran KAMPUS MERDEKA BATHC 2  Daftarkan Dirimu Secepatnya</marquee>
            </div>
        `;
    }
}

customElements.define("notifikasi-bar", NotifikasiBar);