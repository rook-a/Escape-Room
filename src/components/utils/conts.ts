import { ReactComponent as IconAllQuests } from '../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../assets/img/icon-scifi.svg';

export const genres = [
  {
    id: 1,
    title: 'Все квесты',
    icon: IconAllQuests,
  },
  {
    id: 2,
    title: 'Приключения',
    icon: IconAdventures,
  },
  {
    id: 3,
    title: 'Ужасы',
    icon: IconHorrors,
  },
  {
    id: 4,
    title: 'Мистика',
    icon: IconMystic,
  },
  {
    id: 5,
    title: 'Детектив',
    icon: IconDetective,
  },
  {
    id: 6,
    title: 'Sci-fi',
    icon: IconScifi,
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
  Unauthorized = 401,
  NotFound = 404,
}

export enum APIRoute {
  Quests = '/quests',
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
