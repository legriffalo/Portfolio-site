// link types are; github, web, download

const data = `{

"1":{
    "show":"1",
    "name":"Finnish webscraper",
    "coverimage":"./assets/image.png",
    "description":"The intial scraping phase of a larger project",
    "specifics":["I needed a database of Finnish words on which to base later learning projects.",
                "To do this I used beautiful soup to crawl finnish grammar websites",
                "Once scraped the data was built in to a database to form a backend for subsequent projects"],
    "tags":["Python","data","scraping","datamining"],
    "link":{"source":"https://github.com/legriffalo/finnishvocab/tree/main/Finnish%20scraping%20project","type":"github"},
    "general":["data"],
    "otherlinks":[]
    },

"2":{
    "show":"1",
    "name":"Image storage",
    "coverimage":"./assets/image.png",
    "description":"Webpage to facilitate collecting image for CNN image recognition projects",
    "specifics": ["To provide data sets for image recognition I built a site to collect handwritten data",
                 "This site collects hand written numbers and sends them to SQL database via fetch API",
                 "To enable updates to the database to be safe from SQL injection I used a flask server as a go between." ],
    "tags":["html","javaScript","css","api","web","front-end","SQL","python","flask","back-end"],
    "link":{"source":"","type":"web"},
    "general":["data","coding","web"],
    "otherlinks":[]

    },

"3":{
    "show":"1",
    "name":"Vocab database",
    "coverimage":"./assets/image.png",
    "description":"Building and managing postgres database for Finnish language projects",
    "specifics": ["","",""],
    "tags":["SQL","python","flask","back-end"],
    "link":{"source":"https://github.com/legriffalo/finnishvocab/tree/main/Database%20management","type":"github"}
    },

"4":{
    "show":"1",
    "name":"Number recognition",
    "coverimage":"./assets/image.png",
    "description":"Building a CNN to read digits for use in Finnish language app",
    "specifics": ["","",""],
    "tags":["Tensorflow","python","SQL","datascience","machine learning"],
    "link":{"source":"","type":"github"}
    },

"5":{
    "show":"1",
    "name":"Finnish practice app",
    "coverimage":"./assets/image.png",
    "description":"Building a CNN to read digits for use in Finnish language app",
    "specifics": ["","",""],
    "tags":["Tensorflow","python","SQL","datascience","machine learning"],
    "link":{"source":"","type":"github"}
    },

"6":{
    "show":"1",
    "name":"Air quality dashboard",
    "coverimage":"./assets/image.png",
    "description":"Building a CNN to read digits for use in Finnish language app",
    "specifics": ["","",""],
    "tags":["Tensorflow","python","SQL","datascience","machine learning"],
    "link":{"source":"","type":"github"}
    },

"7":{
    "show":"1",
    "name":"10 week Python course",
    "coverimage":"./assets/image.png",
    "description":"Building a CNN to read digits for use in Finnish language app",
    "specifics": ["","",""],
    "tags":["Tensorflow","python","SQL","datascience","machine learning"],
    "link":{"source":"","type":"github"}
    },

"8":{
    "show":"1",
    "name":"10 week Python course",
    "coverimage":"./assets/image.png",
    "description":"Building a CNN to read digits for use in Finnish language app",
    "specifics": ["","",""],
    "tags":["Tensorflow","python","SQL","datascience","machine learning"],
    "link":{"source":"","type":"github"}
    },

"9":{
    "show":"1",
    "name":"10 week Python course",
    "coverimage":"./assets/image.png",
    "description":"Building a CNN to read digits for use in Finnish language app",
    "specifics": ["","",""],
    "tags":["Tensorflow","python","SQL","datascience","machine learning"],
    "link":{"source":"","type":"github"}
    },    

"10":{
    "show":"1",
    "name":"Molkky madness app",
    "coverimage":"./assets/molkky.png",
    "description":"A scoring and custom rule making app for web/mobile",
    "specifics": ["This was built using javaScript, html, css in the first instance to make a webpage to test the useability",
                  "Then using githubpages and reacte native webview I published it as a mobile app."],
    "tags":["html","javaScript","css","react-native","googlePlay", "app","web","front-end"],
    "link":{"source":"https://legriffalo.github.io/molkkymadness/molkky.html","type":"github"}
}

}`