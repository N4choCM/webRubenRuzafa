import { InstagramEmbed } from 'react-social-media-embed';

// eslint-disable-next-line react/prop-types
const GalleryColumn = ({ url, index }) => {
  return (
    <div className={`col col-lg-4 ${index % 2 === 0 ? 'offset-lg-2' : ''} g-3`}>
    <div className="instagram-post">
      <InstagramEmbed url={url} maxWidth={328} />
    </div>
  </div>
  );
};

export default GalleryColumn;
