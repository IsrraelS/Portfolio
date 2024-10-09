import React from 'react';

const Portfolio = () => {
    // Simula una lista de URLs de imágenes
    const photos = [
        'https://via.placeholder.com/300x200',
        'https://via.placeholder.com/300x200',
        'https://via.placeholder.com/300x200',
        'https://via.placeholder.com/300x200',
        'https://via.placeholder.com/300x200',
        'https://via.placeholder.com/300x200'
    ];

    return (
        <div className="portfolio">
            <h2>Mi Portfolio</h2>
            <div className="photo-gallery">
                {photos.map((photo, index) => (
                    <img key={index} src={photo} alt={`Foto ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
