let submitbtn = document.getElementById("abtn")

submitbtn.addEventListener('click',()=>{
    afunction();
})

function afunction(){
    document.getElementById('hehe').innerText="Copy!"
    let str = '/give @a'
    let toolName = document.getElementById('sel').value
    let enchantmentList = $('input:checkbox:checked')
    str = `${str} ${toolName}{Enchantments:[`
    Array.from(enchantmentList).forEach(enchantment => {
        let lvl = enchantment.parentElement.parentElement.children[1].children[0].value
        
        str = `${str}{id:${enchantment.value},lvl:${lvl}},`
    });
    str = str.substring(0,str.length-1) +']}'
    document.getElementById('textarea').value = str
    
}

function copyToClipboard(){
    let txt = document.getElementById("textarea").value
    if(txt.trim() == ""){
        alert('Nothing to copy!')
    }else{
        navigator.clipboard.writeText(txt)
        document.getElementById('hehe').innerText = "Copied!"
    }
}