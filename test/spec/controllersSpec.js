describe("mpApp Controllers", function () {

    beforeEach(function () {
        mpApp.loggedIn = true;
    });

    describe("InBoxCtrl", function () {
		it('should have 6 inBoxMsgs', function() {
		  var scope = {},
			  ctrl = new InBoxCtrl(scope);
		  expect(scope.inBoxMsgs.length).toBe(6);
		});
    });
	describe( "OutBoxCtrl", function () {  
		it('should have 2 outBoxMsgs', function() {
		  var scope = {},
			  ctrl = new OutBoxCtrl(scope);
		  expect(scope.outBoxMsgs.length).toBe(2);
		}); 
	});
	describe("BirthdayCtrl", function () {
	    it('should have a giftList', function () {
	        var scope = {},
                ctrl = new BirthdayCtrl(scope);
	        expect(scope.giftList.length).toBeGreaterThan(0);
	    });
	    it('should have a viewModel', function () {
	        var scope = {},
                ctrl = new BirthdayCtrl(scope);
	        expect(scope.viewModel).not.toBe(null);
	    });
	});
	describe("NewBornCtrl", function () {
	    it('should have a babyNameList', function () {
	        var scope = {},
                ctrl = new NewBornCtrl(scope);
	        expect(scope.babyNameList.length).toBeGreaterThan(0);
	    });
	    it('should have a viewModel', function () {
	        var scope = {},
                ctrl = new NewBornCtrl(scope);
	        expect(scope.viewModel).not.toBe(null);
	    });
	});
});