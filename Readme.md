بسم الله الرحمن الرحيم
- [for all team](#for-all-team)
- [for backend](#for-backend)
- [for AI](#for-ai)
- [for front end](#for-front-end)
- [intialize repo](#intialize-repo)
- [components](#components)
  - [home\_page](#home_page)
- [myFeed\_page](#myfeed_page)
  - [login/signup\_page](#loginsignup_page)
  - [logoPopup](#logopopup)
  - [resources\_page](#resources_page)
  - [add\_resource\_page](#add_resource_page)
  - [discover\_page ?](#discover_page-)
  - [trending\_page ?](#trending_page-)
  - [news\_item\_page ?](#news_item_page-)
  - [news\_item\_page\_viewer ?](#news_item_page_viewer-)
  - [preferences\_page ?](#preferences_page-)
- [design choices  ?](#design-choices--)
  - [in discover\_page.you\_may\_like\_this](#in-discover_pageyou_may_like_this)
  - [Summary\_article](#summary_article)
    - [upload just link to server  @DATABASE/SERVER](#upload-just-link-to-server--databaseserver)

## for all team
-  model
![Alt text](imagesRef/image.png)
- only see your for sections (search with ctrl+f)
## for backend
- search in this file  for ::: DATABASE/SERVER to know  backendend tasks
- read carefully this is what needed..
## for AI 
- search in browser for ::: API usage/consume is only frontend task
- read carefully this is what needed..

## for front end
- read carefully this is what needed..
- Read all the file carefully 
- names with  underscores (_) is are pages and routed through ReactRouter..
- page.anything means sub page implemented with hash routing...
- any opened page will be implmented ان_شاء_الله
   1. using react only (popup page) donot worry 
   2. or using reactRouterDOM (route to new page) donot worry 
- if a page is written like that home_page.myFeed_page so  myFeed_page is children of home_page (React Router) donot worry
- popups should made by conditional rendering only React..
- the ? in this  files means not finished section
## intialize repo
- [ ] fork repo
- [ ]  open vscode and go to the  project folder then  
1. Press Ctrl+Shift+P to open the Command Palette.
2. run  git clone
3. enter your forked link to repo
4. choose folder to the project
> if you donot know how To deal with commets, pull requests ask on group.....
## components
### home_page
- [ ]  navbar
  - [ ]  onClick userIcon **show**  logoPopup.
  - [ ]   onClick theme Icon **toggle**  darkMode/lightModel 
- [ ]  onClick discover icon **show**  home_page.discover_page
- [ ]  onClick my feed icon **show**  home_page.myFeed_page
- [ ]  onClick search **show** news_item_page
- [ ]  onclick resources icon **show** resources_page
## myFeed_page
- [ ]  show news_item_page
- [ ]  onClick view options icons **change** shown 
- [ ]  spinner 
- [ ]  load first 10 items
- [ ]  store in redux ?
- [ ]  donot store? 

### login/signup_page
- [ ]  logo
- [ ]  login button
- [ ]  sign up button
- [ ]  form with submit 
- [ ] onLogin success
     - [ ] spinner
     - [ ] fetch user subscription json state ,groups,channels,thumbnail,urls... 
     - [ ] store fetched state  redux-resilient. donot worry
     - [ ]  onClick a channel read its data from  its own server DATABASE/SERVER?
     - [ ]  onClick a channel read data from our server ? 
### logoPopup
- [ ]  logout action
    - [ ]   redirect to login/signup_page
    - [ ]  delete token
 - [ ]  open preferences
    - [ ]   open  preferences_page
### resources_page
- groups
- [ ]  items in group
- Actions
   - [ ]  delete resource
     - [ ] update subscripton on server
   - [ ]  open add_resource_page
### add_resource_page
- Rss
   - [ ] update subscripton on server
- [ ]  Soon
### discover_page ?
- [ ]  trending
- [ ]  you might like
   
### trending_page ?
- [ ]  per topic
### news_item_page ?
- [ ]  like dislike soon
- [ ]  sumbnail
- [ ]  actions
   - [ ]   on click open news_item_page_viewer
   - [ ]  sum up
     - [ ]  open Summary_article
   - [ ]  unsubscribe from this publisher
   - [ ]  see more like this 
     - [ ]  update redux state 
     > (item tags should be in likes array only)
   - [ ]  see less like this 
     - [ ]  update redux state 


###  news_item_page_viewer ?
- [ ]  copy link icon
- [ ]  browser translate api
- [ ]  darkmode,lightmode,
- [ ]  speak article .....
- [ ]  annotate article 
   - [ ]  annotate
   - [ ]  store in redux state
   - [ ]  schedule upload redux state to server .....
  
### preferences_page ?
- [ ]  settings tab
- [ ]  interests
- [ ]  liked  pages
- [ ]  soon


## design choices  ?
###  in discover_page.you_may_like_this
- upload user preferences when needed ex: click on discover page..@DATABASE/SERVER
> @AI Recommendation model is fed with (userVector,available articles) to generate ItemList in discover_page.you_may_like_this
> this require all news items to be topic classified ......  @AI
  ex: a donald trump newsItem should have an array in the database with (donaldtrump,usa,news,ploitics)
### Summary_article
#### upload just link to server  @DATABASE/SERVER
- server should return summarized text.... @DATABASE/SERVER @AI