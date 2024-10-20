import { RouteObject, useRoutes } from 'react-router-dom';
import AppLayout from '../../AppLayout';
import GuardRoute from './GuardRoute';
import {
  HomePage,
  MoviesPage,
  GenresPage,
  WatchLaterPage,
  TVShowsPage,
  LoginPage,
  NotFoundPage,
} from '@components/pages';

// const routes: RouteObject = [
//   {
//     path: '/login',
//     element: <LoginPage />,
//   },
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         element: <GuardRoute />,
//         children: [
//           { path: '/', element: <HomePage /> },
//           { path: '/tv-shows', element: <TVShowsPage /> },
//           { path: '/movies', element: <MoviesPage /> },
//           { path: '/genres', element: <GenresPage /> },
//           { path: '/watch-later', element: <WatchLaterPage /> },
//         ],
//       },
//       { path: '*', element: <NotFoundPage /> },
//     ],
//   },
// ];

export default function AppRoutes() {
  const element = useRoutes([
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      element: <AppLayout />,
      children: [
        {
          element: <GuardRoute />,
          children: [
            { path: '/', element: <HomePage /> },
            { path: '/tv-shows', element: <TVShowsPage /> },
            { path: '/movies', element: <MoviesPage /> },
            { path: '/genres', element: <GenresPage /> },
            { path: '/watch-later', element: <WatchLaterPage /> },
          ],
        },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]);

  return element;
}
