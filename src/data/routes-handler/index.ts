import { inner as innerRoutes, public as publicRoutes } from './all-routes.json';

const getSlugsByParent = (parent: string = '') => {
  return innerRoutes.find((item) => item.title == parent)?.slugs;
}

const getParentByPath = (parent: string = '') => {
  return innerRoutes.find((item) => item.title == parent);
}

const getAllAvailablePaths = () => {
  return innerRoutes.reduce<string[]>((acc, item) => {
    return [...acc, ...item.slugs];
  }, []);
}

export { innerRoutes, publicRoutes, getSlugsByParent, getAllAvailablePaths, getParentByPath };