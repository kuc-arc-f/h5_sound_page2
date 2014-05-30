// var mItems = new Array();


onload = function() {
console.log('#onload');

	var items = init_item();
	load_sound( items );
}

//
// function
function init_item()
{
	var items = new Array();
	items[0] = {snd_name : 's1', snd_url : 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/36209861&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_artwork=true' };
	items[1] = {snd_name : 's2', snd_url : 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/36479386&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_artwork=true' };
	items[2] = {snd_name : 's3', snd_url : 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/36480994&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_artwork=true' };
	
	return items;
}

	
function get_sound_id(items)
{
	var ret="";
	var ict= items.length;
	if(items){
		if(items.length > 0){
			var i_mx = (items.length) -1;
			var i_mn = 0;
			var rCt=Math.floor(Math.random()*(i_mx-i_mn +1))+i_mn;
			 var item = items[rCt];
console.log('rnd=' + rCt);
			ret= item.snd_url;
		}
	}
	return ret;
}

function load_sound( items )
{
	if((items ==null) || (items.length < 1))
	{
		return;
	}
	var s_url = get_sound_id(items);
 console.log('s_url=' + s_url );
	    var divSound= $('div#id-div-sound1');

		var s_web="";
		    s_web ='<iframe  width="100%" scrolling="no" frameborder="no" style="margin : 0px; height: 450px;"';
		    s_web +=' src="'+ s_url + '">';
		    s_web +='</iframe>';
			divSound.append(  $(s_web) );
}


