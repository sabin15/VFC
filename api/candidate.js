var district_model=require('../models/districts');
var fptp_candidate_model=require('../models/fptp_candidate');
var ObjectID=require('mongodb').ObjectID;
const voterModel = require('../models/voters');


module.exports={
    fetch_Constituency: function(req, res){
        var dist_name=req.params.district_name;
        district_model.findOne({district_name: dist_name}, function(err, dist){
            if(err)
                throw err;
            console.log(dist);
            if(!err && dist)
                res.json({no_of_Hor: dist.no_of_Hor, no_of_Prov: dist.no_of_prov});
        });

    },
     
    get_fptp_candidate_info: function(req, res)
    {
        if(req.query.id)
        {
            console.log(req.query.id);
            fptp_candidate_model.findById( req.query.id, function(err, doc){
                // console.log("Printing");
                // console.log(doc);
                if (!err) {
                    res.json(doc);
                } else {
                    res.status(500).send(err).end();
                }
            });
            
        }
    },
    get_fptp_candidate_list: function(req, res)
    {
        fptp_candidate_model.find(function(err, docs){
           
        res.json(docs);
    });
    }
};