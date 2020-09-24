import { renderHook, act } from "@testing-library/react-hooks";
import { useListManager } from "./listManager";

describe("Hook: listManager", () => {
  const mockedMovie: Movie = {
    Title: "The Lion King",
    Poster: "http://url.to/movie-poster",
    Type: "movie",
    Year: "1994",
    imdbID: "movie_id",
  };

  const setupTest = () => {
    const { result } = renderHook(() => useListManager("testing"));

    expect(result.current).toEqual({
      list: [],
      add: expect.any(Function),
      remove: expect.any(Function),
      contains: expect.any(Function),
    });

    return result;
  };

  beforeEach(() => {
    localStorage.clear();
  });

  it("should setup a list", async () => {
    setupTest();
  });

  it("should add a movie to the list", async () => {
    const result = setupTest();

    expect(result.current.contains(mockedMovie.imdbID)).toBeFalsy();
    act(() => {
      result.current.add(mockedMovie);
    });

    expect(result.current.list).toEqual([mockedMovie]);
    expect(result.current.contains(mockedMovie.imdbID)).toBeTruthy();
  });

  it("should remove the movie after added it", async () => {
    const result = setupTest();

    act(() => {
      result.current.add(mockedMovie);
    });
    expect(result.current.list).toEqual([mockedMovie]);

    act(() => {
      result.current.remove(mockedMovie.imdbID);
    });
    expect(result.current.list).toEqual([]);
  });
});
