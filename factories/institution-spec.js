describe('institution', function() {

  beforeEach(module('app'));

  it('should return bank of america login parameters', inject(function(institution) {

	//expect(institution.doSomething()).toEqual('something');
    expect(institution.get()).toEqual({"Key":7421,"Name":"Bank of America","ImageURL":null,"UrlName":"FILogin","UrlValue":"https://secure.bankofamerica.com/login/sign-in/signOnV2Screen.go","Country":"US","LoginParameters":[{"LoginParameterKey":30972,"ParamId":"35562","ParamNumber":"1","ParamType":"login","ParamMaxLength":32,"ParamSize":42,"ParamCaption":"Online ID","ParamVariableName":"onlineID","ParamDefaultValue":"","ParamEditable":true,"ParamSensitivityCode":"N"},{"LoginParameterKey":30973,"ParamId":"35564","ParamNumber":"2","ParamType":"login","ParamMaxLength":2,"ParamSize":2,"ParamCaption":"State Code (Ex: California as CA)","ParamVariableName":"State_Code","ParamDefaultValue":"","ParamEditable":true,"ParamSensitivityCode":"U"},{"LoginParameterKey":30974,"ParamId":"35563","ParamNumber":"1","ParamType":"password","ParamMaxLength":20,"ParamSize":28,"ParamCaption":"Passcode","ParamVariableName":"passcode","ParamDefaultValue":"","ParamEditable":true,"ParamSensitivityCode":"N"}]});

  }));

});