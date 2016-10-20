var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
        
   //     $('#button1').click(myFunction);
        
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
        
        window.localStorage.setItem("pen","black");
        
        var key = "pen";
        var value = window.localStorage.getItem(key);
        alert(value);
        
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
    
  //  function myFunction(){
  //      window.localStorage.setItem("pen","black");
 //       window.localStorage.setItem("notebook","");
  //      alert(window.localStorage.getItem("pen"));
        
 //   }

