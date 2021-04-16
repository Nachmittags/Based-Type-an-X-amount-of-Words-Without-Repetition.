document.body.innerHTML=""
a=document.createElement("input")
document.body.appendChild(a)
b=document.createElement("button")
b.innerHTML="Start Over"
document.body.appendChild(b)
b.onclick=function()
    {
    time=0;
    words=[]
    errors=0
    points=0;
    a.innerHTML=""
    c.innerHTML="Type the number of words to be written in the box and press enter."
    config=0;
    }
c=document.createElement("p")
c.innerHTML="Type the number of words to be written in the box and press enter."
document.body.appendChild(c)
time=0
words=[]
errors=0;
points=0;
config=0
setInterval(function(){time++},1000)
document.body.addEventListener("keypress", function()
    {
    if(event.key=="Enter")
        {
        if(config==1)
            {
            if(words.includes(a.value.toLowerCase()))
                {
                errors++
                }
                else
                    {
                    words.push(a.value.toLowerCase())
                    points+=a.value.length
                    x=words.length-1
                    bonus=-1;
                    endings=[];
                    while(x>=0 && !endings.includes(words[x][words[x].length-1]))
                        {
                        endings.push(words[x][words[x].length-1])
                        bonus++;
                        x--
                        points+=bonus
                        }
                    }
        if(words.length==d)
            {
            c.innerHTML="Finished. Errors: " + errors+". Time elapsed: "+time+". Points: "+
            (points-time/(words.join("").length/words.length))*(d-errors)/d
            }
a.value=""
            }
            else
                {
                d=a.value*1
                a.value=""
                c.innerHTML="GO!";
                config=1;
                time=0
                }
        }
    });
