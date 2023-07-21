import React, { lazy } from 'react';

export type RoutersType = { path: string; component: React.LazyExoticComponent<any>; routes: any[] };

// import HYRecommend from "../pages/discover/c-pages/recommend";
// import HYRanking from "../pages/discover/c-pages/ranking";
// import HYSongs from "../pages/discover/c-pages/songs";
// import HYDjradio from "../pages/discover/c-pages/djradio";
// import HYArtist from "../pages/discover/c-pages/artist";
// import HYAlbum from "../pages/discover/c-pages/album";
// import HYPlayer from "../pages/player";

// const HYDiscover = React.lazy((_) => import('../pages/discover'));
// const HYRecommend = React.lazy((_) => import('../pages/discover/c-pages/recommend'));
// const HYRanking = React.lazy((_) => import('../pages/discover/c-pages/ranking'));
// const HYSongs = React.lazy((_) => import('../pages/discover/c-pages/songs'));
// const HYDjradio = React.lazy((_) => import('../pages/discover/c-pages/djradio'));
// const HYArtist = React.lazy((_) => import('../pages/discover/c-pages/artist'));
// const HYAlbum = React.lazy((_) => import('../pages/discover/c-pages/album'));
// const HYPlayer = React.lazy((_) => import('../pages/player'));

// const HYFriend = React.lazy((_) => import('../pages/friend'));
// const HYMine = React.lazy((_) => import('../pages/mine'));

const router: RoutersType[] = [
  {
    path: '/',
    component: lazy(() => import('@/views/discover')),
    routes: []
  },
  {
    path: '/discover',
    component: lazy(() => import('@/views/discover')),
    routes: []
  },
  {
    path: '/my',
    component: lazy(() => import('@/views/my')),
    routes: []
  },
  {
    path: '/friend',
    component: lazy(() => import('@/views/friend')),
    routes: []
  }
];

export default router;
