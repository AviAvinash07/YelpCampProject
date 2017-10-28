var mongoose = require("mongoose");
var Campground  = require("./models/campground")
var Comment     = require("./models/comment");

var data = [
        {
            name: "Clouds Rest",
            image: "https://farm8.staticflickr.com/7293/9705520990_c914a4c524.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio consectetur, ad minima vel? Sint nihil quo voluptas, unde minus, atque, maiores ad, exercitationem voluptatem nobis esse quam ea sunt laboriosam."
        },
        {
            name: "Desert camping",
            image: "https://farm4.staticflickr.com/3922/15186756959_2b94ea5fe6.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio consectetur, ad minima vel? Sint nihil quo voluptas, unde minus, atque, maiores ad, exercitationem voluptatem nobis esse quam ea sunt laboriosam."
        },
        {
            name: "Forest Fest",
            image: "https://farm8.staticflickr.com/7246/7468674992_b8db31480e.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio consectetur, ad minima vel? Sint nihil quo voluptas, unde minus, atque, maiores ad, exercitationem voluptatem nobis esse quam ea sunt laboriosam."
        }
    ];

function seedDB(){
    Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }
    console.log("removed campgrounds!");
        // ADD A FEW CAMPGROUNDS
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else{
                    console.log("Added a campground");
                    // CREATE A COMMENT
                    Comment.create({
                        text: "This the heaven on earth",
                        author: "Rockr"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else{
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                    });
                }
            });    
        });
    }); 
    // ADD A FEW COMMENTS
}

module.exports = seedDB;

