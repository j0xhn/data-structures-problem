var users_joined = [];
var chatrooms = {'west_side':{}, 'east_side':{}};
var currentRoom = 1;

window.new_user_joined = function(name) {
	users_joined.push(name);
	console.log(users_joined);
}

//this function is only called once by the server every five seconds
window.assign_to_chatroom = function() {

	for (i=0; i < users_joined.length; i++){

		if (currentRoom === 1){
			chatrooms.west_side = users_joined.shift();
			currentRoom = 2;
			$('.chat-1 .users').prepend('<p><button type="button" class="btn btn-warning btn-xs">'+chatrooms.west_side+'</button></p>');
		} else {
			chatrooms.east_side = users_joined.shift();
			currentRoom = 1;
			 $('.chat-2 .users').prepend('<p><button type="button" class="btn btn-warning btn-xs">'+chatrooms.east_side+'</button></p>');
		}
	
	//add this element for every user assigned to a chatroom: <p><button type="button" class="btn btn-warning btn-xs">[[name]]</button></p>
    
}

	}
	