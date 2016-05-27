describe('AdoptionController', function() {
  describe('the variable value of firstName should be firstName', function() {
    it('sets firstName to firstName', function() {
      this.firstName = 'firstName';
      expect(this.firstName).toEqual('firstName');
    });
    it('sets lastName to lastName', function() {
      this.lastName = 'lastName';
      expect(this.lastName).toEqual('lastName');
    });
  });
});

describe('MenuController', function() {
  describe('sets value of tab', function() {
    it('if selectTab then donation value equals setTab value', function() {
      this.donation = '';
      setTab = 3;
      this.selectTab = function(setTab) {
        this.donation = setTab;
        expect(this.donation).toEqual('3');
      };      
    });
  });
});