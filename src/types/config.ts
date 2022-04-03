import { Component } from 'react';

export interface ShellConfig {
  logo: string;
  routeList: Record<string, ShellRoute> | [];
  authProviderList: Record<string, ShellAuthProvider> | [];
}

export interface ShellRoute {
  logo: string;
  path: string;
  page: Component;
}

export interface ShellAuthProvider {
  logo: string;
  gateway: string;
}
