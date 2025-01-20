// link types are; github, web, download

const data = `{

"1":{
    "show":"1",
    "inprogress":0,
    "name":"Speedia extension",
    "coverimage":"./assets/projects/speedia.png",
    "description":"Chrome Extension",
    "specifics":["I got tired of being locked at a set media speed on training videos/sites so I built an Extension to allow speed changes.",
                "Using Manifest 3.0 and web languages I built an extension that injects media playback changes and has a useful speed reader."],
    "tags":["JS","Web","UI","API"],
    
    "links":[{"source":"https://github.com/legriffalo/speedmedia-chrome-extension","type":"github"},
             {"source":"https://chromewebstore.google.com/detail/speedia/koekfhjdagjpbacbgjcbjndmhlcbkcmb?hl=en-US&utm_source=ext_sidebar","type":"site","dim":"width=1200,height=800"}],

    "general":["data"]

    },

"3":{
    "show":"1",
    "inprogress":0,

    "name":"Noughts and Crosses Android app",
    "coverimage":"./assets/projects/NandC.png",
    "description":"Native android game app",
    "specifics":["This is a small application built using React and capacitor.js",
                "The app allows players to play the classic game, set their names and keep score of sessions.",
                "This was my second project using the capcitor.js framework",
                "To develop this project I am working on incorporating an API to link to a db to enable multiplayer games"],
    "tags":["Web","App", "React","JS","JSON", "Capacitor"],
    "links":[{"source":"https://github.com/legriffalo/noughts-and-crosses","type":"github"}],

    "general":["data"]
    },


"4":{
    "show":"1",
    "inprogress":0,

    "name":"Finnish vocabulary quiz",
    "coverimage":"./assets/projects/vocabgames.png",
    "description":"Vocabulary App (PWA)",
    "specifics":["I needed a way to quickly practice and expand my Finnish vocabulary, to do this I built a small PWA to use for daily vocab building",
                "The PWA allows building of vocabulary sets on the go and stores them in a JSON object on localStorage it can also load in JSON data sets for use",
                "To develop this project further I plan to replace it with a ts react version."],
    "tags":["Web","Python","JS","JSON", "Data","App"],
    "links":[{"source":"https://github.com/legriffalo-alt/flashcards","type":"github"},
             {"source":"https://legriffalo-alt.github.io/flashcards/flashcards.html","type":"site","dim":"width=500,height=800"}],

    "general":["data"]
    },

"5":{
    "show":"1",
    "inprogress":0,

    "name":"Stop smoking tracker",
    "coverimage":"./assets/projects/stopsmoking.png",
    "description":"PWA for quiting smoking",
    "specifics":["I wanted to quit smoking more effectively",
                "To do this I built a minimal app that monitored/showed my progress",
                "The app is a PWA using PWA manifest that tracks quitting stats and keeps a smoking/quitting log stored using JSON and displayed in a calendar using calendar.js"],
    "tags":["JS","Data","JSON","Web","UI","App"],
    "links":[{"source":"https://github.com/legriffalo/quitting-smoking","type":"github"},
             {"source":"https://legriffalo.github.io/quitting-smoking/stopsmoking.html","type":"site","dim":"width=500,height=800"}],

    "general":["data"]

    },


"6":{
    "show":"1",
    "inprogress":0,

    "name":"Finnish webscraper",
    "coverimage":"./assets/projects/scraping.png",
    "description":"Finnish Words Webscraper (BS4)",
    "specifics":["I needed a database of Finnish words on which to base later learning projects.",
                "To do this I used beautiful soup to crawl finnish grammar websites",
                "Once scraped,my plan was to load the words into a database to form a backend for subsequent projects"],
    "tags":["Python","data","scraping","datamining"],
    "links":[{"source":"https://github.com/legriffalo/finnishvocab/tree/main/Finnish%20scraping%20project","type":"github"}],

    "general":["data"]
    },

"13":{
    "show":"1",
    "inprogress":0,

    "name":"Image storage",
    "coverimage":"./assets/projects/imagestorage.png",
    "description":"Webpage to collect image data",
    "specifics": ["To provide data sets for image recognition for a react project I am building I built a small site to collect handwritten digit data.",
                 "This site collected images of hand written numbers encoded them to base64 and then sends them to SQL database via fetch API.",
                 "The project used Flask in python (Django light) as backend.",
                 "The next step is to build a CNN and pickle it for use in the React project"],
    "tags":["Web","APIs","Backend","SQL","Python","Flask","Data"],
    "links":[{"source":"https://github.com/legriffalo/finnishvocab/tree/main/Numbers%20computer%20vision","type":"github"}],
    
    
    "general":["data"]


    },

"2":{
    "show":"1",
    "inprogress":0,

    "name":"Nordic keyboard converter",
    "coverimage":"./assets/projects/Nordic.png",
    "description":"Python windows application",
    "specifics": ["This project is a more convenient way to use umlaut on the UK keyboard.",
                  "Using pyautoGUI, keyboard and pyinstaller modules NKC tracks all user input and adds hotkeys for umlaut characters"],

    "tags":["Python","App"],
    "links":[{"source":"https://github.com/legriffalo/nordic-keyboard-converter","type":"github"}],

    "general":["data"]

},


"7":{
    "show":"1",
    "inprogress":1,

    "name":"Python data course",
    "coverimage":"./assets/projects/pythoncourse.png",
    "description":"I am writing a Python DS course",
    "specifics": ["The drafting and planning of the course has taken some time",
                  "I produced numerous machine learning models, breaking down the build process in to easy to follow flow charts for students",
                  "The course is currently in a rough draft stage with only 3 initial sessions ready for deployment to UDEMY",
                  "There will be more to follow..."],

    "tags":["Data","ML","Visualisation","Analysis","Python"],
    "links":[{"source":"https://github.com/legriffalo/python-for-ds-course-udemy","type":"github"}],

    "general":["data"]

},

"8":{
    "show":"1",
    "inprogress":1,

    "name":"Mölkky madness app",
    "coverimage":"./assets/projects/molkky.png",
    "description":"A scoring and custom rule making app for Mölkky on web/mobile",
    "specifics": ["During group trips away with friends we always bring our Mölkky set, we like to mix up the rules and add challenges",
                  "I wanted to build an app to help with this.",
                  "Mölkky Madness uses javaScript, html, css hosted on GH-pages for user testing",
                  "The next stage is to run this through the ionoc/capacitor framework to create android APK"],
    "tags":["Web","JavaScript","front-end"],
    "links":[{"source":"https://github.com/legriffalo/molkkymadness","type":"github"},
            {"source":"https://legriffalo.github.io/molkkymadness/","type":"site","dim":"width=500,height=800"}],

    "general":["Web","App","js"]

},

"9":{
    "show":"1",
    "inprogress":0,

    "name":"PowerBI projects",
    "coverimage":"./assets/projects/bi.png",
    "description":"Repo of powerBI experimental projects",
    "specifics": ["I like to keep my BU and data skills sharp.",
                "I have doen some minor consulting/implementation probono for friends and family.",
                "Data for those projects was proprietary so I made analogous versions using open source data." ],
    "tags":["Data","Visualisation","ML"],
    "links":[{"source":"https://github.com/legriffalo/bi-projects","type":"github"}],

    "general":["Data","ML","Visualisation"]

},

"10":{
    "show":"1",
    "inprogress":0,

    "name":"Stop watch mobile app",
    "coverimage":"./assets/projects/timer.png",
    "description":"A simple App built using Capacitor.js",
    "specifics": ["This was my first project using capacitor.js",
                "The app allows users to set timers and keep track of time spent on tasks",
                "I chose to use this as it was an all-in-one file I made for an old js course so I could focus solely on deploying capacitor"                ],
    "tags":["Web","App","JavaScript","front-end"],
    "links":[{"source":"https://github.com/legriffalo/Timer-android-capacitor-app","type":"github"}],

    "general":["web","App","js","capacitor"]

},

"11":{
    "show":"1",
    "inprogress":1,

    "name":"Christmas crackers app",
    "coverimage":"./assets/projects/cracker.png",
    "description":"Jokes database App",
    "specifics": ["This is a first test incorporating SQlite and Typescript into web and android applications using capacitor, the app serves oneliners/cracker jokes from a local db on demand.",
                  "This app uses a mix of LLM generated jokes from an Ollama model and jokes taken from an open dataset to populate a local database in SQLite, this is the backend of the app"
                  ],
    "tags":["Web","TypeScript","front-end","Backend","SQL"],
    "links":[{"source":"https://github.com/legriffalo/christmas-crackers","type":"github"}],

    "general":["web","App","js","capacitor"]

},

"12":{
    "show":"1",
    "inprogress":1,

    "name":"Language app 2",
    "coverimage":"./assets/projects/language2.png",
    "description":"Language web/mobile App",
    "specifics": ["The next iteration of my language app",
                  "This version uses a SQLite database to host a database of 5000 most frequently used Finnish words",
                  "By using SQLite it allows m to leave the PWA format."],
    "tags":["Web","TypeScript","front-end","Backend","tailwind","SQL"],
    "links":[{"source":"https://github.com/legriffalo/language-app-2","type":"github"}],

    "general":["web","App","ts","js","capacitor","SQL"]

}

}`













// "3":{
//     "show":"1",
//     "name":"Vocab database",
//     "coverimage":"./assets/image.png",
//     "description":"Building and managing postgres database for Finnish language projects",
//     "specifics": ["","",""],
//     "tags":["SQL","python","flask","back-end"],
//     "link":{"source":"https://github.com/legriffalo/finnishvocab/tree/main/Database%20management","type":"github"}
//     },

// "4":{
//     "show":"1",
//     "name":"Number recognition",
//     "coverimage":"./assets/image.png",
//     "description":"Building a CNN to read digits for use in Finnish language app",
//     "specifics": ["","",""],
//     "tags":["Tensorflow","python","SQL","datascience","machine learning"],
//     "link":{"source":"","type":"github"}
//     },

// "5":{
//     "show":"1",
//     "name":"Finnish practice app",
//     "coverimage":"./assets/image.png",
//     "description":"Building a CNN to read digits for use in Finnish language app",
//     "specifics": ["","",""],
//     "tags":["Tensorflow","python","SQL","datascience","machine learning"],
//     "link":{"source":"","type":"github"}
//     },

// "6":{
//     "show":"1",
//     "name":"Air quality dashboard",
//     "coverimage":"./assets/image.png",
//     "description":"Building a CNN to read digits for use in Finnish language app",
//     "specifics": ["","",""],
//     "tags":["Tensorflow","python","SQL","datascience","machine learning"],
//     "link":{"source":"","type":"github"}
//     },

// "7":{
//     "show":"1",
//     "name":"10 week Python course",
//     "coverimage":"./assets/image.png",
//     "description":"Building a CNN to read digits for use in Finnish language app",
//     "specifics": ["","",""],
//     "tags":["Tensorflow","python","SQL","datascience","machine learning"],
//     "link":{"source":"","type":"github"}
//     },

// "8":{
//     "show":"1",
//     "name":"10 week Python course",
//     "coverimage":"./assets/image.png",
//     "description":"Building a CNN to read digits for use in Finnish language app",
//     "specifics": ["","",""],
//     "tags":["Tensorflow","python","SQL","datascience","machine learning"],
//     "link":{"source":"","type":"github"}
//     },

// "9":{
//     "show":"1",
//     "name":"10 week Python course",
//     "coverimage":"./assets/image.png",
//     "description":"Building a CNN to read digits for use in Finnish language app",
//     "specifics": ["","",""],
//     "tags":["Tensorflow","python","SQL","datascience","machine learning"],
//     "link":{"source":"","type":"github"}
//     },    

// "10":{
//     "show":"1",
//     "name":"Molkky madness app",
//     "coverimage":"./assets/molkky.png",
//     "description":"A scoring and custom rule making app for web/mobile",
//     "specifics": ["This was built using javaScript, html, css in the first instance to make a webpage to test the useability",
//                   "Then using githubpages and reacte native webview I published it as a mobile app."],
//     "tags":["html","javaScript","css","react-native","googlePlay", "app","web","front-end"],
//     "link":{"source":"https://legriffalo.github.io/molkkymadness/molkky.html","type":"github"}
// }

