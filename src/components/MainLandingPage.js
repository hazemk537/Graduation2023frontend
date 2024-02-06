import React from "react";
import NavBar from "./NavBar";

function MainLandingPage() {
  return (
    <div>
      <div className={styles.landingpage_body}>
        <div className={styles.landingpage_navbar}>
          <div className={styles.landingpage_logo}>
            <div className="landing-navbar-svg">
              <svg
                fill="#51a8bd"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#51a8bd"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm1.0008661 2.0352252-.0008661 4.9647748h-2l.0001337-4.96484538c-6.9350811.48937684-12.47560224 6.02989798-12.96497908 12.96497908l4.96484538-.0001337v2l-4.9647748.0008661c.48983875 6.9346138 6.03016066 12.474626 12.9649085 12.9639793l-.0001337-4.9648454h2l.0008661 4.9647748c6.9342805-.4898152 12.4740935-6.0296282 12.9639087-12.9639087l-4.9647748-.0008661v-2l4.9648454.0001337c-.4893533-6.93474784-6.0293655-12.47506975-12.9639793-12.9649085zm-1.0008661 8.9647748c2.7614237 0 5 2.2385763 5 5s-2.2385763 5-5 5-5-2.2385763-5-5 2.2385763-5 5-5zm0 2c-1.6568542 0-3 1.3431458-3 3s1.3431458 3 3 3 3-1.3431458 3-3-1.3431458-3-3-3z"></path>
                </g>
              </svg>
            </div>
            <span className="landing-navbar-title"> Focus News </span>
          </div >
          <Button className="signin-btn" text="Sign In" />
          <Button className="signup-btn" text="Sign Up" />
        </div>
        <h1 className={styles.landingpage_h1}>
          Build your own newsfeed
        </h1>
        <span className="description-1">
          With Focus, Follow your favorite websites , collect articles.
        </span>
        <div className=" layout-btns-header flex">
          <Button className="signin-btn" text="Sign In" />
          <Button className="viewfeatures-btn" text="View Features" />
        </div>

        <main>
          screenshot of the app ان شاء الله
          <div className="features-landingpage">
            <div>
              <img alt="error display " src="../../imagesRef/image-1.png"></img>

              <div className="header-h3">
                Follow your favorite websites and creators
              </div>

              <span className="description-2">
                Bring the content that matters to you together and enjoy the
                best from the web in a single place.
              </span>
            </div>
            <div>
              <div className="header-h3">Save time with Summarization</div>

              <span className="description-2">
                {" "}
                No need to go read all the articles...
              </span>
            </div>
            <div>
              <img alt="error display " src="../../imagesRef/image-2.png" />
              {/* reduedant names err */}
              <div className="header-h3">
                smart algorithms and recommendation engines
              </div>

              <span className="description-2">
                {" "}
                Customize your view and enjoy a personalized feed.
              </span>
            </div>{" "}
            <div className="carossel">
              <span>Discover Based on your likes</span>
              <div>
                <span>Recommended News</span>
                <img alt="" />
              </div>
              <div>
                <span>Tech News</span>
                <img alt="" />
              </div>{" "}
              <div>
                <span>Business & Finance</span>
                <img alt="" />
              </div>{" "}
              <div>
                <span>Marketing & Media </span>
                <img alt="" />
              </div>
              <div>
                <span>Hobby & Lifestyle</span>
                <img alt="" />
              </div>
            </div>
          </div>
        </main>
        <footer></footer>
      </div>{" "}
    </div>
  );
}

export default MainLandingPage;

