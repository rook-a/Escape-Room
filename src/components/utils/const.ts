import { ReactComponent as IconAllQuests } from '../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../assets/img/icon-scifi.svg';

export const enum Genre {
  All = 'Все квесты',
  Adventures = 'Приключения',
  Horror = 'Ужасы',
  Mystic = 'Мистика',
  Detective = 'Детектив',
  SciFi = 'Sci-fi',
}

const Icon = {
  All: IconAllQuests,
  Adventures: IconAdventures,
  Horror: IconHorrors,
  Mystic: IconMystic,
  Detective: IconDetective,
  SciFi: IconScifi,
} as const;

export const genres = [
  {
    id: 1,
    title: Genre.All,
    icon: Icon.All,
  },
  {
    id: 2,
    title: Genre.Adventures,
    icon: Icon.Adventures,
  },
  {
    id: 3,
    title: Genre.Horror,
    icon: Icon.Horror,
  },
  {
    id: 4,
    title: Genre.Mystic,
    icon: Icon.Mystic,
  },
  {
    id: 5,
    title: Genre.Detective,
    icon: Icon.Detective,
  },
  {
    id: 6,
    title: Genre.SciFi,
    icon: Icon.SciFi,
  },
];

const enum LevelName {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export const levels = (level: string) => {
  switch (level) {
    case LevelName.Easy:
      return 'Лёгкий';
    case LevelName.Medium:
      return 'Средний';
    case LevelName.Hard:
      return 'Сложный';
    default:
      return 'Неизвестная сложность';
  }
};

export enum AppRoute {
  Main = '/',
  Quest = '/quest',
  Contacts = '/contacts',
  NotFound = '*',
}

export enum HttpCode {
  BadRequest = 400,
  NotFound = 404,
}

export enum APIRoute {
  Quests = '/quests',
  Orders = '/orders',
}

export enum FetchStatus {
  Idle = 'Idle',
  Pending = 'Pending',
  Success = 'Success',
  Failed = 'Failed',
}

export enum NameSpace {
  App = 'App',
  Quests = '/quests',
}
