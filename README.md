# 描述
此 Repo使用 GitHub pages功能，用來提供前端透過網頁進行測試與模擬。  
測試網址：[frondend-web-test](https://trainerplux.github.io/frondend-web-test/)

此頁面使用 [device_preview](https://pub.dev/packages/device_preview) 來模擬手機畫面。  
需要注意的是，模擬環境可能無法完全還原真實手機的實際操作效果，例如：  
- 手機特有的觸控手勢、硬體功能（如震動或生物辨識）可能無法模擬。
- 部分操作延遲、性能表現可能與真實裝置有所差異。

## 使用範圍
1.	用於驗證前端設計的響應式排版與適配性。
2.	測試功能的基本操作與互動流程。

## 更新方式
1. 建置 Flutter Web  
  在專案(frontend)根目錄執行以下指令，生成 Web 版本：`flutter build web`  
  建置完成後，輸出的檔案會位於 `build/web` 目錄下。

2. 切換到 gh-pages 分支  
確保你已經 clone 此 Repo 並切換到 gh-pages 分支：

3. 複製建置檔案  
將 frontend中的 build/web 中的所有檔案複製到目前目錄下（即 gh-pages 分支根目錄）。

4. 提交與推送  
提交更新後的檔案，並推送到遠端。

## 注意事項
- 此專案為 `test` 環境，並無實際串接後端
