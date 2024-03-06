import { innerRoutes } from "../routes-handler";

const routesList = innerRoutes.reduce((acc, route)=> {
  if (route.title == 'home') return acc;
  const routeObj = {
    title: route.title,
    iconPath: `/assets/sideNav/${route.title}/parent.png`,
  };
  if (route.slugs.length === 1) {
    routeObj.path = route.slugs[0];
  } else {
    routeObj.listItems = route.slugs.map((slug)=> ({
      path: slug,
      title: slug.replace('/', '').replaceAll('-', ' '),
      iconPath: `/assets/sideNav/${route.title}${slug}.png`,
    }))
  }
  acc.push(routeObj);
  return acc;
}, []);

export { routesList };

