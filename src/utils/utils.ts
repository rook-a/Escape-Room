import { GenreFromTheServer, LevelName } from './const';

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

export const genreType = (type: string) => {
  switch (type) {
    case GenreFromTheServer.Adventures:
      return 'приключения';
    case GenreFromTheServer.Horror:
      return 'ужасы';
    case GenreFromTheServer.Mystic:
      return 'мистика';
    case GenreFromTheServer.Detective:
      return 'детектив';
    case GenreFromTheServer.SciFi:
      return 'sci-fi';
    default:
      return 'Жанр неизвестен';
  }
};
