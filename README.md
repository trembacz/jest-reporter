# Custom Jest Reporter (jest-reporter)
Jest Reporter with customisable sounds and messages.

[![Build Status](https://travis-ci.org/trembacz/jest-reporter.svg?branch=master)](https://travis-ci.org/trembacz/jest-reporter)
[![Dependencies](https://david-dm.org/trembacz/jest-reporter/status.svg)](https://david-dm.org/trembacz/jest-reporter?view=list) 
[![devDependencies](https://david-dm.org/trembacz/jest-reporter/dev-status.svg)](https://david-dm.org/trembacz/jest-reporter?type=dev&view=list)

## Installing

```npm install --save-dev jest-reporter```

or

```yarn add -D jest-reporter```

## Getting Started

To use this reporter you will need to have an Jest test environment set up.
In your ```package.json``` add new reporter:

```json
"jest": {
  "bail": false,
  "reporters": [
    "default",
    [
      "<rootDir>/node_modules/jest-reporter", {
        "passSound": "sounds/customPass.wav",
        "failSound": "sounds/customFail.wav",
        "passText": "txt/customPass.txt",
        "failText": "txt/customFail.txt",
        "skipFailSound": false,
        "skipFailText": false,
        "skipPassSound": false,
        "skipPassText": false
      }
    ]
  ]
}
```

## Options

| Option              | Value         | Description                                                          |
| ------------------- |:-------------:| -------------------------------------------------------------------- |
| ```passSound```     | ```string```  | Path to sound file e.g "sounds/pass.wav"                             |
| ```failSound```     | ```string```  | Path to sound file e.g "sounds/fail.wav"                             |
| ```passText```      | ```string```  | Path to text file e.g "txt/pass.txt"                                 |
| ```failText```      | ```string```  | Path to text file e.g "txt/fail.txt"                                 |
| ```skipFailSound``` | ```boolean``` | Set to ```true``` if you want to disable sound effect on failed test |
| ```skipFailText```  | ```boolean``` | Set to ```true``` if you want to disable text message on failed test |
| ```skipPassSound``` | ```boolean``` | Set to ```true``` if you want to disable sound effect on passed test |
| ```skipPassText```  | ```boolean``` | Set to ```true``` if you want to disable text message on passed test |

**If you not specify sound or text files, default ones will be used.**

## Run

```npm run jest``` 
or 
```yarn jest```

## Demo
You can even add **ASCII** images in txt files ;)

##
![](http://i.imgur.com/k2xi9sC.jpg) 
##
![](http://i.imgur.com/DfHS05v.jpg)

## Windows users
**You need "mplayer" installed on your system**

**Tip:** Copy ```mplayer.exe``` into folder with ```package.json```

## LICENSE
[MIT](LICENSE)
