import { searchMovies } from "./omdb";

describe("Service: searchMovies", () => {
  const spy = jest.spyOn(window, "fetch").mockResolvedValue({
    json: async () => [],
  } as any);

  it("should return um array", async () => {
    expect(await searchMovies()).toEqual([]);
  });

  it("should call fetch", async () => {
    await searchMovies();
    expect(spy).toBeCalled();
  });
});
