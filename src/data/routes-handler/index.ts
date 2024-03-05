import { inner as innerRoutes, public as publicRoutes } from './all-routes.json';

const getSlugsByParentPath = (parent: string = '/') => {
  return innerRoutes.find((item) => item.path == parent)?.slugs;
}

const getParentByPath = (parent: string = '/') => {
  return innerRoutes.find((item) => item.path == parent);
}

const getAllAvailablePaths = () => {
  return innerRoutes.reduce<string[]>((acc, item) => {
    const modifiedSlugs = item.slugs.map((slug)=> item.path + slug);
    return [...acc, item.path, ...modifiedSlugs];
  }, []);
}

export { innerRoutes, publicRoutes, getSlugsByParentPath, getAllAvailablePaths, getParentByPath };