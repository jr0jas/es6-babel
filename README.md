# es6-babel
This an example about how works with ES6 and Babel.

## Step 1: Install the Sample Application

1. Clone the es6-babel repository:

```
git clone https://github.com/jr0jas/es6-babel.git
```

## Step 2: Set Up Babel

1. Open a command prompt, and navigate (cd) to the es6-babel directory.

Type the following command to create a package.json file:
```
npm init
```
Press the Return key in response to all the questions to accept the default values.

2. Type the following command to install the babel-cli and babel-core modules:
```
npm install babel-cli babel-core --save-dev
```
There are different ways to install and run Babel. For example, you could also install Babel globally and run it from the command line. Refer to the Babel documentation for more information.

3. Type the following command to install the ECMAScript 2015 preset:
```
npm install babel-preset-es2015 --save-dev
```

In Babel 6, every transformer is a plugin that can be installed separately. A preset is a group of related plugins. Using a preset, you don’t have to install and update dozens of plugins individually.

4. Install http-server in your project. http-server is a lightweight web server we use to run the application locally during development. 

```
npm install http-server --save-dev
```

We are using a local web server because some parts of this tutorial require the application to be loaded using the http protocol and will not work if loaded using the file protocol.

5. Open package.json in your favorite code editor. In the scripts section, remove the test script, and add two new scripts: a script named babel that compiles scripts.js to a version of ECMAScript that can run in current browsers, and a script named start that starts the local web server. The scripts section should now look like this:

```
  "scripts": {
    "babel": "babel --presets es2015 js/scripts.js -o build/scripts.bundle.js",
    "start": "http-server"
  },
```

In the es6-babel directory, create a build directory to host the compiled version of the application.

## Step 3: Build and Run

1. v
1. w

