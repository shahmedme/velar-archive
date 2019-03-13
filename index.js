/*
 *  
 *  name: Velar
 *  version: 1.0.2
 *  repo: https://github.com/shakilahmmeed/velar.git
 * 
 *  author: Shakil Ahmed
 *  twitter: @shakilahmmeed
 * 
 *  date: 13-03-2019
 * 
 */


const request = require('request'),
      download = require('download-file'),
      empty = require('empty-folder');

module.exports = {
    create: create
};

function create(vendor, dir = '') {
    vendor = Object.entries(vendor);
    
    for ([name, version] of vendor) {
        get(name, version, dir);
    }
}

function get(nm, vrsn, dr) {
    request(`https://api.cdnjs.com/libraries?search=${nm}&fields=assets`, { json: true }, (err, res, body) => {
        if (err) {return console.log(err)}

        if(vrsn == 'latest') {
            var files = body.results[0].assets[0].files,
                vrsnn = body.results[0].assets[0].version;
            
            empty(dr + 'vendor/' + nm, false, (o) => {
                if(o.err) {
                    console.error(o.error);
                }
            })
            console.log('downloading ' + nm + ' ' + 'v' + vrsnn);
            dwnld(nm, vrsnn, files, dr);
        }
        
        else {
            for (x in body.results[0].assets) {
                if (body.results[0].assets[x].version == vrsn) {
                    var files = body.results[0].assets[x].files

                    empty(dr + 'vendor/' + nm, false, (o) => {
                        if(o.err) {
                            console.error(o.error);
                        }
                    })
                    console.log('downloading ' + nm + ' ' + 'v' + vrsn);
                    dwnld(nm, vrsn, files, dr);
                }
            }
        }
    });
}

function dwnld (name, version, files, dir) {
    for (y in files) {
        var options = {
            directory: dir + 'vendor/' + name + '/',
            filename: files[y].split('/')[1]
        };
        var url = 'https://cdnjs.cloudflare.com/ajax/libs/' + name + '/' + version + '/' + files[y];

        download(url, options, function(err) {
            if (err) { console.log(' ' + ' ' + err + ' while downloading ' + options.filename) }
        })
    }
}