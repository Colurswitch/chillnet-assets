const clApp = {};

class CN_Theme {
  /**
   * @param {string} name - Theme name
   * @param {string} code - CSS code
   * @param {string} accent - Accent color variable
   */
  constructor(name, code, accent) {
    this.name = name; // Theme name
    this.code = code; // CSS code
    this.accent = accent; // Accent color variable
  }
}
class CN_AnimatedTheme extends CN_Theme {
  /**
   * @param {string} name - Theme name
   * @param {string} code - CSS code
   * @param {string} accent - Accent color variable
   */
  constructor(name, code, accent) {
    super(name, code, accent);
  }
  /**
   * @param {function(CanvasRenderingContext2D, number)} callback - Callback function called each frame.
   * @description Called every frame, with the CanvasContext for rendering and an integer representing the
   * current frame.
   */
  set onFrameTick(callback) {
    this._onFrameTick = callback; // callback is a function that
    // takes a CanvasContext for rendering and an integer representing the
    // current frame
  }
}
class CN_Page {
  /**
   * @param {string} title - Title of the page
   * @param {string} [icon="article"] - Icon of the page
   * @description Creates a new CN_Page object.
   */
  constructor(title, icon = "article") {
    this.title = title;
    this.icon = icon;
    this.subpages = [new CN_SubPage("New Subpage")];
  }
}
class CN_SubPage extends CN_Page {
  /**
   * @param {string} title - Title of the subpage
   * @param {string} [icon="article"] - Icon of the subpage
   * @description Creates a new CN_SubPage object. Sets the content to an empty string by default.
   * @extends CN_Page
   */
  constructor(title, icon = "article") {
    super(title, icon);
    this.content = "";
  }
}
class CN_BorderlessPage extends CN_Page {
  /**
   * @param {string} title - Title of the borderless page
   * @param {string} [icon="article"] - Icon of the borderless page
   * @description Creates a new CN_BorderlessPage object.
   * @extends CN_Page
   */
  constructor(title, icon = "article") {
    super(title, icon);
    this.content = "";
  }
}

clApp.config = {
  parameters: {}, // Key:value pairs of URL parameters.
  persistData: true, // Whether to save data in localStorage. If false, resets settings (dangerous.)
  themes: [
    {
      name: "Default",
      code: `
                        background:
                            linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%),
                            linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
                            linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
                    `,
      accent: "--fc-color-purple",
    },
    {
      name: "Atlantic",
      code: `
                        --width: .5px; /*Controls border width*/
        background-color: darkcyan;
        background: 
          radial-gradient(circle, transparent 0%, transparent calc(25px - var(--width)), white calc(25px - var(--width)), white calc(25px + var(--width)), transparent calc(25px + var(--width)), transparent calc(50px - var(--width)), white calc(50px - var(--width)), white calc(50px + var(--width)), transparent calc(50px + var(--width))),
          radial-gradient(circle at 100% 0%, transparent 0%, transparent calc(25px - var(--width)), white calc(25px - var(--width)), white calc(25px + var(--width)), transparent calc(25px + var(--width)), transparent calc(50px - var(--width)), white calc(50px - var(--width)), white calc(50px + var(--width)), transparent calc(50px + var(--width))),
          radial-gradient(circle at 100% 50%, transparent 0%, transparent calc(25px - var(--width)), white calc(25px - var(--width)), white calc(25px + var(--width)), transparent calc(25px + var(--width)), transparent calc(50px - var(--width)), white calc(50px - var(--width)), white calc(50px + var(--width)), transparent calc(50px + var(--width))),
          radial-gradient(circle at 100% 100%, transparent 0%, transparent calc(25px - var(--width)), white calc(25px - var(--width)), white calc(25px + var(--width)), transparent calc(25px + var(--width)), transparent calc(50px - var(--width)), white calc(50px - var(--width)), white calc(50px + var(--width)), transparent calc(50px + var(--width))),
          radial-gradient(circle at 50% 100%, transparent 0%, transparent calc(25px - var(--width)), white calc(25px - var(--width)), white calc(25px + var(--width)), transparent calc(25px + var(--width)), transparent calc(50px - var(--width)), white calc(50px - var(--width)), white calc(50px + var(--width)), transparent calc(50px + var(--width))),
          radial-gradient(circle at 0% 100%, transparent 0%, transparent calc(25px - var(--width)), white calc(25px - var(--width)), white calc(25px + var(--width)), transparent calc(25px + var(--width)), transparent calc(50px - var(--width)), white calc(50px - var(--width)), white calc(50px + var(--width)), transparent calc(50px + var(--width))),
          radial-gradient(circle at 0% 50%, transparent 0%, transparent calc(25px - var(--width)), white calc(25px - var(--width)), white calc(25px + var(--width)), transparent calc(25px + var(--width)), transparent calc(50px - var(--width)), white calc(50px - var(--width)), white calc(50px + var(--width)), transparent calc(50px + var(--width))),
          radial-gradient(circle at 50% 0%, transparent 0%, transparent calc(25px - var(--width)), white calc(25px - var(--width)), white calc(25px + var(--width)), transparent calc(25px + var(--width)), transparent calc(50px - var(--width)), white calc(50px - var(--width)), white calc(50px + var(--width)), transparent calc(50px + var(--width))),
          radial-gradient(circle at 0% 0%, transparent 0%, transparent calc(25px - var(--width)), white calc(25px - var(--width)), white calc(25px + var(--width)), transparent calc(25px + var(--width)), transparent calc(50px - var(--width)), white calc(50px - var(--width)), white calc(50px + var(--width)), transparent calc(50px + var(--width))),
          darkcyan;
        background-size: 100px 100px;
                    `,
      accent: "--fc-color-blue",
    },
    {
      name: "Arrows",
      code: `
                        background:
        linear-gradient(45deg, #92baac 45px, transparent 45px)64px 64px,
        linear-gradient(45deg, #92baac 45px, transparent 45px,transparent 91px, #e1ebbd 91px, #e1ebbd 135px, transparent 135px),
        linear-gradient(-45deg, #92baac 23px, transparent 23px, transparent 68px,#92baac 68px,#92baac 113px,transparent 113px,transparent 158px,#92baac 158px);
        background-color:#e1ebbd;
        background-size: 128px 128px;
                    `,
      accent: "--fc-color-blue",
    },
    {
      name: "Upholstery",
      code: `background:
        radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 9%, hsla(0, 100%, 20%, 0) 9%) 0 0,
        radial-gradient(hsl(0, 100%, 27%) 4%, hsl(0, 100%, 18%) 8%, hsla(0, 100%, 20%, 0) 10%) 50px 50px,
        radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 50px 0,
        radial-gradient(hsla(0, 100%, 30%, 0.8) 20%, hsla(0, 100%, 20%, 0)) 0 50px,
        radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 50px 0,
        radial-gradient(hsla(0, 100%, 20%, 1) 35%, hsla(0, 100%, 20%, 0) 60%) 100px 50px,
        radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 0 0,
        radial-gradient(hsla(0, 100%, 15%, 0.7), hsla(0, 100%, 20%, 0)) 50px 50px,
        linear-gradient(45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0,
        linear-gradient(-45deg, hsla(0, 100%, 20%, 0) 49%, hsla(0, 100%, 0%, 1) 50%, hsla(0, 100%, 20%, 0) 70%) 0 0;
        background-color: #300;
        background-size: 100px 100px;`,
      accent: "--fc-color-red-dark",
    },
    {
      name: "Marrakesh",
      code: `background-color:white;
        background-image:
        radial-gradient(midnightblue 9px, transparent 10px),
        repeating-radial-gradient(midnightblue 0, midnightblue 4px, transparent 5px, transparent 20px, midnightblue 21px, midnightblue 25px, transparent 26px, transparent 50px);
        background-size: 30px 30px, 90px 90px;
        background-position: 0 0;`,
      accent: "--fc-color-blue",
    },
    {
      name: "Starry Night",
      code: `background-color:black;
        background-image:
        radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
        radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
        radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
        radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
        background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
        background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;`,
      accent: "--fc-color-black-dark",
    },
    {
      name: "Yin Yang",
      code: `background:
        radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54,78,39,0) 12%, rgba(54,78,39,0)) 50px 0,
        radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210,202,171,0) 12%, rgba(210,202,171,0)) 50px 0,
        radial-gradient(circle at 50% 59%, #D2CAAB 3%, #364E27 4%, #364E27 11%, rgba(54,78,39,0) 12%, rgba(54,78,39,0)) 0 50px,
        radial-gradient(circle at 50% 41%, #364E27 3%, #D2CAAB 4%, #D2CAAB 11%, rgba(210,202,171,0) 12%, rgba(210,202,171,0)) 0 50px,
        radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210,202,171,0) 17%),
        radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54,78,39,0) 17%),
        radial-gradient(circle at 100% 50%, #D2CAAB 16%, rgba(210,202,171,0) 17%) 50px 50px,
        radial-gradient(circle at 0% 50%, #364E27 16%, rgba(54,78,39,0) 17%) 50px 50px;
        background-color:#63773F;
        background-size:100px 100px;`,
      accent: "--fc-color-green",
    },
    {
      name: "Brady Bunch",
      code: `background-image:
        radial-gradient(closest-side, transparent 0%, transparent 75%, #B6CC66 76%, #B6CC66 85%, #EDFFDB 86%, #EDFFDB 94%, #FFFFFF 95%, #FFFFFF 103%, #D9E6A7 104%, #D9E6A7 112%, #798B3C 113%, #798B3C 121%, #FFFFFF 122%, #FFFFFF 130%, #E0EAD7 131%, #E0EAD7 140%),
        radial-gradient(closest-side, transparent 0%, transparent 75%, #B6CC66 76%, #B6CC66 85%, #EDFFDB 86%, #EDFFDB 94%, #FFFFFF 95%, #FFFFFF 103%, #D9E6A7 104%, #D9E6A7 112%, #798B3C 113%, #798B3C 121%, #FFFFFF 122%, #FFFFFF 130%, #E0EAD7 131%, #E0EAD7 140%);
        background-size: 110px 110px;
        background-color: #C8D3A7;
        background-position: 0 0, 55px 55px;`,
      accent: "--fc-color-green",
    },
    {
      name: "Argyle",
      code: `background-color: #6d695c;
        background-image:
        repeating-linear-gradient(120deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
        repeating-linear-gradient(60deg, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 1px, transparent 60px),
        linear-gradient(60deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1)),
        linear-gradient(120deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 75%, rgba(0,0,0,.1));
        background-size: 70px 120px;`,
      accent: "--fc-color-brown-dark",
    },
    {
      name: "Stairs",
      code: `background-color: #FF7D9D;
        background-size: 58px 58px;
        background-position: 0px 2px, 4px 35px, 29px 31px, 33px 6px,
        0px 36px, 4px 2px, 29px 6px, 33px 30px;
        background-image:
        linear-gradient(335deg, #C90032 23px, transparent 23px),
        linear-gradient(155deg, #C90032 23px, transparent 23px),
        linear-gradient(335deg, #C90032 23px, transparent 23px),
        linear-gradient(155deg, #C90032 23px, transparent 23px),

        linear-gradient(335deg, #C90032 10px, transparent 10px),
        linear-gradient(155deg, #C90032 10px, transparent 10px),
        linear-gradient(335deg, #C90032 10px, transparent 10px),
        linear-gradient(155deg, #C90032 10px, transparent 10px);`,
      accent: "--fc-color-red",
    },
    {
      name: "Shippo",
      code: `background-color:#def;
        background-image: radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%),
        radial-gradient(closest-side, transparent 98%, rgba(0,0,0,.3) 99%);
        background-size:80px 80px;
        background-position:0 0, 40px 40px;`,
      accent: "--fc-color-white-dark",
    },
    {
      name: "Japanese Cube",
      code: `background-color:#556;
        background-image: linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
        linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
        linear-gradient(30deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
        linear-gradient(150deg, #445 12%, transparent 12.5%, transparent 87%, #445 87.5%, #445),
        linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a),
        linear-gradient(60deg, #99a 25%, transparent 25.5%, transparent 75%, #99a 75%, #99a);
        background-size:80px 140px;
        background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;`,
      accent: "--fc-color-white-dark",
    },
    {
      name: "Polka Dot",
      code: `background-color:#001;
        background-image: radial-gradient(white 15%, transparent 16%),
        radial-gradient(white 15%, transparent 16%);
        background-size: 60px 60px;
        background-position: 0 0, 30px 30px;`,
      accent: "--fc-color-black-dark",
    },
    {
      name: "Houndstooth",
      code: `background:
        linear-gradient(-45deg, white 25%, transparent 25%, transparent 75%, black 75%, black) 0 0,
        linear-gradient(-45deg, black 25%, transparent 25%, transparent 75%, white 75%, white) 1em 1em,
        linear-gradient(45deg, black 17%, transparent 17%, transparent 25%, black 25%, black 36%, transparent 36%, transparent 64%, black 64%, black 75%, transparent 75%, transparent 83%, black 83%) 1em 1em;
        background-color: white;
        background-size: 2em 2em;`,
      accent: "--fc-color-black-dark",
    },
    {
      name: "Tartan",
      code: `background-color: hsl(2, 57%, 40%);
        background-image: repeating-linear-gradient(transparent, transparent 50px, rgba(0,0,0,.4) 50px, rgba(0,0,0,.4) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),
        repeating-linear-gradient(270deg, transparent, transparent 50px, rgba(0,0,0,.4) 50px, rgba(0,0,0,.4) 53px, transparent 53px, transparent 63px, rgba(0,0,0,.4) 63px, rgba(0,0,0,.4) 66px, transparent 66px, transparent 116px, rgba(0,0,0,.5) 116px, rgba(0,0,0,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(0,0,0,.5) 169px, rgba(0,0,0,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(0,0,0,.5) 182px, rgba(0,0,0,.5) 232px, transparent 232px),
        repeating-linear-gradient(125deg, transparent, transparent 2px, rgba(0,0,0,.2) 2px, rgba(0,0,0,.2) 3px, transparent 3px, transparent 5px, rgba(0,0,0,.2) 5px);`,
      accent: "--fc-color-red",
    },
    {
      name: "Madras",
      code: `background-color: hsl(34, 53%, 82%);
        background-image: repeating-linear-gradient(45deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px,
          hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px,
          hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px,
          hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px,
          hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px,
          hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 120px, hsla(197, 62%, 11%, 0.5) 120px, hsla(197, 62%, 11%, 0.5) 140px
          ),
        repeating-linear-gradient(135deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px,
          hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px,
          hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px,
          hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px,
          hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px,
          hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 140px, hsla(197, 62%, 11%, 0.5) 140px, hsla(197, 62%, 11%, 0.5) 160px
        );`,
      accent: "--fc-color-tan-dark",
    },
    {
      name: "Tablecloth",
      code: `background-color:white;
        background-image: linear-gradient(90deg, rgba(200,0,0,.5) 50%, transparent 50%),
        linear-gradient(rgba(200,0,0,.5) 50%, transparent 50%);
        background-size:50px 50px;`,
      accent: "--fc-color-red",
    },
    {
      name: "Cicada Stripes",
      code: `background-color: #026873;
        background-image: linear-gradient(90deg, rgba(255,255,255,.07) 50%, transparent 50%),
        linear-gradient(90deg, rgba(255,255,255,.13) 50%, transparent 50%),
        linear-gradient(90deg, transparent 50%, rgba(255,255,255,.17) 50%),
        linear-gradient(90deg, transparent 50%, rgba(255,255,255,.19) 50%);
        background-size: 13px, 29px, 37px, 53px;`,
      accent: "--fc-color-blue-light",
    },
    {
      name: "Cross Dots",
      code: `background:
            radial-gradient(black 3px, transparent 4px),
            radial-gradient(black 3px, transparent 4px),
            linear-gradient(#fff 4px, transparent 0),
            linear-gradient(45deg, transparent 74px, transparent 75px, #a4a4a4 75px, #a4a4a4 76px, transparent 77px, transparent 109px),
            linear-gradient(-45deg, transparent 75px, transparent 76px, #a4a4a4 76px, #a4a4a4 77px, transparent 78px, transparent 109px),
            #fff;
            background-size: 109px 109px, 109px 109px,100% 6px, 109px 109px, 109px 109px;
            background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;`,
      accent: "--fc-color-black-dark",
    },
    {
      name: "Christmas Trees",
      code: `--s: 75px; /* control the size */

          --_c: #0000, #fff 1deg 79deg, #0000 81deg;
          --g0: conic-gradient(from 140deg at 50% 87.5%, var(--_c));
          --g1: conic-gradient(from 140deg at 50% 81.25%, var(--_c));
          --g2: conic-gradient(from 140deg at 50% 75%, var(--_c));
          --g3: conic-gradient(at 10% 20%, #0000 75%, #fff 0);
          background: var(--g0) 0 calc(var(--s) / -4),
            var(--g0) var(--s) calc(3 * var(--s) / 4), var(--g1),
            var(--g1) var(--s) var(--s), var(--g2) 0 calc(var(--s) / 4),
            var(--g2) var(--s) calc(5 * var(--s) / 4),
            var(--g3) calc(var(--s) / -10) var(--s),
            var(--g3) calc(9 * var(--s) / 10) calc(2 * var(--s)),
            repeating-conic-gradient(from 45deg, #a31e39 0 25%, #31570e 0 50%);
          background-size: calc(2 * var(--s)) calc(2 * var(--s));`,
      accent: "--fc-color-red",
    },
  ],
  fonts: [
    {
      name: "Default",
      code: `font-family: "Google Sans Text", sans-serif;`,
    },
    {
      name: "8-Bit",
      code: `font-family: "Pixelon", sans-serif;`,
    },
    {
      name: "Monospace",
      code: `font-family: "Google Sans Code", monospace;`,
    },
  ],
  elementPageIdMap: {
    gamePlayer: "app.gamePlayer.page",
    videoPlayer: "app.videoPlayer.page",
    loader: "app.loaderScreen",
    auth: "app.authScreen.page",
    home: "app.homeScreen.page",
    games: "app.gamesScreen.page",
    game: "app.gameScreen.page",
    minecraft: "app.minecraftScreen.page",
    chat: "app.chat.page",
    videos: "app.videos.page",
    video: "app.video.page",
    users: "app.users.page",
    user: "app.user.page",
    account: "app.account.page",
    content: "app.content.page",
    admin: "app.admin.page",
    settings: "app.settings.page",
    help: "app.help.page",
  },
  pageCards: [
    {
      title: "Games",
      icon: "sports_esports",
      description: "View, play and discover new games.",
    },
    {
      title: "Apps",
      icon: "apps",
      description: "View and use apps.",
    },
    {
      title: "Minecraft",
      icon: "deployed_code",
      description:
        "View, play and add Minecraft versions, mods, worlds and more.",
    },
    {
      title: "Chat",
      icon: "forum",
      description: "Chat with other users or generative AI.",
      requiresAccount: true,
    },
    {
      title: "Videos",
      icon: "video_library",
      description: "Watch and discover new videos.",
    },
    {
      title: "Users",
      icon: "people",
      description: "See all users.",
    },
    {
      title: "Account",
      icon: "account_circle",
      description: "Manage your account.",
      requiresAccount: true,
    },
    {
      title: "Content",
      icon: "library_books",
      description: "Manage your content.",
      requiresAccount: true,
    },
    {
      title: "Admin",
      icon: "shield",
      description: "Manage the site.",
      isDashboard: true,
      requiresAccount: true,
    },
    {
      title: "Settings",
      icon: "settings",
      description: "Manage the site settings.",
    },
    {
      title: "Plugins",
      icon: "extension",
      description: "Manage installed plugins.",
    },
    {
      title: "Help",
      icon: "help",
      description: "View help articles and other information about Chillnet.",
    },
  ],
  dialogElement: {
    panelId: "app.dialog",
    optionsContainerId: "app.dialog.optionsContainer",
    contentContainerId: "app.dialog.contentContainer",
  },
  pages: [
    {
      name: "Loader",
      id: "app.loaderScreen",
      builtin: true,
    },
    {
      name: "Auth",
      id: "app.authScreen.page",
      builtin: true,
    },
    {
      name: "Home",
      id: "app.homeScreen.page",
      builtin: true,
    },
    {
      name: "Games",
      id: "app.gamesScreen.page",
      subpages: [
        {
          name: "New Releases",
          id: "app.gamesScreen.page.newReleases.boxedContent",
          btn: "app.gamesScreen.page.newReleases.btn",
        },
        {
          name: "Search Games",
          id: "app.gamesScreen.page.searchGames.boxedContent",
          btn: "app.gamesScreen.page.searchGames.btn",
        },
        {
          name: "Saved Games",
          id: "app.gamesScreen.page.savedGames.boxedContent",
          btn: "app.gamesScreen.page.savedGames.btn",
        },
        {
          name: "History",
          id: "app.gamesScreen.page.history.boxedContent",
          btn: "app.gamesScreen.page.history.btn",
        },
        {
          name: "Currently Playing",
          id: "app.gamesScreen.page.currentlyPlaying.boxedContent",
          btn: "app.gamesScreen.page.currentlyPlaying.btn",
        },
      ],
      builtin: true,
    },
    {
      name: "Game",
      id: "app.gameScreen.page",
      builtin: true,
    },
    {
      name: "Apps",
      id: "app.appsScreen.page",
      builtin: true,
    },
    {
      name: "App",
      id: "app.appScreen.page",
      builtin: true,
    },
    {
      name: "Minecraft",
      id: "app.minecraftScreen.page",
      subpages: [
        {
          name: "Versions",
          id: "app.minecraftScreen.page.versions.boxedContent",
          btn: "app.minecraftScreen.page.versions.btn",
        },
        {
          name: "Mods",
          id: "app.minecraftScreen.page.mods.boxedContent",
          btn: "app.minecraftScreen.page.mods.btn",
        },
        {
          name: "Worlds",
          id: "app.minecraftScreen.page.worlds.boxedContent",
          btn: "app.minecraftScreen.page.worlds.btn",
        },
        {
          name: "Resource Packs",
          id: "app.minecraftScreen.page.resourcePacks.boxedContent",
          btn: "app.minecraftScreen.page.resourcePacks.btn",
        },
      ],
      builtin: true,
    },
    {
      name: "Chat",
      id: "app.chat.page",
      subpages: [
        {
          name: "With Users",
          id: "app.chat.page.withUsers.boxedContent",
          btn: "app.chat.page.withUsers.btn",
        },
        {
          name: "With AI",
          id: "app.chat.page.ai.boxedContent",
          btn: "app.chat.page.ai.btn",
        },
      ],
      builtin: true,
    },
    {
      name: "Videos",
      id: "app.videos.page",
      subpages: [
        {
          name: "All Videos",
          id: "app.videos.page.allVideos",
          btn: "app.videos.page.allVideos.btn",
        },
        {
          name: "History",
          id: "app.videos.page.history",
          btn: "app.videos.page.history.btn",
        },
        {
          name: "Currently Playing",
          id: "app.videos.page.currentlyPlaying",
          btn: "app.videos.page.currentlyPlaying.btn",
        },
      ],
      builtin: true,
    },
    {
      name: "Users",
      id: "app.users.page",
      builtin: true,
    },
    {
      name: "User",
      id: "app.user.page",
      subpages: [
        {
          name: "Info",
          id: "app.user.page.info",
          btn: "app.user.page.info.btn",
        },
        {
          name: "Videos",
          id: "app.user.page.videos",
          btn: "app.user.page.videos.btn",
        },
      ],
      builtin: true,
    },
    {
      name: "Account",
      id: "app.account.page",
      builtin: true,
    },
    {
      name: "Content",
      id: "app.content.page",
      subpages: [
        {
          name: "Videos",
          id: "app.content.page.videos.boxedContent",
          btn: "app.content.page.videos.btn",
        },
        {
          name: "New Video",
          id: "app.content.page.newVideo.boxedContent",
          btn: "app.content.page.newVideo.btn",
        },
      ],
      builtin: true,
    },
    {
      name: "Admin",
      id: "app.admin.page",
      subpages: [
        {
          name: "Users",
          id: "app.admin.page.users",
          btn: "app.admin.page.users.btn",
        },
        {
          name: "Videos",
          id: "app.admin.page.videos",
          btn: "app.admin.page.videos.btn",
        },
      ],
      builtin: true,
    },
    {
      name: "Settings",
      id: "app.settings.page",
      builtin: true,
    },
    {
      name: "Plugins",
      id: "app.plugins.page",
      builtin: true,
    },
    {
      name: "Help",
      id: "app.help.page",
      subpages: [
        {
          name: "About",
          id: "app.help.page.about",
          btn: "app.help.page.about.btn",
        },
        {
          name: "FAQ",
          id: "app.help.page.faq",
          btn: "app.help.page.faq.btn",
        },
        {
          name: "Changelog",
          id: "app.help.page.changelog",
          btn: "app.help.page.changelog.btn",
        },
      ],
      builtin: true,
    },
  ],
  customBorderlessPages: [],
  content: {
    games: [
      {
        title: "2048",
        description:
          "A simple and addictive puzzle game where you combine tiles to reach 2048.",
        photo: "/games/static/2048/meta/apple-touch-icon.png",
        link: "/games/static/2048/index.html",
        download: "/games/static/2048/2048.zip",
        genres: ["puzzle"],
        date: new Date("2025-06-09"),
        id: "1",
      },
      {
        title: "BitLife",
        description:
          "BitLife is a text-based game that lets you control a virtual character's life from birth to death. You can make choices that influence your career, relationships, education, crime, health, and more.",
        photo: "/games/static/bitlife/logo.png",
        link: "/games/static/bitlife/index.html",
        download: "/games/static/bitlife/bitlife.zip",
        genres: ["simulation", "text"],
        date: new Date("2025-6-11"),
        id: "2",
      },
      {
        title: "0hh1",
        description: `
                            0h h1 is a little logic game that follows three simple rules:<br>
                            <br>
                            - Three red tiles or three blue tiles next to each other in a row or column isn't allowed<br>
                            - A full row or column must have as many blue tiles as it has red ones.<br>
                            - No two rows are the same. No two columns either.<br>
                            <br>
                            It's up to you to complete the grid without ever having to guess. Simply tap a tile to make it blue or red and complete the grid.`,
        photo: "/games/static/0hh1/img/icon-512.png",
        link: "/games/static/0hh1/index.htm",
        download: "/games/static/0hh1/0hh1.zip",
        genres: ["puzzle"],
        date: new Date("2025-6-18"),
        id: "3",
      },
      {
        title: "2048 (rigged)",
        description: "Basically 2048 but buffed.",
        photo: "/games/static/2048 (rigged)/meta/apple-touch-icon.png",
        link: "/games/static/2048 (rigged)/index.htm",
        download: "/games/static/2048 (rigged)/2048 (rigged).zip",
        genres: ["puzzle"],
        date: new Date("2025-6-18"),
        id: "4",
      },
      {
        title: "Astray",
        description: "A WebGL maze game built with Three.js and Box2dWeb.",
        photo: "/games/static/Astray/ball.png",
        link: "/games/static/Astray/index.htm",
        download: "/games/static/Astray/Astray.zip",
        notes: ["May run very slow on some devices."],
        genres: ["puzzle", "maze"],
        date: new Date("2025-6-18"),
        id: "5",
      },
      {
        title: "Hextris",
        description: "Fast paced HTML5 puzzle game inspired by Tetris!",
        photo: "/games/static/Hextris/images/icons/maskable-512.png",
        link: "/games/static/Hextris/index.htm",
        download: "/games/static/Hextris/Hextris.zip",
        genres: ["puzzle"],
        date: new Date("2025-6-18"),
        id: "6",
      },
      {
        title: "Snake",
        description: "The classic Snake game.",
        photo: "/games/static/Snake/icon.png",
        link: "/games/static/Snake/index.htm",
        download: "/games/static/Snake/Snake.zip",
        genres: ["arcade", "classic"],
        date: new Date("2025-6-18"),
        id: "7",
      },
      {
        title: "Swap!",
        description: `
                            Swap is a new take on the classic tile-based puzzle game.<br>
                            <br>
                            <strong>Change<strong> which character you're controlling to reach your goal -- 
                             but be careful, as characters you're not controlling will often 
                             have a mind of their own! Progress through a multitude of tricky 
                             and challenging levels, and watch as that death count piles up. 
                             If you're stuck, you can always hit the 'skip' button to move on, 
                             or the 'reset' button to start the level over.
                        `,
        photo: "/games/static/Swap!/thumbnail.png",
        link: "/games/static/Swap!/index.htm",
        download: "/games/static/Swap!/Swap!.zip",
        genres: ["puzzle", "platformer"],
        date: new Date("2025-6-18"),
        id: "8",
      },
      {
        title: "TapTapTap",
        description: "Open source tapping game built with Javascript",
        photo: "/games/static/Tap! Tap! Tap!/image.png",
        link: "/games/static/Tap! Tap! Tap!/index.htm",
        download: "static/Tap! Tap! Tap!/Tap! Tap! Tap!.zip",
        genres: ["arcade", "casual", "clicker"],
        date: new Date("2025-6-18"),
        id: "9",
      },
      {
        title: "tether!",
        description: `
                            <strong>tether!</strong> is game where you wreck as many enemies
                             as possible using your tether, however if an enemy touches your
                             ball then you get obliterated! This game has full mobile and
                             offline support, designed as a progressive web application!
                        `,
        photo: "/games/static/tether!/icons/ms-icon-310x310.png",
        link: "/games/static/tether!/index.htm",
        download: "/games/static/tether!/tether!.zip",
        genres: ["arcade", "action"],
        date: new Date("2025-6-18"),
        id: "10",
      },
      {
        title: "Chrome Dino",
        description: "The Google Chrome dinosaur game.",
        link: "/games/static/Chrome Dino.htm",
        download: "/games/static/Chrome Dino.htm",
        genres: ["arcade", "endless", "runner"],
        date: new Date("2025-6-18"),
        id: "11",
      },
      {
        title: "Achievement Unlocked",
        description:
          "A platformer game where you unlock achievements by completing various tasks.",
        photo: "/games/static/achievementunlocked/achievementunlocked.png",
        link: "/games/static/achievementunlocked/index.html",
        genres: ["platformer", "puzzle", "meta"],
        date: new Date("2025-6-21"),
        id: "12",
      },
      {
        title: "Adrenaline Challenge",
        description:
          "Your objective is to collect all the tags and go to exit as fast as possible while avoiding to collide your head with any walls.",
        photo: "/games/static/adrenalinechallenge/adrenalinechallenge.jpg",
        link: "/games/static/adrenalinechallenge/index.html",
        genres: ["racing", "bike", "skill"],
        date: new Date("2025-6-21"),
        id: "13",
      },
      {
        title: "Avalanche!",
        description:
          "Avalanche is a free platform puzzle game. Are you a towelette, or maybe a marshmallow? Whatever the case, there are huge, square bolts to dodge. Can you avoid this avalanche?",
        photo: "/games/static/avalanche/avalanche.png",
        link: "/games/static/avalanche/index.html",
        genres: ["platformer", "arcade", "puzzle"],
        date: new Date("2025-6-21"),
        id: "14",
      },
      {
        title: "Basketball Stars",
        description:
          "<strong>Basketball Stars</strong> is a <strong>basketball</strong> game where you join in thrilling matches right on your device. Choose your favorite legendary and kick off all opponents!",
        photo:
          "/games/static/basketball-stars/assets/images/basketball-stars.png",
        link: "/games/static/basketball-stars/index.html",
        genres: ["sports", "basketball", "multiplayer"],
        date: new Date("2025-6-21"),
        id: "15",
      },
      {
        title: "Battle for Gondor",
        description:
          "Do you have what it takes to save <strong>Gondor</strong> and Middle Earth? Take part in 20 epic <strong>battles</strong> to defeat the orcs once and for all. Use troops such as archers, dwarves, knights, priests, gryphons and even Gandalf!",
        photo: "/games/static/battleforgondor/3557.jpg",
        link: "/games/static/battleforgondor/index.html",
        genres: ["strategy", "war", "fantasy"],
        date: new Date("2025-6-21"),
        id: "16",
      },
      {
        title: "Big Red Button",
        description: "You shall not press the big red button! Or will you?",
        photo: "/games/static/bigredbutton/bigredbutton.png",
        link: "/games/static/bigredbutton/index.html",
        genres: ["casual", "humor"],
        date: new Date("2025-6-21"),
        id: "17",
      },
      {
        title: "Black Knight",
        description:
          "The Black Knight is a free platformer game. Inside birds there are coins--who knew? Smash them and grab the money, along with the peasants and shops. Can you grab enough gold to appease the king?",
        photo: "/games/static/blackknight/blackknight.png",
        link: "/games/static/blackknight/index.html",
        genres: ["platformer", "action", "arcade"],
        date: new Date("2025-6-21"),
        id: "18",
      },
      {
        title: "Bloons Tower Defense",
        description:
          "Bloons Tower Defense is a free tower defense game. Place your towers and pop the bloons before they reach the end of the track.",
        photo: "/games/static/bloonstd/bloonstd.jpg",
        link: "/games/static/bloonstd/index.html",
        genres: ["strategy", "tower-defense"],
        date: new Date("2025-6-21"),
        id: "19",
      },
      {
        title: "Bloons Tower Defense 2",
        description:
          "Bloons Tower Defense 2 is a free tower defense game. Place your towers and pop the bloons before they reach the end of the track.",
        photo: "/games/static/bloonstd2/bloonstd2.png",
        link: "/games/static/bloonstd2/index.html",
        genres: ["strategy", "tower-defense"],
        date: new Date("2025-6-21"),
        id: "20",
      },
      {
        title: "Bloxorz",
        description:
          "Bloxorz is a free puzzle game. Your goal is to get the block to the end of the level by moving it around and flipping it over.",
        // Note: Wile importing games this game's folder is named "bloxors" instead of "bloxorz".
        photo: "/games/static/bloxors/block.png",
        link: "/games/static/bloxors/index.html",
        genres: ["puzzle", "logic"],
        date: new Date("2025-6-21"),
        id: "21",
      },
      {
        title: "Boxhead 2Play",
        description:
          "Boxhead 2Play is a free top-down shooter game. Fight against zombies and other players in various game modes.",
        photo: "/games/static/boxhead2play/boxhead2play.jpg",
        link: "/games/static/boxhead2play/index.html",
        genres: ["shooter", "zombie", "multiplayer"],
        date: new Date("2025-6-21"),
        id: "22",
      },
      {
        title: "Breaking The Bank",
        description:
          "Breaking The Bank is the first installment of the Henry Stickmin series. In this game, you play as Henry Stickmin, a stick figure who is trying to break into a bank.",
        photo: "/games/static/breakingthebank/breakingthebank.png",
        link: "/games/static/breakingthebank/index.html",
        genres: ["adventure", "interactive-fiction", "humor"],
        date: new Date("2025-6-21"),
        id: "23",
      },
      {
        title: "Cannon Basketball 4",
        description:
          "Cannon Basketball 4 is a free physics-based puzzle game. Use your cannon to shoot the basketball into the hoop.",
        photo: "/games/static/cannon-basketball-4/img/splash.png",
        link: "/games/static/cannon-basketball-4/index.html",
        genres: ["puzzle", "sports", "physics"],
        date: new Date("2025-6-21"),
        id: "24",
      },
      {
        title: "Canyon Defense",
        description: `In the world of Canyon Defense game, there's a peaceful town beside a winding canyon. But there's a problem! On the other side of the canyon, there are enemies who want to invade the town. Luckily, you're here to save the day! It's up to you to build towers and keep those enemies far away from the town's gates.
                        <br><br>
                        Your big job is to create the ultimate defense system. Make sure to hold strong until the very last wave of enemies, ensuring they never reach your base.`,
        photo: "/games/static/canyondefense/canyondefense.png",
        link: "/games/static/canyondefense/index.html",
        genres: ["strategy", "tower-defense"],
        date: new Date("2025-6-21"),
        id: "25",
      },
      {
        title: "Cell Machine",
        description: `Arrange cells. Build machines. Destroy enemies.
                        <br><br>
                        Each cell on its own has a simple function, like moving or spawning other cells. But when combined, more interesting behavior emerges...`,
        photo: "/games/static/cell-machine/img/icon.png",
        banner: "/games/static/cell-machine/img/te9nDu.png",
        link: "/games/static/cell-machine/index.html",
        genres: ["puzzle", "simulation", "sandbox"],
        date: new Date("2025-6-21"),
        id: "26",
      },
      {
        title: "Champion Archer",
        description:
          "Champion Archer is a free stick game. Your life depends on your aim with arrows. Will you be able to slay enough stick soldiers to grab the illustrious quick shot?",
        photo: "/games/static/championarcher/championarcher.png",
        link: "/games/static/championarcher/index.html",
        genres: ["action", "archery", "stickman"],
        date: new Date("2025-6-21"),
        id: "27",
      },
      {
        title: "CircloO",
        description:
          "CircloO is a puzzle game, where you control a ball within a large circle. You have to roll the ball around the circle to complete the level. In circloO, you must use momentum to fight the forces of gravity.",
        photo: "/games/static/circlo/img/download.png",
        link: "/games/static/circlo/index.html",
        download: "/games/static/circlo/circlo.zip",
        genres: ["puzzle", "physics"],
        date: new Date("2025-6-21"),
        id: "28",
      },
      {
        title: "Connect 3",
        description:
          "Connect 3 is a simple and relaxing puzzle game. Your goal is to connect three or more tiles of the same color to clear them from the board.",
        photo: "/games/static/connect3/connect3.png",
        link: "/games/static/connect3/index.html",
        download: "/games/static/connect3/connect3.zip",
        genres: ["puzzle", "match-3"],
        date: new Date("2025-6-21"),
        id: "29",
      },
      {
        title: "Cookie Clicker",
        description:
          "Cookie Clicker is a free incremental game. Your goal is to bake as many cookies as possible by clicking on the cookie and buying upgrades.",
        photo: "/games/static/cookie-clicker/cookie1.jpeg",
        link: "/games/static/cookie-clicker/index.html",
        download: "/games/static/cookie-clicker/cookie-clicker.zip",
        genres: ["idle", "incremental", "clicker"],
        date: new Date("2025-6-21"),
        id: "30",
      },
      {
        title: "Creative Kill Chamber",
        description:
          "Creative Kill Chamber is a fun point-and-click stickman adventure game that involves escaping from a chamber full of armed enemies. Eliminate all of the soldiers and make your escape!",
        photo: "/games/static/creativekillchamber/creativekillchamber.jpg",
        link: "/games/static/creativekillchamber/index.html",
        genres: ["adventure", "action", "stickman"],
        date: new Date("2025-6-22"),
        id: "31",
      },
      {
        title: "CS:GO Clicker",
        description:
          "Welcome to CSGO Clicker, the most realistic CS:GO case opening simulator that lets you experience the thrill of unboxing rare skins without spending real money. Test your luck and strategy in a risk-free environment!",
        photo: "/games/static/csgo-clicker/images/case1.png",
        banner: "/games/static/csgo-clicker/images/sunburst.png",
        link: "/games/static/csgo-clicker/index.html",
        genres: ["simulation", "clicker", "idle"],
        date: new Date("2025-6-22"),
        id: "32",
      },
      {
        title: "Cut The Rope",
        description:
          "Cut the Rope to feed large pieces of candy to a hungry creature called Om Nom. Collect all the stars for the highest rating and progress to more challenging levels with new puzzles.",
        photo: "/games/static/ctr/logo.png",
        link: "/games/static/ctr/index.html",
        genres: ["puzzle", "physics"],
        date: new Date("2025-6-22"),
        id: "33",
      },
      {
        title: "Cut The Rope: Holiday",
        description:
          "Cut the Rope: Holiday is a festive version of the original Cut the Rope game. Help Om Nom collect candy during the holiday season by cutting ropes and solving puzzles.",
        photo: "/games/static/ctr-holiday/Holiday_Gift.webp",
        link: "/games/static/ctr-holiday/index.html",
        genres: ["puzzle", "physics", "holiday"],
        date: new Date("2025-6-22"),
        id: "34",
      },
      {
        title: "Cut The Rope: Time Travel",
        description:
          "Cut the Rope: Time Travel is a time-traveling adventure where you help Om Nom collect candy from different historical periods by cutting ropes and solving puzzles.",
        photo: "/games/static/ctr-tr/logo.png",
        link: "/games/static/ctr-tr/index.html",
        genres: ["puzzle", "physics", "adventure"],
        date: new Date("2025-6-22"),
        id: "35",
      },
      {
        title: "Cubefield",
        description:
          "Cubefield is a free endless runner game. Your goal is to navigate through a field of cubes without crashing into them.",
        photo: "/games/static/cubefield/cubefield.jpg",
        link: "/games/static/cubefield/index.html",
        genres: ["arcade", "endless", "runner"],
        date: new Date("2025-6-22"),
        id: "36",
      },
      {
        title: "Deal Or No Deal",
        description:
          "Deal Or No Deal is a game based on the popular TV show. Your goal is to open boxes and try to get the best deal possible.",
        photo: "/games/static/deal-or-no-deal/index.jpg",
        link: "/games/static/deal-or-no-deal/index.html",
        genres: ["chance", "simulation", "casual"],
        date: new Date("2025-6-22"),
        id: "37",
      },
      {
        title: "Death Run 3D",
        description:
          "Death Run 3D is an endless 3D platformer game. Your goal is to run through the levels and avoid obstacles for as long as possible.",
        photo: "/games/static/death-run-3d/img/death.png",
        link: "/games/static/death-run-3d/index.html",
        genres: ["arcade", "endless", "runner", "3d"],
        date: new Date("2025-6-22"),
        id: "38",
      },
      {
        title: "Defend The Tank",
        description:
          "Control a team of tough soldiers. Drag and drop soldiers to place them at strategic positions on the tank. Keep the tank alive at all costs. Rotate your soldiers to inflict maximum damage on the enemy. Heal your tanks with mechanic soldiers. Collect coins to upgrade your tank after each battle. Unlock special soldier classes.",
        photo: "/games/static/defend-the-tank/images/game.jpg",
        link: "/games/static/defend-the-tank/index.html",
        genres: ["strategy", "defense", "action"],
        date: new Date("2025-6-22"),
        id: "39",
      },
      {
        title: "Draw The Hill",
        description:
          "Click and drag to draw a path for your car. Grab coins to upgrade your car and avoid the pipes along the way!",
        photo: "/games/static/draw-the-hill/icons/icon-512.png",
        link: "/games/static/draw-the-hill/index.html",
        genres: ["arcade", "drawing", "racing"],
        date: new Date("2025-6-22"),
        id: "40",
      },
      {
        title: "Duck Life 3",
        description:
          "Breed genetically modified ducks to race in competitions! First, you will choose an egg. Each duck begins with unique running, swimming, climbing, and flying skills. Compete in amateur, advanced, and professional leagues. Train before each race to ensure a swift victory!",
        photo: "/games/static/ducklife3/duck.png",
        link: "/games/static/ducklife3/index.html",
        genres: ["racing", "simulation", "animal"],
        date: new Date("2025-6-22"),
        id: "41",
      },
      {
        title: "Edge Not Found",
        description:
          "Edge Not Found is a Sokoban-style puzzle game set on an infinitely repeating grid. There are 20+ puzzles and they can get pretty tricky.",
        photo: "/games/static/edgenotfound/edge.png",
        link: "/games/static/edgenotfound/index.html",
        genres: ["puzzle", "logic", "sokoban"],
        date: new Date("2025-6-22"),
        id: "42",
      },
      {
        title: "Endless War 3",
        description:
          "Endless War 3, a free online Action game brought to you by Armor Games. Protect your hero against waves of enemies in this tactical combat sim.",
        photo: "/games/static/endlesswar3/endlesswar3.png",
        link: "/games/static/endlesswar3/index.html",
        genres: ["action", "strategy", "war"],
        date: new Date("2025-6-22"),
        id: "43",
      },
      {
        title: "Evil Glitch",
        description:
          "Evil Glitch is a 2D arcade shooting game with retro aesthetics inspired by 80’s media, featuring an universe and plot line based on Sacred Geometry. Survive from swarm of enemies. How long can you last?",
        photo: "/games/static/evil-glitch/icon.jpeg",
        link: "/games/static/evil-glitch/index.html",
        genres: ["arcade", "shooter", "retro"],
        date: new Date("2025-6-22"),
        id: "44",
      },
      {
        title: "Exo",
        description:
          "Exo is a space-based tower defense game created by Jack Oatley and ai Doge for the js13kGames competition in 20181. In this game, you build satellites and stations around planets orbiting a distant star to survive waves of enemies1. The unique challenge of the js13kGames competition is to create a game using only 13 kilobytes of JavaScript, making “Exo” an impressive feat of game development.",
        photo: "/games/static/exo/img/small.jpg",
        link: "/games/static/exo/index.html",
        download: "/games/static/exo/exo.zip",
        genres: ["strategy", "tower-defense", "space"],
        date: new Date("2025-6-22"),
        id: "45",
      },
      {
        title: "Factory Balls",
        description:
          "Factory Balls is a free puzzle game. Your goal is to create the specified ball by combining different colors and patterns.",
        photo: "/games/static/factoryballs/images/splash.png",
        link: "/games/static/factoryballs/index.html",
        genres: ["puzzle", "logic"],
        date: new Date("2025-6-22"),
        id: "46",
      },
      {
        title: "Flappy Bird",
        description:
          "Flappy Bird is a free endless runner game. Your goal is to navigate through pipes without hitting them.",
        photo: "/games/static/flappy-bird/assets/thumb.png",
        banner: "/games/static/flappy-bird/assets/sky.png",
        link: "/games/static/flappy-bird/index.html",
        genres: ["arcade", "endless", "runner"],
        date: new Date("2025-6-22"),
        id: "47",
      },
      {
        title: "Flash Tetris",
        description:
          "The classic game of Tetris, now in Flash! Rotate and place falling blocks to create complete lines.",
        photo: "/games/static/flashtetris/flashtetris.png",
        link: "/games/static/flashtetris/index.html",
        genres: ["puzzle", "classic"],
        date: new Date("2025-6-22"),
        id: "48",
      },
      {
        title: "Game Inside a Game Inside a Game Inside a Game Inside a Game",
        description:
          "This is a puzzle platformer where players navigate through levels that involve a game within a game mechanic, starting with simple tasks and progressing to more complex challenges.",
        photo: "/games/static/game-inside/img/display.png",
        banner: "/games/static/game-inside/img/display.png",
        link: "/games/static/game-inside/index.html",
        genres: ["platformer", "puzzle", "meta"],
        date: new Date("2025-6-22"),
        id: "49",
      },
      {
        title: "Geometry Dash (Scratch ver.)",
        description:
          "Geometry Dash is a rhythm-based platformer game with various modes, levels, and features. Learn how to play, what makes it challenging and addictive, and how to customize your character and music.",
        photo: "/games/static/geodash/geoscratchicon.png",
        link: "/games/static/geodash/index.html",
        genres: ["platformer", "rhythm", "arcade"],
        date: new Date("2025-6-22"),
        id: "50",
      },
      {
        title: "Getaway Shootout",
        description:
          "In Getaway Shootout you race three others to the extraction point. This is no ordinary race however, as you can only jump your way to the finish line. Try out-jumping the computer, or one of your friends in this two-player game.",
        photo: "/games/static/getaway-shootout/img/index.jpg",
        link: "/games/static/getaway-shootout/index.html",
        genres: ["multiplayer", "racing", "action"],
        date: new Date("2025-6-22"),
        id: "51",
      },
      {
        title: "Gimme The Airpod",
        description:
          "A game where you fight your brother with an axe to get your airpod back. Features 15 arenas, 8 colors, realistic axe physics and flavortext.",
        photo: "/games/static/gimme-the-airpod/img/logo.png",
        link: "/games/static/gimme-the-airpod/index.html",
        genres: ["action", "fighting", "physics"],
        date: new Date("2025-6-22"),
        id: "52",
      },
      {
        title: "Glass City",
        description:
          "It's open world game where you can explore, use different fire-arms, kill puppets, destroy environment, pick up items (puppets, grenades) and just have fun.",
        photo: "/games/static/glass-city/image.png",
        banner: "/games/static/glass-city/banner.png",
        link: "/games/static/glass-city/index.html",
        genres: ["action", "sandbox", "shooter"],
        date: new Date("2025-6-22"),
        id: "53",
      },
      {
        title: "Hacker Type",
        description: `Hacker Type lets you type like a hacker and simulate coding on your screen. You can also trigger "Access Granted" or "Access Denied" messages with keyboard shortcuts.`,
        photo: "/games/static/hackertype/logo192.png",
        link: "/games/static/hackertype/index.html",
        genres: ["simulation", "casual", "typing"],
        date: new Date("2025-6-22"),
        id: "54",
      },
      {
        title: "Hover Bot Arena",
        description:
          "Complete all of the objectives, leaving only a pile of rubble behind.",
        photo: "/games/static/hba/hoverbotarena.jpg",
        link: "/games/static/hba/index.html",
        genres: ["action", "shooter", "arena"],
        date: new Date("2025-6-22"),
        id: "55",
      },
      {
        title: "Helicopter",
        description:
          "Helicopter is a flying game similar to Flappy Bird. Your goal is to navigate through obstacles as long as you can without crashing or hitting the ground.",
        photo: "/games/static/helicopter/helicopter.png",
        link: "/games/static/helicopter/index.html",
        genres: ["arcade", "endless", "flying"],
        date: new Date("2025-6-22"),
        id: "56",
      },
      {
        title: "Hex Empire",
        description:
          "Hex Empire is the action packed turn-based strategy game in which you will try and conquer all by domination of territory. You will start with a single nation, then your goal is to strategize and dominate the map by overruling countries attacking city by city with your armies and more importantly your winning tactics.",
        photo: "/games/static/hexempire/hexempire.jpg",
        link: "/games/static/hexempire/index.html",
        genres: ["strategy", "war", "turn-based"],
        date: new Date("2025-6-22"),
        id: "57",
      },
      {
        title: "HexGL",
        description:
          "HexGL is a futuristic racing game built by Thibaut Despoulain (BKcore) using HTML5, Javascript and WebGL. Challenge your friends on this fast-paced 3D game!",
        photo: "/games/static/HexGL/icon.png",
        banner: "/games/static/HexGL/textures/skybox/dawnclouds/px.jpg",
        link: "/games/static/HexGL/index.html",
        genres: ["racing", "3d", "futuristic"],
        date: new Date("2025-6-22"),
        id: "58",
      },
      {
        title: "Idle Breakout",
        description:
          "Idle Breakout is a brick breaking idle game where you must unlock and upgrades different types of balls which will destroy the bricks on your behalf!",
        photo: "/games/static/idle-breakout/img/thumbnail.png",
        link: "/games/static/idle-breakout/index.html",
        genres: ["idle", "incremental", "arcade"],
        date: new Date("2025-6-22"),
        id: "59",
      },
      {
        title: "Idle Shark",
        description:
          "You are a shark in a strange blue sea. You feel a bit hungry.",
        photo: "/games/static/idle-shark/img/sharkgame.png",
        banner: "/games/static/idle-shark/img/bg/bg-gate.png",
        link: "/games/static/idle-shark/index.html",
        genres: ["idle", "simulation", "animal"],
        date: new Date("2025-6-22"),
        id: "60",
      },
      {
        title: "Impossible Quiz",
        description:
          "The Impossible Quiz is an online quiz game that is… Almost impossible. The questions are all difficult to answer and require lateral thinking. There are 110 questions to get through and you only have three lives, so make sure you're ready to think creatively!",
        photo: "/games/static/impossiblequiz/impossiblequiz.png",
        link: "/games/static/impossiblequiz/index.html",
        genres: ["quiz", "puzzle", "trivia"],
        date: new Date("2025-6-22"),
        id: "61",
      },
      {
        title: "Interactive Buddy",
        description:
          "Interactive Buddy is an arcade game where you interact with your virtual buddy. For every interaction, you earn money to buy new weapons, skins, and more!",
        photo: "/games/static/interactivebuddy/interactivebuddy.jpg",
        link: "/games/static/interactivebuddy/index.html",
        genres: ["simulation", "sandbox", "arcade"],
        date: new Date("2025-6-22"),
        id: "62",
      },
      {
        title: "Just One Boss",
        description:
          "Just One Boss is a fun and challenging arcade game in which you have one aim - to defeat the boss! As the title suggests, you have only one boss to defeat, but this boss is difficult and cunning! You control a cute little blue slime ball and you must move around the playing field avoiding the boss's attacks. To damage the boss, you must move over the white tiles that appear.",
        photo: "/games/static/just-one-boss/pv1Gr5.png",
        link: "/games/static/just-one-boss/index.html",
        genres: ["arcade", "boss-fight", "action"],
        date: new Date("2025-6-22"),
        id: "63",
      },
      {
        title: "Learn To Fly",
        description:
          "Launch the penguin as far as you can, can you get all the upgrades? At first, it will be very hard, but you need to collect your first coins to buy upgrades. Then, you can slowly fly a longer distance, make more money, and buy all the upgrades. Prove that penguin can fly!",
        photo: "/games/static/learntofly/learntofly.png",
        link: "/games/static/learntofly/index.html",
        genres: ["arcade", "upgrade", "flying"],
        date: new Date("2025-6-22"),
        id: "64",
      },
      {
        title: "Mario (HTML ver.)",
        description: "The classic Super Mario game, recreated in HTML!",
        photo: "/games/static/mario/Theme/Mario.gif",
        link: "/games/static/mario/index.html",
        genres: ["platformer", "classic", "arcade"],
        date: new Date("2025-6-22"),
        id: "65",
      },
      {
        title: "Matrix Rampage",
        description:
          "The Matrix fans out there will have fun with this one. You play as Neo in this game, jumping to and from floors on buildings and killing agents along the way. Guns, swords, staffs, and pretty much everything else on the scenario can be used to get the job done.",
        photo: "/games/static/matrixrampage/matrixrampage.jpg",
        link: "/games/static/matrixrampage/index.html",
        genres: ["action", "fighting", "arcade"],
        date: new Date("2025-6-22"),
        id: "66",
      },
      {
        title: "Minesweeper",
        description: `Minesweeper is a logic puzzle video game genre generally played on personal computers. The game features a grid of clickable tiles, with hidden "mines" (depicted as naval mines in the original game) dispersed throughout the board. The objective is to clear the board without detonating any mines, with help from clues about the number of neighboring mines in each field.`,
        photo: "/games/static/minesweeper/img/minesweeper.png",
        link: "/games/static/minesweeper/index.html",
        genres: ["puzzle", "logic", "classic"],
        date: new Date("2025-6-22"),
        id: "67",
      },
      {
        title: "Mini-Putt",
        description:
          "Mini Putt is everyone's favorite crazy golf game from the Flash era. Tackle various mini-golf courses and check out your final score at the end. Compare the final results with your friends to decide who is the Mini Putt champion.",
        photo: "/games/static/miniputt/miniputt.png",
        link: "/games/static/miniputt/index.html",
        genres: ["sports", "golf", "classic"],
        date: new Date("2025-6-23"),
        id: "68",
      },
      {
        title: "Missiles",
        description: "Just a simple game about missiles, what could go wrong?",
        photo: "/games/static/missiles/miss.png",
        link: "/games/static/missiles/index.html",
        genres: ["arcade", "action", "avoidance"],
        date: new Date("2025-6-23"),
        id: "69",
      },
      {
        title: "Moto X3M",
        description:
          "Moto X3M brings awesome bike racing with beautifully crafted levels straight to your mobile. So grab your motorbike, strap on your helmet and grab some airtime over obstacles to beat the clock on amazing off road circuits.",
        photo: "/games/static/motox3m/splash.jpg",
        link: "/games/static/motox3m/index.html",
        genres: ["racing", "bike", "stunt"],
        date: new Date("2025-6-23"),
        id: "70",
      },
      {
        title: "Moto X3M: Pool Party",
        description:
          "It has a lot of the same elements as Moto X3M, just with a few twists and turns that make it a unique enough experience.",
        photo: "/games/static/motox3m-pool/splash.jpg",
        link: "/games/static/motox3m-pool/index.html",
        genres: ["racing", "bike", "stunt"],
        date: new Date("2025-6-23"),
        id: "71",
      },
      {
        title: "Moto X3M: Spooky Land",
        description:
          "Get on your bike and brave the dangers that await you, incredible jumps, looping, traps to avoid, deadly saws and whatnot will require your concentration at all times to not fall.",
        photo: "/games/static/motox3m-spooky/splash.jpeg",
        link: "/games/static/motox3m-spooky/index.html",
        genres: ["racing", "bike", "stunt", "halloween"],
        date: new Date("2025-6-23"),
        id: "72",
      },
      {
        title: "Moto X3M: Winter",
        description:
          "Play Moto X3M Winter, a realistic and fun motocross game with icy roads and snowy ways. Use your skills to win over the tricky routes and enjoy the stunning graphics and sound effects.",
        photo: "/games/static/motox3m-winter/download.jpeg",
        link: "/games/static/motox3m-winter/index.html",
        genres: ["racing", "bike", "stunt", "winter"],
        date: new Date("2025-6-23"),
        id: "73",
      },
      {
        title: "n-gon",
        description:
          "n-gon is a game that uses the matter.js physics engine to create dynamic and interactive levels. You can customize the settings, controls, and maps to test your skills and have fun.",
        photo: "/games/static/n-gon/bot.png",
        banner: "/games/static/n-gon/img/n-gonbot.png",
        link: "/games/static/n-gon/index.html",
        genres: ["physics", "platformer", "sandbox"],
        date: new Date("2025-6-24"),
        id: "74",
      },
      {
        title: "NS-SHAFT",
        description:
          "NS-Shaft is a simple Japanese game made by NAGI-P Soft. The object of the game is that the main character must go down (descend) as many floors (levels) as possible.",
        photo: "/games/static/ns-shaft/icon.png",
        banner: "/games/static/ns-shaft/bg.png",
        link: "/games/static/ns-shaft/index.html",
        genres: ["arcade", "endless", "platformer"],
        date: new Date("2025-6-24"),
        id: "75",
      },
      {
        title: "Pandemic 2",
        description:
          "In Pandemic 2, you need to manage a disease (including naming your own disease, like Coronavirus) with a goal to infect all the people in the world!",
        photo: "/games/static/pandemic2/pandemic2.png",
        link: "/games/static/pandemic2/index.html",
        genres: ["simulation", "strategy", "disease"],
        date: new Date("2025-6-24"),
        id: "76",
      },
      {
        title: "Papa's Pizzeria",
        description:
          "Papa Louie has left the pizzeria for a few days and needs your help. You are playing as Roy, Papa Louie's nephew. It is up to you, Roy, to take control of the pizzeria and keep things running smoothly. This means that you must take customers' orders, assemble the pizzas, and bake them to perfection.",
        photo: "/games/static/papaspizzaria/papaspizzaria.jpg",
        link: "/games/static/papaspizzaria/index.html",
        genres: ["simulation", "cooking", "time-management"],
        date: new Date("2025-6-24"),
        id: "77",
      },
      {
        title: "Paper.io 2",
        description:
          "Welcome to the next level of addictive and thrilling gameplay with Paper.io 2! Enter a colorful and dynamic world where strategy, skill, and cunning are your greatest allies. Prepare to embark on an epic journey of conquest as you strive to dominate the virtual realm and become the ultimate champion!",
        photo: "/games/static/paperio2/images/icon512.png",
        link: "/games/static/paperio2/index.html",
        genres: ["arcade", "multiplayer", "io"],
        date: new Date("2025-6-24"),
        id: "78",
      },
      {
        title: "Papery Planes",
        description:
          "Papery Planes is a skill-based online game where you must fly your paper plane as far as possible while avoiding obstacles and navigating changing weather conditions.",
        photo: "/games/static/papery-planes/splash.jpg",
        banner: "/games/static/papery-planes/screenshots/1.jpg",
        link: "/games/static/papery-planes/index.html",
        genres: ["arcade", "flying", "skill"],
        date: new Date("2025-6-24"),
        id: "79",
      },
      {
        title: "Particle Clicker",
        description:
          "An addictive incremental game that was made during the CERN Webfest 2014. It takes the player on a historic journey through modern particle physics.",
        photo: "/games/static/particle-clicker/assets/pc32@2x.png",
        banner: "/games/static/particle-clicker/assets/info/jpsi.png",
        link: "/games/static/particle-clicker/index.html",
        genres: ["idle", "incremental", "educational"],
        date: new Date("2025-6-24"),
        id: "80",
      },
      {
        title: "PolyBranch",
        description:
          "PolyBranch is a minimalist 3D game. Avoid the branches protruding from the walls as you fly through the tunnel. Dodging branches may seem easy at first, but how long can you hold up as you approach terminal velocity? Dive in, stay focused, and enjoy the ride!",
        link: "/games/static/polybranch/index.html",
        date: new Date("2025-6-24"),
        id: "81",
        genres: ["arcade", "endless", "3d"],
      },
      {
        title: "Portal (Flash ver.)",
        description:
          "Portal: The Flash Version brings the epic console game straight to your web browser and mobile devices! If you haven't heard of Portal then you are missing out! In this game, you use your special physics gun to create inter-dimensional portals in-between walls and objects. You must use these portals to navigate through a series of levels and challenges.",
        photo: "/games/static/portalflash/portaltheflashversion.jpg",
        link: "/games/static/portalflash/index.html",
        date: new Date("2025-6-24"),
        id: "82",
        genres: ["puzzle", "platformer"],
      },
      {
        title: "Push the Square",
        description:
          "A mysterious square has appeared in your house.  It seems to do nothing but rotate clockwise, so you are gonna spend all your money making sure it does.",
        link: "/games/static/push-the-square/index.html",
        date: new Date("2025-6-24"),
        id: "83",
        genres: ["idle", "incremental", "casual"],
      },
      {
        title: "Push Your Luck",
        description:
          "Welcome to the Push Your Luck game show, a cool way to learn about probability! Spin the wheel to find the target number, then guess if the next spin will be HIGHER or LOWER.",
        photo: "/games/static/push-your-luck/assets/img/push.png",
        link: "/games/static/push-your-luck/index.html",
        date: new Date("2025-6-24"),
        id: "84",
        genres: ["quiz", "educational", "chance"],
      },
      {
        title: "Retro Bowl",
        description:
          "Retro Bowl is an American football game in retro style where your purpose is to coach your team and win a prize at the end of each season.",
        photo: "/games/static/retro-bowl/img/icon.jpg",
        banner: "/games/static/retro-bowl/img/splash.png",
        link: "/games/static/retro-bowl/index.html",
        date: new Date("2025-6-24"),
        id: "85",
        genres: ["sports", "simulation"],
      },
      {
        title: "Rolly Vortex",
        description:
          "Roll your ball through various levels and avoid obstacles in this offline game.",
        photo: "/games/static/rolly-vortex/icon-256.png",
        link: "/games/static/rolly-vortex/index.html",
        date: new Date("2025-6-24"),
        id: "86",
        genres: ["arcade", "endless", "skill"],
      },
      {
        title: "Rooftop Snipers",
        description:
          "Rooftop Snipers is created by New Eich Games, the creators of the sequel to this game Rooftop Snipers 2, but also Getaway Shootout, Tube Jumpers, Ping Pong Chaos and House of Hazards.",
        photo: "/games/static/rooftop-snipers/img/thumb.png",
        link: "/games/static/rooftop-snipers/index.html",
        date: new Date("2025-6-24"),
        id: "87",
        genres: ["shooter", "multiplayer", "action"],
      },
      {
        title: "Sand Game",
        photo: "/games/static/sand-game/sand.png",
        link: "/games/static/sand-game/index.html",
        date: new Date("2025-6-24"),
        id: "88",
        genres: ["simulation", "sandbox"],
      },
      {
        title: "Slope",
        description:
          "Slope is the ultimate running game that will put your skills to the test. Speed down on a randomized slope. The farther you go, the faster your ball travels. This game might look simple but playing this will give you extreme adrenaline rush. Just remember to avoid obstacles and those red blocks. Always be on track to get a high score and you might have your name on the leaderboard!",
        photo: "/games/static/slope/slope4.jpeg",
        banner: "/games/static/slope/R.jpg",
        link: "/games/static/slope/index.html",
        date: new Date("2025-6-24"),
        id: "89",
        genres: ["arcade", "endless", "3d"],
      },
      {
        title: "Super Mario 64",
        photo: "/games/static/sm64/logo.png",
        link: "/games/static/sm64/index.html",
        date: new Date("2025-6-24"),
        id: "90",
        genres: ["platformer", "adventure", "3d"],
      },
      {
        title: "Smoking Barrels",
        description:
          "Get yourself a gun and some ammo and face bandits in the Wild West. Be fast so you can win the duel. Rescue Wings!",
        photo: "/games/static/smokingbarrels/smokingbarrels.jpg",
        link: "/games/static/smokingbarrels/index.html",
        date: new Date("2025-6-24"),
        id: "91",
        genres: ["shooter", "arcade", "western"],
      },
      {
        title: "Solitaire",
        photo: "/games/static/solitaire/img/hover.jpg",
        banner: "/games/static/solitaire/screen-shot-win.png",
        link: "/games/static/solitaire/index.html",
        date: new Date("2025-6-24"),
        id: "92",
        genres: ["card", "puzzle", "classic"],
      },
      {
        title: "Sort The Court",
        description:
          "Sort the Court! is a game where you give yes or no answers to various scenarios and influence the fate of a kingdom.",
        photo: "/games/static/sort-the-court/img/splash.png",
        link: "/games/static/sort-the-court/index.html",
        date: new Date("2025-6-24"),
        id: "93",
        genres: ["simulation", "decision", "strategy"],
      },
      {
        title: "Stack",
        description:
          "Stack is a browser-based game that challenges you to stack falling blocks perfectly and grow your stack higher.",
        photo: "/games/static/stack/stack.png",
        banner: "/games/static/stack/featured-stack.jpg",
        link: "/games/static/stack/index.html",
        date: new Date("2025-6-24"),
        id: "94",
        genres: ["arcade", "skill", "casual"],
      },
      {
        title: "Stack Bump 3D",
        description:
          "Stack Bump 3D is an awesome time-killing game that you'll definitely enjoy. Shoot up the tower to its last block and move on with the next tower. Keep on going until you finish!",
        photo: "/games/static/stack-bump-3d/thumbnail.jpg",
        link: "/games/static/stack-bump-3d/index.html",
        date: new Date("2025-6-24"),
        id: "95",
        genres: ["arcade", "3d", "casual"],
      },
      {
        title: "Stickwar",
        description:
          "Control your army and fight against other nations in this strategy game. Learn different skills, unlock skins, and survive zombies in various modes.",
        photo: "/games/static/stickwar/stickwar.jpg",
        link: "/games/static/stickwar/index.html",
        date: new Date("2025-6-24"),
        id: "96",
        genres: ["strategy", "action", "war"],
      },
      {
        title: "Storm The House 2",
        description: "Storm The House 2 is a sequel to Storm The House. Enjoy!",
        photo: "/games/static/stormthehouse2/stormthehouse2.jpg",
        link: "/games/static/stormthehouse2/index.html",
        date: new Date("2025-6-24"),
        id: "97",
        genres: ["shooter", "defense", "action"],
      },
      {
        title: "SuperHot",
        description:
          "Jump in and shatter the enemies! The SuperHot web game is a free-to-play prototype designed as a demo for the full game.",
        photo: "/games/static/superhot/hot.jpg",
        link: "/games/static/superhot/index.html",
        date: new Date("2025-6-24"),
        id: "98",
        genres: ["shooter", "action", "puzzle"],
      },
      {
        title: "Swerve",
        photo: "/games/static/swerve/img/favicon.jpg",
        link: "/games/static/swerve/index.html",
        date: new Date("2025-6-24"),
        id: "99",
        genres: ["arcade", "driving", "casual"],
      },
      {
        title: "Tactical Assassin 2",
        description:
          "Tactical Assassin 2 is a game in which you play as a sniper in the shadows. You'll be given different targets to eliminate, and you'll all do them while hidden away from the enemy.",
        photo: "/games/static/tacticalassasin2/tacticalassassin2.png",
        link: "/games/static/tacticalassasin2/index.html",
        date: new Date("2025-6-24"),
        id: "100",
        genres: ["shooter", "sniper", "action"],
      },
      {
        title: "Tank Trouble 2",
        description:
          "Tank Trouble 2 is an online war game where you blast bouncing missiles at enemy war vehicles. Tank Trouble 2 pits you against clever army generals in mazelike battlefields.",
        photo: "/games/static/tank-trouble-2/tank.jpeg",
        link: "/games/static/tank-trouble-2/index.html",
        date: new Date("2025-6-24"),
        id: "101",
        genres: ["shooter", "tank", "multiplayer"],
      },
      {
        title: "Tanuki Sunset",
        description:
          "Tanuki Sunset Classic is a third-person longboard-skating game where players play as a raccoon skating downhill on a procedurally generated synthwave-themed seaside road.",
        photo: "/games/static/tanuki-sunset/img/cover.png",
        link: "/games/static/tanuki-sunset/index.html",
        date: new Date("2025-6-24"),
        id: "102",
        genres: ["racing", "arcade", "3d"],
      },
      {
        title: "Temple Run 2",
        description:
          "Temple Run 2, developed by Imangi, is an infinite runner where the player must escape from his enemy and avoid all the obstacles and traps that are found along the way. Traverse cliffs, forests and even mines, and help this fearless treasure hunter escape with the gold idol. But hurry up! The evil monkey monsters are chasing you! Do you dare to join this exciting adrenaline-charged adventure?",
        photo: "/games/static/temple-run-2/img/icons/icon-512x512.png",
        banner:
          "/games/static/temple-run-2/079dea52d8f43464bedd59bc35cc7999.jpg",
        link: "/games/static/temple-run-2/index.html",
        date: new Date("2025-6-24"),
        id: "103",
        genres: ["endless", "runner", "adventure"],
      },
      {
        title: "The Final Earth",
        description:
          "Earth has been destroyed. It's a good thing you teleported to a new planet, also known as The Final Earth. Gather resources and build a colony.",
        photo: "/games/static/the-final-earth/images.png",
        link: "/games/static/the-final-earth/index.html",
        date: new Date("2025-6-24"),
        id: "104",
        genres: ["simulation", "strategy", "city-builder"],
      },
      {
        title: "The Battle",
        photo: "/games/static/thebattle/thebattle.png",
        link: "/games/static/thebattle/index.html",
        date: new Date("2025-6-24"),
        id: "105",
        genres: ["strategy", "war", "action"],
      },
      {
        title: "The Heist",
        description:
          "The Heist: The Heist is a free racing game. You're a professional getaway driver who does freelance work for the mob, bank robbers, and anyone else looking to pull off a quick job.",
        photo: "/games/static/theheist/theheist.jpg",
        link: "/games/static/theheist/index.html",
        date: new Date("2025-6-24"),
        id: "106",
        genres: ["racing", "action", "driving"],
      },
      {
        title: "There Is No Game",
        description:
          "This game… wait… is it a game? There is No Game! Or is there? Complete various challenges as the narrator attempts to convince you there is no game. This is the original game jam version created by Kamizoto.",
        photo: "/games/static/there-is-no-game/logo.png",
        link: "/games/static/there-is-no-game/index.html",
        date: new Date("2025-6-24"),
        id: "107",
        genres: ["puzzle", "meta", "adventure"],
      },
      {
        title: "This Is The Only Level",
        description:
          "The elephant forgot the rest of the levels, but luckily he still has one left! Help him beat it in all his metagaming glory. Use your keen knowledge of gaming and dexterity to manhandle your way through a variety of challenges. Get your mind out of the box for once! Take it outside for a walk, or maybe grab a bite to eat with it.",
        photo: "/games/static/thisistheonlylevel/thisistheonlylevel.png",
        link: "/games/static/thisistheonlylevel/index.html",
        date: new Date("2025-6-24"),
        id: "108",
        genres: ["platformer", "puzzle", "meta"],
      },
      {
        title: "Tube Jumpers",
        description:
          "Tube Jumpers is a local multiplayer that can be played with up to 4 people. In the game you have to make sure to stay on your floating tube. Rocks, balls, and even sharks will jump out of the water and hit you. It's your task to make sure you land back on the tube when you're catapulted into the air.",
        photo: "/games/static/tube-jumpers/img/icon.jpg",
        link: "/games/static/tube-jumpers/index.html",
        date: new Date("2025-6-24"),
        id: "109",
        genres: ["multiplayer", "arcade", "party"],
      },
      {
        title: "Tunnel Rush",
        description:
          "Tunnel Rush is a vibrant and fast-paced endless runner game that challenges players to navigate a 3D tunnel filled with various obstacles. As one of the most popular running games today, Tunnel Rush starts off quite slowly but gradually picks up pace, with obstacles appearing quickly and frequently, requiring players to be highly focused if they don't want to fail. As the game progresses, the difficulty increases, making it more challenging for players than ever before. Although the concept behind Tunnel Run is simple, the game is extremely addictive and challenging. You may find yourself playing Tunnel Rush many times but still failing in your attempts to surpass your prior score.",
        photo: "/games/static/tunnel-rush/img/tunnel.jpg",
        link: "/games/static/tunnel-rush/index.html",
        date: new Date("2025-6-24"),
        id: "110",
        genres: ["arcade", "endless", "3d"],
      },
      {
        title: "Vex 3",
        photo: "/games/static/vex3/vex3.png",
        link: "/games/static/vex3/index.html",
        date: new Date("2025-6-24"),
        id: "111",
        genres: ["platformer", "action"],
      },
      {
        title: "Vex 4",
        photo: "/games/static/vex4/vex4.png",
        link: "/games/static/vex4/index.html",
        date: new Date("2025-6-24"),
        id: "112",
        genres: ["platformer", "action"],
      },
      {
        title: "Vex 5",
        photo: "/games/static/vex5/vex.jpeg",
        link: "/games/static/vex5/index.html",
        date: new Date("2025-6-24"),
        id: "113",
        genres: ["platformer", "action"],
      },
      {
        title: "Vex 6",
        photo: "/games/static/vex6/assets/icon.jpeg",
        link: "/games/static/vex6/index.html",
        date: new Date("2025-6-24"),
        id: "114",
        genres: ["platformer", "action"],
      },
      {
        title: "Wordle",
        description:
          "Play unlimited Wordles. No need to wait a whole day just for one Wordle. Endless Wordles are waiting for you to solve. Start now!",
        photo: "/games/static/wordle/img/logo_512x512.png",
        link: "/games/static/wordle/index.html",
        date: new Date("2025-6-24"),
        id: "115",
        genres: ["puzzle", "word"],
      },
      {
        title: "World's Hardest Game",
        description:
          "Each level poses a new challenge in World's Hardest Game. Some levels might require you to move quickly and react fast, and other levels require you to slow it down.",
        photo: "/games/static/worlds-hardest-game/images/splash.jpg",
        link: "/games/static/worlds-hardest-game/index.html",
        date: new Date("2025-6-24"),
        id: "116",
        genres: ["puzzle", "skill", "hard"],
      },
      {
        title: "World's Hardest Game 2",
        description:
          "Each level poses a new challenge in World's Hardest Game 2. Some levels might require you to move quickly and react fast, and other levels require you to slow it down.",
        photo:
          "/games/static/worlds-hardest-game-2/the-worlds-hardest-game-2.jpg",
        link: "/games/static/worlds-hardest-game-2/index.html",
        date: new Date("2025-6-24"),
        id: "117",
        genres: ["puzzle", "skill", "hard"],
      },
      {
        title: "Escaping The Prison",
        description: `
                            Escaping the Prison is a wildly unique adventure puzzle game in which you aim to escape from prison! After being thrown in a prison cell, you must use anything and everything at your disposal to escape: teleporters, anti-gravity equipment, toilet plungers—nothing is off limits in your attempt to escape! But be careful because one wrong move or a split-second hesitation could send you right back to your cell—or worse!
                            <br><br>
                            Do you have what it takes to escape the prison? There's only one way to find out.
                        `,
        link: "/games/static/escapingtheprison/index.html",
        date: new Date("2025-7-2"),
        id: "118",
        genres: ["adventure", "puzzle", "interactive-fiction"],
      },
      {
        title: "Stealing The Diamond",
        description: `Stealing The Diamond is another in a series of amazing stick figure adventure games. In Stealing The Diamond, you guessed it; you try to steal a diamond! An extremely large diamond at that! You have choices to make in your quest for theft! Will you rush in and risk everything or try to sneak your way to your prize? Whatever you decide, be careful as one wrong move will leave you without a diamond and maybe even less! Do you have what it takes to pull off the diamond heist and make it out alive?`,
        link: "/games/static/stealingthediamond/index.html",
        date: new Date("2025-7-2"),
        id: "119",
        genres: ["adventure", "puzzle", "interactive-fiction"],
      },
      {
        title: "Fleeing The Complex",
        description:
          "Fleeing the Complex is an amazing stick-figure escape adventure game. You are trapped inside a small prison cell, and you must escape not just your cell but the whole prison! If you fail, death is awaiting you... The highly secured prison is guarded by some strong stick soldiers. You must make good and fast decisions to make it out alive. Good luck!",
        link: "/games/static/fleeingthecomplex/index.html",
        date: new Date("2025-7-2"),
        id: "120",
        genres: ["adventure", "puzzle", "interactive-fiction"],
      },
      {
        title: "Infiltrating The Airship",
        description:
          "Infiltrating the Airship is an adventure game that continues Puffballs United's string of popular games from this genre (other titles include Breaking the Bank, Fleeing the Complex, and Escaping the Prison) and presents a new scenario for you to tackle.",
        link: "/games/static/infltratingtheairship/index.html",
        date: new Date("2025-7-2"),
        id: "121",
        genres: ["adventure", "puzzle", "interactive-fiction"],
      },
    ],
    apps: [
      {
        name: "Skiovox",
        description: "Instructions for Skiovox exploit",
        link: "/apps/skiovox/skiovox.htm",
        download: "/apps/skiovox/skiovox.htm",
        id: "1",
      },
    ],
    minecraft: {
      versions: [
        {
          title: "Early Betas",
          vers: [
            {
              name: "1.3 Beta 1",
              link: "/eaglercraft/1.3/1.3b01.html",
            },
          ],
        },
        {
          title: "Eaglercraft (1.5.x)",
          vers: [
            {
              name: "1.5.2 Service Pack 1",
              link: "/eaglercraft/1.5.2/1.5.2_SP1.html",
            },
            {
              name: "1.5.2 CoderCraft",
              link: "/eaglercraft/1.5.2/1.5.2CoderCraft.html",
            },
            {
              name: "1.5.2 FuchsiaX",
              link: "/eaglercraft/1.5.2/1.5.2FuchsiaX.html",
            },
            {
              name: "1.5.2 Kerosene",
              link: "/eaglercraft/1.5.2/1.5.2Kerosene.html",
            },
            {
              name: "1.5.2 Nit Client 1.1",
              link: "/eaglercraft/1.5.2/1.5.2NitClient1.1.html",
            },
            {
              name: "1.5.2 Nova Client",
              link: "/eaglercraft/1.5.2/1.5.2NovaClient.html",
            },
            {
              name: "1.5.2 OddFuture Client",
              link: "/eaglercraft/1.5.2/1.5.2OddFutureClient.html",
            },
            {
              name: "1.5.2 Precision Client 0.1.8.4 Beta",
              link: "/eaglercraft/1.5.2/1.5.2PrecisionClientb0.1.8.4.html",
            },
          ],
        },
        {
          title: "EaglercraftX (1.8.x)",
          vers: [
            {
              name: "1.8.8 Eagler Reborn 1.1 Beta",
              link: "/eaglercraft/1.8.8/1.8.8EaglerRebornb1.1.html",
            },
            {
              name: "1.8.8 Shadow Client 3.0",
              link: "/eaglercraft/1.8.8/1.8.8ShadowClient3.0.html",
            },
            {
              name: "1.8.8 u15 Pi Client",
              link: "/eaglercraft/1.8.8/1.8.8u15PiClient.html",
            },
            {
              name: "1.8.8 u18",
              link: "/eaglercraft/1.8.8/1.8.8u18.html",
            },
            {
              name: "1.8.8 u18 DragonX Lite",
              link: "/eaglercraft/1.8.8/1.8.8u18DragonXLite.html",
            },
            {
              name: "1.8.8 u18 Nebula",
              link: "/eaglercraft/1.8.8/1.8.8u18Nebula.html",
            },
            {
              name: "1.8.8 u22",
              link: "/eaglercraft/1.8.8/1.8.8u22.htm",
            },
            {
              name: "1.8.8 u23",
              link: "/eaglercraft/1.8.8/1.8.8u23.htm",
            },
            {
              name: "1.8.8 u27",
              link: "/eaglercraft/1.8.8/1.8.8u27.htm",
            },
            {
              name: "1.8.8 u29",
              link: "/eaglercraft/1.8.8/1.8.8u29.htm",
            },
            {
              name: "1.8.8 u30",
              link: "/eaglercraft/1.8.8/1.8.8u30.htm",
            },
            {
              name: "1.8.8 u31",
              link: "/eaglercraft/1.8.8/1.8.8u31.htm",
            },
            {
              name: "1.8.8 u32",
              link: "/eaglercraft/1.8.8/1.8.8u32.htm",
            },
            {
              name: "1.8.8 u33",
              link: "/eaglercraft/1.8.8/1.8.8u33.htm",
            },
            {
              name: "1.8.8 u34",
              link: "/eaglercraft/1.8.8/1.8.8u34.htm",
            },
            {
              name: "1.8.8 u35",
              link: "/eaglercraft/1.8.8/1.8.8u35.htm",
            },
            {
              name: "1.8.8 u39",
              link: "/eaglercraft/1.8.8/1.8.8u39.html",
            },
            {
              name: "1.8.8 u48",
              link: "/eaglercraft/1.8.8/1.8.8u48.html",
            },
            {
              name: "1.8.8 u50",
              link: "/eaglercraft/1.8.8/1.8.8u50.html",
            },
            {
              name: "1.8.8 u51",
              link: "/eaglercraft/1.8.8/1.8.8u51.html",
            },
            {
              name: "1.8.8 u52",
              link: "/eaglercraft/1.8.8/1.8.8u52.html",
            },
          ],
        },
        {
          title: "EaglercraftL (1.9.x)",
          vers: [
            {
              name: "1.9.4 u35",
              link: "/eaglercraft/1.9.4/1.9.4u35.html",
            },
          ],
        },
      ],
      mods: [
        {
          name: "CustomItems",
          description: "Library to make adding custom items easier",
          link: "/eaglercraft/forgeinjector/examplemods/lib.customitems.js",
        },
        {
          name: "WorldEdit",
          description:
            "Easy world editing using //set and //walls (requires CustomItems library)",
          link: "/eaglercraft/forgeinjector/examplemods/Worldedit.js",
        },
      ],
      maps: [
        /*
                        {
                            name: "Map",
                            description: "Description.",
                            link: "relative/path/to/file",
                        }
                        */
      ],
      resourcePacks: [
        /*
                        {
                            name: "Resource / Texture Pack",
                            size: 16,
                            link: "relative/path/to/file",
                        }
                        */
      ],
    },
  },
  changelog: [
    {
      title: "1.0.0",
      added: ["Initial release."],
    },
    {
      title: "1.4.0",
      added: [
        "Accented themes and light/dark mode support, and fonts.",
        "Utility functions for dates and strings.",
        "This changelog.",
        "Plugins, see /plugins/docs.md for more info.",
        "Achievements in games (finally).",
        "Added community posting.",
        "Added messaging.",
      ],
      fixed: [
        "During video creation you are able to upload a video without a description, title, or video. (found by self)",
        "Too many toast messages when not signed in. (found by self)",
        "Broken comment section on videos when not signed in. (found by self)",
      ],
      updated: ["Better object editors."],
    },
  ],
  changelogContainer: "app.help.page.changelogContainer",
  toastContainer: "app.toastContainer",
};

clApp.elementUtility = {
  /**
   * Removes all children of the given element.
   *
   * @param {HTMLElement} element - The element whose children are to be removed.
   */
  removeAllChildren(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  },
  /**
   * Enters fullscreen mode for the given element.
   *
   * @param {HTMLElement} element - The element to enter fullscreen mode for.
   */
  enterFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      // Chrome, Safari, Edge
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      // IE/Edge
      element.msRequestFullscreen();
    }
  },
  /**
   * Exits fullscreen mode.
   *
   * This function attempts to exit fullscreen mode by calling the appropriate
   * method based on the browser. If successful, the function returns.
   */
  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  },
};

clApp.dateUtility = {
  isWithinPastMonth(date) {
    const now = new Date();
    const pastMonth = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    return date >= pastMonth && date <= now;
  },
};

clApp.stringUtility = {
  secondsToMinuteWithSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m:${secs < 10 ? "0" + secs : secs}s`;
  },
  secondsToHourWithMinutes(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h:${minutes < 10 ? "0" + minutes : minutes}m`;
  },
  truncate(str, length) {
    if (!str) return "";
    if (str.length <= length) return str;
    return str.substring(0, length - 3) + "...";
  },
  toSafeID(str) {
    return str
      .normalize("NFKD") // Decompose accented characters
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
      .replace(/[^a-zA-Z0-9 ]/g, "") // Remove non-alphanumeric symbols
      .trim() // Remove leading/trailing spaces
      .replace(/\s+/g, "_") // Replace spaces with underscores
      .replace(/^[^a-zA-Z_]+/, ""); // Ensure it starts with a letter or underscore
  },
  copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    clApp.toast("info", "Text copied to clipboard!");
  },
};

clApp.objectUtility = {
  objectSatisfiesSchema(data, schema) {
    // obj is an object, schema is a version 4+ JSON schema
    if (schema.type === "object") {
      for (const key of schema.required || []) {
        if (!(key in data)) return false;
      }
      for (const [key, value] of Object.entries(schema.properties)) {
        if (typeof data[key] !== value.type) return false;
        if (value.minimum !== undefined && data[key] < value.minimum)
          return false;
      }
      return true;
    }
    return false;
  },
};

clApp.button = {
  create(
    icon,
    text = null,
    interactive = true,
    title = null,
    onclick = (e) => {}
  ) {
    const newBtn = document.createElement("button");
    newBtn.innerHTML = `
                    <span class="material-symbols-outlined">${icon}</span>
                    ${text ? `<span>${text}</span>` : ""}
                `;
    if (title) newBtn.title = title;
    newBtn.onclick = onclick;
    newBtn.classList.add("cl-button");
    newBtn.setAttribute("interactive", interactive);
    return newBtn;
  },
};

clApp.input = {
  create(
    type,
    placeholder = null,
    value = null,
    accept = null,
    onchange = (e) => {}
  ) {
    const container = document.createElement("div");
    container.classList.add("cl-input");
    const iconSpan = document.createElement("span");
    iconSpan.classList.add("material-symbols-outlined");
    switch (type) {
      case "text":
        iconSpan.innerText = "text_fields";
        break;
      case "textarea":
        iconSpan.innerText = "text_fields";
        break;
      case "password":
        iconSpan.innerText = "lock";
        break;
      case "email":
        iconSpan.innerText = "mail";
        break;
      case "number":
        iconSpan.innerText = "123";
        break;
      case "file":
        iconSpan.innerText = "attach_file";
        break;
      default:
        iconSpan.innerText = "edit_note";
    }
    container.appendChild(iconSpan);
    if (type === "textarea") {
      const textarea = document.createElement("textarea");
      textarea.placeholder = placeholder || "";
      textarea.value = value || "";
      textarea.rows = 5;
      textarea.cols = 50;
      container.appendChild(textarea);
      return container;
    }
    const input = document.createElement("input");
    input.type = type;
    if (placeholder) input.placeholder = placeholder;
    if (value) input.value = value;
    if (accept) input.accept = accept;
    input.onchange = onchange;
    container.appendChild(input);
    return container;
  },
};

clApp.dialog = {
  alert(message) {
    return new Promise((resolve) => {
      document
        .getElementById(clApp.config.dialogElement.panelId)
        .classList.remove("hidden");
      document.getElementById(
        clApp.config.dialogElement.contentContainerId
      ).innerHTML = message;
      clApp.elementUtility.removeAllChildren(
        document.getElementById(clApp.config.dialogElement.optionsContainerId)
      );
      const okButton = clApp.button.create("check", null, true, "OK", () => {
        document
          .getElementById(clApp.config.dialogElement.panelId)
          .classList.add("hidden");
        resolve();
      });
      document
        .getElementById(clApp.config.dialogElement.optionsContainerId)
        .appendChild(okButton);
    });
  },
  prompt(message, type, value = null) {
    return new Promise((resolve) => {
      document
        .getElementById(clApp.config.dialogElement.panelId)
        .classList.remove("hidden");
      document.getElementById(
        clApp.config.dialogElement.contentContainerId
      ).innerHTML = message;
      clApp.elementUtility.removeAllChildren(
        document.getElementById(clApp.config.dialogElement.optionsContainerId)
      );
      const input = clApp.input.create(
        type,
        "Enter value",
        value || "",
        (e) => {
          if (e.target.value) {
            resolve(e.target.value);
            document
              .getElementById(clApp.config.dialogElement.panelId)
              .classList.add("hidden");
          }
        }
      );
      document
        .getElementById(clApp.config.dialogElement.contentContainerId)
        .appendChild(input);
      document
        .getElementById(clApp.config.dialogElement.optionsContainerId)
        .appendChild(
          clApp.button.create("check", null, true, "OK", () => {
            if (input.querySelector("input").value) {
              resolve(input.querySelector("input").value);
              document
                .getElementById(clApp.config.dialogElement.panelId)
                .classList.add("hidden");
            }
          })
        );
      document
        .getElementById(clApp.config.dialogElement.optionsContainerId)
        .appendChild(
          clApp.button.create("close", null, true, "Cancel", () => {
            document
              .getElementById(clApp.config.dialogElement.panelId)
              .classList.add("hidden");
            resolve(null);
          })
        );
    });
  },
  filePrompt(message, accept) {
    return new Promise((resolve) => {
      document
        .getElementById(clApp.config.dialogElement.panelId)
        .classList.remove("hidden");
      document.getElementById(
        clApp.config.dialogElement.contentContainerId
      ).innerHTML = message;
      clApp.elementUtility.removeAllChildren(
        document.getElementById(clApp.config.dialogElement.optionsContainerId)
      );
      const cancelButton = clApp.button.create(
        "close",
        null,
        true,
        "Cancel",
        () => {
          document
            .getElementById(clApp.config.dialogElement.panelId)
            .classList.add("hidden");
          resolve(null);
        }
      );
      document
        .getElementById(clApp.config.dialogElement.optionsContainerId)
        .appendChild(cancelButton);
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = accept;
      fileInput.onchange = (e) => {
        if (e.target.files.length > 0) {
          resolve(e.target.files[0]);
        } else {
          resolve(null);
        }
      };
      fileInput.click();
    });
  },
  confirm(message) {
    return new Promise((resolve) => {
      document
        .getElementById(clApp.config.dialogElement.panelId)
        .classList.remove("hidden");
      document.getElementById(
        clApp.config.dialogElement.contentContainerId
      ).innerHTML = message;
      clApp.elementUtility.removeAllChildren(
        document.getElementById(clApp.config.dialogElement.optionsContainerId)
      );
      const okButton = clApp.button.create("check", null, true, "Yes", () => {
        document
          .getElementById(clApp.config.dialogElement.panelId)
          .classList.add("hidden");
        resolve(true);
      });
      const cancelButton = clApp.button.create(
        "close",
        null,
        true,
        "No",
        () => {
          document
            .getElementById(clApp.config.dialogElement.panelId)
            .classList.add("hidden");
          resolve(false);
        }
      );
      document
        .getElementById(clApp.config.dialogElement.optionsContainerId)
        .appendChild(okButton);
      document
        .getElementById(clApp.config.dialogElement.optionsContainerId)
        .appendChild(cancelButton);
    });
  },
};

clApp.pages = {
  resetAll() {
    clApp.config.pages.forEach((page) => {
      const pageElement = document.getElementById(page.id);
      if (pageElement) {
        pageElement.classList.add("hidden");
      }
      if (page.subpages) {
        page.subpages.forEach((subpage, index) => {
          const subpageElement = document.getElementById(subpage.id);
          const subpageBtn = document.getElementById(subpage.btn);
          if (subpageElement) {
            subpageElement.classList.add("hidden");
            //if (index == 0) subpageElement.classList.remove("hidden");
            subpageBtn.classList.remove("selected");
          }
        });
      }
    });
  },
  init() {
    this.resetAll();
    const topbarLeftElements = document.querySelectorAll(".topbar-left");
    topbarLeftElements.forEach((el) => {
      if (!el.getAttribute("data-targetPage")) {
        console.warn(
          "Element with class 'topbar-left' does not have a data-target-page attribute."
        );
        return;
      }
      el.onclick = () => {
        clApp.pages.open(el.getAttribute("data-targetPage"));
      };
    });
    clApp.config.pages.forEach((page) => {
      const pageElement = document.getElementById(page.id);
      if (pageElement) {
        if (page.subpages) {
          page.subpages.forEach((subpage) => {
            //clApp.elementUtility.removeAllChildren(document.getElementById(clApp.config.toastContainer));
            //clApp.toast("info", `Initializing subpage: ${subpage.name}`);
            const subpageElement = document.getElementById(subpage.id);
            const subpageBtn = document.getElementById(subpage.btn);
            subpageBtn.onclick = () => this.open(page.name, subpage.name);
          });
        }
      } else {
        console.warn(`Page element with ID "${page.id}" not found.`);
      }
    });
  },
  open(name, subpageName = null) {
    this.resetAll();
    const page = clApp.config.pages.find((p) => p.name === name);
    if (page) {
      const pageElement = document.getElementById(page.id);
      if (pageElement) {
        pageElement.classList.remove("hidden");
      }
      if (subpageName && page.subpages) {
        const subpage = page.subpages.find((sp) => sp.name === subpageName);
        if (subpage) {
          const subpageElement = document.getElementById(subpage.id);
          const subpageBtn = document.getElementById(subpage.btn);
          subpageElement.classList.remove("hidden");
          subpageBtn.classList.add("selected");
        }
      } else if (page.subpages && page.subpages.length > 0) {
        const firstSubpage = page.subpages[0];
        const firstSubpageElement = document.getElementById(firstSubpage.id);
        const firstBtn = document.getElementById(firstSubpage.btn);
        if (firstSubpageElement) {
          firstSubpageElement.classList.remove("hidden");
          //clApp.toast("")
          firstBtn.classList.add("selected");
        }
      }
    } else {
      clApp.dialog
        .alert(`Page "${name}" not found.`)
        .then(() => this.open("Home"));
    }
  },
  find(name, subpageName = null) {
    const page = clApp.config.pages.find((p) => p.name === name);
    if (page) {
      if (subpageName && page.subpages) {
        return page.subpages.find((sp) => sp.name === subpageName);
      }
      return page;
    }
    return null;
  },
  hide(name, subpageName) {
    const page = clApp.config.pages.find((p) => p.name === name);
    if (page) {
      const subpage = document.getElementById(
        page.subpages.find((s) => s.name === subpageName).id
      );
      const subpageBtn = document.getElementById(
        page.subpages.find((s) => s.name === subpageName).btn
      );
      subpageBtn.classList.add("hidden");
      this.open(name);
    }
  },
  show(name, subpageName) {
    const page = clApp.config.pages.find((p) => p.name === name);
    if (page) {
      const subpage = document.getElementById(
        page.subpages.find((s) => s.name === subpageName).id
      );
      const subpageBtn = document.getElementById(
        page.subpages.find((s) => s.name === subpageName).btn
      );
      subpageBtn.classList.remove("hidden");
    }
  },
  hidebp(name) {
    const page = clApp.config.customBorderlessPages.find(
      (p) => p.title === name
    );
    if (page) {
      const pageElement = document.getElementById(page.id);
      if (pageElement) {
        pageElement.classList.add("hidden");
      }
    }
  },
  showbp(name) {
    const page = clApp.config.customBorderlessPages.find(
      (p) => p.title === name
    );
    if (page) {
      const pageElement = document.getElementById(page.id);
      if (pageElement) {
        pageElement.classList.remove("hidden");
      }
    }
  },
  add(page, accessibleFromDashboard = false, description = "") {
    var newPage;
    const currentPageID = crypto.randomUUID();
    if (page instanceof CN_Page) {
      if (!page.subpages || page.subpages.length == 0) {
        console.error("Page must have at least one subpage.");
      } else if (page.title.trim() === "") {
        console.error("Page title must not be empty.");
      } else if (
        page.subpages.filter((x) => x.title.trim() === "").length > 0
      ) {
        console.error("Subpage titles must not be empty.");
      }
      newPage = document.createElement("section");
      newPage.classList = "cl-panel hidden";
      newPage.id = `app.customPage.${currentPageID}`;
      newPage.innerHTML = `
                        <div class="topbar">
                            <div class="topbar-left" title="${
                              page.title
                            }" data-targetPage="Home">
                                <i class="material-symbols-outlined">${
                                  page.icon
                                }</i>
                            </div>
                            <div class="topbar-center">
                                ${
                                  page.subpages.length == 1
                                    ? ``
                                    : page.subpages
                                        .map(
                                          (sp, idx) =>
                                            `<button class="cl-button${
                                              idx === 0 ? " selected" : ""
                                            }" title="${
                                              sp.title
                                            }" id="app.customPage.${currentPageID}.${clApp.stringUtility.toSafeID(
                                              sp.title
                                            )}.btn">
                                        <span class="material-symbols-outlined">${
                                          sp.icon
                                        }</span>
                                    </button>`
                                        )
                                        .join("")
                                }
                            </div>
                            <div class="topbar-right">
                                <h3 class="CL-DateMonitor" title="12:00 PM on January 1, 2025">12:00 PM</h3>
                                <span class="material-symbols-outlined CL-BatteryMonitor"
                                    title="100%, charging">battery_charging_full</span>
                            </div>
                        </div>
                        ${page.subpages.map(
                          (sp) =>
                            `<div class="boxed-content hidden" id="app.customPage.${currentPageID}.${clApp.stringUtility.toSafeID(
                              sp.title
                            )}.content">
                                ${sp.content}
                            </div>`
                        )}
                    `;
      clApp.config.pages.push({
        id: `app.customPage.${currentPageID}`,
        title: page.title,
        subpages: page.subpages.map((sp) => ({
          id: `app.customPage.${currentPageID}.${clApp.stringUtility.toSafeID(
            sp.title
          )}.content`,
          btn: `app.customPage.${currentPageID}.${clApp.stringUtility.toSafeID(
            sp.title
          )}.btn`,
          title: sp.title,
        })),
      });
      if (accessibleFromDashboard) {
        document.getElementById(
          "app.homeScreen.page.pageCardsContainer"
        ).innerHTML += `
                            <div class="cl-card-top">
                                <i class="material-symbols-outlined">${page.icon}</i>
                                <h3>${page.title}</h3>
                            </div>
                            <div class="cl-card-bottom">
                                <p>${description}</p>
                            </div>
                        `;
      }
      this.open("Loader");
    } else if (page instanceof CN_BorderlessPage) {
      if (page.title.trim() === "") {
        console.error("Borderless page title must not be empty.");
      }
      newPage = document.createElement("fullscreen");
      newPage.id = `app.customPage.${currentPageID}`;
      newPage.classList = "hidden";
      newPage.innerHTML = page.content;
      clApp.config.customBorderlessPages.push({
        id: `app.customPage.${currentPageID}`,
        title: page.title,
      });
    } else {
      console.error("Unknown page type.");
    }
  },
  createCards(container, pages) {
    const containerElement = document.getElementById(container);
    if (!containerElement) {
      console.error(`Container with ID "${container}" not found.`);
      return;
    }
    clApp.elementUtility.removeAllChildren(containerElement);
    pages.forEach((page) => {
      const card = document.createElement("div");
      card.classList.add("cl-card");
      card.innerHTML = `
                        <div class="cl-card-top">
                            <i class="material-symbols-outlined">${page.icon}</i>
                            <h3>${page.title}</h3>
                        </div>
                        <div class="cl-card-bottom">
                            <p>${page.description}</p>
                        </div>
                    `;
      card.onclick = () => {
        if (page.requiresAccount) {
          clApp.pages.open("Loader");
          clApp.supabase.getUserProfile().then((profile) => {
            if (profile) {
              if (page.isDashboard) {
                if (profile.is_admin) clApp.pages.open(page.title);
                else {
                  clApp.toast(
                    "error",
                    "You do not have permission to perform this action."
                  );
                  clApp.pages.open("Home");
                }
              } else clApp.pages.open(page.title);
            } else clApp.pages.open("Auth");
          });
        } else clApp.pages.open(page.title);
      };
      containerElement.appendChild(card);
    });
  },
};

clApp.battery = {
  level: 0,
  isCharging: false,
  chargingTime: 0,
  dischargingTime: 0,
  init() {
    // Check if the Battery Status API is supported
    if (!navigator.getBattery) {
      console.warn("Battery Status API is not supported in this browser.");
      return;
    }
    const batteryElements = document.querySelectorAll(".CL-BatteryMonitor");
    if (batteryElements.length === 0) return;
    navigator.getBattery().then((battery) => {
      battery.onchargingchange = () => this.update(battery);
      battery.onlevelchange = () => this.update(battery);
      battery.ondischargingtimechange = () => this.update(battery);
      battery.onchargingtimechange = () => this.update(battery);
      this.update(battery);
    });
  },
  update(battery) {
    this.level = battery.level;
    this.isCharging = battery.charging;
    this.chargingTime = battery.chargingTime;
    this.dischargingTime = battery.dischargingTime;
    const batteryElements = document.querySelectorAll(".CL-BatteryMonitor");
    batteryElements.forEach((el) => {
      el.innerText =
        Math.round(battery.level * 7) < 7
          ? "battery_" + Math.round(battery.level * 7) + "_bar"
          : "battery_full";
      el.classList[battery.charging ? "add" : "remove"]("charging");
      el.classList[
        battery.level * 100 <= 10 && !battery.charging ? "add" : "remove"
      ]("danger");
      el.classList[
        battery.level * 100 <= 20 && !battery.charging ? "add" : "remove"
      ]("warning");
      el.title =
        Math.round(battery.level * 100) +
        "%, " +
        (battery.charging ? "charging, " : "") +
        (battery.charging
          ? clApp.stringUtility.secondsToHourWithMinutes(battery.chargingTime) +
            " until full"
          : clApp.stringUtility.secondsToHourWithMinutes(
              battery.dischargingTime
            ) + " left") +
        "." +
        (battery.level * 100 <= 10 && !battery.charging
          ? " Battery level is critically low. Please plug device to power."
          : battery.level * 100 <= 20 && !battery.charging
          ? " Battery level is low. Please plug device to power."
          : "");
    });
  },
};

clApp.date = {
  format: 12,
  showSeconds: true,
  interval: null,
  init() {
    this.update();
    this.interval = setInterval(() => {
      this.update();
    }, 100);
  },
  update() {
    const dateElements = document.querySelectorAll(".CL-DateMonitor");
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "";
    if (this.format === 12) {
      ampm = hours >= 12 ? " PM" : " AM";
      hours = hours % 12 || 12;
    }
    if (!this.showSeconds) seconds = "";
    else seconds = `:${seconds < 10 ? "0" + seconds : seconds}`;
    const timeString = `${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }${seconds}${ampm}`;
    const dateString =
      timeString +
      ` on ${
        [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ][now.getDay()]
      }, ` +
      `${now.getDate()} ${
        [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ][now.getMonth()]
      } ${now.getFullYear()}`;
    dateElements.forEach((el) => {
      el.innerText = timeString;
      el.title = dateString;
    });
  },
};

clApp.pluginManager = {
  addPluginBtn: "app.plugins.page.content.add",
  importPluginBtn: "app.plugins.page.content.import",
  refreshPluginBtn: "app.plugins.page.content.refresh",
  pluginTabsContainer: "app.plugins.page.content.plugins",
  currentPluginContainer: "app.plugins.page.content.pluginContainer",
  currentPluginTitle: "app.plugins.page.content.plugins.title",
  currentPluginDescription: "app.plugins.page.content.plugins.description",
  currentPluginRefreshBtn: "app.plugins.page.content.plugins.refreshCurrent",
  currentPluginUninstallBtn: "app.plugins.page.content.plugins.uninstall",
  currentPluginExportBtn: "app.plugins.page.content.plugins.export",
  currentPluginSettingsContainer:
    "app.plugins.page.content.plugins.settingsContainer",
  currentPluginSaveBtn: "app.plugins.page.content.plugins.editCodeSaveBtn",
  currentPluginCodeTextarea:
    "app.plugins.page.content.plugins.editCodeTextarea",
  editor: null,
  boilerplate: `
/* cnplug-meta 
{
    "name": "%s",
    "author": "Anonymous",
    "version": "1.0.0",
    "description": "This is an example plugin for Chillnet."
}
*/
({
    oninit() {
        api.toast("Hello from Example Plugin!");
    }
});`,
  plugins: {},
  api: {
    params: (name) => clApp.config.parameters[name],
    pages: {
      resetAll: () => clApp.pages.resetAll(),
      open: (name, subpageName = null) => clApp.pages.open(name, subpageName),
      hide: (name, subpageName = null) => clApp.pages.hide(name, subpageName),
      show: (name, subpageName = null) => clApp.pages.show(name, subpageName),
      hidebp: (name) => clApp.pages.hidebp(name),
      showbp: (name) => clApp.pages.showbp(name),
      add: (name, accessibleFromDashboard = false, description = "") =>
        clApp.pages.add(name, accessibleFromDashboard, description),
    },
    battery: {
      level: () => clApp.battery.level,
      isCharging: () => clApp.battery.isCharging,
      chargingTime: () => clApp.battery.chargingTime,
      dischargingTime: () => clApp.battery.dischargingTime,
    },
    toast: (message, icon = "info") => clApp.toast(icon, message),
    alert: (message) => clApp.dialog.alert(message),
    prompt: (message, type, value = null) =>
      clApp.dialog.prompt(message, type, value),
    confirm: (message) => clApp.dialog.confirm(message),
    CN_Theme,
    CN_AnimatedTheme,
    CN_Page,
    CN_SubPage,
    CN_BorderlessPage,
  },
  evaluate(code) {
    try {
      const fn = new Function(code);
      fn();
    } catch (error) {
      console.error("Error evaluating plugin code:", error);
      clApp.toast("error", "Error evaluating plugin code: " + error.message);
    }
  },
  sandbox(code, exposed = {}) {
    const keys = Object.keys(exposed);
    const values = Object.values(exposed);

    const sandboxFn = new Function(...keys, `return (${code})`);
    return sandboxFn(...values);
  },
  evalMeta(code) {
    const match = code.match(/\/\* cnplug-meta([\s\S]*?)\*\//);
    if (match) {
      try {
        return JSON.parse(match[1].trim());
      } catch (e) {
        console.warn("Invalid plugin metadata");
      }
    }
    return null;
  },
  evalPlugin(code, src = "start", key) {
    if (!code || code.trim() === "") {
      console.warn("Empty plugin code");
      return;
    } else if (src !== "start" && src !== "editor") {
      console.warn("Invalid plugin source");
      return;
    }
    const meta = this.evalMeta(code);
    try {
      const pluginObject = this.sandbox(code, {
        api: this.api,
        env: window,
      });

      if (!meta?.name) {
        console.warn("Plugin missing name in metadata");
        return;
      }

      const fullPlugin = {
        ...meta,
        ...pluginObject,
        _code: code,
        _key: key,
      };

      this.register(fullPlugin, src);
    } catch (err) {
      console.error("Plugin evaluation failed:", err);
      clApp.toast(
        "error",
        "Plugin evaluation failed for " + meta?.name + ": " + err.message
      );
      this.plugins[meta?.name] = {
        name: meta?.name,
        version: meta?.version,
        description: meta?.description,
        isBroken: true,
        _code: code,
        _key: key,
      };
    }
  },
  checkPlugin(plugin) {
    const allowedKeys = [
      "oninit",
      "onreload",
      "onenable",
      "ondisable",
      "methods",
    ];
    for (const key in plugin) {
      if (!allowedKeys.includes(key)) {
        console.warn(`Disallowed key "${key}" in plugin`);
        clApp.toast(
          "error",
          `Disallowed key "${key}" in plugin "${plugin.name}".`
        );
        return false;
      }
    }
    return true;
  },
  fetch(src = "start") {
    // Fetch plugins from the server or local storage
    for (const key in localStorage) {
      if (key.startsWith("plugin_")) {
        this.evalPlugin(localStorage[key], src, key); // Plugin registers itself
      }
    }
    const pluginTabsContainer = document.getElementById(
      this.pluginTabsContainer
    );
    const currentPluginContainer = document.getElementById(
      this.currentPluginContainer
    );
    const currentPluginTitle = document.getElementById(this.currentPluginTitle);
    const currentPluginDescription = document.getElementById(
      this.currentPluginDescription
    );
    //const currentPluginEnabled= document.getElementById(this.currentPluginEnabled);
    const currentPluginRefreshBtn = document.getElementById(
      this.currentPluginRefreshBtn
    );
    const currentPluginUninstallBtn = document.getElementById(
      this.currentPluginUninstallBtn
    );
    const currentPluginSettingsContainer = document.getElementById(
      this.currentPluginSettingsContainer
    );
    const currentPluginSaveBtn = document.getElementById(
      this.currentPluginSaveBtn
    );
    const currentPluginCodeTextarea = document.getElementById(
      this.currentPluginCodeTextarea
    );
    clApp.elementUtility.removeAllChildren(pluginTabsContainer);
    currentPluginContainer.style.display = "none";
    for (const pluginName in this.plugins) {
      const plugin = this.plugins[pluginName];
      const pluginTab = document.createElement("button");
      pluginTab.textContent = plugin.name;
      pluginTab.classList = "cl-button CL-PluginTab";
      if (plugin.isBroken) pluginTab.classList.add("danger");
      pluginTab.onclick = () => {
        for (const btn of pluginTabsContainer.querySelectorAll("button")) {
          btn.classList.remove("is-active");
        }
        pluginTab.classList.add("is-active");
        this.view(plugin.name);
      };
      pluginTabsContainer.appendChild(pluginTab);
    }
    clApp.toast("extension", "Plugins loaded.");
  },
  view(pluginName) {
    this.editor && this.editor.toTextArea();
    const pluginTabsContainer = document.getElementById(
      this.pluginTabsContainer
    );
    const currentPluginContainer = document.getElementById(
      this.currentPluginContainer
    );
    const currentPluginTitle = document.getElementById(this.currentPluginTitle);
    const currentPluginDescription = document.getElementById(
      this.currentPluginDescription
    );
    //const currentPluginEnabled= document.getElementById(this.currentPluginEnabled);
    const currentPluginRefreshBtn = document.getElementById(
      this.currentPluginRefreshBtn
    );
    const currentPluginUninstallBtn = document.getElementById(
      this.currentPluginUninstallBtn
    );
    const currentPluginExportBtn = document.getElementById(
      this.currentPluginExportBtn
    );
    const currentPluginSettingsContainer = document.getElementById(
      this.currentPluginSettingsContainer
    );
    const currentPluginSaveBtn = document.getElementById(
      this.currentPluginSaveBtn
    );
    const currentPluginCodeTextarea = document.getElementById(
      this.currentPluginCodeTextarea
    );
    this.editor = CodeMirror.fromTextArea(currentPluginCodeTextarea, {
      lineNumbers: true,
      foldGutter: true,
      fixedGutter: false,
      autoRefresh: true,
      lint: {
        options: {
          esversion: 2021,
        },
      },
      showHint: true,
      lineWrapping: true,
      autoCloseBrackets: true,
      indentUnit: 4,
      mode: "javascript",
      theme: "material",
      gutters: [
        "CodeMirror-lint-markers",
        "CodeMirror-linenumbers",
        "CodeMirror-foldgutter",
      ],
    });
    setInterval(() => {
      this.editor && this.editor.refresh();
    }, 50);
    const plugin = this.plugins[pluginName];
    currentPluginContainer.style.display = "block";
    currentPluginTitle.innerHTML = plugin.name;
    currentPluginDescription.innerHTML =
      plugin.description || "No description available.";
    //currentPluginEnabled.checked= plugin.enabled || false;
    currentPluginRefreshBtn.onclick = () => {
      if (typeof plugin.onreload === "function") plugin.onreload();
      clApp.toast("extension", `Plugin "${plugin.name}" reloaded.`);
    };
    currentPluginUninstallBtn.onclick = () => {
      clApp.dialog
        .confirm(`Are you sure you want to uninstall plugin "${plugin.name}"?`)
        .then((res) => {
          if (res) {
            this.unregister(plugin.name);
            localStorage.removeItem(plugin._key);
            clApp.toast("extension", `Plugin "${plugin.name}" uninstalled.`);
            this.fetch("editor");
          }
        });
    };
    currentPluginExportBtn.onclick = () => {
      const blob = new Blob([plugin._code || ""], { type: "text/javascript" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${plugin.name}.cnplug.js`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      clApp.toast("extension", `Plugin "${plugin.name}" exported.`);
    };
    currentPluginSettingsContainer.innerHTML = "";
    this.editor.setValue(plugin._code || "");
    this.editor.refresh();
    currentPluginSaveBtn.onclick = () => {
      plugin._code = this.editor.getValue();
      localStorage.removeItem(plugin._key);
      localStorage[`plugin_${plugin.name}`] = this.editor.getValue();
      clApp.toast("extension", `Plugin "${plugin.name}" saved.`);
      //this.evalPlugin(this.editor.getValue(), "editor")
      this.fetch("editor");
      this.view(pluginName);
    };
  },
  register(plugin, src = "start") {
    if (!plugin.name) {
      console.error("Plugin is missing a name.");
      return;
    }
    if (this.plugins[plugin.name] && src !== "editor") {
      clApp.dialog
        .confirm(
          `
                        The plugin you want to register ("${
                          plugin.name
                        }") conflicts with a currently registered plugin with the same name.<br>
                        Answer NO to keep the current plugin (version ${
                          this.plugins[plugin.name].version
                        })<br>
                        Answer YES to replace the current plugin with the new one (version ${
                          plugin.version
                        })
                    `
        )
        .then((res) => {
          if (res) {
            this.plugins[plugin.name] = plugin;
            this.refreshAll();
            if (typeof plugin.oninit === "function") plugin.oninit();
            clApp.toast(
              "extension",
              `Plugin "${plugin.name}" registered successfully.`
            );
          }
        });
    } else {
      this.plugins[plugin.name] = plugin;
      if (typeof plugin.oninit === "function") plugin.oninit();
      clApp.toast(
        "extension",
        `Plugin "${plugin.name}" registered successfully.`
      );
    }
  },
  unregister(pluginName) {
    if (this.plugins[pluginName]) {
      delete this.plugins[pluginName];
      this.refreshAll();
      clApp.toast(
        "extension",
        `Plugin "${pluginName}" unregistered successfully.`
      );
    }
  },
  refreshAll() {
    for (const pluginName in this.plugins) {
      const plugin = this.plugins[pluginName];
      if (typeof plugin.onreload === "function") {
        plugin.onreload();
      }
    }
  },
  callEvent(eventName, ...args) {
    for (const pluginName in this.plugins) {
      const plugin = this.plugins[pluginName];
      if (typeof plugin[eventName] === "function") {
        plugin[eventName](...args);
      }
    }
  },
  saveAll() {
    for (const pluginName in this.plugins) {
      localStorage[`plugin_${pluginName}`] = this.plugins[pluginName]._code;
    }
  },
  save(pluginName) {
    if (this.plugins[pluginName]) {
      localStorage[`plugin_${pluginName}`] = this.plugins[pluginName]._code;
    }
  },
  init() {
    this.fetch("start");
    const addPluginBtn = document.getElementById(this.addPluginBtn);
    const importPluginBtn = document.getElementById(this.importPluginBtn);
    const refreshPluginBtn = document.getElementById(this.refreshPluginBtn);
    addPluginBtn.onclick = () => {
      clApp.dialog.prompt("Name of plugin", "text").then((name) => {
        if (name) {
          this.evalPlugin(this.boilerplate.replace("%s", name), "start");
          localStorage[`plugin_${name}`] = this.boilerplate.replace("%s", name);
          this.fetch("start");
        }
      });
    };
    importPluginBtn.onclick = () => {
      clApp.dialog
        .filePrompt("Select a cnplug.js file", ".cnplug.js")
        .then((file) => {
          if (file) {
            clApp.pages.open("Loader");
            clApp.toast("info", "Importing plugin...");
            const fileReader = new FileReader();
            fileReader.onload = (event) => {
              const content = event.target.result;
              this.evalPlugin(content, "start");
              localStorage[`plugin_${name}`] = content;
            };
            fileReader.readAsText(file);
          }
        });
    };
    refreshPluginBtn.onclick = () => {
      this.refreshAll();
      clApp.toast("info", "Plugins refreshed.");
    };
  },
};

clApp.settings = {
  editor: null,
  schema: {
    title: "Settings",
    type: "object",
    properties: {
      appearance: {
        title: "Appearance",
        type: "object",
        properties: {
          theme: {
            title: "Theme",
            type: "string",
            default: "Default",
            enum: clApp.config.themes.map((t) => t.name),
            description: "The theme to apply to the interface.",
          },
          mode: {
            title: "Mode",
            type: "string",
            default: "Light",
            enum: ["Light", "Dark", "System"],
            description: "The mode to apply to the interface.",
          },
          font: {
            title: "Font",
            type: "string",
            default: "Roboto",
            enum: clApp.config.fonts.map((t) => t.name),
            description: "The font to apply to the interface.",
          },
          useCloaking: {
            title: "Tab Cloaking",
            type: "boolean",
            format: "checkbox",
            default: true,
            description: "Whether to cloak tabs.",
          },
          cloakingOptions: {
            title: "Cloaking Options",
            type: "object",
            format: "select",
            properties: {
              tabName: {
                title: "Tab Name",
                type: "string",
                enum: [
                  "Chillnet",
                  "Google Classroom",
                  "Google Drive",
                  "Google Docs",
                  "Google Sheets",
                  "Google Slides",
                  "IXL",
                  "Henry",
                  "Custom",
                ],
                default: "Chillnet",
                description: "The name of the tab to use.",
              },
              customTabName: {
                title: "Custom Tab Name",
                type: "string",
                default: "Chillnet",
                options: {
                  dependencies: {
                    "root.appearance.cloakingOptions.tabName": "Custom",
                  },
                },
                description: "The name of the tab to use.",
              },
              tabIcon: {
                title: "Tab Icon",
                type: "string",
                enum: [
                  "Chillnet",
                  "Google Classroom",
                  "Google Drive",
                  "Google Docs",
                  "Google Sheets",
                  "Google Slides",
                  "IXL",
                  "Henry",
                  "Custom",
                ],
                default: "Chillnet",
                description: "The icon of the tab to use.",
              },
              customTabIcon: {
                title: "Custom Tab Icon URL",
                type: "string",
                default: "/assets/logo/chillnet_favicon.png",
                options: {
                  dependencies: {
                    "root.appearance.cloakingOptions.tabIcon": "Custom",
                  },
                },
                description: "The icon of the tab to use.",
              },
            },
            options: {
              dependencies: {
                "root.appearance.useCloaking": true,
              },
            },
            description: "Options for tab cloaking.",
          },
        },
        description: "Options for the appearance of the interface.",
      },
      timeanddate: {
        title: "Time and Date",
        type: "object",
        properties: {
          format: {
            title: "Time Format",
            type: "number",
            default: 12,
            enum: [12, 24],
            description: "The time format to use, in hours.",
          },
          showSeconds: {
            title: "Show Seconds",
            type: "boolean",
            format: "checkbox",
            default: true,
            description: "Whether to show seconds in the time.",
          },
        },
        description: "Options for the time and date.",
      },
    },
  },
  default: {
    appearance: {
      theme: "Default",
      mode: "Light",
      font: "Default",
      useCloaking: true,
      cloakingOptions: {
        tabName: "Chillnet",
        customTabName: "Chillnet",
        tabIcon: "Chillnet",
        customTabIcon: "/assets/logo/chillnet_favicon.png",
      },
    },
    timeanddate: {
      format: 12,
      showSeconds: false,
    },
    _version: 4,
  },
  get() {
    if (!localStorage) return this.default;
    if (
      JSON.parse(localStorage.getItem("clAppSettings"))._version !==
      this.default._version
    )
      return this.default;
    return JSON.parse(localStorage.getItem("clAppSettings")) || this.default;
  },
  set(settings) {
    if (localStorage)
      localStorage.setItem("clAppSettings", JSON.stringify(settings));
    this.update(settings);
  },
  createEditor() {
    clApp.elementUtility.removeAllChildren(
      document.getElementById("app.settings.page.allSettings")
    );
    this.editor = new JSONEditor(
      document.getElementById("app.settings.page.allSettings"),
      {
        schema: this.schema,
        theme: "barebones",
        show_errors: "always",
        disable_edit_json: true,
        disable_properties: true,
        disable_collapse: true,
        no_additional_properties: true,
        compact: true,
        object_layout: "table",
        startval: this.get(),
      }
    );
    this.editor.on("change", () => {
      const newSettings = this.editor.getValue();
      localStorage &&
        localStorage.setItem(
          "clAppSettings",
          JSON.stringify({
            ...newSettings,
            _version: this.default._version,
          })
        );
      this.update({
        ...newSettings,
        _version: this.default._version,
      });
    });
  },
  update(settings) {
    if (settings._version !== this.default._version) {
      console.warn(
        "Settings object does not satisfy schema. Using default settings."
      );
      clApp.toast(
        "settings",
        "Settings object does not satisfy schema. Using default settings."
      );
      settings = this.default;
    }
    const settingsStyles = document.getElementById("app.settingsStyles");
    const theme = clApp.config.themes.find(
      (t) => t.name === settings.appearance.theme
    );
    if (!theme) {
      console.warn(
        `Theme "${settings.appearance.theme}" not found. Using default theme.`
      );
      clApp.toast(
        "settings",
        `Theme "${settings.appearance.theme}" not found. Using default theme.`
      );
      settings.appearance.theme = "Default";
    }
    settingsStyles.innerHTML = `
                    :root {
                        --cl-border-radius: ${
                          settings.appearance.borderRadius
                        }px;
                        ${
                          settings.appearance.mode != "System"
                            ? `
                            --cl-topbar-color: var(--fc-color-${
                              settings.appearance.mode === "Dark"
                                ? "black-dark"
                                : "white-light"
                            });
                            --cl-inverted-topbar-color: var(--fc-color-${
                              settings.appearance.mode === "Dark"
                                ? "white-light"
                                : "black-dark"
                            });
                        `
                            : ""
                        }
                        --cl-accent: var(${theme.accent});
                    }
                    body {
                        ${theme.code}
                        ${
                          clApp.config.fonts.find(
                            (f) => f.name === settings.appearance.font
                          ).code
                        }
                    }
                    ${
                      settings.appearance.mode == "System"
                        ? `
                        @media (prefers-color-scheme: dark) {
                            :root {
                                --cl-topbar-color: var(--fc-color-black-dark);
                                --cl-inverted-topbar-color: var(--fc-color-white-light);
                            }
                        }
                        @media (prefers-color-scheme: light) {
                            :root {
                                --cl-topbar-color: var(--fc-color-white-light);
                                --cl-inverted-topbar-color: var(--fc-color-black-dark);
                            }
                        }
                    `
                        : ""
                    }
                `;
    clApp.date.format = settings.timeanddate.format;
    clApp.date.showSeconds = settings.timeanddate.showSeconds;

    const existingIcons = document.querySelectorAll("link[rel='icon']");
    existingIcons.forEach((icon) => icon.remove());
    const settingsIcons = document.getElementById("app.settingsIcons");
    if (settings.appearance.useCloaking) {
      document.title =
        settings.appearance.cloakingOptions.tabName == "Custom"
          ? settings.appearance.cloakingOptions.customTabName
          : settings.appearance.cloakingOptions.tabName;
      if (settings.appearance.cloakingOptions.tabIcon == "Chillnet") {
        const lightIcon = document.createElement("link");
        const darkIcon = document.createElement("link");
        lightIcon.rel = "icon";
        darkIcon.rel = "icon";
        lightIcon.href = "/assets/logo/chillnet_favicon.png";
        darkIcon.href = "/assets/logo/chillnet_favicon_white.png";
        lightIcon.media = "(prefers-color-scheme: light)";
        darkIcon.media = "(prefers-color-scheme: dark)";
        document.head.appendChild(lightIcon);
        document.head.appendChild(darkIcon);
      } else {
        const link = document.createElement("link");
        link.rel = "icon";
        link.href = {
          "Google Classroom": "/assets/logo/google_classroom_favicon.png",
          "Google Drive": "/assets/logo/google_drive_favicon.png",
          "Google Docs": "/assets/logo/google_docs_favicon.png",
          "Google Sheets": "/assets/logo/google_sheets_favicon.png",
          "Google Slides": "/assets/logo/google_slides_favicon.png",
          IXL: "/assets/logo/ixl_favicon.png",
          Henry: "/assets/logo/classlink_hcs_favicon.png",
          Custom: settings.appearance.cloakingOptions.customTabIcon,
        }[settings.appearance.cloakingOptions.tabIcon];
        document.head.appendChild(link);
      }
    } else {
      document.title = "Chillnet";
      const lightIcon = document.createElement("link");
      const darkIcon = document.createElement("link");
      lightIcon.rel = "icon";
      darkIcon.rel = "icon";
      lightIcon.href = "/assets/logo/chillnet_favicon.png";
      darkIcon.href = "/assets/logo/chillnet_favicon_white.png";
      lightIcon.media = "(prefers-color-scheme: light)";
      darkIcon.media = "(prefers-color-scheme: dark)";
      document.head.appendChild(lightIcon);
      document.head.appendChild(darkIcon);
    }
  },
};

clApp.supabase = {
  key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwbXN6dHV4cmxydGJueHhyaHBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3OTA1MzYsImV4cCI6MjA1NjM2NjUzNn0.wxYd_XO12CKjUeQZ1_MRPnD5o_S8KBK9XDKL0jh1I1I",
  url: "https://kpmsztuxrlrtbnxxrhpj.supabase.co",
  client: null,
  init() {
    if (this.client) {
      console.warn("Supabase client is already initialized.");
      return;
    }
    this.client = supabase.createClient(this.url, this.key);
    clApp.toast("info", "Supabase client initialized successfully.");
    this.getUserProfile().then((user) => {
      if (user) {
        clApp.toast("person", "Now signed in as " + user.display_name);
        this.getBan(user.id).then((ban) => {
          if (ban && new Date(ban.lift_date).getTime() > new Date().getTime()) {
            this.signOut().then(() => {
              clApp.dialog.alert(
                "You cannot sign in because you are banned.<br>Reason: <pre>" +
                  ban.reason +
                  "</pre><br>Ban will lift on " +
                  new Intl.DateTimeFormat("en-US", {
                    dateStyle: "full",
                  }).format(new Date(ban.lift_date))
              );
            });
          } else if (
            ban &&
            new Date(ban.lift_date).getTime() < new Date().getTime()
          ) {
            this.unbanUser(user.id).then(() => {
              clApp.toast("info", "Unbanned.");
            });
          }
        });
      }
    });
  },
  async signIn(email, password) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return null;
    }
    const { data, error } = await this.client.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      clApp.toast("error", `Error signing in: ${error.message}`);
      return null;
    }
    const ban = await this.getBan(data.user.id);
    if (ban && new Date(ban.lift_date) > new Date()) {
      await this.signOut();
      clApp.dialog.alert(
        "You cannot sign in because you are banned.<br>Reason: <pre>" +
          ban.reason +
          "</pre><br>Ban will lift on " +
          new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
            new Date(ban.lift_date)
          )
      );
      return null;
    } else if (ban && new Date(ban.lift_date) < new Date()) {
      await this.unbanUser(data.user.id);
    }
    if (error) {
      clApp.toast("error", `Error signing in: ${error.message}`);
      return null;
    }
    clApp.toast("info", "Signed in successfully.");
    return data.user;
  },
  async signUp(email, password) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return null;
    }
    const res0 = await this.client.auth.signUp({
      email: email,
      password: password,
    });
    if (res0.error) {
      clApp.toast("error", `Error signing up: ${error.message}`);
      return null;
    }
    clApp.toast("info", "Signed up successfully.");
    const res1 = await this.client.from("users").insert({
      email: email,
      display_name: email,
    });
    if (res1.error) {
      clApp.toast(
        "error",
        `Error creating user profile: ${res1.error.message}`
      );
      return null;
    }
    clApp.toast("info", "User profile created successfully.");
    return res0.data.user;
  },
  async signOut() {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return null;
    }
    const { error } = await this.client.auth.signOut();
    if (error) {
      clApp.toast("error", `Error signing out: ${error.message}`);
      return null;
    }
    clApp.toast("info", "Signed out successfully.");
    return true;
  },
  async getUser() {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return null;
    }
    const { data, error } = await this.client.auth.getUser();
    if (error) {
      return null;
    }
    return data.user;
  },
  async deleteUser() {
    // DANGEROUS FUNCTION! Please get user consent first!
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return;
    }
    const id = (await this.getUserProfile()).id;
    if (!id) {
      clApp.toast("error", "User ID not found.");
      return;
    }
    const { data, error } = await this.client.rpc("delete_user");
    if (error) {
      clApp.toast("error", `Error deleting user: ${error.message}`);
      return;
    }
    clApp.toast("info", "User deleted successfully.");
  },
  async getUserProfile(userId = null) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return null;
    }
    if (!userId) {
      const user = await this.getUser();
      if (!user) {
        return null;
      }
      userId = user.id;
    }
    const { data, error } = await this.client
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();
    if (error) {
      clApp.toast("error", `Error getting user profile: ${error.message}`);
      return null;
    }
    return data;
  },
  async getUserProfiles() {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return [];
    }
    const { data, error } = await this.client
      .from("users")
      .select("*")
      .order("display_name");
    if (error) {
      clApp.toast("error", `Error getting user profiles: ${error.message}`);
      return [];
    }
    return data;
  },
  async updateUserProfile(userId = null, profileData) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return null;
    }
    const error = await this.client.functions.invoke("update-user-profile", {
      body: profileData,
    });
    if (error) {
      clApp.toast("error", `Error updating user profile: ${error.message}`);
      return null;
    }
    clApp.toast("account", "User profile updated successfully.");
  },
  async updateUserBanner(file) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return;
    }
    const user = (await this.getUserProfile()).id;
    const { data, error } = await this.client.storage
      .from("clmain")
      .upload(`cms_uploads/banner_${userId}_${Date.now()}`, file);
    if (error) {
      clApp.toast("error", `Error uploading banner: ${error.message}`);
      return;
    }
    await this.updateUserProfile(null, {
      banner_url: this.client.storage.from("clmain").getPublicUrl(data.path)
        .data.publicUrl,
    });
    return this.client.storage.from("clmain").getPublicUrl(data.path);
  },
  async updateUserPhoto(file) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return;
    }
    const userId = (await this.getUserProfile()).id;
    const { data, error } = await this.client.storage
      .from("clmain")
      .upload(`cms_uploads/photo_${userId}_${Date.now()}`, file);
    if (error) {
      clApp.toast("error", `Error uploading photo: ${error.message}`);
      return;
    }
    await this.updateUserProfile(null, {
      photo_url: this.client.storage.from("clmain").getPublicUrl(data.path).data
        .publicUrl,
    });
    return this.client.storage.from("clmain").getPublicUrl(data.path);
  },
  async uploadFile(file) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return;
    }
    const { data, error } = await this.client.storage
      .from("clmain")
      .upload(`cms_uploads/${Date.now()}${file.name}`, file);
    if (error) {
      clApp.toast("error", `Error uploading file: ${error.message}`);
      return;
    }
    return this.client.storage.from("clmain").getPublicUrl(data.path);
  },
  async getGames() {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return null;
    }
    const { data, error } = await this.client.from("games").select();
    if (error) {
      clApp.toast("error", `Error getting games: ${error.message}`);
      return null;
    }
    return data;
  },
  async getGame(gid) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return null;
    }
    const { data, error } = await this.client
      .from("games")
      .select()
      .eq("id", gid)
      .single();
    if (error) {
      clApp.toast("error", `Error getting game: ${error.message}`);
      return null;
    }
    return data;
  },
  async getChatMessages() {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return [];
    }
    const { data, error } = await this.client.from("main_chat").select();
    if (error) {
      clApp.toast("error", `Error getting chat messages: ${error.message}`);
      return [];
    }
    return data;
  },
  async sendChatMessage(message, isAnnouncement) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return;
    }
    const user = await this.getUserProfile();
    if (!user) {
      clApp.toast("error", "No user is signed in.");
      return;
    } else if (user && isAnnouncement && !user.is_admin) {
      clApp.toast("error", "You do not have permission to send announcements.");
      return;
    }
    const { data, error } = await this.client.from("main_chat").insert({
      username: isAnnouncement ? "" : user.display_name,
      content: message,
      is_announcement: isAnnouncement,
    });
    if (error) {
      clApp.toast("error", `Error sending chat message: ${error.message}`);
      return;
    }
  },
  subscribe() {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return;
    }
    if (!("WebSocket" in window)) {
      clApp.toast(
        "info",
        "The current browser does not support WebSockets. Subscription cancelled."
      );
      return;
    }
    this.client
      .channel("main")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "main_chat" },
        (payload) => {
          if (payload.new.is_announcement) {
            clApp.toast("campaign", payload.new.content);
          }
          clApp.chat.addUserMessage(
            payload.new.username,
            payload.new.content,
            payload.new.is_announcement
          );
        }
      )
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "videos" },
        (payload) => {
          clApp.toast("video_library", payload.new.title);
        }
      )
      .subscribe();
  },
  async getVideos() {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return [];
    }
    const { data, error } = await this.client
      .from("videos")
      .select("*, creator(*)");
    if (error) {
      clApp.toast("error", `Error getting videos: ${error.message}`);
      return [];
    }
    return data;
  },
  async getVideosByUser(userUid = null) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return [];
    }
    if (!userUid) {
      userUid = (await this.getUserProfile()).id;
    }
    const { data, error } = await this.client
      .from("videos")
      .select("*, creator(*)")
      .eq("creator", userUid);
    if (error) {
      clApp.toast("error", `Error getting videos: ${error.message}`);
      return [];
    }
    return data;
  },
  async getVideo(videoId) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return null;
    }
    const { data, error } = await this.client
      .from("videos")
      .select(
        `
                    *(*)
                `
      )
      .eq("id", videoId);
    if (error) {
      clApp.toast("error", `Error getting video data: ${error.message}`);
      return null;
    }
    return data;
  },
  async getCommentsByVideo(videoId) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return [];
    }
    const { data, error } = await this.client
      .from("video_comments")
      .select(
        `
                    *, author(*)
                `
      )
      .eq("video", videoId);
    if (error) {
      clApp.toast("error", `Error getting comments: ${error.message}`);
      return [];
    }
    return data;
  },
  async getCommentById(commentId) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return null;
    }
    const { data, error } = await this.client
      .from("video_comments")
      .select(
        `
                    *, author(*)
                `
      )
      .eq("id", commentId)
      .single();
    if (error) {
      clApp.toast("error", `Error getting comment: ${error.message}`);
      return null;
    }
    return data;
  },
  async getRepliesByComment(commentId) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return [];
    }
    const { data, error } = await this.client
      .from("video_comments")
      .select(
        `
                    *, author(*)
                `
      )
      .eq("parent", commentId);
    if (error) {
      clApp.toast("error", `Error getting comments: ${error.message}`);
      return [];
    }
    return data;
  },
  async addCommentToVideo(videoId, content, parent = null) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return;
    }
    const { data, error } = await this.client.from("video_comments").insert({
      video: videoId,
      content: content,
      parent: parent,
    });
    if (error) {
      clApp.toast("error", `Error adding comment: ${error.message}`);
    } else {
      clApp.toast("success", "Comment added successfully!");
    }
  },
  async editComment(commentId, newContent) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return;
    }
    const { data, error } = await this.client
      .from("video_comments")
      .update({
        content: newContent,
      })
      .eq("id", commentId);
    if (error) {
      clApp.toast("error", `Error editing comment: ${error.message}`);
    } else {
      clApp.toast("success", "Comment edited successfully!");
    }
  },
  async deleteComment(commentId) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return;
    }
    const res = await this.client
      .from("video_comments")
      .delete()
      .eq("id", commentId);
  },
  async deleteVideo(videoId) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return;
    }
    const res = await this.client.from("videos").delete().eq("id", videoId);
  },
  async createVideo(newData) {
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return;
    }
    const { data, error } = await this.client.from("videos").insert(newData);
    if (error) {
      clApp.toast("error", `Error creating video: ${error.message}`);
    } else {
      clApp.toast("success", "Video created successfully!");
    }
  },
  async banUser(userId, liftDate, reason) {
    // Requires admin permissions. Ensure signed in user is admin.
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return;
    }
    const res = await this.client.functions.invoke("ban-user", {
      body: {
        ban_uid: userId,
        lift_date: liftDate,
        reason: reason,
      },
    });

    if (res || res.error) {
      clApp.toast("error", `Error banning user: ${res.error}`);
    } else {
      clApp.toast("account", "User banned successfully!");
    }
  },
  async getBan(userId) {
    // Requires admin permissions. Ensure signed in user is admin.
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return;
    }
    const res = await this.client
      .from("bans")
      .select()
      .eq("user", userId)
      .maybeSingle();
    return res.data;
  },
  async getBans() {
    // Requires admin permissions. Ensure signed in user is admin.
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return;
    }
    const res = await this.client.from("bans").select();
    return res.data;
  },
  async unbanUser(userId) {
    // Requires admin permissions. Ensure signed in user is admin.
    if (!this.client) {
      console.error("Supabase client is not initialized.");
      return;
    }
    const res = await this.client.from("bans").delete().eq("user", userId);
  },
};

clApp.games = {
  newReleasesCardsContainer:
    "app.gamesScreen.newReleases.boxedContent.cardsContainer",
  searchInput: "app.gamesScreen.page.searchGames.boxedContent.searchInput",
  searchSortSelect:
    "app.gamesScreen.page.searchGames.boxedContent.sortBySelect",
  searchResultsContainer:
    "app.gamesScreen.page.searchGames.boxedContent.gamesContainer",
  savedGamesContainer:
    "app.gamesScreen.page.savedGames.boxedContent.gamesContainer",
  historyContainer: "app.gamesScreen.page.history.boxedContent.gamesContainer",
  gameImage: "app.gameScreen.page.gameImage",
  gameTitle: "app.gameScreen.page.gameTitle",
  gameActionBox: "app.gameScreen.page.gameActionBox",
  gameNotesContainer: "app.gameScreen.page.gameNotesContainer",
  gameDescription: "app.gameScreen.page.gameDescription",
  gameFrameContainer: "app.gamePlayer.page",
  gameFrame: "app.gamePlayer.page.iframe",
  currentGameCardContainer:
    "app.gamesScreen.page.currentlyPlaying.boxedContent.game",
  currentGameActionBtnsContainer:
    "app.gamesScreen.page.currentlyPlaying.boxedContent.actionBtnsContainer",
  currentGid: null,
  init() {
    // Sort clApp.config.content.games by date, and get only the items that have a date within the last month.
    const newReleases = clApp.config.content.games.filter((game) =>
      clApp.dateUtility.isWithinPastMonth(new Date(game.date))
    );
    newReleases.sort((a, b) => new Date(b.date) - new Date(a.date));
    const newReleasesContainer = document.getElementById(
      this.newReleasesCardsContainer
    );
    clApp.elementUtility.removeAllChildren(newReleasesContainer);
    newReleases.forEach((game) => {
      const card = document.createElement("div");
      card.classList.add("cl-game");
      card.innerHTML = `
                        <img src="${
                          game.photo ||
                          "/assets/background/game_icon_placeholder.png"
                        }" alt="Game Photo" class="photo">
                        <div class="cl-game-info">
                            <h1>${game.title}</h1>
                            <p>${
                              game.description
                                ? clApp.stringUtility.truncate(
                                    game.description,
                                    200
                                  )
                                : ""
                            }</p>
                        </div>
                    `;
      card.onclick = () => this.open(game.id);
      card.style.backgroundImage = `url(${
        game.banner || "/assets/background/game_placeholder.png"
      })`;
      newReleasesContainer.appendChild(card);
    });

    const searchInput = document.getElementById(this.searchInput);
    const searchSortSelect = document.getElementById(this.searchSortSelect);
    searchInput.oninput = () => {
      const query = searchInput.value.toLowerCase();
      const sortBy = searchSortSelect.value;
      this.search(query, sortBy);
    };
    searchSortSelect.onchange = () => {
      const query = searchInput.value.toLowerCase();
      const sortBy = searchSortSelect.value;
      this.search(query, sortBy);
    };
    // Initial search with empty query
    clApp.games.search("", searchSortSelect.value);
    // Load saved games
    this.fetchSavedGames();
    this.history.fetch();
  },
  search(query, sortBy) {
    // sortBy can be "a-to-z", "z-to-a", "newest", "oldest"
    const searchResultsContainer = document.getElementById(
      this.searchResultsContainer
    );
    clApp.elementUtility.removeAllChildren(searchResultsContainer);
    const games = clApp.config.content.games.filter((game) =>
      game.title.toLowerCase().includes(query)
    );
    if (sortBy === "a-to-z") {
      games.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "z-to-a") {
      games.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "newest") {
      games.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "oldest") {
      games.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    if (games.length === 0) {
      searchResultsContainer.innerHTML = "<p>No games found.</p>";
      return;
    }
    games.forEach((game) => {
      const card = document.createElement("div");
      card.classList.add("cl-game");
      card.innerHTML = `
                        <img src="${
                          game.photo ||
                          "/assets/background/game_icon_placeholder.png"
                        }" alt="Game Photo" class="photo">
                        <div class="cl-game-info">
                            <h1>${game.title}</h1>
                            <p>${clApp.stringUtility.truncate(
                              game.description,
                              200
                            )}</p>
                        </div>
                    `;
      card.onclick = () => this.open(game.id);
      card.style.backgroundImage = `url(${
        game.banner || "/assets/background/game_placeholder.png"
      })`;
      searchResultsContainer.appendChild(card);
    });
  },
  open(gid) {
    const game = clApp.config.content.games.find((g) => g.id === gid);
    if (!game) {
      clApp.toast("error", "Game not found.");
      return;
    }
    clApp.pages.open("Game");
    const gameImage = document.getElementById(this.gameImage);
    const gameTitle = document.getElementById(this.gameTitle);
    const gameActionBox = document.getElementById(this.gameActionBox);
    const gameNotesContainer = document.getElementById(this.gameNotesContainer);
    const gameDescription = document.getElementById(this.gameDescription);

    gameImage.src = game.banner || "/assets/background/game_placeholder.png";
    gameTitle.innerHTML = `<img src="${
      game.photo || "/assets/background/game_icon_placeholder.png"
    }" alt="Game Photo" class="game-photo"><h1>${game.title}</h1>`;

    const playBtn = document.createElement("button");
    playBtn.innerHTML = '<i class="material-symbols-outlined">play_arrow</i>';
    playBtn.onclick = () => this.play(gid);
    if (this.currentGid) playBtn.disabled = true;
    playBtn.classList.add("cl-button");
    const downloadBtn = document.createElement("a");
    downloadBtn.innerHTML = '<i class="material-symbols-outlined">download</i>';
    downloadBtn.href = game.download || "#";
    downloadBtn.download = (game.download || "#").split("/").pop();
    downloadBtn.classList.add("cl-button");
    const shareBtn = document.createElement("button");
    shareBtn.innerHTML = '<i class="material-symbols-outlined">share</i>';
    shareBtn.onclick = () =>
      clApp.stringUtility.copyToClipboard(
        location.hostname + "/?mode=game&id=" + game.id
      );
    shareBtn.classList.add("cl-button");
    const saveBtn = document.createElement("button");
    saveBtn.innerHTML =
      '<i class="material-symbols-outlined">bookmark_' +
      (this.isSaved(game.id) ? "remove" : "add") +
      "</i>";
    saveBtn.onclick = () => {
      this[this.isSaved(game.id) ? "unsave" : "save"](game.id);
      saveBtn.innerHTML =
        '<i class="material-symbols-outlined">bookmark_' +
        (this.isSaved(game.id) ? "remove" : "add") +
        "</i>";
    };
    saveBtn.classList.add("cl-button");
    const backBtn = document.createElement("button");
    backBtn.innerHTML = '<i class="material-symbols-outlined">arrow_back</i>';
    backBtn.onclick = () => clApp.pages.open("Games");
    backBtn.classList.add("cl-button");

    clApp.elementUtility.removeAllChildren(gameActionBox);
    gameActionBox.appendChild(playBtn);
    if (game.download) gameActionBox.appendChild(downloadBtn);
    gameActionBox.appendChild(saveBtn);
    gameActionBox.appendChild(shareBtn);
    gameActionBox.appendChild(backBtn);

    gameNotesContainer.innerHTML = (game.notes || [])
      .map((n) => {
        return `
                        <button class="cl-button is-info" interactive="false">
                            <span class="material-symbols-outlined">info</span>
                            <span>${n}</span>
                        </button>`;
      })
      .join("");

    gameDescription.innerHTML =
      game.description || "This game has no description.";
  },
  save(gid) {
    const savedGames =
      JSON.parse(localStorage.getItem("clAppSavedGames")) || [];
    if (!savedGames.includes(gid)) savedGames.push(gid);
    localStorage.setItem("clAppSavedGames", JSON.stringify(savedGames));
    this.fetchSavedGames();
  },
  unsave(gid) {
    const savedGames =
      JSON.parse(localStorage.getItem("clAppSavedGames")) || [];
    const idx = savedGames.indexOf(gid);
    if (idx > -1) {
      savedGames.splice(idx, 1);
      localStorage.setItem("clAppSavedGames", JSON.stringify(savedGames));
    }
    this.fetchSavedGames();
  },
  isSaved(gid) {
    return (JSON.parse(localStorage.getItem("clAppSavedGames")) || []).includes(
      gid
    );
  },
  fetchSavedGames() {
    const savedGamesContainer = document.getElementById(
      this.savedGamesContainer
    );
    clApp.elementUtility.removeAllChildren(savedGamesContainer);
    const savedGames = clApp.config.content.games.filter((g) =>
      (JSON.parse(localStorage.getItem("clAppSavedGames")) || []).includes(g.id)
    );
    savedGames.forEach((game) => {
      const card = document.createElement("div");
      card.classList.add("cl-game");
      card.innerHTML = `
                        <img src="${
                          game.photo ||
                          "/assets/background/game_icon_placeholder.png"
                        }" alt="Game Photo" class="photo">
                        <div class="cl-game-info">
                            <h1>${game.title}</h1>
                            <p>${clApp.stringUtility.truncate(
                              game.description,
                              200
                            )}</p>
                        </div>
                    `;
      card.onclick = () => this.open(game.id);
      card.style.backgroundImage = `url(${
        game.banner || "/assets/background/game_placeholder.png"
      })`;
      savedGamesContainer.appendChild(card);
    });
    if (savedGames.length == 0)
      savedGamesContainer.innerHTML = "<p>You have not saved any games.</p>";
  },
  play(gid) {
    const game = clApp.config.content.games.find((g) => g.id === gid);
    if (!game) {
      clApp.toast("error", "Game not found.");
      return;
    }
    this.currentGid = gid;
    clApp.pages.resetAll();
    clApp.pages.show("Games", "Currently Playing");
    const gameFrameContainer = document.getElementById(this.gameFrameContainer);
    const gameFrame = document.getElementById(this.gameFrame);
    const currentGameCardContainer = document.getElementById(
      this.currentGameCardContainer
    );
    const currentGameActionBtnsContainer = document.getElementById(
      this.currentGameActionBtnsContainer
    );
    gameFrameContainer.classList.remove("hidden");
    gameFrame.src = game.link;
    gameFrame.focus();
    clApp.elementUtility.enterFullscreen(document.body);
    this.history.add(gid);
    document.onfullscreenchange = () => {
      if (document.fullscreenElement) {
        clApp.pages.resetAll();
      } else {
        clApp.pages.open("Games", "Currently Playing");
      }
    };
    currentGameCardContainer.innerHTML = `
                    <img src="${
                      game.photo ||
                      "/assets/background/game_icon_placeholder.png"
                    }" alt="Game Photo" class="photo">
                    <div class="cl-game-info">
                        <h1>${game.title}</h1>
                        <p>${clApp.stringUtility.truncate(
                          game.description,
                          200
                        )}</p>
                    </div>
                `;
    currentGameCardContainer.style.backgroundImage = `url(${
      game.banner || "/assets/background/game_placeholder.png"
    })`;
    const resumeBtn = document.createElement("div");
    resumeBtn.classList.add("cl-card");
    resumeBtn.onclick = () => {
      clApp.elementUtility.enterFullscreen(document.body);
      clApp.pages.resetAll();
    };
    resumeBtn.innerHTML = `
                    <div class="cl-card-top">
                        <i class="material-symbols-outlined">play_arrow</i>
                        <span>Resume</span>
                    </div>
                    <div class="cl-card-bottom">
                        Resume the game.
                    </div>
                `;
    const restartBtn = document.createElement("div");
    restartBtn.classList.add("cl-card");
    restartBtn.onclick = () => {
      gameFrame.contentWindow.location.reload();
    };
    restartBtn.innerHTML = `
                    <div class="cl-card-top">
                        <i class="material-symbols-outlined">refresh</i>
                        <span>Refresh</span>
                    </div>
                    <div class="cl-card-bottom">
                        Restart the game.
                    </div>
                `;
    const exitBtn = document.createElement("div");
    exitBtn.classList.add("cl-card");
    exitBtn.onclick = () => {
      clApp.dialog
        .confirm('Are you sure you want to close "' + game.title + '"?')
        .then((answer) => {
          if (answer) {
            clApp.pages.resetAll();
            clApp.elementUtility.exitFullscreen();
            document.onfullscreenchange = () => {};
            gameFrame.src = "/games/game_loader.html";
            gameFrameContainer.classList.add("hidden");
            this.currentGid = null;
            clApp.pages.open("Games");
            clApp.pages.hide("Games", "Currently Playing");
          }
        });
    };
    exitBtn.innerHTML = `
                    <div class="cl-card-top">
                        <i class="material-symbols-outlined">close</i>
                        <span>Exit</span>
                    </div>
                    <div class="cl-card-bottom">
                        Close the game.
                    </div>
                `;
    clApp.elementUtility.removeAllChildren(currentGameActionBtnsContainer);
    currentGameActionBtnsContainer.appendChild(resumeBtn);
    currentGameActionBtnsContainer.appendChild(restartBtn);
    currentGameActionBtnsContainer.appendChild(exitBtn);
  },
  history: {
    historyContainer:
      "app.gamesScreen.page.history.boxedContent.gamesContainer",
    fetch() {
      const historyContainer = document.getElementById(this.historyContainer);
      clApp.elementUtility.removeAllChildren(historyContainer);
      var historyItems =
        JSON.parse(localStorage.getItem("clAppGameHistory")) || [];
      historyItems = historyItems.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      historyItems.forEach((item) => {
        const game = clApp.config.content.games.find((g) => g.id == item.gid);
        const card = document.createElement("div");
        card.classList.add("cl-game");
        card.innerHTML = `
                            <img src="${
                              game.photo ||
                              "/assets/background/game_icon_placeholder.png"
                            }" alt="Game Photo" class="photo">
                            <div class="cl-game-info">
                                <h1>${game.title}</h1>
                                <p>${new Intl.DateTimeFormat("en-US", {
                                  timeStyle: "short",
                                  dateStyle: "short",
                                }).format(new Date(item.date))}</p>
                            </div>
                        `;
        card.onclick = () => clApp.games.open(game.id);
        card.style.backgroundImage = `url(${
          game.banner || "/assets/background/game_placeholder.png"
        })`;
        historyContainer.appendChild(card);
      });
      if (historyItems.length == 0)
        historyContainer.innerHTML = "<p>You have not played any games.</p>";
    },
    add(gid) {
      const historyItems =
        JSON.parse(localStorage.getItem("clAppGameHistory")) || [];
      historyItems.push({ gid: gid, date: new Date().toISOString() });
      localStorage.setItem("clAppGameHistory", JSON.stringify(historyItems));
      this.fetch();
    },
  },
};

clApp.minecraft = {
  versionsContainer:
    "app.minecraftScreen.page.versions.boxedContent.versionsContainer",
  modsContainer: "app.minecraftScreen.page.mods.boxedContent.modsContainer",
  worldsContainer:
    "app.minecraftScreen.page.worlds.boxedContent.worldsContainer",
  resourcePacksContainer:
    "app.minecraftScreen.page.resourcePacks.boxedContent.resourcePacksContainer",
  fetch() {
    const versionsContainer = document.getElementById(this.versionsContainer);
    const modsContainer = document.getElementById(this.modsContainer);
    const worldsContainer = document.getElementById(this.worldsContainer);
    const resourcePacksContainer = document.getElementById(
      this.resourcePacksContainer
    );

    versionsContainer.innerHTML = clApp.config.content.minecraft.versions
      .map((version) => {
        return `
                        <div class="cl-collapsible cl-container">
                            <input type="checkbox" class="cl-collapsible-checkbox">
                            <div class="cl-horizontal cl-collapsible-top">
                                <span class="material-symbols-outlined cl-collapsible-arrow">arrow_right</span>
                                <h3>${version.title}</h3>
                            </div>
                            <div class="cl-container cl-collapsible-content">
                                ${version.vers
                                  .map((ver) => {
                                    return `
                                        <div class="cl-horizontal">
                                            <h3><a href="${ver.link}" target="_blank">${ver.name}</a></h3>
                                        </div>
                                    `;
                                  })
                                  .join("")}
                            </div>
                        </div>
                    `;
      })
      .join("");
    modsContainer.innerHTML = clApp.config.content.minecraft.mods
      .map((mod) => {
        return `
                        <tr>
                            <td>${mod.name}</td>
                            <td>${mod.description || ""}</td>
                            <td>
                                <div class="cl-horizontal">
                                    <a class="cl-button" href="${
                                      mod.link
                                    }" target="_blank">
                                        <i class="material-symbols-outlined">download</i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    `;
      })
      .join("");
    worldsContainer.innerHTML = clApp.config.content.minecraft.maps
      .map((map) => {
        return `
                        <tr>
                            <td>${map.name}</td>
                            <td>${map.description || ""}</td>
                            <td>
                                <div class="cl-horizontal">
                                    <a class="cl-button" href="${
                                      map.link
                                    }" target="_blank">
                                        <i class="material-symbols-outlined">download</i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    `;
      })
      .join("");
    resourcePacksContainer.innerHTML =
      clApp.config.content.minecraft.resourcePacks
        .map((resourcePack) => {
          return `
                        <tr>
                            <td>${resourcePack.name}</td>
                            <td>${resourcePack.size}</td>
                            <td>
                                <div class="cl-horizontal">
                                    <a class="cl-button" href="${resourcePack.link}" target="_blank">
                                        <i class="material-symbols-outlined">download</i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    `;
        })
        .join("");
  },
};

clApp.auth = {
  emailInput: "app.authScreen.page.emailInput",
  passwordInput: "app.authScreen.page.passwordInput",
  confirmPasswordInput: "app.authScreen.page.confirmPasswordInput",
  SIBtn: "app.authScreen.page.SIBtn",
  SUBtn: "app.authScreen.page.SUBtn",
  continueAsGuestBtn: "app.authScreen.page.continueAsGuestBtn",
  init() {
    const emailInput = document.getElementById(this.emailInput);
    const passwordInput = document.getElementById(this.passwordInput);
    const confirmPasswordInput = document.getElementById(
      this.confirmPasswordInput
    );
    const SIBtn = document.getElementById(this.SIBtn);
    const SUBtn = document.getElementById(this.SUBtn);
    const continueAsGuestBtn = document.getElementById(this.continueAsGuestBtn);

    SIBtn.onclick = () => {
      SIBtn.classList.add("is-loading");
      clApp.supabase
        .signIn(emailInput.value, passwordInput.value)
        .then((user) => {
          SIBtn.classList.remove("is-loading");
          // The sign in was successful!
          emailInput.value = "";
          passwordInput.value = "";
          confirmPasswordInput.value = "";
          clApp.toast("person", "Now logged in as " + user.email);
          clApp.pages.open("Home");
          clApp.account.init();
          clApp.admin.fetch();
        });
    };
    SUBtn.onclick = () => {
      if (confirmPasswordInput.value != passwordInput.value) {
        clApp.toast("error", "Passwords do not match");
        return;
      }
      SUBtn.classList.add("is-loading");
      clApp.supabase
        .signUp(emailInput.value, passwordInput.value)
        .then((user) => {
          SUBtn.classList.remove("is-loading");
          // The sign up was successful!
          emailInput.value = "";
          passwordInput.value = "";
          confirmPasswordInput.value = "";
          clApp.toast("person", "Now logged in as " + user.email);
          clApp.pages.open("Home");
          clApp.account.init();
          clApp.admin.fetch();
        });
    };
    continueAsGuestBtn.onclick = () => {
      clApp.pages.open("Home");
    };
  },
};

clApp.chat = {
  userMessagesContainer:
    "app.chat.page.withUsers.boxedContent.messagesContainer",
  userMessageInput: "app.chat.page.withUsers.boxedContent.msgInput",
  userMessageSendBtn: "app.chat.page.withUsers.boxedContent.sendBtn",
  userMessageAnnounceBtn: "app.chat.page.withUsers.boxedContent.announceBtn",
  aiMessagesContainer: "app.chat.page.ai.boxedContent.messagesContainer",
  aiMessageInput: "app.chat.page.ai.boxedContent.msgInput",
  aiMessageSendBtn: "app.chat.page.ai.boxedContent.sendBtn",
  aiMessages: [],
  init() {
    const userMessagesContainer = document.getElementById(
      this.userMessagesContainer
    );
    const userMessageInput = document.getElementById(this.userMessageInput);
    const userMessageSendBtn = document.getElementById(this.userMessageSendBtn);
    const userMessageAnnounceBtn = document.getElementById(
      this.userMessageAnnounceBtn
    );
    const aiMessagesContainer = document.getElementById(
      this.aiMessagesContainer
    );
    const aiMessageInput = document.getElementById(this.aiMessageInput);
    const aiMessageSendBtn = document.getElementById(this.aiMessageSendBtn);

    clApp.elementUtility.removeAllChildren(userMessagesContainer);
    clApp.elementUtility.removeAllChildren(aiMessagesContainer);
    userMessageSendBtn.onclick = () => {
      userMessageSendBtn.disabled = true;
      userMessageAnnounceBtn.disabled = true;
      if (userMessageInput.value.trim() === "") {
        clApp.toast("error", "Please enter a message");
        return;
      }
      clApp.supabase
        .sendChatMessage(userMessageInput.value.trim(), false)
        .then(() => {
          userMessageInput.value = "";
          userMessageSendBtn.disabled = false;
          userMessageAnnounceBtn.disabled = false;
        });
    };
    userMessageAnnounceBtn.onclick = () => {
      userMessageSendBtn.disabled = true;
      userMessageAnnounceBtn.disabled = true;
      if (userMessageInput.value.trim() === "") {
        clApp.toast("error", "Please enter a message");
        return;
      }
      clApp.supabase
        .sendChatMessage(userMessageInput.value.trim(), true)
        .then(() => {
          userMessageInput.value = "";
          userMessageSendBtn.disabled = false;
          userMessageAnnounceBtn.disabled = false;
        });
    };
    userMessageInput.onkeydown = (e) => {
      if (e.key === "Enter" && !e.shiftKey) userMessageSendBtn.click();
      else if (e.key === "Enter" && e.shiftKey) userMessageAnnounceBtn.click();
    };
    userMessageInput.onclick = () =>
      (userMessagesContainer.scrollTop = userMessagesContainer.scrollHeight);
    aiMessageSendBtn.onclick = () => {
      const message = aiMessageInput.value.trim();
      if (message) {
        aiMessageSendBtn.disabled = true;
        this.addAIMessage(message, true);
        aiMessageInput.value = "";
        this.aiMessages.push({
          content: message,
          role: "user",
        });
        puter.ai
          .chat(this.aiMessages)
          .then((res) => {
            this.addAIMessage(res, false);
            this.aiMessages.push(res.message);
            aiMessageSendBtn.disabled = false;
          })
          .catch((err) => {
            clApp.toast("error", "AI response error: " + err);
            aiMessageSendBtn.disabled = false;
          });
      }
    };
    aiMessageInput.onkeydown = (e) => {
      if (e.key === "Enter") aiMessageSendBtn.click();
    };
    aiMessageInput.onclick = () =>
      (aiMessagesContainer.scrollTop = aiMessagesContainer.scrollHeight);

    clApp.supabase.getChatMessages().then((res) => {
      res.forEach((msg) => {
        this.addUserMessage(msg.username, msg.content, msg.is_announcement);
      });
      userMessageSendBtn.disabled = false;
      userMessageAnnounceBtn.disabled = false;
    });
  },
  addUserMessage(username, message, isAnnouncement) {
    const userMessagesContainer = document.getElementById(
      this.userMessagesContainer
    );
    userMessagesContainer.innerHTML += `
                    <div>
                        <a href="#">${username}</a>
                        <p${
                          isAnnouncement ? ` class="warning"` : ""
                        }>${message}</p>
                    </div>
                `;
    userMessagesContainer.scrollTop = userMessagesContainer.scrollHeight;
  },
  addAIMessage(message, isUser) {
    const aiMessagesContainer = document.getElementById(
      this.aiMessagesContainer
    );
    aiMessagesContainer.innerHTML += `
                    <div>
                        <a href="#">${isUser ? `User` : `AI`}</a>
                        <p>${message}</p>
                    </div>
                `;
    aiMessagesContainer.scrollTop = aiMessagesContainer.scrollHeight;
  },
};

clApp.videos = {
  searchInput: "app.videos.page.allVideos.searchInput",
  searchSortSelect: "app.videos.page.allVideos.sortSelect",
  searchResultsContainer: "app.videos.page.allVideos.list",
  videoPlayerPage: "app.videoPlayer.page",
  videoPlayer: "app.videoPlayer.page.video",
  videoTitle: "app.video.page.info.title",
  videoStatus: "app.video.page.info.status",
  videoCloseBtn: "app.video.page.info.closeBtn",
  videoResumeBtn: "app.video.page.info.resumeBtn",
  videoDescription: "app.video.page.info.description",
  videoCommentInput: "app.video.page.comments.commentInput",
  videoCommentSubmitBtn: "app.video.page.comments.sendBtn",
  videoCommentsAmountText: "app.video.page.comments.amountText",
  videoCommentsContainer: "app.video.page.comments.commentsContainer",
  videos: [],
  currentVideo: null,
  init() {
    clApp.supabase.getVideos().then((res) => {
      this.videos = res;
      const searchInput = document.getElementById(clApp.videos.searchInput);
      const searchSortSelect = document.getElementById(
        clApp.videos.searchSortSelect
      );
      const searchResultsContainer = document.getElementById(
        clApp.videos.searchResultsContainer
      );
      searchInput.oninput = () => {
        const query = searchInput.value.toLowerCase();
        const sortBy = searchSortSelect.value;
        this.search(query, sortBy);
      };
      searchSortSelect.onchange = () => {
        const query = searchInput.value.toLowerCase();
        const sortBy = searchSortSelect.value;
        this.search(query, sortBy);
      };
      this.search("", "newest");
      this.history.fetch();
    });
  },
  search(query, sortBy) {
    // sortBy can be "newest", "oldest", "a-to-z" or "z-to-a"
    const searchInput = document.getElementById(clApp.videos.searchInput);
    const searchSortSelect = document.getElementById(
      clApp.videos.searchSortSelect
    );
    const searchResultsContainer = document.getElementById(
      clApp.videos.searchResultsContainer
    );
    const videos = this.videos.filter((v) =>
      v.title.toLowerCase().includes(query)
    );
    if (sortBy === "newest") {
      videos.sort((a, b) => b.created_at - a.created_at);
    } else if (sortBy === "oldest") {
      videos.sort((a, b) => a.created_at - b.created_at);
    } else if (sortBy === "a-to-z") {
      videos.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "z-to-a") {
      videos.sort((a, b) => b.title.localeCompare(a.title));
    }
    if (videos.length === 0) {
      searchResultsContainer.innerHTML = `<p>No videos found.</p>`;
      return;
    }
    searchResultsContainer.innerHTML = "";
    videos.forEach((video) => {
      const videoElement = document.createElement("div");
      videoElement.classList.add("cl-video");
      videoElement.innerHTML = `
                        <img src="${
                          video.thumbnail ||
                          "https://placehold.co/1600x900?text=No+Image"
                        }" alt="${video.title}" class="cl-video-thumbnail">
                        <h3>${video.title}</h3>
                        <h4>${
                          video.creator.display_name
                        } | ${new Intl.DateTimeFormat("en-US", {
        timeStyle: "short",
        dateStyle: "short",
      }).format(new Date(video.created_at))}</h4>
                    `;
      videoElement.onclick = () => this.play(video.id);
      searchResultsContainer.appendChild(videoElement);
    });
  },
  play(id) {
    const video = this.videos.find((v) => v.id === id);
    if (!video) {
      clApp.toast("error", "Video not found.");
      clApp.pages.open("Videos");
      return;
    }
    this.currentVideo = id;
    clApp.pages.resetAll();
    const videoPlayerPage = document.getElementById(this.videoPlayerPage);
    const videoPlayer = document.getElementById(this.videoPlayer);
    videoPlayerPage.classList.remove("hidden");
    videoPlayer.src = video.video;
    videoPlayer.dataset.poster = video.thumbnail || "";
    const player = new Plyr(videoPlayer, {
      title: video.title,
      controls: `
                        <h1>${video.title}</h1>
                        <button class="cl-button" onclick="clApp.pages.open('Videos', 'Currently Playing');">
                            <span class="material-symbols-outlined">menu</span>
                        </button>
                        <div class="plyr__controls">
                            <button type="button" class="plyr__control" data-plyr="restart">
                                <svg role="presentation"><use xlink:href="#plyr-restart"></use></svg>
                                <span class="plyr__tooltip" role="tooltip">Restart</span>
                            </button>
                            <button type="button" class="plyr__control" data-plyr="rewind">
                                <svg role="presentation"><use xlink:href="#plyr-rewind"></use></svg>
                                <span class="plyr__tooltip" role="tooltip">Rewind {seektime} secs</span>
                            </button>
                            <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">
                                <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg>
                                <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg>
                                <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span>
                                <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span>
                            </button>
                            <button type="button" class="plyr__control" data-plyr="fast-forward">
                                <svg role="presentation"><use xlink:href="#plyr-fast-forward"></use></svg>
                                <span class="plyr__tooltip" role="tooltip">Forward {seektime} secs</span>
                            </button>
                            <div class="plyr__progress">
                                <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
                                <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
                                <span role="tooltip" class="plyr__tooltip">00:00</span>
                            </div>
                            <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
                            <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>
                            <button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
                                <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>
                                <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>
                                <span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
                                <span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
                            </button>
                            <div class="plyr__volume">
                                <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume">
                            </div>
                            <button type="button" class="plyr__control" data-plyr="captions">
                                <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-captions-on"></use></svg>
                                <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-captions-off"></use></svg>
                                <span class="label--pressed plyr__tooltip" role="tooltip">Disable captions</span>
                                <span class="label--not-pressed plyr__tooltip" role="tooltip">Enable captions</span>
                            </button>
                            <button type="button" class="plyr__control" data-plyr="fullscreen">
                                <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg>
                                <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg>
                                <span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span>
                                <span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span>
                            </button>
                        </div>
                    `,
      settings: ["captions", "quality", "speed", "loop"],
    });
    player.on("ready", () => {
      this.history.add(id);
    });
    clApp.pages.show("Videos", "Currently Playing");
    const videoTitle = document.getElementById(this.videoTitle);
    const videoStatus = document.getElementById(this.videoStatus);
    const videoCloseBtn = document.getElementById(this.videoCloseBtn);
    const videoResumeBtn = document.getElementById(this.videoResumeBtn);
    const videoDescription = document.getElementById(this.videoDescription);
    const videoCommentInput = document.getElementById(this.videoCommentInput);
    const videoCommentSubmitBtn = document.getElementById(
      this.videoCommentSubmitBtn
    );
    const videoCommentsAmountText = document.getElementById(
      this.videoCommentsAmountText
    );
    const videoCommentsContainer = document.getElementById(
      this.videoCommentsContainer
    );
    videoTitle.innerHTML = video.title;
    videoStatus.innerHTML = `${
      video.creator.display_name
    } | ${new Intl.DateTimeFormat("en-US", {
      timeStyle: "short",
      dateStyle: "short",
    }).format(new Date(video.created_at))} | ${video.views} views`;
    videoCloseBtn.onclick = () => {
      clApp.dialog
        .confirm("Are you sure you want to close the video player?")
        .then((ans) => {
          if (ans) {
            clApp.pages.hide("Videos", "Currently Playing");
            player.destroy();
            videoPlayerPage.classList.add("hidden");
            clApp.pages.open("Videos");
          }
        });
    };
    videoResumeBtn.onclick = () => {
      clApp.pages.resetAll();
    };
    videoDescription.innerHTML = video.description;
    clApp.supabase.getUserProfile().then((res) => {
      if (!res) {
        videoCommentInput.placeholder = "Please log in to comment";
        videoCommentInput.disabled = true;
        videoCommentSubmitBtn.disabled = true;
        return;
      }
      videoCommentInput.placeholder = "Commenting as " + res.display_name;
      videoCommentSubmitBtn.disabled = false;
      videoCommentInput.disabled = false;
      videoCommentSubmitBtn.onclick = () =>
        this.createComment(videoCommentInput.value);
      this.renderComments();
    });
  },
  renderComments() {
    if (!this.currentVideo) {
      console.error("No video to render comments for");
      return;
    }
    const videoCommentsAmountText = document.getElementById(
      this.videoCommentsAmountText
    );
    const videoCommentsContainer = document.getElementById(
      this.videoCommentsContainer
    );
    videoCommentsContainer.innerHTML = "";
    clApp.supabase.getCommentsByVideo(this.currentVideo).then((comments) => {
      videoCommentsAmountText.innerHTML = `Comments (${comments.length})`;
      comments.forEach((comment) => {
        if (comment.parent) return; // Prevent showing replies at top level
        const commentElement = document.createElement("div");
        commentElement.classList.add("cl-comment");
        commentElement.innerHTML = `
                            <img src="${
                              comment.author.photo_url ||
                              "https://placehold.co/512"
                            }" alt="User Photo" class="cl-user-photo">
                            <div class="cl-container">
                                <h3>${
                                  comment.author.display_name
                                } <small>${new Intl.DateTimeFormat("en-US", {
          timeStyle: "short",
          dateStyle: "short",
        }).format(new Date(comment.created_at))}</small></h3>
                                <p>${comment.content}</p>
                                <div class="cl-horizontal">
                                    <button class="cl-button" onclick="clApp.videos.replyToComment('${
                                      comment.id
                                    }')">
                                        <span class="material-symbols-outlined">reply</span>
                                    </button>
                                    <button class="cl-button" onclick="clApp.videos.editComment('${
                                      comment.id
                                    }')">
                                        <span class="material-symbols-outlined">edit</span>
                                    </button>
                                    <button class="cl-button" onclick="clApp.videos.deleteComment('${
                                      comment.id
                                    }')">
                                        <span class="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                                ${
                                  comments.filter((c) => c.parent == comment.id)
                                    .length > 0
                                    ? `
                                    <div class="cl-collapsible cl-container">
                                        <input type="checkbox" class="cl-collapsible-checkbox">
                                        <div class="cl-horizontal cl-collapsible-top">
                                            <span class="material-symbols-outlined cl-collapsible-arrow">arrow_right</span>
                                            <h3>Replies (${
                                              comments.filter(
                                                (c) => c.parent == comment.id
                                              ).length
                                            })</h3>
                                        </div>
                                        <div class="cl-container cl-collapsible-content">
                                            ${comments
                                              .filter(
                                                (c) => c.parent == comment.id
                                              )
                                              .map((reply) => {
                                                return `
                                                    <div class="cl-comment">
                                                        <img src="${
                                                          reply.author
                                                            .photo_url ||
                                                          "https://placehold.co/512"
                                                        }" alt="User Photo" class="cl-user-photo">
                                                        <div class="cl-container">
                                                            <h3>${
                                                              reply.author
                                                                .display_name
                                                            } <small>${new Intl.DateTimeFormat(
                                                  "en-US",
                                                  {
                                                    timeStyle: "short",
                                                    dateStyle: "short",
                                                  }
                                                ).format(
                                                  new Date(reply.created_at)
                                                )}</small></h3>
                                                            <p>${
                                                              reply.content
                                                            }</p>
                                                            <div class="cl-horizontal">
                                                                <button class="cl-button" onclick="clApp.videos.editComment('${
                                                                  reply.id
                                                                }')">
                                                                    <span class="material-symbols-outlined">edit</span>
                                                                </button>
                                                                <button class="cl-button" onclick="clApp.videos.deleteComment('${
                                                                  reply.id
                                                                }')">
                                                                    <span class="material-symbols-outlined">delete</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                `;
                                              })
                                              .join("")}
                                        </div>
                                    </div>
                                `
                                    : ""
                                }
                            </div>
                        `;
        videoCommentsContainer.appendChild(commentElement);
      });
    });
  },
  replyToComment(commentId, content) {
    clApp.pages.open("Loader");
    clApp.supabase.getUserProfile().then((user) => {
      if (!user) {
        clApp.toast("info", "You must be logged in to comment.");
        clApp.pages.open("Videos", "Currently Playing");
        return;
      }
      clApp.dialog.prompt("Reply to comment", "textarea").then((ans) => {
        if (ans && ans.trim() !== "") {
          clApp.supabase
            .addCommentToVideo(this.currentVideo, ans, commentId)
            .then(() => {
              clApp.pages.open("Videos", "Currently Playing");
              clApp.toast("info", "Comment posted.");
              this.renderComments();
            });
        } else {
          clApp.toast("info", "Comment cannot be empty.");
        }
      });
    });
  },
  editComment(commentId) {
    clApp.pages.open("Loader");
    clApp.supabase.getUserProfile().then((user) => {
      if (!user) {
        clApp.toast("info", "You must be logged in to edit a comment.");
        clApp.pages.open("Videos", "Currently Playing");
        return;
      }
      clApp.supabase.getCommentById(commentId).then((comment) => {
        if (comment.author.id !== user.id) {
          clApp.toast("info", "You cannot edit a comment that is not yours.");
          clApp.pages.open("Videos", "Currently Playing");
          return;
        }
        clApp.dialog
          .prompt("Edit comment", "textarea", comment.content)
          .then((ans) => {
            if (ans && ans.trim() !== "") {
              clApp.supabase.editComment(commentId, ans).then(() => {
                clApp.pages.open("Videos", "Currently Playing");
                clApp.toast("info", "Comment edited.");
                this.renderComments();
              });
            } else {
              clApp.toast("info", "Comment cannot be empty.");
            }
          });
      });
    });
  },
  deleteComment(commentId) {
    clApp.pages.open("Loader");
    clApp.supabase.getUserProfile().then((user) => {
      if (!user) {
        clApp.toast("info", "You must be logged in to delete a comment.");
        clApp.pages.open("Videos", "Currently Playing");
        return;
      }
      clApp.supabase.getCommentById(commentId).then((comment) => {
        if (comment.author.id !== user.id && !user.is_admin) {
          clApp.toast("info", "You cannot delete a comment that is not yours.");
          clApp.pages.open("Videos", "Currently Playing");
          return;
        }
        clApp.dialog
          .confirm("Are you sure you want to delete this comment?")
          .then((ans) => {
            if (ans) {
              clApp.supabase.deleteComment(commentId).then(() => {
                clApp.pages.open("Videos", "Currently Playing");
                clApp.toast("info", "Comment deleted.");
                this.renderComments();
              });
            }
          });
      });
    });
  },
  createComment(content) {
    clApp.pages.open("Loader");
    clApp.supabase.getUserProfile().then((user) => {
      if (!user) {
        clApp.toast("info", "You must be logged in to create a comment.");
        clApp.pages.open("Videos", "Currently Playing");
        return;
      }
      clApp.supabase.addCommentToVideo(this.currentVideo, content).then(() => {
        clApp.pages.open("Videos", "Currently Playing");
        clApp.toast("info", "Comment created.");
        this.renderComments();
      });
    });
  },
  history: {
    historyContainer: "app.videos.page.history.list",
    fetch() {
      const historyContainer = document.getElementById(
        clApp.videos.history.historyContainer
      );
      historyContainer.innerHTML = "";
      var history = JSON.parse(localStorage.getItem("clAppVideoHistory")) || [];
      if (history.length === 0) {
        historyContainer.innerHTML = `<p>No videos watched.</p>`;
        return;
      }
      history.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by most recently watched.
      history.forEach((item, index) => {
        const video = clApp.videos.videos.find((v) => v.id === item.id);
        /*if (!video) {
                            setTimeout(() => history.splice(index, 1), 100);
                            return;
                        }*/
        const videoElement = document.createElement("div");
        videoElement.classList.add("cl-video");
        videoElement.innerHTML = `
                            <img src="${
                              video.thumbnail ||
                              "https://placehold.co/1600x900?text=No+Image"
                            }" alt="${video.title}" class="cl-video-thumbnail">
                            <h3>${video.title || "Unavailable"}</h3>
                            <small>${new Intl.DateTimeFormat("en-US", {
                              timeStyle: "short",
                              dateStyle: "short",
                            }).format(new Date(item.date))}</small>
                            <h4>${
                              video.creator.display_name || "Unavailable"
                            }</h4>
                        `;
        videoElement.onclick = () => clApp.videos.play(video.id);
        historyContainer.appendChild(videoElement);
      });
    },
    add(id) {
      const history =
        JSON.parse(localStorage.getItem("clAppVideoHistory")) || [];
      history.push({ id: id, date: new Date().toISOString() });
      localStorage.setItem("clAppVideoHistory", JSON.stringify(history));
      this.fetch();
    },
  },
};

clApp.users = {
  usersContainer: "app.users.page.usersContainer",
  userJoinDate: "app.user.page.info.userJoinDate",
  userBanner: "app.user.page.info.userBanner",
  userPhoto: "app.user.page.info.userPhoto",
  userName: "app.user.page.info.userName",
  userBio: "app.user.page.info.userBio",
  userLinksContainer: "app.user.page.info.linksContainer",
  userVideosContainer: "app.user.page.videos.videosContainer",
  userActionsContainer: "app.user.page.info.userActionsContainer",
  fetch() {
    const usersContainer = document.getElementById(clApp.users.usersContainer);
    usersContainer.innerHTML = "";
    clApp.supabase.getUserProfiles().then((users) => {
      users.forEach((user) => {
        const userElement = document.createElement("div");
        userElement.classList.add("cl-user");
        userElement.innerHTML = `
                            <img src="${
                              user.banner_url ||
                              "https://placehold.co/900x300?text=No+Image"
                            }" alt="User Banner" class="cl-user-thumbnail">
                            <div class="cl-user-info-box">
                                <img src="${
                                  user.photo_url || "https://placehold.co/512"
                                }" alt="User Photo" class="cl-user-photo">
                                <h3>${user.display_name || "User"}</h3>
                            </div>
                        `;
        userElement.onclick = () => clApp.users.open(user.id);
        usersContainer.appendChild(userElement);
      });
    });
  },
  open(uid) {
    clApp.pages.open("Loader");
    clApp.supabase.getUserProfile(uid).then((user) => {
      const userJoinDate = document.getElementById(this.userJoinDate);
      const userBanner = document.getElementById(this.userBanner);
      const userPhoto = document.getElementById(this.userPhoto);
      const userName = document.getElementById(this.userName);
      const userBio = document.getElementById(this.userBio);
      const userLinksContainer = document.getElementById(
        this.userLinksContainer
      );
      const userVideosContainer = document.getElementById(
        this.userVideosContainer
      );
      const userActionsContainer = document.getElementById(
        this.userActionsContainer
      );
      userJoinDate.innerHTML =
        "Joined on " +
        new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
          new Date(user.created_at)
        );
      userBanner.src =
        user.banner_url || "https://placehold.co/900x300?text=No+Image";
      userPhoto.src = user.photo_url || "https://placehold.co/512";
      userName.innerHTML =
        (user.display_name || "User") +
        (user.is_admin
          ? "<span class='material-symbols-outlined'>shield</span>"
          : "");
      userBio.innerHTML = user.bio || "No Bio";
      userLinksContainer.innerHTML = user.links
        .map((link) => {
          return `
                            <a class="cl-button" href="${link}">
                                <i class="material-symbols-outlined">link</i>
                                <span>${link}</span>
                            </a>
                        `;
        })
        .join("");
      userActionsContainer.innerHTML = `
                        <button class="cl-button" onclick="clApp.stringUtility.copyToClipboard('${location.origin}/?mode=user&id=${uid}')">
                            <span class="material-symbols-outlined">share</span>
                        </button>
                    `;
      clApp.supabase.getVideosByUser(uid).then((videos) => {
        userVideosContainer.innerHTML = "";
        videos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // sort videos by most recent first
        videos.forEach((video) => {
          const videoElement = document.createElement("div");
          videoElement.classList.add("cl-video");
          videoElement.innerHTML = `
                                <img src="${
                                  video.thumbnail ||
                                  "https://placehold.co/1600x900?text=No+Image"
                                }" alt="${
            video.title
          }" class="cl-video-thumbnail">
                                <h3>${video.title}</h3>
                                <h4>${
                                  video.creator.display_name
                                } | ${new Intl.DateTimeFormat("en-US", {
            timeStyle: "short",
            dateStyle: "short",
          }).format(new Date(video.created_at))}</h4>
                            `;
          videoElement.onclick = () => clApp.videos.play(video.id);
          userVideosContainer.appendChild(videoElement);
        });
        clApp.pages.open("User");
      });
    });
  },
};

clApp.account = {
  logoutBtn: "app.account.page.accountSettings.logoutBtn",
  userBanner: "app.account.page.accountSettings.userBanner",
  userPhoto: "app.account.page.accountSettings.userPhoto",
  profileEditorContainer:
    "app.account.page.accountSettings.profileEditorContainer",
  saveBtn: "app.account.page.accountSettings.saveBtn",
  deleteBtn: "app.account.page.accountSettings.deleteBtn",
  profileEditor: null,
  init() {
    if (this.profileEditor) this.profileEditor.destroy();
    const logoutBtn = document.getElementById(this.logoutBtn);
    const userBanner = document.getElementById(this.userBanner);
    const userPhoto = document.getElementById(this.userPhoto);
    const profileEditorContainer = document.getElementById(
      this.profileEditorContainer
    );
    const saveBtn = document.getElementById(this.saveBtn);
    const deleteBtn = document.getElementById(this.deleteBtn);
    JSONEditor.defaults.callbacks.upload = {
      userBannerUpload: function (jseditor, type, file, cbs) {
        if (!file.type.startsWith("image/"))
          cbs.failure("File must be an image");
        clApp.supabase.updateUserBanner(file).then((url) => {
          cbs.updateProgress(50);
          userBanner.src = url.data.publicUrl;
          cbs.updateProgress();
          clApp.users.fetch();
          cbs.success(url.data.publicUrl);
        });
      },
      userPhotoUpload: function (jseditor, type, file, cbs) {
        if (!file.type.startsWith("image/"))
          cbs.failure("File must be an image");
        cbs.updateProgress(33);
        clApp.supabase.updateUserPhoto(file).then((url) => {
          cbs.updateProgress(66);
          userPhoto.src = url.data.publicUrl;
          cbs.updateProgress();
          clApp.users.fetch();
          cbs.success(url.data.publicUrl);
        });
      },
    };
    clApp.supabase.getUserProfile().then((profile) => {
      this.profileEditor = new JSONEditor(profileEditorContainer, {
        schema: {
          type: "object",
          title: "Profile",
          properties: {
            banner_url: {
              type: "string",
              title: "Banner",
              format: "url",
              options: {
                upload: {
                  upload_handler: "userBannerUpload",
                },
              },
              links: [
                {
                  href: "{{self}}",
                },
              ],
            },
            photo_url: {
              type: "string",
              title: "Photo",
              format: "url",
              options: {
                upload: {
                  upload_handler: "userPhotoUpload",
                },
              },
              links: [
                {
                  href: "{{self}}",
                },
              ],
            },
            display_name: {
              type: "string",
              title: "Display Name",
            },
            bio: {
              type: "string",
              title: "Bio",
              format: "textarea",
            },
            links: {
              type: "array",
              title: "Links",
              items: {
                type: "string",
                title: "Link",
                format: "url",
              },
            },
          },
        },
        theme: "barebones",
        show_errors: "always",
        disable_edit_json: true,
        disable_properties: true,
        disable_collapse: true,
        no_additional_properties: true,
        prompt_before_delete: false,
        compact: true,
        object_layout: "table",
        startval: profile,
      });
      userBanner.src =
        profile.banner_url || "https://placehold.co/900x300?text=No+Image";
      userBanner.alt = profile.display_name;
      userPhoto.src =
        profile.photo_url || "https://placehold.co/512?text=No+Image";
      userPhoto.alt = profile.display_name;
      saveBtn.onclick = () => {
        if (this.profileEditor.getValue().display_name.trim() === "") {
          clApp.toast("error", "Profile name cannot be empty");
          return;
        }
        clApp.pages.open("Loader");
        clApp.supabase
          .updateUserProfile(null, this.profileEditor.getValue())
          .then((res) => {
            clApp.pages.open("Account");
            clApp.toast("info", "Profile updated");
          });
      };
      deleteBtn.onclick = () => {
        clApp.dialog
          .confirm(
            "Are you sure you want to delete your account? This action is irreversible."
          )
          .then((ans) => {
            if (ans) {
              clApp.dialog
                .confirm(
                  "Are you REALLY sure you want to delete your account? This action is irreversible!"
                )
                .then((ans2) => {
                  if (ans2) {
                    clApp.pages.open("Loader");
                    clApp.supabase.deleteUser().then(() => {
                      clApp.pages.open("Auth");
                      clApp.toast("info", "Account deleted");
                    });
                  }
                });
            }
          });
      };
      logoutBtn.onclick = () => {
        clApp.dialog
          .confirm("Are you sure you want to log out?")
          .then((ans) => {
            if (ans) {
              clApp.pages.open("Loader");
              clApp.supabase.signOut().then(() => {
                clApp.pages.open("Auth");
                clApp.toast("info", "Logged out");
              });
            }
          });
      };
    });
  },
};

clApp.content = {
  videosContainer: "app.content.page.videos.boxedContent.videosContainer",
  videoEditorContainer:
    "app.content.page.newVideo.boxedContent.videoEditorContainer",
  videoEditorSubmitBtn: "app.content.page.newVideo.boxedContent.addVideoButton",
  videoEditor: null,
  init() {
    this.fetchVideos();
    this.createEditor();
  },
  fetchVideos() {
    const videosContainer = document.getElementById(this.videosContainer);
    const videoEditorContainer = document.getElementById(
      this.videoEditorContainer
    );
    const videoEditorSubmitBtn = document.getElementById(
      this.videoEditorSubmitBtn
    );
    clApp.supabase.getVideosByUser().then((videos) => {
      videosContainer.innerHTML = videos
        .map((video) => {
          return `
                            <tr>
                                <td>${video.title}</td>
                                <td>${new Intl.DateTimeFormat("en-US", {
                                  timeStyle: "short",
                                  dateStyle: "short",
                                }).format(new Date(video.created_at))}</td>
                                <td>
                                    <div class="cl-horizontal">
                                        <button class="cl-button" onclick="clApp.videos.play(${
                                          video.id
                                        })">
                                            <i class="material-symbols-outlined">play_arrow</i>
                                        </button>
                                        <button class="cl-button" onclick="clApp.stringUtility.copyToClipboard('${
                                          location.origin
                                        }/?mode=video&id=${video.id}')">
                                            <i class="material-symbols-outlined">share</i>
                                        </button>
                                        <button class="cl-button" onclick="clApp.content.deleteVideo('${
                                          video.id
                                        }')">
                                            <i class="material-symbols-outlined">delete</i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        `;
        })
        .join("");
    });
  },
  deleteVideo(videoId) {
    clApp.pages.open("Loader");
    clApp.supabase.getVideo(videoId).then((video) => {
      clApp.supabase.getUserProfile().then((user) => {
        if (user.id !== video.creator.id && !user.is_admin) {
          clApp.toast("error", "You cannot delete a video that is not yours.");
          clApp.pages.open("Content");
          return;
        }
        clApp.supabase.deleteVideo(videoId).then(() => {
          clApp.toast("success", "Video deleted successfully.");
          clApp.pages.open("Content");
          clApp.content.fetchVideos();
        });
      });
    });
  },
  createEditor() {
    const videosContainer = document.getElementById(this.videos);
    const videoEditorContainer = document.getElementById(
      this.videoEditorContainer
    );
    const videoEditorSubmitBtn = document.getElementById(
      this.videoEditorSubmitBtn
    );
    const defaultValue = {
      video: "",
      thumbnail: "",
      title: "New Video",
      description: "",
      tracks: [],
    };
    JSONEditor.defaults.callbacks.upload.videoUpload = (
      jseditor,
      type,
      file,
      cbs
    ) => {
      if (!file.type.startsWith("video/")) cbs.failure("File must be a video.");
      cbs.updateProgress(50);
      clApp.supabase.uploadFile(file).then((url) => {
        if (url.data.publicUrl) {
          cbs.updateProgress();
          cbs.success(url.data.publicUrl);
        } else {
          cbs.failure("File upload failed.");
        }
      });
    };
    JSONEditor.defaults.callbacks.upload.thumbnailUpload = (
      jseditor,
      type,
      file,
      cbs
    ) => {
      if (!file.type.startsWith("image/"))
        cbs.failure("File must be an image.");
      cbs.updateProgress(50);
      clApp.supabase.uploadFile(file).then((url) => {
        if (url.data.publicUrl) {
          cbs.updateProgress();
          cbs.success(url.data.publicUrl);
        } else {
          cbs.failure("File upload failed.");
        }
      });
    };
    JSONEditor.defaults.callbacks.upload.subtitleUpload = (
      jseditor,
      type,
      file,
      cbs
    ) => {
      if (file.type !== "text/vtt")
        cbs.failure("File must be a WebVTT (.vtt) subtitle file.");
      cbs.updateProgress(50);
      clApp.supabase.uploadFile(file).then((url) => {
        if (url.data.publicUrl) {
          cbs.updateProgress();
          cbs.success(url.data.publicUrl);
        } else {
          cbs.failure("File upload failed.");
        }
      });
    };
    this.videoEditor = new JSONEditor(videoEditorContainer, {
      schema: {
        type: "object",
        title: "Video",
        properties: {
          video: {
            type: "string",
            format: "url",
            title: "Video",
            description: "The video file. May take a while to upload.",
            options: {
              upload: {
                upload_handler: "videoUpload",
              },
            },
            links: [
              {
                href: "{{self}}",
              },
            ],
            required: true,
          },
          thumbnail: {
            type: "string",
            format: "url",
            title: "Thumbnail",
            description: "The video thumbnail.",
            options: {
              upload: {
                upload_handler: "thumbnailUpload",
              },
            },
            links: [
              {
                href: "{{self}}",
              },
            ],
          },
          title: {
            type: "string",
            title: "Title",
            description: "The video title.",
            default: "New Video",
            required: true,
          },
          description: {
            type: "string",
            title: "Description",
            description: "The video description.",
            format: "textarea",
          },
          tracks: {
            type: "array",
            title: "Tracks",
            description: "The video's subtitle tracks.",
            items: {
              type: "object",
              title: "Track",
              properties: {
                language: {
                  type: "string",
                  title: "Language",
                  description: "The track's language.",
                  enum: ["en", "ar", "fr", "de", "es", "it", "pt", "ru", "zh"],
                },
                label: {
                  type: "string",
                  title: "Label",
                  description: "The track's name.",
                  required: true,
                },
                src: {
                  type: "string",
                  format: "url",
                  title: "WebVTT (.vtt) file",
                  description: "The track's WebVTT subtitle file.",
                  options: {
                    upload: {
                      upload_handler: "subtitleUpload",
                    },
                  },
                  links: [
                    {
                      href: "{{self}}",
                    },
                  ],
                  required: true,
                },
              },
            },
          },
        },
      },
      theme: "barebones",
      show_errors: "always",
      disable_edit_json: true,
      disable_properties: true,
      disable_collapse: true,
      no_additional_properties: true,
      prompt_before_delete: false,
      compact: true,
      object_layout: "table",
    });
    videoEditorSubmitBtn.onclick = () => {
      const value = this.videoEditor.getValue();
      if (
        !this.videoEditor.validate() ||
        value.video.trim() === "" ||
        value.title.trim() === "" ||
        value.tracks.filter((t) => t.label.trim() === "" || t.src.trim() === "")
          .length > 0
      ) {
        clApp.toast("error", "Please fill out the form correctly!");
        return;
      }
      clApp.supabase.createVideo(this.videoEditor.getValue()).then(() => {
        clApp.toast("info", "Video created!");
        this.videoEditor.setValue(defaultValue);
        this.fetchVideos();
      });
    };
  },
};

clApp.admin = {
  usersContainer: "app.admin.page.users.usersContainer",
  bannedUsersContainer: "app.admin.page.users.bannedUsersContainer",
  videosContainer: "app.admin.page.videos.videosContainer",
  banSelect: "app.admin.page.users.banSelect",
  banLiftDateInput: "app.admin.page.users.banLiftDateInput",
  banReasonInput: "app.admin.page.users.banReasonInput",
  banBtn: "app.admin.page.users.banButton",
  init() {
    const usersContainer = document.getElementById(this.usersContainer);
    const bannedUsersContainer = document.getElementById(
      this.bannedUsersContainer
    );
    const videosContainer = document.getElementById(this.videosContainer);
    const banSelect = document.getElementById(this.banSelect);
    const banLiftDateInput = document.getElementById(this.banLiftDateInput);
    const banReasonInput = document.getElementById(this.banReasonInput);
    const banBtn = document.getElementById(this.banBtn);
    clApp.supabase.getUserProfiles().then((users) => {
      banSelect.innerHTML = users
        .map((user) => {
          return `<option value="${user.id}">${user.display_name} (${user.id})</option>`;
        })
        .join("");
      banBtn.onclick = () => {
        clApp.pages.open("Loader");
        clApp.supabase
          .banUser(
            banSelect.value,
            banLiftDateInput.value,
            banReasonInput.value
          )
          .then(() => {
            clApp.toast("info", "User banned!");
            this.fetch();
            clApp.pages.open("Admin");
          });
      };
      this.fetch();
    });
  },
  fetch() {
    const usersContainer = document.getElementById(this.usersContainer);
    const bannedUsersContainer = document.getElementById(
      this.bannedUsersContainer
    );
    const videosContainer = document.getElementById(this.videosContainer);
    const banSelect = document.getElementById(this.banSelect);
    const banLiftDateInput = document.getElementById(this.banLiftDateInput);
    const banReasonInput = document.getElementById(this.banReasonInput);
    const banBtn = document.getElementById(this.banBtn);
    usersContainer.innerHTML = "";
    bannedUsersContainer.innerHTML = "";
    videosContainer.innerHTML = "";
    clApp.supabase.getUserProfiles().then((users) => {
      banSelect.innerHTML = users
        .map((user) => {
          return `<option value="${user.id}">${user.display_name} (${user.id})</option>`;
        })
        .join("");
      clApp.supabase.getBans().then((bans) => {
        users.forEach((user) => {
          if (bans.map((x) => x.user).includes(user.id)) {
            bannedUsersContainer.innerHTML += `
                                    <tr>
                                        <td>${user.id}</td>
                                        <td>${user.display_name}</td>
                                        <td>${new Intl.DateTimeFormat("en-US", {
                                          dateStyle: "medium",
                                        }).format(
                                          new Date(user.created_at)
                                        )}</td>
                                        <td>
                                            <div class="cl-horizontal">
                                                <button class="cl-button" onclick="clApp.users.open('${
                                                  user.id
                                                }')">
                                                    <i class="material-symbols-outlined">open_in_new</i>
                                                </button>
                                                <button class="cl-button" onclick="clApp.admin.unban('${
                                                  user.id
                                                }')">
                                                    <i class="material-symbols-outlined">check</i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                `;
          } else {
            usersContainer.innerHTML += `
                                    <tr>
                                        <td>${user.id}</td>
                                        <td>${user.display_name}</td>
                                        <td>${new Intl.DateTimeFormat("en-US", {
                                          dateStyle: "medium",
                                        }).format(
                                          new Date(user.created_at)
                                        )}</td>
                                        <td>
                                            <div class="cl-horizontal">
                                                <button class="cl-button" onclick="clApp.users.open('${
                                                  user.id
                                                }')">
                                                    <i class="material-symbols-outlined">open_in_new</i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                `;
          }
        });
      });
    });
    clApp.supabase.getVideos().then((videos) => {
      videosContainer.innerHTML = videos
        .map((video) => {
          return `
                            <tr>
                                <td>${video.title}</td>
                                <td>${new Intl.DateTimeFormat("en-US", {
                                  timeStyle: "short",
                                  dateStyle: "short",
                                }).format(new Date(video.created_at))}</td>
                                <td>
                                    <div class="cl-horizontal">
                                        <button class="cl-button" onclick="clApp.videos.play(${
                                          video.id
                                        })">
                                            <i class="material-symbols-outlined">open_in_new</i>
                                        </button>
                                        <button class="cl-button" onclick="clApp.content.deleteVideo(${
                                          video.id
                                        })">
                                            <i class="material-symbols-outlined">delete</i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        `;
        })
        .join("");
    });
  },
  unban(userId) {
    clApp.supabase.unbanUser(userId).then(() => {
      clApp.toast("check_circle", "User unbanned");
      this.fetch();
    });
  },
  ban(userId, liftDate, reason) {
    clApp.supabase.banUser(userId, liftDate, reason).then(() => {
      clApp.toast("check_circle", "User banned");
      this.fetch();
    });
  },
};

clApp.apps = {
  appsContainer: "app.appsScreen.page.appsContainer",
  appTitle: "app.appScreen.page.title",
  appIcon: "app.appScreen.page.icon",
  appActionBtnsContainer: "app.appScreen.page.actionBtnsContainer",
  appDescription: "app.appScreen.page.description",
  init() {
    const appsContainer = document.getElementById(this.appsContainer);
    const appTitle = document.getElementById(this.appTitle);
    const appIcon = document.getElementById(this.appIcon);
    const appActionBtnsContainer = document.getElementById(
      this.appActionBtnsContainer
    );
    const appDescription = document.getElementById(this.appDescription);

    appsContainer.innerHTML = clApp.config.content.apps
      .map((app) => {
        return `
                        <div class="cl-app" onclick="clApp.apps.open(${
                          app.id
                        })">
                            <img src="${
                              app.photo ||
                              "/assets/background/app_icon_placeholder.png"
                            }" class="cl-app-icon" alt="App Icon">
                            <h3>${app.name}</h3>
                        </div>
                    `;
      })
      .join("");
  },
  open(appId) {
    const app = clApp.config.content.apps.find((a) => a.id == appId);
    if (!app) {
      clApp.toast("error", "App not found.");
    }
    const appsContainer = document.getElementById(this.appsContainer);
    const appTitle = document.getElementById(this.appTitle);
    const appIcon = document.getElementById(this.appIcon);
    const appActionBtnsContainer = document.getElementById(
      this.appActionBtnsContainer
    );
    const appDescription = document.getElementById(this.appDescription);
    clApp.pages.open("App");
    appTitle.innerHTML = app.name;
    appIcon.src = app.photo || "/assets/background/app_icon_placeholder.png";
    appActionBtnsContainer.innerHTML = `
                    <a class="cl-button" href="${app.link}" target="_blank">
                        <span class="material-symbols-outlined">open_in_new</span>
                        <span>Open</open>
                    </a>
                    ${
                      app.download
                        ? `
                        <a class="cl-button" href="${
                          app.link
                        }" download="${app.download.split("/").pop()}">
                            <span class="material-symbols-outlined">download</span>
                            <span>Download</span>
                        </a>
                    `
                        : ""
                    }
                `;
    appDescription.innerHTML = app.description || "No description.";
  },
};

clApp.changelog = {
  init() {
    const changelogContainer = document.getElementById(
      clApp.config.changelogContainer
    );
    changelogContainer.innerHTML = clApp.config.changelog
      .map((entry) => {
        return `
                        <div class="cl-collapsible cl-container">
                            <input type="checkbox" class="cl-collapsible-checkbox">
                            <div class="cl-horizontal cl-collapsible-top">
                                <span class="material-symbols-outlined cl-collapsible-arrow">arrow_right</span>
                                <h3>${entry.title}</h3>
                            </div>
                            <div class="cl-container cl-collapsible-content">
                                <ul class="cl-added-changes">
                                    ${
                                      entry.added
                                        ?.map((change) => `<li>${change}</li>`)
                                        .join("") || "<li>No changes</li>"
                                    }
                                </ul>
                                <ul class="cl-removed-changes">
                                    ${
                                      entry.removed
                                        ?.map((change) => `<li>${change}</li>`)
                                        .join("") || "<li>No changes</li>"
                                    }
                                </ul>
                                <ul class="cl-fixed-changes">
                                    ${
                                      entry.fixed
                                        ?.map((change) => `<li>${change}</li>`)
                                        .join("") || "<li>No changes</li>"
                                    }
                                </ul>
                                <ul class="cl-updated-changes">
                                    ${
                                      entry.updated
                                        ?.map((change) => `<li>${change}</li>`)
                                        .join("") || "<li>No changes</li>"
                                    }
                                </ul>
                            </div>
                        </div>
                    `;
      })
      .join("");
  },
};

clApp.toast = function (icon, message) {
  const toast = document.createElement("div");
  toast.classList.add("cl-button");
  toast.innerHTML = `
                <i class="material-symbols-outlined">${icon}</i>
                <span>${message}</span>
            `;
  console.log(message);
  document.getElementById(clApp.config.toastContainer).appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 5000);
};

clApp.setup = () => {
  const url = new URL(window.location.href);
  url.searchParams.forEach((val, key) => {
    clApp.config.parameters[key] = val;
  });
  clApp.pages.open("Loader");
  if (localStorage && !localStorage.visited) {
    localStorage.visited = true;
    clApp.toast("info", "Welcome to Chillnet!");
    if ("serviceWorker" in navigator) {
      clApp.toast("info", "Service workers are supported! Registering...");
      if (Notification && Notification.permission !== "granted")
        Notification.requestPermission().then((perm) => {
          if (perm === "granted") {
            clApp.toast("info", "Notification permission granted!");
          } else {
            clApp.toast("warning", "Notification permission denied!");
          }
        });
      // Check if the service worker is registered
      navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => {
          if (registrations.length > 0) {
            clApp.toast("info", "Service worker already registered!");
          } else {
            navigator.serviceWorker
              .register("/serviceWorker.js")
              .then(() => {
                clApp.toast("info", "Service worker registered successfully!");
              })
              .catch((err) => {
                clApp.toast(
                  "error",
                  `Error registering service worker: ${err}`
                );
              });
          }
        })
        .catch((err) => {
          clApp.toast(
            "error",
            `Error checking service worker registrations: ${err}`
          );
        });

      //navigator.serviceWorker.register("/serviceWorker.js", { type: "module" });
      //clApp.toast("info", "Service workers registered!");
    } else {
      clApp.toast("warning", "Service workers are not supported!");
    }
  } else {
    clApp.toast("info", "Welcome back to Chillnet!");
  }
  clApp.pluginManager.init();
  clApp.pages.createCards(
    "app.homeScreen.page.pageCardsContainer",
    clApp.config.pageCards
  );
  clApp.pages.init();
  clApp.pages.hide("Games", "Currently Playing");
  clApp.pages.hide("Videos", "Currently Playing");
  clApp.battery.init();
  clApp.date.init();
  clApp.settings.createEditor();
  clApp.settings.update(clApp.settings.get());
  clApp.supabase.init();
  clApp.games.init();
  clApp.minecraft.fetch();
  clApp.auth.init();
  clApp.chat.init();
  clApp.supabase.subscribe();
  clApp.videos.init();
  clApp.users.fetch();
  clApp.account.init();
  clApp.content.init();
  clApp.admin.init();
  clApp.apps.init();
  clApp.changelog.init();
  clApp.pages.open("Home");
  if (clApp.config.parameters.mode && clApp.config.parameters.id) {
    if (clApp.config.parameters.mode == "game")
      clApp.games.open(clApp.config.parameters.id);
    if (clApp.config.parameters.mode == "video")
      clApp.videos.play(clApp.config.parameters.id);
    if (clApp.config.parameters.mode == "user")
      clApp.users.open(clApp.config.parameters.id);
  } else if (clApp.config.parameters.resetAll) {
    clApp.dialog
      .confirm("Do you want to reset all settings?")
      .then((result) => {
        if (result) {
          localStorage.removeItem("clAppSettings");
          clApp.settings.update(clApp.settings.default);
          clApp.settings.editor.setValue(clApp.settings.default);
          clApp.toast("info", "Settings reset to default.");
        }
      });
  }
  window.onbeforeunload = (e) => {
    e.preventDefault();
    e.returnValue = "Are you sure you want to leave?"; // For modern browsers
    return "Are you sure you want to leave?"; // For older browsers
  };
};
window.onerror = (message, src, lineno, colno, error) => {
  clApp.toast(
    "error",
    `Error: ${message.toString()}<br>at ${src}:${lineno}:${colno}`
  );
};
window.onload = () => {
  clApp.setup();
};
