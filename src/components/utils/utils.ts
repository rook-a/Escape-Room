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
      return 'Приключения';
    case GenreType.Horror:
      return 'Ужасы';
    case GenreType.Mystic:
      return 'Мистика';
    case GenreType.Detective:
      return 'Детектив';
    case GenreType.SciFi:
      return 'Sci-fi';
    default:
      return 'Жанр неизвестен';
  }
};
