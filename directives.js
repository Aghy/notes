(function () {
  var app = angular.module('directives', []);
  app.$inject = ['$compile', '$scope'];
  
  app.directive("tabDir", tabDirDirective);

  function tabDirDirective() {
    return {
      restrict: 'E',
      templateUrl: 'tab-dir.html',
      controller: TabDirController,
      controllerAs: 'panel'
    }
  }

  function TabDirController() {
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
  }
  
  app.directive("noteDir", noteDirDirective);

  function noteDirDirective() {
    return {
      restrict: 'E',
      templateUrl: 'note-dir.html',
      controller: NoteDirController,
      controllerAs: 'nc'
    }
  }

  function NoteDirController($compile, $scope) {
    var vm = this, notes = [];
    this.notes = notes;
    this.writtenNote;
    
    this.addNote = function(text) {
      var note = {};
      note.content = text;
      vm.notes.push(note);
    };
    
    this.removeNote = function(index) {
      vm.notes.splice(index, 1);
    };
    
    this.editNote = function(index) {
      var listItem = '#li-' + index ;
      $(listItem + " .hardLine").hide();
      var editTextBox = '<input id="textEdit" type="text" value="{{nc.notes['+index+'].content}}" />';
      var link = $compile(editTextBox);
      var content = link($scope);
      console.log(editTextBox);
      $(content).appendTo(listItem);
      $(content).focus();
      $('#textEdit').on('blur', this.editNoteContent);
    }
    
    this.editNoteContent = function() {
      var parent = $(this).parent();
      var listItem = '#' + $(parent).attr('id');
      $(listItem + ' .content').text($('#textEdit').val());
      $('#textEdit').remove();
      $(listItem + " .hardLine").show();
    }
    
    this.toggleClass = function(index) {
      var listItem = "li-" + index;
      $("#" + listItem + " .content").toggleClass("line-through");
    };
  }
  
}) ();