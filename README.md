## Vereisten

**Git bash** – gebruiken als terminal

**Flutter installeren** - (werkt in ieder geval met versie 3.7.9)

**Node installeren** - (werkt in ieder geval met versie 16.20.0, npm versie 8.19.4)

**Python** – (werkt in ieder geval met Python 3.10.10)

## Installatie

- git clone [https://github.com/XieJiSS/rustdesk.git](https://github.com/XieJiSS/rustdesk.git)
- cd rustdesk
- git switch fix\_build

### Vervangen rendezvous server/host

**In bestand:** /libs/hbb\_common/src/config.rs **pub const RENDEZVOUS\_SERVERS vervangen met:**

pub const RENDEZVOUS\_SERVERS: &'static [&'static str] = &[

"supportdesk.itportaal.nl",

];

**In bestand:** /flutter/web/js/src/connection.ts **const HOSTS vervangen met:**

const HOSTS = [

"supportdesk.itportaal.nl",

];

### Packages installeren

- cd flutter/web/js
- npm install ts-proto
- npm install [vite@2.8](mailto:vite@2.8)
- npm install yarn -g
- npm install typescript -g
- npm install protoc -g
- yarn build

### web\_deps toevoegen

**In folder:** /flutter/web

plaats volgend bestand in deze folder: https://github.com/rustdesk/doc.rustdesk.com/releases/download/console/web\_deps.tar.gz

- tar xzf web\_deps.tar.gz

## Debuggen

**In folder:** /flutter folder

- flutter run -d chrome