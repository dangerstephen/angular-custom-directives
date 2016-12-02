angular
  .module('CardsAgainstAssembly', [])
  .controller('CardsController', CardsController)
  .controller('PlayersController', PlayersController)
  .directive('card', CardViewDirective)
  .directive('scores', ScoreViewDirective);


function CardsController() {
  var vm = this;
  vm.questions = [
    {question: "What is Batman's guilty pleasure?"},
    {question: "I'm sorry professor, I couldn't complete my homework because _________."},
    {question: "I get by with a little help from _________."},
    {question: "_________. It's a trap!"},
    {question: "The class field trip was completely ruined by _________."},
    {question: "What's my secret power?"}
  ];
}

function CardViewDirective(){
  var directive = {
    restrict: 'E',
    replace: true,
    templateUrl: './templates/cardView.html',
    scope : {
        question: '@'
    }
  };
  return directive;
}

function PlayersController(){
  var vm = this;
  vm.players = [
    {name: 'Kevin', points: 2},
    {name: 'Kyle', points: 16},
    {name: 'Martin', points: 12},
    {name: 'Yasu', points: 6},
    {name: 'Derry', points: 9},
    {name: 'Sophie', points: 21}
  ];
}

function ScoreViewDirective(){
  var directive = {
    restrict: 'E',
    replace: true,
    templateUrl: './templates/scoreView.html'

  };
  return directive;
}

function ScoresDirective(){
  var directive = {
    controller: PlayersController,
    controllerAs: 'vm',
    //'A' == attribute, 'E' == element, 'C' == class, 'M' == comment
    restrict : 'E',
    replace : true,
    templateUrl :  "./templates/_scoresView.html"
  };
  return directive;
}
