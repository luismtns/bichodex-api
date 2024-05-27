export function getDocs(app) {
  const routes = {};
  app._router.stack.forEach((middleware) => {
    if (middleware.name === 'router') {
      console.log(middleware.handle.stack);
      middleware.handle.stack.forEach((handler) => {
        if (handler.route) {
          const path = handler.route.path;
          const methods = Object.keys(handler.route.methods).map((method) => method.toUpperCase());
          methods.forEach((method) => {
            if (!routes[path]) {
              routes[path] = [];
            }
            routes[path].push({ method, path });
          });
        }
      });
    }
  });
  return routes;
}
