document.getElementById("aboutLink").addEventListener("click", function() {
    alert("Ini adalah website showroom kami dalam melayani customer secara online dalam melihat stock yang tersedia pada showroom kami")
});

document.getElementById('clickButton').addEventListener('click', function() {
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Clear previous images
    for (var i = 1; i <= 5; i++) {
        var img = document.createElement('img');
        img.src = 'image' + i + '.jpg'; // Change the image source accordingly
        img.alt = 'Image ' + i;
        img.classList.add('img-fluid', 'm-2'); // Add Bootstrap classes for styling
        imageContainer.appendChild(img);
    }
});
