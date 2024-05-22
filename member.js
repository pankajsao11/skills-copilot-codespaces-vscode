function skillsMember(){
    return{
        restrict: 'E'
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        ControllerAs: 'Vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}