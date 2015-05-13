#!/bin/bash
curl https://raw.githubusercontent.com/creationix/nvm/v0.23.3/install.sh | bash
echo "source /home/vagrant/.nvm/nvm.sh" >> /home/vagrant/.profile
source /home/vagrant/.profile
nvm install 0.12
nvm alias default 0.12
npm install -g webpack

echo "export DEBUG='* node index.js'" >> /home/vagrant/.bashrc
echo "export NODE_DEBUG='* node index.js'" >> /home/vagrant/.bashrc
echo "export PORT='3000'" >> /home/vagrant/.bashrc