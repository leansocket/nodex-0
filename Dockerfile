from node

maintainer leansocket

workdir /workspace
copy . /workspace

expose 80

run npm install

cmd npm run prod
