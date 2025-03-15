lert("This website is under maintenance.");
console.log("hii");
function updateLink() {
        var dropdown = document.getElementById("resultDropdown");
        var link = document.getElementById("goButton");
        link.href = dropdown.value; // Updates the link dynamically
    }
    function updateLink2() {
        var dropdown = document.getElementById("resultDropdown2");
        var link = document.getElementById("goButton2");
        link.href = dropdown.value; // Updates the link dynamically
    }