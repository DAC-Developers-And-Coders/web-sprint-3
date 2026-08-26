function Gallery()
{
    const stages = [
        {
            image: "./assets/images/gallery/etapa_1_foto.png",
            alt: "taking a photo"
        },
        {
            image: "./assets/images/gallery/etapa_2_foto.png",
            alt: "cropping the image"
        },
        {
            image: "./assets/images/gallery/etapa_3_foto.png",
            alt: "increasing contrast"
        },
        {
            image: "./assets/images/gallery/etapa_4_foto.png",
            alt: "creating a tag"
        },
        {
            image: "./assets/images/gallery/etapa_5_foto.png",
            alt: "storing the photo"
        }
    ];

    return(
        <>
            <section id="gallery">
                <div className="flow-gallery">
                    <h1>Galeria</h1>
                    <h2>Fluxo da ferramenta</h2>
                    <div className="flow-img-gallery">
                        <div className="photo-stages">
                            {stages.map((stage) => (
                                <img
                                    key={stage.image}
                                    src={stage.image}
                                    alt={stage.alt}
                                />
                            ))}
                        </div>

                        <div className="photo-stages">
                            {stages.map((stage) => (
                                <img
                                    key={stage.image}
                                    src={stage.image}
                                    alt={stage.alt}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="simulation-gallery">
                    <h2>Simulação</h2>
                    <div className="simulation-img-gallery">
                        <div className="simulation-photo row-2"><img src="./assets/images/gallery/contraste_2.jpeg" alt="image with contrast applied" loading ="lazy" /></div>
                        <div className="simulation-photo"><img src="./assets/images/gallery/simulation_1.jpeg" alt="tutorial menu" loading ="lazy" /></div>
                        <div className="simulation-photo"><img src="./assets/images/gallery/study.jpeg" alt="study plan" loading ="lazy" /></div>
                        <div className="simulation-photo"><img src="./assets/images/gallery/simulation_2.jpeg" alt="Tag recommendation" loading ="lazy" /></div>
                        <div className="simulation-photo row-2"><img src="./assets/images/gallery/contraste_1.jpeg" alt="image without applied contrast" loading ="lazy" /></div>
                        <div className="simulation-photo"><img src="./assets/images/gallery/simulation_3.jpeg" alt="with another tag recommendation" loading ="lazy" /></div>
                        <div className="simulation-photo col-2"><img src="./assets/images/gallery/simulation_4.jpeg" alt="folder storage" loading ="lazy" /></div>
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default Gallery;