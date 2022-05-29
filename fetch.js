async function getData(){
    const req = await fetch('https://jsonplaceholder.typicode.com/posts')
    const parse = await req.json()
    console.log(parse)
    let output = ""
    parse.forEach((post) => {
        output += `<li><h1>${post.title}</h1> ${post.body}</li>`
    })

    document.getElementById("list").innerHTML = output
}

getData()

async function over9000(){
    return 9000
}

over9000().then((res) => {console.log(res)}).catch((err) => {console.log(err)})


function derick(){
    return new Promise((response, reject) => {
        setTimeout(() => {
            response("Derick")
        }, 5000)
    })
}

async function getName(){
    try{
        const res = await derick();
        console.log(res)
        document.getElementById("name").innerHTML = res;
    }

    catch(err){
        console.log(err)
    }
}

getName()

