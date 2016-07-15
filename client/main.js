//client
Meteor.subscribe('department');
Template.department.events({
	'submit form':function(event){
			event.preventDefault();
			var deptt= event.target.deptt.value;
			var desc= event.target.desc.value;
			event.target.desc.value="";
			var hod= event.target.hod.value;
			Meteor.call('insert',deptt,desc,hod);
			event.target.deptt.value="";
			event.target.hod.value="";
			}

});
Template.display.helpers({
	'department':function(){
		return DataBase.find().fetch();
		}});
