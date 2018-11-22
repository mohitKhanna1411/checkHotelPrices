var scraper = require('google-search-scraper');

exports.checkHotelPrices = function (req, res) {

    var options = {
        query: req.body.hotelName +' '+req.body.checkInDate+' '+req.body.duration,
        limit: 10
    };
    let result = [];
    let id = 0;
    scraper.search(options, function(err, url, meta) {
        // This is called for each result
        if(err) throw err;
        result.push({id : id, siteName: meta.title, siteURL : url, price : meta.meta});
        id++;
        result.id = id;
        console.log(meta);
        // console.log(meta.title);
        // console.log(meta.meta);
        // console.log(meta.desc);

        if(options.limit === id){
            res.send(JSON.stringify(result));
        }
    });

};