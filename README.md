# @ches3/annict-search

  [Annict](https://annict.com/)のAPIを使って作品の検索と記録をするライブラリです。

## インストール

### bun
  
  ```bash
  bun add @ches3/annict-search
  ```

### npm
    
  ```bash
  npm i @ches3/annict-search
  ```

## 使い方

  ```typescript
  // { title: "作品タイトル", episodeTitle: "話数 エピソードタイトル" }の形式で検索
  const result = await search(
    {
      workTitle: "響け！ユーフォニアム",
      episodeTitle: "第一回 ようこそハイスクール",
    },
    token,
  );

  // { title: "作品タイトル 話数 エピソードタイトル" }の形式で検索
  const result = await search(
    { title: "響け！ユーフォニアム 第一回 ようこそハイスクール" },
    token,
  );

  if (result) {
    const id = result.episode?.id || result.id;

    // 7日以内に記録されていない場合は記録する
    if (await isRecorded(id, 7, token)) {
      console.log("already recorded");
    } else {
      await record(id, token);
      console.log("recorded");
    }

  } else {
    console.log("not found");
  }
  ```


## ライセンス

  [MIT](LICENSE)
