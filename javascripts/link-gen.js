// Generate output by adding prefix to input links
function generate() {
    let input = document.getElementById("input").value;
    let prefix = window.location.origin + "/format/preview.html?previewLink=";
    let output = "";
    if (input != "") {
    	let str = input.split("\n");
    	for (let i = 0, len = str.length; i < len; i++) {
    	    if(str[i].startsWith("https://")==true) {
    	        output = output + prefix + str[i];
    	    } else {
    	        output = output + str[i];
    	    }
    	    if(i < len - 1) {
    	        output = output + "\n";
    	    }
    	}
    	document.getElementById("output").value = output;
    	document.getElementById("btn-gen").innerHTML = "Links generated!";
    }
}

// Copy output to clipboard
function copy() {
	let output = document.getElementById("output").value;
	if (output != "") {
		document.getElementById("output").select();
		document.execCommand("copy");
		document.getElementById("btn-copy").innerHTML = "Copied to clipboard!";
	}
}

// Reset output and buttons when input changes
document.getElementById("input").oninput = function(){
    document.getElementById("btn-gen").innerHTML = "Generate Links";
    document.getElementById("output").value = "";
    document.getElementById("btn-copy").innerHTML = "Copy";
}