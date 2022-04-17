import { levels, genreType } from './utils';
import {
  GenreFromTheServer,
  GenreForClient,
  LevelNameFromTheServer,
  LevelNameForClient,
} from './const';

describe('Utils', () => {
  it('function levels return correct answer', () => {
    expect(levels(LevelNameFromTheServer.Easy)).toBe(LevelNameForClient.Easy);
  });

  it('function levels return incorrect answer', () => {
    expect(levels('')).toBe(LevelNameForClient.Unknown);
  });

  it('function genreType return correct answer', () => {
    expect(genreType(GenreFromTheServer.Detective)).toBe(
      GenreForClient.Detective,
    );
  });

  it('function genreType return incorrect answer', () => {
    expect(genreType('')).toBe(GenreForClient.Unknown);
  });
});
