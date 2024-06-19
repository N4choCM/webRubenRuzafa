import "./Gallery.css";
import json from "../../assets/text/gallery.json";
import GalleryColumn from "./GalleryColumn";

const Gallery = () => {
  return (
    <div id="gallery" className="carousel slide carousel-fade anchor" data-bs-ride="carousel">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h2 className="text-center mt-3 mb-4">Galería</h2>
          </div>
        </div>
        <div className="row g-3">
          {json.map((post, index) => (
            <GalleryColumn key={post.key} url={post.url} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
