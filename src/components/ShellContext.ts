import { createContext } from 'react';

import { ShellConfig } from '../types';

export const ShellContext = createContext<ShellConfig>({
  logo: '',
  routeList: [],
  authProviderList: [],
});
