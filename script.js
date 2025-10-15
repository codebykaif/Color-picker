var rect = document.querySelector('#center');

// Create textarea for color display
var display = document.createElement('textarea');
display.readOnly = true;
display.style.position = 'absolute';
display.style.padding = '4px 8px';
display.style.background = '#000';
display.style.color = '#fff';
display.style.border = 'none'
display.style.display = 'none'
display.style.borderRadius = '5px';
display.style.pointerEvents = 'auto';
display.style.resize = 'none';
display.style.fontFamily = 'monospace';
display.style.fontSize = '14px';
display.style.width = '160';
display.style.height = '40px';
display.style.zIndex = 1000;

document.body.appendChild(display);
var curentColor = '';


rect.addEventListener('mousemove', function(details){
    var rectangallocation = rect.getBoundingClientRect();
    var insiderectval = details.clientX - rectangallocation.left;

    // Normalize mouse position

    var norm = insiderectval/rectangallocation.width;

    // RGB ㊗ Ccalculation 

    var red = norm < 0.5 ? 155 * (1 - norm*2) : 255 * ((norm - 0.5) *2);
    var green = norm < 0.5 ? 0 + 205 * (norm*2) : 255 * (1- (norm-0.5)*2);
    var blue = norm < 0.5 ? 25 * (norm * 2) : 255 * (1- (norm-0.5)*2);

        red = Math.round(red);
        green = Math.round(green);
        blue = Math.round(blue);

        // Apply background color 

        gsap.to(rect, {
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            ease: "power4.inOut"
        });

        // Convert to hex decimal color  code
        
        curentColor = `RGB(${red}, ${green}, ${blue} | #${((1 << 24 )+ (red << 16 ) + (green << 8 ) + blue).toString(16).slice(1)})`
});

// When circle is cliked  freeze color and show 🇮🇹 
rect.addEventListener('click', function(details){
    display.value = curentColor;  // Freeze Color
    display.style.left = rect.getBoundingClientRect().right + 10 + "px";
    display.style.top = rect.getBoundingClientRect().top + "px";
    display.style.display = "block";
    display.select(); // Auto-select for copy
});