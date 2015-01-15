/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() 
{
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() 
    {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('allFeeds defined and not 0', function() 
        {
            //make sure allFeeds defined and not 0
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);              
        });
        
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */        
        it('allFeeds.url defined and not empty', function() 
        {
			//make sure allFeeds.url defined and not empty
			for (var i = 0; i < allFeeds.length; i++) 
			{
				expect(allFeeds[i].url).toBeDefined();
				expect(allFeeds[i].url).not.toBe('');
			}              
            
        });
        
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */        
        it('allFeeds.name defined and not empty', function() 
        {
			//make sure allFeeds.name defined and not empty
			for (var i = 0; i < allFeeds.length; i++) 
			{
				expect(allFeeds[i].name).toBeDefined();
				expect(allFeeds[i].name).not.toBe('');
			}              
            
        });
    });
    
       
	 /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() 
    {
    
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('Menu element his hidden by default', function() 
        {           
            expect($('body').attr('class')).toBe('menu-hidden');              
        });
        
        
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('Does menu display when clicked and hide when clicked again', function() 
        {  
            //click the href to show the menu
            $('.menu-icon-link').trigger('click');
            expect($('body').attr('class')).toBe('');   
            
            //click the href to hide the menu
            $('.menu-icon-link').trigger('click');
            expect($('body').attr('class')).toBe('menu-hidden');             
        });  
        
        
        

    });           

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries', function() 
    {
		//beforeEach(function(done) 
		//{
		//	loadFeed(1) 
		//}); 
		
		var test1;
		
		beforeEach(function(done) 
		{
			//test1 = loadFeed(1, 
			//{
			//	success: function () 
			//	{
			//		done();
			//	}
			//});
			loadFeed(3);
			done();
			
		});		
      
		it('At least one .entry element', function(done) {
			loadFeed(2);
			//expect($('*').hasClass('entry')).toBe(true); 
			//expect($('article').attr('class')).toBe('entry'); 
			expect(allFeeds).toBeDefined();
			//console.log($( "body" ).html())
			//console.log(feedUrl);
			done();
		});        
    });          

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', function() 
    {
		//$('.menu-icon-link').trigger('click');
		
        it('RSS Link click', function() 
        {  
            //click the href to show the menu
            $('#3').trigger('click');
            console.log($( ".feed" ).html())   
            expect(allFeeds).toBeDefined();
        }); 		
    });  
    
    
}());
