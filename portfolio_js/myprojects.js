// link types are; github, web, download

const data = `{

"1":{
    "name":"Finnish webscraper",
    "coverimage":"./portfolio_assets/image.png",
    "description":"The intial scraping phase of a larger project",
    "specifics":["I needed a database of Finnish words on which to base later learning projects.",
                "To do this I used beautiful soup to crawl finnish grammar websites",
                "Once scraped the data was built in to a database to form a backend for subsequent projects"],
    "tags":["Python","data","scraping","datamining"],
    "link":{"source":"https://github.com/legriffalo/finnishvocab/tree/main/Finnish%20scraping%20project","type":"github"},
    "general":["data"]
    },

"2":{
    "name":"Image storage",
    "coverimage":"./portfolio_assets/image.png",
    "description":"Webpage to facilitate collecting image for CNN image recognition projects",
    "specifics": ["To provide data sets for image recognition I built a site to collect handwritten data",
                 "This site collects hand written numbers and sends them to SQL database via fetch API",
                 "To enable updates to the database to be safe from SQL injection I used a flask server as a go between." ],
    "tags":["html","javaScript","css","api","web","front-end","SQL","python","flask","back-end"],
    "link":{"source":"","type":"web"},
    "general":["data","coding","web"]
    },

"3":{
    "name":"Vocab database",
    "coverimage":"./portfolio_assets/image.png",
    "description":"Building and managing postgres database for Finnish language projects",
    "specifics": ["","",""],
    "tags":["SQL","python","flask","back-end"],
    "link":{"source":"","type":"github"}
    },

"4":{
    "name":"Number recogntion",
    "coverimage":"./portfolio_assets/image.png",
    "description":"Building a CNN to read digits for use in Finnish language app",
    "specifics": ["","",""],
    "tags":["Tensorflow","python","SQL","datascience","machine learning"],
    "link":{"source":"","type":"github"}
    },

"5":{
    "name":"Finnish practice app",
    "coverimage":"./portfolio_assets/image.png",
    "description":"Building a CNN to read digits for use in Finnish language app",
    "specifics": ["","",""],
    "tags":["Tensorflow","python","SQL","datascience","machine learning"],
    "link":{"source":"","type":"github"}
    },

"6":{
    "name":"Air quality dashboard",
    "coverimage":"./portfolio_assets/image.png",
    "description":"Building a CNN to read digits for use in Finnish language app",
    "specifics": ["","",""],
    "tags":["Tensorflow","python","SQL","datascience","machine learning"],
    "link":{"source":"","type":"github"}
    },

"7":{
    "name":"10 week Python course",
    "coverimage":"./portfolio_assets/image.png",
    "description":"Building a CNN to read digits for use in Finnish language app",
    "specifics": ["","",""],
    "tags":["Tensorflow","python","SQL","datascience","machine learning"],
    "link":{"source":"","type":"github"}
    },

"8":{
    "name":"10 week Python course",
    "coverimage":"./portfolio_assets/image.png",
    "description":"Building a CNN to read digits for use in Finnish language app",
    "specifics": ["","",""],
    "tags":["Tensorflow","python","SQL","datascience","machine learning"],
    "link":{"source":"","type":"github"}
    },

"10":{
"name":"Molkky madness app",
"coverimage":"./portfolio_assets/image.png",
"description":"A scoring and custom rule making app for web/mobile",
"specifics": ["This was built using javaScript, html, css in the first instance to make a webpage to test the useability",
                "Then using githubpages and reacte native webview I published it as a mobile app."],
"tags":["html","javaScript","css","react-native","googlePlay", "app","web","front-end"],
"link":{"source":"","type":"github"}
}

}`