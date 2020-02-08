import { Movie } from './movie.model';

describe('Movie', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new Movie()).toBeTruthy();
  });
});
