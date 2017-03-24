# 版本管理
- master分支为主开发库，所有分支都从master分出来。
- CCSiteTest分支为测试版本库，从master分支出来后，需确保pom里面的finalName为CCSiteTest，并确保index.html里面导航栏里SpiderNet的链接 为"../SpiderNetTest/service/manage/loginPage.html"。
# 开发流程
1. 用WebStorm从https://github.com/zhangzhigang8189/CCSite master分支拿到最新代码；
2. 在Webstorm里修改编辑后，用WebStorm提交到自己的github账号里；
3. 在github网站里pull request之前的改动到https://github.com/zhangzhigang8189/CCSite master分支；
4. Zhangzhigang8189查看并同意该次改动，merge到 master里面。完成一次开发流程。