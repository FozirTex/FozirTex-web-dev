## 專案資料夾結構
本網站專案中每個網頁用到的 assets 和 style(scss/sass) 檔案都放在 app/{網頁path} 中，集中式存放便於管理

* styles/_common.sass
    * 存放有 container 的 mixin ，其 default width 為 1360px，符合主流筆電和寬螢幕之解析度尺寸
    * 在桌面端的兩端有 64px 的 padding，在手機端兩端有 16px 的 padding
    * on-desktop 和 on-mobile 這兩個 mixin 主要用於透過 media query 功能針對不同螢幕尺寸下設定不同的樣式，此處主要使用 $mobile: 768px 作為 RWD 切換寬度，因為該尺寸為主流 ipad，高解析度手機螢幕等行動裝置之豎屏寬度。即當螢幕寬度邏輯像素＜768px時渲染on-mobile下的樣式，否則渲染on-desktop下的樣式

* next.config.js
  * 設定 output 模式為 export，為 static export
  * 設定 images 的 unoptimized 為 true，表示禁用圖片 server 端最佳化功能，原因是靜態導出 HTML 時沒有 server 端，所以需要原封不動 export 出原始靜態圖片

## 程式開發
程式中涉及到 RWD 排版部分，有一些使用的是 on-mobile 這個 mixin 進行手機端樣式切換。
還有一些是使用 ant-design 框架的Row和Col柵格布局實現，該柵格布局
透過將整個 row 行劃分為 24 個 col，然後根據 sm，md 等不同尺寸的 RWD breakpoints 切換每個元素所佔的 col 數量。
例如手機端的螢幕尺寸是 sm（small），電腦端螢幕寬度尺寸為 md，
則這種情況下需要讓一個 div 元素佔滿整個 row，所以設定 sm=24，意味著在 sm 尺寸下這個 div 佔用 24 個 col。
同時還要設定 md=8，則說明在電腦螢幕寬度下一個 div 佔用 1/3 個 row，也就是每個 div 佔用 24*(1/3) = 8個col。
以上就是<Col sm={24} md={8}>所代表的含義

## deploy
next.js 的 build 方式分為 static export 和 server build

### static export
通常如果要發佈到 github pages 則需要 static export，因為 github pages 本質上只是用於展示一些純靜態 HTML，他無法執行 node.js 程式，所以需要匯出只包含 HTML 檔案的產物。

這種方式在設定 next.config.js 後需要執行 npm run build 指令，然後就會在當前資料夾下產生一個名稱為 out 的資料夾。
然後把整個 out 資料夾中的檔案全部 copy 到 https://github.com/FozirTex/FozirTex.github.io 這個 repo 下，或者自己 server 的 web 根資料夾下。
然後就和發佈普通的 HTML 網頁一樣發佈即可。

### server build
而一般的 build 會 build 出最佳化的 js 檔案，然後實際運行時需要透過 node.js 執行 npm run start，
也就是說這種情況需要伺服器上 run 一個 node.js 寫的程式。
這種方式只適合自己有伺服器（包括 AWS 等平台購買的雲端 server）或者 next.js 官方的 vercel 才能發佈.

具體可以參考 next.js 的 docs 官方文檔
