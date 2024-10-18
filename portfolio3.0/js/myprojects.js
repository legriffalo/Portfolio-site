// link types are; github, web, download

const data = `{

"1":{
    "show":"1",
    "inprogress":0,
    "name":"Speedia extension",
    "coverimage":"./assets/projects/speedia.png",
    "description":"Building a chrome extension",
    "specifics":["I got tired of being locked at a set media speed on training videos/site",
                "So I decided to build an extension to help me speed things up.",
                "Using Manifest 3.0 and web languages I built an extension that allows media playback changes and has a useful speed reader"],
    "tags":["JS","Web","UI","API"],
    
    "links":[{"source":"https://github.com/legriffalo/speedmedia-chrome-extension","type":"github"}],

    "general":["data"]

    },


"2":{
    "show":"1",
    "inprogress":1,

    "name":"Finnish vocabulary quiz",
    "coverimage":"./assets/projects/vocabgames.png",
    "description":"The intial MVP phase of larger project",
    "specifics":["I needed a way to quickly practice and expand my Finnish vocabulary",
                "To do this I built a small PWA to load on to my phone to use for daily vocab building",
                "I used my data base of finnish words and a Python script to create JSON flashcards sets.",
                "These can be loaded into the vocab PWA to be used",
                "A set of 5000 words will be hosted on a simple sit to make this process simpler"],
    "tags":["Web","Python","JS","UI","PWA","JSON", "Data","App"],
    "links":[{"source":"https://github.com/legriffalo-alt/flashcards","type":"github"},
             {"source":"https://legriffalo-alt.github.io/flashcards/flashcards.html","type":"site","dim":"width=500,height=800"}],

    "general":["data"]
    },

"3":{
    "show":"1",
    "inprogress":0,

    "name":"Stop smoking tracker",
    "coverimage":"./assets/projects/stopsmoking.png",
    "description":"The intial scraping phase of a larger project",
    "specifics":["I wnated to quit smoking more effectively",
                "To do this I wanted an accountability app that monitored/showed my progress",
                "I had previously struggled to appreciate 3rd party apps so I made my own",
                "The app is a PWA using manifest that tracks quitting stats and keeps a smoking/quitting log in a calendar using calendar.js"],
    "tags":["JS","Data","JSON","Web","UI","App"],
    "links":[{"source":"https://github.com/legriffalo/finnishvocab/tree/main/Finnish%20scraping%20project","type":"github"},
             {"source":"https://legriffalo.github.io/quitting-smoking/stopsmoking.html","type":"site","dim":"width=500,height=800"}],

    "general":["data"]

    },


"4":{
    "show":"1",
    "inprogress":0,

    "name":"Finnish webscraper",
    "coverimage":"./assets/projects/scraping.png",
    "description":"The intial scraping phase of a larger project",
    "specifics":["I needed a database of Finnish words on which to base later learning projects.",
                "To do this I used beautiful soup to crawl finnish grammar websites",
                "Once scraped,my plan was to load the words into a database to form a backend for subsequent projects"],
    "tags":["Python","data","scraping","datamining"],
    "links":[{"source":"https://github.com/legriffalo/finnishvocab/tree/main/Finnish%20scraping%20project","type":"github"}],

    "general":["data"]
    },

"5":{
    "show":"1",
    "inprogress":0,

    "name":"Image storage",
    "coverimage":"./assets/projects/imagestorage.png",
    "description":"Webpage to facilitate collecting image for CNN image recognition projects",
    "specifics": ["To provide data sets for image recognition I built a site to collect handwritten data",
                 "This site collects hand written numbers and sends them to SQL database via fetch API",
                 "To enable updates to the database to be safe from SQL injection I used a flask server as a go between." ],
    "tags":["Web","APIs","Backend","SQL","Python","Flask","Data"],
    "links":[{"source":"","type":"web"}],
    
    
    "general":["data"]


    },

"6":{
    "show":"1",
    "inprogress":1,

    "name":"Nordic keyboard converter",
    "coverimage":"./assets/projects/Nordic.png",
    "description":"Python application to add unicode access hotkey to Windows",
    "specifics": ["",
                  "",
                  "",
                  "",
                  ""],
    "tags":["Python","App"],
    "links":[{"source":"https://legriffalo.github.io/molkkymadness/molkky.html","type":"github"}],

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
                  "The course is currently in a rough draft stage with only 3 initial sessions ready for deployment",
                  "There will be more to follow..."],
    "tags":["Data","ML","Visualisation","Analysis","Python"],
    "links":[{"source":"https://legriffalo.github.io/molkkymadness/molkky.html","type":"github"}],

    "general":["data"]

},

"8":{
    "show":"1",
    "inprogress":1,

    "name":"Mölkky madness app",
    "coverimage":"./assets/projects/molkky.png",
    "description":"A scoring and custom rule making app for Mölkky on web/mobile",
    "specifics": ["During group trips away we always bring our Mölkky set, sometimes we like to mix up the rules and add challenges, managing these on paper was tedious so I built a better way",
                  "Mölkky Madness was built using javaScript, html, css in the first instance to make a webpage to test the useability",
                  "The next stage is to embed the GH-pages version in React-Native to produce an Android application"],
    "tags":["Web","JavaScript","front-end"],
    "links":[{"source":"https://legriffalo.github.io/molkkymadness/molkky.html","type":"github"}],

    "general":["Web","App"]

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

