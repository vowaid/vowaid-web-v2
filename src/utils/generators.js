import Chance from 'chance';
import className from 'chance-class-name';

const chance = new Chance();

chance.mixin({
  className,
});

export { chance };