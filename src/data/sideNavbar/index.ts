import { innerRoutes } from "../routes-handler";

type RouteTypes = {
  path: string;
  title: string;
  iconPath: string;
  listItems: {
    path: string;
    title: string;
    iconPath: string;
  }[]
}

const routesList = innerRoutes.reduce<RouteTypes[]>((acc, route)=> {
  if (route.path === '/') return acc;
  const routeObj = {
    path: route.path,
    title: route.path.replace('/', '').replaceAll('-', ' '),
    iconPath: `/assets/sideNav${route.path}/parent.png`,
    listItems: route.slugs.map((slug)=> ({
      path: route.path + slug,
      title: slug.replace('/', '').replaceAll('-', ' '),
      iconPath: `/assets/sideNav${route.path}${slug}.png`,
    }))
  };
  acc.push(routeObj);
  return acc;
}, []);

export { routesList };

