//server

Meteor.methods({
	'insert':function(deptt,desc,hod){
		check(deptt, String);
		check(desc, String);
		check(hod, String);
		DataBase.insert({name:deptt, description:desc, hod:hod});
			}
});
Meteor.publish('department',function(){
			return DataBase.find();
			});
