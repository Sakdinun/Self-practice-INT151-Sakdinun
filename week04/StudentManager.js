class StudentManager {
    static collectName = []
    constructor(id,name,fav_food){
        this.id = id,
        this.name = name,
        this.fav_food = fav_food,
        StudentManager.collectName.push(name)
    }

    static listAll(){
        let window = ""
        for (let [index, element] of StudentManager.collectName.entries()){
            window += `${index+1}. ${element} \n`
        }
        window += "-----------------"
        return window
    }



    static showFirstTwoStudent(){
        let box = `----------------- \n- First student : ${StudentManager.collectName[0]} \n- Second student : ${StudentManager.collectName[1]}`
        return box
    }


    static findStudentWithLetterA(){
        return StudentManager.collectName.filter( (allName) => allName[0] === 'A' || allName[0] === 'a')
    }

    changeName(newName){
        return `----------------- \n>> Change NAME: ${this.name} to NAME: ${this.name = newName} !!`
        
    }

    showDetails(){
        return `----------------- \nID: ${this.id} \nNAME: ${this.name} \nFavorite_food: ${this.fav_food} \n`
    }

    removeStudent() {
        const index = StudentManager.collectName.indexOf(this.name); // 
        if (index !== -1) { 
            StudentManager.collectName.splice(index, 1);
        }
        return `Student ${this.name} removed successfully!`;
    }
    

}

// [ Test Program ]

const s1 = new StudentManager("001","Pond","Pizza");
const s2 = new StudentManager("002","Gun","Beer");
const s3 = new StudentManager("003","Boss","Petong");
const s4 = new StudentManager("004","Andrew","MuuKrob");
const s5 = new StudentManager("005","Tan","Americano");
const s6 = new StudentManager("006","Aniga","KFC");


// console.log(StudentManager.listAll());

// console.log(s2.showDetails())

// Edits one student’s name.
// console.log(s2.changeName("Gunner58"))
// console.log(s2.showDetails())

// console.log(s4.changeName("NetYud"))
// console.log(s4.showDetails())

// console.log(StudentManager.showFirstTwoStudent())
console.log(StudentManager.findStudentWithLetterA())

// console.log(s3.removeStudent())

// console.log(StudentManager.listAll());
 