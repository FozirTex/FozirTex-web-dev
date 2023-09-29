## 專案資料夾結構
本網站專案中每個網頁用到的 assets 和 style(scss/sass) 檔案都放在 app/{網頁path} 中，集中式存放便於管理

* styles/_common.sass
    * 存放有 container 的 mixin ，其 default width 為 1360px，符合主流筆電和寬熒幕之解析度尺寸
    * 在桌面端的兩端有 64px 的 padding，在手機端兩端有 16px 的 padding
    * on-desktop 和 on-mobile 這兩個 mixin 主要用於透過 media query 功能針對不同熒幕尺寸下設定不同的樣式，此處主要使用 $mobile: 768px 作為 RWD 切換寬度，因為該尺寸為主流 ipad，高解析度手機熒幕等行動裝置之豎屏寬度。即當熒幕寬度邏輯像素＜768px時渲染on-mobile下的樣式，否則渲染on-desktop下的樣式

* next.config.js
  * 設定output模式為export，為static export
  * 設定images的unoptimized為true，表示禁用圖片server端最佳化功能，原因是靜態導出HTML時沒有server端，所以需要原封不動export出原始靜態圖片

## 程式開發
程式中涉及到RWD排版部分，有一些使用的是on-mobile這個mixin進行手機端樣式切換。
還有一些是使用ant-design框架的Row和Col柵格布局實現，該柵格布局
透過將整個row行劃分為24個col，然後根據sm，md等不同尺寸的RWD斷點切換每個元素所佔的col數量。
例如手機端的熒幕尺寸是sm（small），電腦端熒幕寬度尺寸為md，
則這種情況下需要讓一個div元素佔滿整個row，所以設定sm=24，意味著在sm尺寸下這個div佔用24個col。
同時還要設定md=8，則說明在電腦熒幕寬度下一個div佔用1/3個row，也就是每個div佔用24*(1/3)=8個col。
以上就是<Col sm={24} md-{8}>所代表的含義

## deploy
next.js的build方式分為static export和server build

### static export
通常如果要發佈到github pages則需要static export，因為github pages本質上只是用於展示一些純靜態HTML，他無法執行node.js程式，所以需要匯出只包含HTML檔案的產物。

這種方式在設定next.config.js後需要執行npm run build指令，然後就會在當前資料夾下產生一個名稱為out的資料夾。
然後把整個out資料夾中的檔案全部copy到 https://github.com/FozirTex/FozirTex.github.io 這個repo下，或者自己server的web根資料夾下。
然後就和發佈普通的HTML網頁一樣發佈即可。

### server build
而一般的build會build出最佳化的js檔案，然後實際運行時需要透過node.js執行npm run start，
也就是說這種情況需要伺服器上run一個node.js寫的程式。
這種方式只適合自己有伺服器（包括AWS等平台購買的雲端server）或者next.js官方的vercel才能發佈.

具體可以參考next.js的docs官方文檔
