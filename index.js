<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webdev</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/font.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="wrapper">
      <header>
        <nav>
          <div class="container">
            <ul class="menu">
              <li class="menu_item"><a href="#" class="menu_link">About</a></li>
              <li class="menu_item">
                <a href="#" class="menu_link">Syllabus</a>
              </li>
              <li>
                <img src="assets/logo&icon/logo.svg" alt="logo" class="logo" />
              </li>
              <li class="menu_item">
                <a href="#" class="menu_link">Projects</a>
              </li>
              <li class="menu_item"><a href="#" class="menu_link">FAQ</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section class="your_life">
          <div class="container">
            <div class="header_h1"><h1>webdev</h1></div>
            <div class="your_life_subheader">your life is WebDev</div>
            <div class="your_life_descr">
              Whatever the approach to development may be, the final<br />
              program must satisfy some fundamental properties
            </div>
            <button class="your_life_button">
              <a href="#">get started</a>
            </button>
            <div class="your_life_social">
              <a href="#" class="your_life_link"
                ><img
                  src="assets/svg/email.svg"
                  alt="email"
                  class="your_life_img"
              /></a>
              <a href="#" class="your_life_link"
                ><img
                  src="assets/svg/facebook.svg"
                  alt="facebook"
                  class="your_life_img"
              /></a>
              <a href="#" class="your_life_link"
                ><img
                  src="assets/svg/insta.svg"
                  alt="instagram"
                  class="your_life_img"
              /></a>
              <a href="#" class="your_life_link"
                ><img
                  src="assets/svg/youtube.svg"
                  alt="youtube"
                  class="your_life_img"
              /></a>
            </div>
          </div>
        </section>
        <section class="rappresent">
          <div class="container">
            <div class="rappresent_block">
              <div class="rappresent_block_text">
                <div class="rappresent_subheader">
                  Rappresent your idea with<br />
                  a smart Design
                </div>
                <div class="rappresent_descr">
                  Tasks accompanying and related to programming include:
                  testing, debugging, source code maintenance,
                  <strong>implementation of build systems</strong>, and
                  management of derived artifacts, such as the machine code of
                  computer programs.
                </div>
                <button class="rappresent_btn">get started</button>
              </div>
              <img
                src="assets/section/rappresent-img.jpg"
                alt="rapresent"
                class="rappresent_img"
              />
            </div>
          </div>
        </section>
        <section class="community">
          <div class="container">
            <div class="community_wrapper">
              <div class="community_block">
                <img
                  src="assets/logo&icon/icon-community.png"
                  alt="icon"
                  class="community_logo"
                />
                <div class="community_subheader">our community</div>
                <div class="community_descr">
                  A hacker is any skilled computer expert that uses their
                  technical knowledge to overcome a problem, but it can also
                  mean a security hacker in common language
                </div>
              </div>
              <div class="community_slider">
                <div class="community_switch">
                  <div class="arrow_left"><i></i></div>
                  <div class="number">
                    <div class="one">1</div>
                    <div class="slash">/</div>
                    <div class="five">5</div>
                  </div>
                  <div class="arrow_right"><i></i></div>
                </div>
                <div class="community_img">
                  <img
                    src="assets/section/slider-1.jpg"
                    alt="slider-1"
                    class="community_slider_img"
                  />
                  <img
                    src="assets/section/slider-2.jpg"
                    alt="slider-2"
                    class="community_slider_img"
                  />
                  <div class="slider_3">
                    <img
                      src="assets/section/slider-3.jpg"
                      alt="slider-3"
                      class="community_slider_img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="implement">
          <div class="container">
            <div class="implement_wrapper">
              <img
                src="assets/section/implement-img.jpg"
                alt="implament"
                class="iplament_img"
              />
              <div class="implement_block">
                <div class="implement_subheader">Implement right Code</div>
                <div class="implement_descr">
                  These might be considered part of the
                  <strong>programming process</strong>, but often the term
                  software development is used for this larger process with the
                  term programming, implementation
                </div>
                <button class="implement_btn">Learn more</button>
              </div>
            </div>
          </div>
        </section>
        <section class="subscribe">
          <div class="container">
            <div class="subscribe_subheader">sign up for our newsletter</div>
            <form action="#" class="subscribe_email">
              <input
                id="field"
                name="email"
                type="email"
                required
                placeholder="E-mail"
              />
              <button class="subscribe_btn">
                <span class="icon-checkmark"></span>
              </button>
            </form>
          </div>
        </section>
        <section class="download">
          <div class="download_subheader">Download the App</div>
          <div class="download_descr">
            Machine code was the language of early programs, written in the
            instruction set of the particular machine, often in binary notation.
          </div>
          <div class="download_btn">
            <button class="btn">
              <div class="apple_text">apple store</div>
              <span class="icon-appleinc"></span>
            </button>
            <button class="btn">
              <div class="play_text">Play Market</div>
              <span class="icon-android"></span>
            </button>
          </div>
        </section>
      </main>
      <footer>
        <div class="container">
          <div class="footer_wrapper">
            <nav>
              <div class="footer_link">
                <ul>
                  <li><a href="#">Credits</a></li>
                  <li class="divider">|</li>
                  <li><a href="#">Privacy</a></li>
                  <li class="divider">|</li>
                  <li><a href="#">Our teams</a></li>
                </ul>
              </div>
            </nav>
            <img
              src="assets/logo&icon/logo.svg"
              alt="logo"
              class="footer_img"
            />
            <div class="footer_text">by TonYem for RSS at 2020</div>
          </div>
        </div>
      </footer>
    </div>
  </body>
</html>
