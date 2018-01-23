const score = require('./bowling');

describe('Score when there is ', () => {
  it('no strikes or spares', () => {
    const inputArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    const expectedScore = 90;
    expect(score(inputArray)).toBe(expectedScore);
  });
  it('spare followed by nothing', () => {
    const inputArray = [3, 7, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    const expectedScore = 91 + 3; // base score + next throw
    expect(score(inputArray)).toBe(expectedScore);
  });
});
