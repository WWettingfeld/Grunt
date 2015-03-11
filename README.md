# Grunt
This is a quick example on how to use Grunt.js from the very beginning with node.js. You are expected to know JSON and Windows. For the more inclined, most of this information, I received from the following website: http://www.smashingmagazine.com/2013/10/29/get-up-running-grunt/

## Install Node.js

1. Go to https://nodejs.org/
2. Click the Install button
3. Execute the downloaded .msi and follow instructions

## Install Grunt.js

1. Run Node.js
2. Execute "$ npm install -g grunt-cli"
3. Ensure Grunt is installed with "$ grunt --version"

## Creating a Project

Creating a project is as simple as having a folder with two files in it:
* package.json
* Gruntfile.js

package.json describes the project and its dependencies. Gruntfile.js describes how the project will use its dependencies with various configurations.

Once a package.json is created, go to the root of the project and call
```
$ npm install
```

This will install in /node_modules all the dependencies for the project as determined in your package.json.  If you decide to add any additional at a later time, just call it again.

## Running Grunt

Running Grunt tasks can be achieved through command line at the root of the project.
```
$ grunt <node_module>   // runs the specific node_module specific e.g. watch 
```
