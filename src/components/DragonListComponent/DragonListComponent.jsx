import { Element } from './DragonListComponentStyled';

export const DragonListComponent = ({ dragon }) => {
  const { name, number } = dragon;

  return (
    <Element>
      {name}
      {number}
    </Element>
  );
};
