function newImage(icon, leftPost, bottomPost) {
    let object = document.createElement('img')
    object.src = icon
    object.style.position = 'fixed'
    object.style.left = leftPost + "px"
    object.style.bottom = bottomPost + "px"
    document.body.append(object)
    return object
}

function newItem(icon, leftPost, bottomPost) {
    let object = newImage(icon, leftPost, bottomPost)
    

    object.addEventListener('dblclick', function() {
        object.remove()
    })
    return object
}

let greenCharacter = newImage("assets/green-character.gif",100,100)
let pineTree = newImage("assets/pine-tree.png",450,200)
let tree = newImage("assets/tree.png",200,300)
let pillar = newImage("assets/pillar.png",350,100)
let crate = newImage("assets/crate.png",150,200)
let well = newImage("assets/well.png",500,425) 

let sword = newItem("assets/sword.png",500,405)
let sheild = newItem("assets/sheild.png",165,185)
let staff = newItem("assets/staff.png",600,100)

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)