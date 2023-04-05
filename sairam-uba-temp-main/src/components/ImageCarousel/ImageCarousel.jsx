import React from "react";
import "./ImageCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import ImageDetails from "./ImageDetails.json";

const ImageCarousel = () => {
    return (
        <Carousel fade variant="dark" className="image-carousel-container">
            {ImageDetails.images
                .map((detail, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img src={detail.url} className="carousel-image" alt="Not Found" />
                            <Carousel.Caption className="carousel-title">
                                <h3 style={{ textTransform: "uppercase" }} className="carousel-title-text">
                                    {detail.title}
                                </h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
        </Carousel>
    );
};

export default ImageCarousel;
