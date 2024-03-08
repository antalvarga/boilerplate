import * as Token from './token';
//import * as GenerateSecret from './secret/GenerateSecret';
import * as Secret from './secret';

export const Providers = {
    ...Token,
    ...Secret,
};

