from node

maintainer leansocket

workdir /workspace
copy . /workspace

expose 80

run 'npm install'
run 'npm run prod'
