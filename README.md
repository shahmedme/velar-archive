# Features of Velar

  - **Quick start your new project**
 - **Download dependencies easily**
 - **Switch dependencies version**

## Installation

> npm install velar

## Documentation

Velar provide only one method. It is ***create(arg1, arg2)*** where argument ***arg1*** is a JSON object of your dependencies and ***arg2*** is the directory where vendor folder will be created. Inside the vendor folder all of you dependencies will be placed.

## Sample Usage
create ***velar.js*** file on root folder of you project and paste the following code.

    const velar = require('velar')
    
    var dir =  'src/assets/',
        vendor = {
            "jquery": "3.3.1",
            "OwlCarousel2": "2.3.4",
            "twitter-bootstrap": "4.3.1",
            "vue": "2.6.8"
        }

    velar.create(vendor, dir)

Then run 

> node velar.js

from your terminal.

## Dependency Name and Version
***arg1*** is all about a JSON object which contain information about dependencies and their version. Dependencies name should be matched with [cdnjs](https://cdnjs.com/) as Velar download all dependencies from cdnjs.


## Switch Dependencies Version
![enter image description here](https://lh3.googleusercontent.com/r25BnFLanbL0Y1W4qrbJCpGFTKdsWUA0jRTfZg-Q4lYAjMSnzFxLcWEtfAc-3Z-5mK4PxMt67rk)

just change the version from JSON object and run ***velar.js*** again then see the magic!!! Version of your dependencies will automatically changed.

## Want to Contribute?
Thanks for being interested to contribute this project. please join with Velar Community on [discord server](https://discord.gg/TkmZ9Pt) also [this link](https://github.com/shakilahmmeed/velar) will help you.
