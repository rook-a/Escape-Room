import {
  GenreFromTheServer,
  GenreForClient,
  LevelNameFromTheServer,
  LevelNameForClient,
} from './const';

export const levels = (level: string) => {
  switch (level) {
    case LevelNameFromTheServer.Easy:
      return LevelNameForClient.Easy;
    case LevelNameFromTheServer.Medium:
      return LevelNameForClient.Medium;
    case LevelNameFromTheServer.Hard:
      return LevelNameForClient.Hard;
    default:
      return 'Cложность неизвестна';
  }
};

export const genreType = (type: string) => {
  switch (type) {
    case GenreFromTheServer.Adventures:
      return GenreForClient.Adventures;
    case GenreFromTheServer.Horror:
      return GenreForClient.Horror;
    case GenreFromTheServer.Mystic:
      return GenreForClient.Mystic;
    case GenreFromTheServer.Detective:
      return GenreForClient.Detective;
    case GenreFromTheServer.SciFi:
      return GenreForClient.SciFi;
    default:
      return 'Жанр неизвестен';
  }
};
