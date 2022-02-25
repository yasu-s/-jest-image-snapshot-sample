# jest-image-snapshot-sample

## 概要

- [jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot)のサンプルコードです。

## 動作環境

- Node.js - 14.x
- Yarn - 1.22.x
- TypeScript - 4.5.x
- Jest - 27.5.x
- ts-jest - 27.1.x
- jest-image-snapshot - 4.5.x
- @types/jest-image-snapshot - 4.3.x

## 動作確認

```bash
# パッケージインストール
yarn

# テスト実行
yarn test
```

## 実行結果

```bash
 FAIL  test/sample.test.ts
  image test
    ✕ test.png (128 ms)

  ● image test › test.png

    Expected image to match or be a close match to snapshot but was 1.6022815659839251% different from snapshot (309 differing pixels).
    See diff for details: ./test/__image_snapshots__/__diff_output__/sample-test-ts-image-test-test-png-1-diff.png

       6 |     const imagePath = path.join(process.cwd(), 'test/test.png');
       7 |     const file = fs.readFileSync(imagePath);
    >  8 |     expect(file).toMatchImageSnapshot();
         |                  ^
       9 |   });
      10 | });
      11 |

      at Object.<anonymous> (test/sample.test.ts:8:18)

 › 1 snapshot failed.
Snapshot Summary
 › 1 snapshot failed from 1 test suite. Inspect your code changes or run `yarn test -u` to update them.

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   1 failed, 1 total
Time:        0.797 s, estimated 2 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```


## DIFF画像

![比較画像](./test/__image_snapshots__/__diff_output__/sample-test-ts-image-test-test-png-1-diff.png)
