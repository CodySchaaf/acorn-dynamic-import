import * as walk from 'acorn/dist/walk';
import { DynamicImportKey } from './inject';

export function inject(injectableWalk) {
  return { ...injectableWalk,
    base: {
      ...injectableWalk.base,
      [DynamicImportKey]: () => {},
    } };
}

export default inject(walk);

