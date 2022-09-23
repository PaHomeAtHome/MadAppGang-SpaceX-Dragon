import { Element } from './DragonListComponentStyled';

export const DragonListComponent = ({ dragon }) => {
  const { name } = dragon;

  return (
    <Element>
      <p>{name}</p>
    </Element>
  );
};
