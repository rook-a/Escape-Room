import { GenreType, LevelName } from './const';

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
    case GenreType.Adventures:
      return 'приключения';
    case GenreType.Horror:
      return 'ужасы';
    case GenreType.Mystic:
      return 'мистика';
    case GenreType.Detective:
      return 'детектив';
    case GenreType.SciFi:
      return 'sci-fi';
    default:
      return 'Жанр неизвестен';
  }
};
