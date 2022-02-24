function calc(a: number, b: number) {
  return a + b;
}

describe('TestClass', () => {
  it('calc', () => {
    // exercise
    const actual = calc(1, 2);

    // verify
    expect(actual).toBe(3);
  });
});
