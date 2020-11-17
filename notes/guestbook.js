(function() {
  // Review controller contains both aggregation of reviews and individual review objects. This is sloppy but I got lazy.
  var app = angular.module('formPreviewer', [] );
  app.controller('reviewController', function() {
    this.reviews = [];
    this.review = {};
    initializeReviewDate(this.review);
    
    this.addReview = function() { 
      this.reviews.push(this.review);
      this.review = {};
      initializeReviewDate(this.review);
    };
    
    // helper function
    function initializeReviewDate(review) {
      var todaysDate = new Date().toJSON().slice(0,10);
      review.date = todaysDate;
    }
  });
  

  
})();