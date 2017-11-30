
##Installation Instructions:##

###Install Necessary Packages:###
```
This installs n for easy nodejs management (includes npm):

curl -L http://git.io/n-install | bash
```

```
Note: Install Ruby before doing this step

sudo gem install listen
sudo gem install sass

npm install --global browserify watchify exorcist
```

##Create Environment Variables##
```
cp .template.env .env
```

Don't forget to edit .env to the appropriate configs


##Run Application: Development##
```
./runserver.sh dev
```

##Run Application: Production##
```
./runserver.sh
```

Then go to:
http://localhost:8000/

