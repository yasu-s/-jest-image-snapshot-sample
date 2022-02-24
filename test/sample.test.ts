import * as fs from 'fs';
import * as path from 'path';

describe('image test', () => {
  it('test1.png', () => {
    const imagePath = path.join(process.cwd(), 'test/test1.png');
    const file = fs.readFileSync(imagePath);
    expect(file).toMatchImageSnapshot();
  });
});
