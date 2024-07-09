import React, { useState, useEffect } from 'react';
import './HomePage.css'; // Asegúrate de tener el archivo CSS adecuado importado

const images = [
    {
        src: '../../../../img/listo1.jpg',
        alt: 'Imagen 1',
        title: 'WONDERFUL.',
        subtitle: 'ISLAND',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        buttonText: 'Read More'
    },
    {
        src: '../../../../img/listo1.jpg',
        alt: 'Imagen 2',
        title: 'AMAZING.',
        subtitle: 'BEACH',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        buttonText: 'Discover'
    },
    {
        src: '../../../../img/listo1.jpg',
        alt: 'Imagen 3',
        title: 'BEAUTIFUL.',
        subtitle: 'NATURE',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        buttonText: 'Explore'
    },
];

function HomePage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 10000); // Cambia cada 10 segundos (10000 milisegundos)

        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const { src, alt, title, subtitle, description, buttonText } = images[currentImageIndex];

    return (
        <div className="carousel-container">
            <div className="overlay"></div>
            <div className="carousel">
                <button className="carousel-control prev" onClick={prevImage}>
                    &#10094;
                </button>
                <div className="carousel-slide">
                    <img src={src} alt={alt} className="carousel-image" />
                    <div className="carousel-text">
                        <h1>{title}</h1>
                        <h2>{subtitle}</h2>
                        <p>{description}</p>
                        <button className="carousel-button">{buttonText}</button>
                    </div>
                </div>
                <button className="carousel-control next" onClick={nextImage}>
                    &#10095;
                </button>
                <div className="carousel-indicators">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;