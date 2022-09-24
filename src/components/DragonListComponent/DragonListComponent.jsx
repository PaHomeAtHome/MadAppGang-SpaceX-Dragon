import { Element } from './DragonListComponentStyled';
import { Slider } from './DragonListComponentStyled';

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
      {flickr_images && (
        <Slider interval={null}>
          {flickr_images.map(image => (
            <Slider.Item key={image}>
              <img
                className="d-block w-100"
                src={image}
                alt="Third slide"
                style={{ objectFit: 'cover' }}
                height="300px"
              />
            </Slider.Item>
          ))}
        </Slider>
      )}
      <p>{description}</p>
    </Element>
  );
};
