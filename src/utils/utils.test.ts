import { adaptLevelNameForClient, adaptGenreTypeForClient } from './utils';
import {
  GenreFromTheServer,
  GenreForClient,
  LevelNameFromTheServer,
  LevelNameForClient,
} from './const';

describe('Utils', () => {
  it('function levels return correct answer', () => {
    expect(adaptLevelNameForClient(LevelNameFromTheServer.Easy)).toBe(
      LevelNameForClient.Easy,
    );
  });

  it('function levels return incorrect answer', () => {
    expect(adaptLevelNameForClient('')).toBe(LevelNameForClient.Unknown);
  });

  it('function genreType return correct answer', () => {
    expect(adaptGenreTypeForClient(GenreFromTheServer.Detective)).toBe(
      GenreForClient.Detective,
    );
  });

  it('function genreType return incorrect answer', () => {
    expect(adaptGenreTypeForClient('')).toBe(GenreForClient.Unknown);
  });
});
