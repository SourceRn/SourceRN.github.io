videos = ["adsasd", "asdasd", "asdas"];

function showVideos(arr){
    document.getElementById("videos").innerHTML = '<video src="'+arr[0]+'"></video> <video src="'+arr[1]+'"></video> <video src="'+arr[2]+'"></video>';
}

showVideos(videos);