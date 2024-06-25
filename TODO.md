# Project

اللهم علمنا ما ينفعنا وانفعنا بما علمتنا

### TODO (low priority 🔼)
    - [ ] inline #todo in the code
    - +apis popups for all apis ex:if token expire.
    - pricing implementation @backend
    - +apis update all apis to latest version
    - [ ] optimize images 
    - redux,theme,translation
    - next (routing,static pages   recommendation,know why to use)
    - #project_graduation signup second confirm pass field
### TODO (high 🔼🔼🔼)
    - +<LandingPage/> conditional render create account and sign in if user is logined @zaki
    - +<LandingPage/> if no images same endpoint result no categories
    -  +<SubscripedChannels/>:50 (line 50 in component file) useeffect when state change log it (monitor system) usecallback,usememo 
    - +<Protected/> blanc if invalid token,no popup states


    - host {due:2024-06-22}
      1. solve eslint problems @zaki 
      2. check host @hazem
      3. team tests @otherTeam
      4. team active @otherTeam

### In Progress
- rm strict mode
triggerState_Get_noBody_Validationerr_noCommandField
- draw ,track and optimise tree
- #project_graduation in +<ResetPassword/> component, if statuscode from API is 404 show err and donot show enter code  field @zaki
- in <ArticleCard/> and <ChannelCard/> add placeholder images api doesnot provide one. @zaki

- +<SubscribedList/> state to color the selected rss >>> add its name before the articles
- +<ALL_fetch_APIS/>  use Redux,set Err modal @hazem
- global error manage system with redux
  - [x] custom hook and 5 useDispatches...     @hazem 
  - 1. replace all react(fetch,useState,useEffect) with custom hook @hazem 

      - [x] +<PublicChannels/> ✔️ 
      - [x] +<SubscribedLIst/> ✔️
      - [x] +<SubscriptionsChannels> ✔️ 
      - [x] +<MainLandingPage/> ✔️
      - [x] +<create_Account/> ✔️
      - [x] +<UserArticles/> ✔️
      - [x] +<UserArticle/> ✔️
      - [x] +<ArticleCard/> ✔️
      - [x] +<login/> ✔️
      - [x] +<protected/> ✔️
      - reset_password
      - addFeed

      - chanllenging paralel fetch
        - +ChannelCard
        - +discover
        - +google_login
        - +<Login/>

  - 2. useDispatches inside fetching without useFetch 
  
  
 -  @hazem 
       - +<create_Account/>
       - +<ResetPassword/>
  - 3. modal with useSelctor 
  - 4. netwerk error #pro_grad                @hazem
  - 5. troubleshoot website
  - new tasks to the grad project          @hazem 

- bad fncs routing in Protected
- bad modal close in +UserArticles

  - @zaki bad modal on click articles +<LandingPage/>
    - only visible in the galary
    - on click outside close it
  - @zaki bad modal on click articles +<LandingPage/>
  - @backend contact us form

- +<ArticleModal> make good component for an article @zaki
- +<ArticleModal> @backend null article category,summary,images in
- +<NavBar/> bad logotext  @zaki







### Done ✓
- remove all chanells from +<Home/> backend not implement it @hazem
- +<UserArticles/> bad when consume api/v1/Article/GetRssArticle/ bad article modal error  @hazem
  - troubleshoot
  - solve

-  #pro_grad all channels api in +</home/> 
- #project_graduation on signup success bad state message
- update,create,delete by admin, ?? #backend #pro_grad (current no )
- [x] #project_graduation if sign with google ,store token,refresh token then forward to home

    - channesl modals, btn toggles ,array state with id
    - replace <Navigate to="/" />; 
    - multipages navigation +<Channels/>
    - +<UserArticle/> show +<ArticleModal data={data}/>  @hazem
    - [ ] +<UserArticles/> consume Articles API @zaki
       - 🗄️ ![alt text](imagesRef/image-4.png)
       - errors in api

       - task is the same like other a     is

    - articles and subsciptions view
      - move +<SubscripedChannels/> into +<homeArticles>
      - add subscription Horizontal into +<homeArticle>
      - onClick list update Displayed Articles...
      - +<Discover> onClick show Articles in +<ArticleModalList>

      - PROS: 
        1. user see  articles per RSS or all...
        2. remove useless Subsciption route
        3. subscription freindly next to articles
        4. user see discover items before subscipe 
    - +<ArticleModal/> global in homeLayout ,to solve scroll problem
    - +<SubscribedChannels/> show +<ArticleModal data={data}/> @hazem
    - +<DiscoverChannels/> show +<ArticleModal data={data}/>  @hazem
    - record 2 endpoints @hazem
    -  bad model position and padding in +<ArticleModal>  @hazem
    - when scroll position change @hazem
    
    - [ ] zaki install extntions @zaki
    - +<Home/> remove token on logout @zaki
    - +<Home/>  if we on /home/anypage then reload page, the focus of buttons of left will be first always @zaki
    - follow/unfollow local state which change buttons follow and unfollow @hazem
      - +<Subscription/> 2apis_chain_promise on unflow request,immediatly remove from front end,update state
      - +<dISCOVER> update button(follow/unflow) state
    - merge request from zaki @hazem
    -  screen from todo file progress @hazem 
    -  auth API v2 (admin endpoints. /rss/:id) @hazem call backend
    -  close modal on click the wrapper  @hazem
    - modal not updates on multi clicks @hazem
    -  OVERWRITIE browser stack (when use useNavigate) @hazem
    - [x] in err msg no exit btn @zaki
    - [x] @zaki +<Alert/> component in +<Login/> +<createAccount/> :must be top all components
    - +<Login/> bad route to resetpassword (reload) @hazem
    - +<login/> , with this data ,two messages appear success then failed   @hazem
       ![alt text](imagesRef/image-3.png)
    - [x] @hazem consume rss API
    - [x] consume auth API
    - [x] store email to local storage
    - [x] input code from email
    - [x] send code,email to api
    - [x] msg confirmed or not
    - [ء] meeting {due:2024-06-20} @team
        - q/a anything
        - what we did
        - TODO file > a must
        - contribute in file +,@
        - TODO extention > 
        - live demo 
        - inProgress section discuss
        - q/a anything
    - [x] forget password css
    - [x] API end points
    - [x] two logins appear success then err
    - [x] testing mahmoud example
    - [x] ~~ homepage ~~
    - [x] ~~google auth http://65470565009-pjolbjeuuds1s29b764lgv86vo0ova6i.apps.googleusercontent.com~~
    - [x] big msgs use Mazefdn@123
    - [x] ~~landingpage~~
    - [x] rm admin mail ahmed
    - [x] remove tring email and password
    - [x] login needs 2 clicks
    - [x] no backg img repeat
    - [x] From JWT token return the data
    - [x] rss database
    
# note

- this account works :
  user: xr3c9k2yua@dpptd.com
  password:Mazefdn@12311

- 

# rss feeds

// const rssList=["https://feeds.bbci.co.uk/news/world/rss.xml",
// "https://feeds.bbci.co.uk/news/uk/rss.xml",
// "https://feeds.bbci.co.uk/news/business/rss.xml",
// "https://feeds.bbci.co.uk/news/technology/rss.xml",
// "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml"]

// bad rss feeds
https://www.singaporelawwatch.sg/Portals/0/RSS/Headlines.xml

# apis

- auth
  https://www.postman.com/ahmedelshafey/workspace/newsapi/collection/26431110-9cce8afc-99db-415c-9403-8633d3895de4?action=share&creator=26431110&active-environment=26431110-756a9d34-ad97-4aae-9b2c-82a98b47e7a7
  > note:

1. 😃 there is a typo-error in the CheckValidationToken endpoint
2. Make it POST instead GET

- articles https://www.postman.com/ahmedelshafey/workspace/newsapi/collection/26431110-cca3c635-ca3e-407c-89e7-c86e5637d7c3?action=share&creator=26431110&active-environment=26431110-756a9d34-ad97-4aae-9b2c-82a98b47e7a7

- rss https://www.postman.com/ahmedelshafey/workspace/newsapi/collection/26431110-621620a6-e40f-4e4c-a517-57efdd3e0f0f?action=share&creator=26431110&active-environment=26431110-756a9d34-ad97-4aae-9b2c-82a98b47e7a7
