(function() {
  var app = angular.module('farmSanctuary', []);

  app.controller('FarmController', function(){
    this.animals = cows;
  });

  app.controller('AdoptionController', function() {
  	this.firstName = "firstName";
  	this.lastName = "lastName";
  });

  app.controller('PanelController', function() {
  	this.tab = 1;
  	//this function is setting which is why there is no "return"
  	this.selectTab = function(setTab) {
  		this.tab = setTab;
  	};
  	//this function is asking which is why there is a "return"
  	this.isSelected = function(checkTab){
  		return this.tab == checkTab;
  	}
  });

  app.controller('CommentController', function() {
  	this.comment = {};
  	this.addComment = function(animal) {
  		animal.comments.push(this.comment);
  		this.comment = {};
  	}
  });

  var cows = [ 
  {
    name: 'Henry Coolidge',
    age: 4,
    color: 'brown',
    origin: 'New Jersey',
    history: 'Henry was first from.... ',
    description: 'Henry has a great personality... ',
    schedule: 'Henry eats a lot, starting at.... ',
    canAdopt: true,
    newAddition: true,
    images: [
    {
    	full: '/images/cow13.jpg',
    	thumb: '/images/cow14.jpg'
    },
    {
    	full: '/images/cow15.jpg',
    	thumb: '/images/cow11.jpg'
    }
    ],
    comments: [
    {
    	emotion:'Happy',
    	text: 'We love Henry!',
    	author: "Megan Smith"
    },
    {
    	emotion: 'Super Happy',
    	text: 'Henry is adorable',
    	author: 'Sarah Marks'
    },
    {
    	emotion: 'Happy',
    	text: 'We want to adopt Henry!',
    	author: 'Ralph Miller'
    }
    ]
  },
  {
    name: 'Molly Moo',
    age: 2,
    color: 'brown and black',
    origin: 'New Hampshire',
    history: 'Molly Moo was first from.... ',
    description: 'Molly Moo has a great personality... ',
    schedule: 'Molly Moo eats a lot, starting at.... ',
    newAddition: true,
	images: [
    {
    	full: '/images/cow1.jpg',
    	thumb: '/images/cow2.jpg'
    },
    {
    	full: '/images/cow3.jpg',
    	thumb: '/images/cow4.jpg'
    }
    ],
    comments: [
    {
    	emotion:'Happy',
    	text: 'We love Henry!',
    	author: "Megan Smith"
    },
    {
    	emotion: 'Super Happy',
    	text: 'Henry is adorable',
    	author: 'Sarah Marks'
    },
    {
    	emotion: 'Happy',
    	text: 'We want to adopt Henry!',
    	author: 'Ralph Miller'
    }
    ]    
  },
  {
    name: 'Phillip Simon',
    age: 5,
    color: 'brown and white',
    origin: 'Colorado',
    history: 'Phillip Simon was first from.... ',
    description: 'Phillip Simon has a great personality... ',
    schedule: 'Phillip Simon eats a lot, starting at.... ',
    newAddition: true,
    images: [
    {
    	full: '/images/cow5.jpg',
    	thumb: '/images/cow6.jpg'
    },
    {
    	full: '/images/cow7.jpg',
    	thumb: '/images/cow8.jpg'
    }
    ],
    comments: [
    {
    	emotion:'Happy',
    	text: 'We love Henry!',
    	author: "Megan Smith"
    },
    {
    	emotion: 'Super Happy',
    	text: 'Henry is adorable',
    	author: 'Sarah Marks'
    },
    {
    	emotion: 'Happy',
    	text: 'We want to adopt Henry!',
    	author: 'Ralph Miller'
    }
    ]
  },
  {
    name: 'Cindy Sally',
    age: 6,
    color: 'brown',
    origin: 'Montana',
    history: 'Cindy Sally was first from.... ',
    description: 'Cindy Sally has a great personality... ',
    schedule: 'Cindy Sally eats a lot, starting at.... ',
    newAddition: true,
    images: [
    {
    	full: '/images/cow9.jpg',
    	thumb: '/images/cow10.jpg'
    },
    {
    	full: '/images/cow11.jpg',
    	thumb: '/images/cow12.jpg'
    }
    ],
    comments: [
    {
    	emotion:'Happy',
    	text: 'We love Henry!',
    	author: "Megan Smith"
    },
    {
    	emotion: 'Super Happy',
    	text: 'Henry is adorable',
    	author: 'Sarah Marks'
    },
    {
    	emotion: 'Happy',
    	text: 'We want to adopt Henry!',
    	author: 'Ralph Miller'
    }
    ]
  }      
  ]
})();


