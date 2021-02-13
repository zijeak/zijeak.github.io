document.body.addEventListener(
    'touchmove',function(e){
        e.preventDefault();
    },{passive:false}
)

function countDown(start, end) {
    var distance = Math.abs(Date.parse(start) / 1000 - Date.parse(end) / 1000);
    var timer = setInterval(()=> {
        distance++;
        let obj = {
            "d":parseInt(distance / (24 * 60 * 60)),
            "h":parseInt((distance % (60 * 60 * 24)) / (60 * 60)),
            "m":parseInt((distance % (60 * 60)) / 60),
            "s":parseInt(distance % 60),
        };
        for(let k in obj){
            if(parseInt(obj[k]) < 10){
                obj[k] = '0' + obj[k]
            }
        }

        var counter = document.getElementById("counter");
        let str = `第${obj.d}天${obj.h}时${obj.m}分${obj.s}秒`;
        //console.log(str)
        counter.innerHTML = str;
        if(distance == 0){
            clearInterval(timer)
        }
    }, 1000)
}

var start = new Date(2021,1-1,15,1,3,0);
var end = new Date();
countDown(start,end);