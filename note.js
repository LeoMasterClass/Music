// r = DO / m = RE / p = MI

function musique(){
    let note = document.getElementById('note').value;
    let li = document.createElement('li');

    if("u" === note || "c" === note){
        li.innerText = "DO";
        document.getElementById('resultnote').appendChild(li);
    }else if("r" === note || "d" === note){
        li.innerText = "RE";
        document.getElementById('resultnote').appendChild(li);
        note.value = "";
    }else if("m" === note || "e" === note){
        li.innerText = "MI";
        document.getElementById('resultnote').appendChild(li);
    }else if("f" === note){
        li.innerText = "FA";
        document.getElementById('resultnote').appendChild(li);
    }else if("g" === note){
        li.innerText = "SOL";
        document.getElementById('resultnote').appendChild(li);
    }else if("l" === note || "a" === note){
        li.innerText = "LA";
        document.getElementById('resultnote').appendChild(li);
    }else if("h" === note || "b" === note){
        li.innerText = "SI";
        document.getElementById('resultnote').appendChild(li);
    }else{
        li.innerText = "...";
        document.getElementById('resultnote').appendChild(li);
    };
    li.addEventListener('click', function () {
        let search = document.getElementById("note");
        search.value = li.textContent;
        adressList.innerHTML = "";
    })
}
