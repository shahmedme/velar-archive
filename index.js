/*
 *  
 *  Velar v1.0.0
 *  https://github.com/shakilahmmeed/velar.git
 * 
 *  Date: 13-03-2019
 * 
 */


const request = require('request'),
      download = require('download-file');

module.exports = {
    create: create
};

function create(vendor, dir) {
    vendor = Object.entries(vendor);
    
    for ([name, version] of vendor) {
        get(name, version, dir);
    }
}

function get(nm, vrsn, dr) {
    request(`https://api.cdnjs.com/libraries?search=${nm}&fields=assets`, { json: true }, (err, res, body) => {
        if (err) {
            return console.log(err); 
        }

        for (x in body.results[0].assets) {

            // SELECTING VERSION
            if (body.results[0].assets[x].version == vrsn) {

                // RETRIVING THE FILES NAME
                var files = body.results[0].assets[x].files

                console.log('downloading ' + nm + ' ' + 'v' + vrsn);

                // CREATING THE FILES WITH DIRECTORIES
                for (y in files) {
                    var options = {
                        directory: dr + 'vendor/' + nm + '/',
                        filename: files[y].split('/')[1]
                    };

                    var url = 'https://cdnjs.cloudflare.com/ajax/libs/' + nm + '/' + vrsn + '/' + files[y];
                    // console.log('downloading ' + files[y] + '...')

                    download(url, options, function(err) {
                        if (err) {
                            console.log(err)
                        }
                    })
                }
            }
        }
    });
}