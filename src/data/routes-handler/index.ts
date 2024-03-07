import allRoutes from './all-routes.json';

const { inner : innerRoutes, public : publicRoutes } = allRoutes;

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