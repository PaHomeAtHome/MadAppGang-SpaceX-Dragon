import { Element } from './DragonListComponentStyled';
import { Slider, TableLink, TableEl } from './DragonListComponentStyled';

export const DragonListComponent = ({ dragon }) => {
  const {
    name,
    flickr_images,
    description,
    wikipedia,
    height_w_trunk,
    dry_mass_kg,
    first_flight,
  } = dragon;

  return (
    <Element>
      {flickr_images && (
        <Slider interval={null}>
          {flickr_images.map(image => (
            <Slider.Item key={image}>
              <img className="d-block w-100" src={image} alt={image} />
            </Slider.Item>
          ))}
        </Slider>
      )}
      <TableEl responsive striped bordered hover>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{description}</td>
          </tr>

          <tr>
            <th>Wikipedia</th>
            <td>
              <TableLink href={wikipedia} target="_blank">
                {wikipedia}
              </TableLink>
            </td>
          </tr>
          <tr>
            <th>Height</th>
            <td>{height_w_trunk.meters} m</td>
          </tr>
          <tr>
            <th>Dry mass</th>
            <td>{dry_mass_kg} kg</td>
          </tr>
          <tr>
            <th>First flight</th>
            <td>{first_flight}</td>
          </tr>
        </tbody>
      </TableEl>
    </Element>
  );
};
