const main = () => {
    const perusahaanList = document.getElementById("perusahaan-list");
    let  perusahaan = [];
    console.log(searchBar);

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();

        const filteredperusahaan =  perusahaan.filter((perusahaan) => {
            return (
                perusahaan.nama.toLowerCase().includes(searchString) 
            );
        });
        displayperusahaan(filteredperusahaan);
    });

    const loadperusahaan = async () => {
        try {
            const respons = await fetch('https://my-json-server.typicode.com/TrofanPutra23/Dicoding_FE_Fundamental_db_JSON/perusahaan');
             perusahaan = await respons.json();
            displayperusahaan( perusahaan);
            console.log( perusahaan);
        } catch (error) {
            console.error(error);
        }
    };

    const displayperusahaan = (perusahaan) => {
        const htmlString = perusahaan
            .map((perusahaan) => {
                return `
            <div class="col-xl-3 col-md-6 mb-4 " data-aos="flip-down">
            <div class="card border-0 shadow">
                <img style="width:300px;height:300px;"src="./${perusahaan.gambar}" class="card-img-top" alt="${perusahaan.id}">
                <div class="card-body text-center">
                <h5 class="card-title mb-0"><a href="${perusahaan.link}" target="_blank">${perusahaan.nama}</a></h5>
                </div>
            </div>
            </div>`;
            })
            .join('');
        perusahaanList.innerHTML = htmlString;
    };

    loadperusahaan();
};
export default main;