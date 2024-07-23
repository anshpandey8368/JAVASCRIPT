var rect = document.querySelector('.rectangle');
let col = 0;

rect.addEventListener("mousemove", function(details){
    var rectanglelocation = rect.getBoundingClientRect();
    var insiderectval = details.clientX - rectanglelocation.left;
    let a = insiderectval/550;

    rect.style.backgroundColor = `rgba(${255}, 0, 0, ${1-a})`;
});
