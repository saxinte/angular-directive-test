// source: https://docs.angularjs.org/guide/unit-testing
describe("avatarDirective", function() {

    function getCompiledElement(){
        var element = angular.element('<avatar-directive datas="testDatas"></avatar-directive');
        var compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }

    var compile, scope;
    
    // Load the myApp module, which contains the directive
    beforeEach(module('myApp'));

    // Load the template
    beforeEach(module('views/template.html'));

    /* 
     * Store references to $rootScope and $compile
     * so they are available to all tests in this describe block
     */
    beforeEach(inject(function(_$compile_, _$rootScope_){
        compile = _$compile_;
        scope = _$rootScope_;
    }));

    it('Should have picture data not present on isolated scope', function() {

        scope.testDatas = {
            firstName: 'Busuu',
            lastName: 'Dev',
            role: 'Developer',
            age: '25',
            picture: 'http://i.istockimg.com/file_thumbview_approve/10368168/3/stock-photo-10368168-tabby-cat-looks-up.jpg'
        };

        var directiveElem = getCompiledElement();

        // Get the isolate scope for the directive
        var isoScope = directiveElem.isolateScope();

        expect(isoScope.isolatedDatas.picture).to.be.undefined;

    });

});