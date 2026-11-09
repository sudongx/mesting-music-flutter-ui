[Skip to content](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676#start-of-content)

You signed in with another tab or window. [Reload](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676) to refresh your session.You signed out in another tab or window. [Reload](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676) to refresh your session.You switched accounts on another tab or window. [Reload](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676) to refresh your session.Dismiss alert

{{ message }}

This repository was archived by the owner on Apr 16, 2024. It is now read-only.


This repository was archived by the owner on Apr 16, 2024. It is now read-only.


# \[分析\] 一起听 系列接口\#1676

Copy link

Copy link

Open

Open

[\[分析\] 一起听 系列接口](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676#top)#1676

Copy link

Labels

[功能需求](https://github.com/Binaryify/NeteaseCloudMusicApi/issues?q=state%3Aopen%20label%3A%22%E5%8A%9F%E8%83%BD%E9%9C%80%E6%B1%82%22)

## Description

[![@kengwang](https://avatars.githubusercontent.com/u/30862240?v=4&size=48)](https://github.com/kengwang)

[kengwang](https://github.com/kengwang)

opened [on Jan 15, 2023on Jan 15, 2023](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676#issue-1533844035)

Issue body actions

一起听是网易云音乐很早推出的一个功能, 但是对于此 API 文档却因为较为复杂而一直没有更新

确实, 在抓了之后会发现这个 API 特别的复杂, 下面贴出一些已知的 API, 希望可以稍微方便大家理解一下整个过程

以下的返回值仅标注关键字段 (data 字段中的关键部分), 请根据实际的返回结果进行开发

系列接口将会以 Comment 的形式进行跟进, 之后会进行 Pr

开这个 Issue 是为了 Pr 之后能够知道实现一起听该如何合理且以何种顺序调用这些接口

请注意, 本 Issue 中的内容依据 `CC 4.0 BY-NC-SA` 进行共享

👍React with 👍5Reacted by binaryify, Spike, Kengwang, erhsilence and BerserkerK

## Activity

01. [![](https://avatars.githubusercontent.com/u/30862240?s=64&v=4)kengwang](https://github.com/kengwang)

    added

    [功能需求](https://github.com/Binaryify/NeteaseCloudMusicApi/issues?q=state%3Aopen%20label%3A%22%E5%8A%9F%E8%83%BD%E9%9C%80%E6%B1%82%22)

    [on Jan 15, 2023on Jan 15, 2023](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676#event-8229652659)

02. ### kengwangcommentedon Jan 15, 2023onJan 15, 2023



    [![@kengwang](https://avatars.githubusercontent.com/u/30862240?v=4&size=48)](https://github.com/kengwang)





    [kengwang](https://github.com/kengwang)



    [on Jan 15, 2023on Jan 15, 2023](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676#issuecomment-1383167532)













    ContributorAuthor



    More actions

















    第一步: 创建房间



    你需要在开始的时候创建一个一起听房间


    调用接口: `listentogether/room/create`


    即可返回创建的房间信息.


    例如:





    ```
    {"type":"NEW_ROOM","roomInfo":{"creatorId":1,"roomId":"$ROOM_ID"}}
    ```









    请记住返回结果中的 `ROOM_ID`, 后面会用到

03. ### kengwangcommentedon Jan 15, 2023onJan 15, 2023



    [![@kengwang](https://avatars.githubusercontent.com/u/30862240?v=4&size=48)](https://github.com/kengwang)





    [kengwang](https://github.com/kengwang)



    [on Jan 15, 2023on Jan 15, 2023](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676#issuecomment-1383168113)









    Last edited by kengwang







    ContributorAuthor



    More actions

















    第二步, 创建房间链接



    房间链接为手动拼接而成, 格式为

    `https://st.music.163.com/listen-together/share/?songId=歌曲ID&roomId=房间ID&inviterId=创建者ID`



    其中, 房间 ID 为 `ROOM_ID`, 后面可能会用房间号, 房间ID来称呼



    插一句, 网易云音乐会通过自己的接口生成一个短网址, 为了防止滥用这里不贴出来

04. ### kengwangcommentedon Jan 15, 2023onJan 15, 2023



    [![@kengwang](https://avatars.githubusercontent.com/u/30862240?v=4&size=48)](https://github.com/kengwang)





    [kengwang](https://github.com/kengwang)



    [on Jan 15, 2023on Jan 15, 2023](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676#issuecomment-1383170435)













    ContributorAuthor



    More actions

















    ## 获取房间情况



    调用 API: `listentogether/room/check`


    传入参数: `roomId`: 房间号



    返回示例:





    ```
    {"code":200,"data":{"joinable":true,"type":"NORMAL","copywriting":null,"status":"AVAILABLE"},"message":""}
    ```









    根据返回信息前的英语猜一下吧

05. ### kengwangcommentedon Jan 15, 2023onJan 15, 2023



    [![@kengwang](https://avatars.githubusercontent.com/u/30862240?v=4&size=48)](https://github.com/kengwang)





    [kengwang](https://github.com/kengwang)



    [on Jan 15, 2023on Jan 15, 2023](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676#issuecomment-1383182341)









    Last edited by kengwang







    ContributorAuthor



    More actions

















    ## 发送播放列表信息



    这个会发送当前的播放列表及播放状态



    请求接口: `listentogether/sync/list`



    请求参数:



    - `roomId`: 房间 ID
    - `commandType`: 指令类型, 参数为下方

      - `REPLACE`: 替换播放列表
      - `PLAYMODE_CHANGE`: 修改播放模式
    - `version`: 当前的信息的版本 (也就是信息的更新度)

      - `userId`: 发起更新的用户的 ID
      - `version`: 版本号
    - `playMode`: 播放模式, 参数为下方

      - `ORDER_LOOP`: 列表循环
      - `RANDOM`: 随机播放
      - `SINGLE_LOOP`: 单曲循环
    - `randomList`: 随机播放列表, 音乐 ID 数组, 逗号分割
    - `displayList`: 显示的播放列表, 音乐 ID 数组, 逗号分割

目前分析得到的这些, 如果还有更多的话欢迎评论补充

06. ### kengwangcommentedon Jan 15, 2023onJan 15, 2023



    [![@kengwang](https://avatars.githubusercontent.com/u/30862240?v=4&size=48)](https://github.com/kengwang)





    [kengwang](https://github.com/kengwang)



    [on Jan 15, 2023on Jan 15, 2023](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676#issuecomment-1383184068)













    ContributorAuthor



    More actions

















    ## 获取播放列表信息



    调用 API: `listentogether/sync/playlist/get`


    传入参数: `roomId`: 房间号



    返回参数待补充

07. ### kengwangcommentedon Jan 15, 2023onJan 15, 2023



    [![@kengwang](https://avatars.githubusercontent.com/u/30862240?v=4&size=48)](https://github.com/kengwang)





    [kengwang](https://github.com/kengwang)



    [on Jan 15, 2023on Jan 15, 2023](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676#issuecomment-1383184601)









    Last edited by kengwang







    ContributorAuthor



    More actions

















    ## 获取一起听状态



    说明 :登录后调用此接口可获取一起听状态



    **接口地址 :**`/listentogether/status`



    **调用例子 :**`/listentogether/status`

08. ### kengwangcommentedon Jan 15, 2023onJan 15, 2023



    [![@kengwang](https://avatars.githubusercontent.com/u/30862240?v=4&size=48)](https://github.com/kengwang)





    [kengwang](https://github.com/kengwang)



    [on Jan 15, 2023on Jan 15, 2023](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676#issuecomment-1383190984)













    ContributorAuthor



    More actions

















    ## 一起听心跳包



    请注意, 你应当在每一首歌开始的时候发送心跳包



    请求接口: `listentogether/heatbeat`


    请求参数:



    - `roomId`: 房间号
    - `songId`: 当前播放歌曲 ID
    - `playStatus`: 播放状态, 可能的参数见下

      - `PLAY`: 播放
      - `PAUSE`: 暂停
    - `progress`: 播放进度, 单位 毫秒

更多可能的详细内容欢迎回复讨论

09. ### kengwangcommentedon Jan 15, 2023onJan 15, 2023



    [![@kengwang](https://avatars.githubusercontent.com/u/30862240?v=4&size=48)](https://github.com/kengwang)





    [kengwang](https://github.com/kengwang)



    [on Jan 15, 2023on Jan 15, 2023](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676#issuecomment-1383192017)













    ContributorAuthor



    More actions

















    ## 结束房间



    调用 API: `listentogether/end`


    传入参数: `roomId`: 房间号

10. [![](https://avatars.githubusercontent.com/u/30862240?s=64&v=4)kengwang](https://github.com/kengwang)

    added a commit that references this issue [on Jan 15, 2023on Jan 15, 2023](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676#event-8229890651)









    [\[feat\]<api/listentogether>: 一起听 API 相关](https://github.com/kengwang/NeteaseCloudMusicApi-1/commit/f268e7b87068de238e6e9e5cd9fcf48e0be15aa5)

    ...











    [f268e7b](https://github.com/kengwang/NeteaseCloudMusicApi-1/commit/f268e7b87068de238e6e9e5cd9fcf48e0be15aa5)

11. ### kengwangcommentedon Jan 15, 2023onJan 15, 2023



    [![@kengwang](https://avatars.githubusercontent.com/u/30862240?v=4&size=48)](https://github.com/kengwang)





    [kengwang](https://github.com/kengwang)



    [on Jan 15, 2023on Jan 15, 2023](https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676#issuecomment-1383196570)













    ContributorAuthor



    More actions

















    Related Pull Request: [#1677](https://github.com/Binaryify/NeteaseCloudMusicApi/pull/1677)


[Sign up for free](https://github.com/signup?return_to=https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676)**to join this conversation on GitHub.** Already have an account?[Sign in to comment](https://github.com/login?return_to=https://github.com/Binaryify/NeteaseCloudMusicApi/issues/1676)

## Metadata

## Metadata

### Assignees

No one assigned

### Labels

[功能需求](https://github.com/Binaryify/NeteaseCloudMusicApi/issues?q=state%3Aopen%20label%3A%22%E5%8A%9F%E8%83%BD%E9%9C%80%E6%B1%82%22)

### Projects

No projects

### Milestone

No milestone

### Relationships

None yet

### Development

No branches or pull requests

## Issue actions

- ![](https://github.githubassets.com/assets/github-copilot-app-light-15ad5534265eeacd.svg)Open in GitHub Copilot app

You can’t perform that action at this time.