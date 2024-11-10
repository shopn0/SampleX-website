// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const words = ["success", "perfection", "reality", "solutions", "innovation", "satisfaction"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    function loopTyping() {
        if (word.length > 0) {
            document.getElementById("typing-text").innerHTML += word.shift();
        } else {
            deletingEffect();
            return;
        }
        timer = setTimeout(loopTyping, 150);
    }
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    function loopDeleting() {
        if (word.length > 0) {
            word.pop();
            document.getElementById("typing-text").innerHTML = word.join("");
        } else {
            i = (i + 1) % words.length;
            typingEffect();
            return;
        }
        timer = setTimeout(loopDeleting, 100);
    }
    setTimeout(loopDeleting, 1000);
}

// Start the typing effect on page load
typingEffect();
