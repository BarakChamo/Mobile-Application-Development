## Class 1 - Introduction

In this class we'll be learning how to build cross-platform mobile applications using [React Native](https://facebook.github.io/react-native/), a framework developed and maintained by Facebook.

Using React Native will let us use JavaScript to build native-quality applications using a language we know, and deploy our apps to both Android and iOS with minimal effort or changes to code.

To run our code and manage the development environment we'll use [Expo](https://expo.io/), a project built on top of React Native that provides advanced runtime tools and utilities for sharing, testing and publishing code (such as a nifty QR code based mobile testing app and 1-click app publishing).

Let's get started using Expo!

(before we get started though, follow the setup steps detailed in the assignment below)


#### 1. Test an example `Expo Snack` on your phone

1. Open `Expo Snack`
In your browser, go to `https://snack.expo.io/`, you'll see a web-based editor with example React Native code.
2. Press the `Run` button at the top right of the screen.
3. In the popup window, choose `QR Code` and scan the QR code in the `Expo` app on your iOS or Android device.

Testing and viewing Expo apps in realtime is as easy as scanning the QR code and viewing the result on your phone.
Try changing the text or messing with the code a little, you'll see the view on your phone change in real time when you hit `Save`.

#### 2. Create a local blank project and test it your phone
If you're not comfortable with using Terminal, follow [this help section](https://github.com/BarakChamo/Mobile-Application-Development/blob/master/help/Using%20Git.md).

1. Follow the instructions in the assignment below to install the `expo-cli` tools in your local machine.
2. Run `expo-cli init {NAME}` in your terminal, replace `{NAME}` with however you'd like to name your project.
3. When propmted, choose an initialization template, `blank` is a good place to start.
4. Fill in the name when prompted and hit `Enter`, the installation should run through a few things before completing.
5. `cd` into your project folder by however you called it. For example, if you ran `expo-cli init example`, navigate to `cd example`.
6. To run the project, run `npm start` inside the project folder.
7. Expo will run the server and open a browser window, wait for it load and a QR Code should appear in the bottom right.
8. Make sure your phone is on the same WiFi network as your computer and scan the QR Code.
  - On Android, the Expo app will have a QR Code scanner.
  - On iOS use the camera app, it has a hidden QS scanner.


### Resources


### Assignment - prep
For next week, please install all the prerequisite tools and software to be ready to begin mobile application development on your computer and phone.

These tools will facilitate modern, iterative application development on both your computer and your phones and allow you to debug, test and publish you applications easily.

1. Signup for GitHub

Sign up for a GitHub account [here](https://github.com/join).


2. Install Git on development computer

Follow the installation process for your OS [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).


3. Install Visual Studio Code

Download Visual Studio Code [here](https://code.visualstudio.com) and follow the installation.
Install the VS Code React Native Extensions from [here](https://github.com/Microsoft/vscode-react-native).


4. Install Node.js and the Node Package Manager (`npm`)

Download and install Node.js from [here](https://nodejs.org/en/download/), the installation includes `npm`.


5. Signup for Expo, install Expo and the React-Native Command Line interface

Signup for an Expo account [here](https://expo.io/signup).
Follow instructions to install the Expo CLI tools and mobile application [here](https://expo.io/tools).

