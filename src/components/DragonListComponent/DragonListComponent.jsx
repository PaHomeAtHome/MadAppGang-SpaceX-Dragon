import { Element } from './DragonListComponentStyled';
import Carousel from 'react-bootstrap/Carousel';

export const DragonListComponent = ({ dragon }) => {
  const {
    name,
    flickr_images,
    description,
    // wikipedia,
    // height_w_trunk,
    // dry_mass_kg,
    // first_flight,
  } = dragon;

  return (
    <Element>
      <h3>{name}</h3>
      <p>{description}</p>
      <Carousel>
        {flickr_images.map(image => (
          <Carousel.Item>
            <img className="d-block w-100" src={image} alt="Third slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </Element>
  );
};
