import {UsersPage} from "./pages/UsersPage";
import {UserPage} from "./pages/UserPage";

export const routes = [
  {
    path: '/users',
    component: UsersPage,
    exact: true,
  },
  {
    path: '/users/:userId',
    component: UserPage,
    exact: true,
  },
  {
    component: () => null,
  }
]