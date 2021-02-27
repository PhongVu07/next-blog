import apiRoutes from "./api";

const routes = {
  api: apiRoutes,
  blog: {
    value: (postSlug: string) => `/blog/${postSlug}`,
  },
};

export default routes;
