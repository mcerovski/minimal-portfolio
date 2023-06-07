docker build . -t dockerized-vite
docker run -p 3000:3000 --rm -d dockerized-vite

//Install app localy
npm install

//un app localy
npm run dev 

//Install github pages
npm install gh-pages --save-dev