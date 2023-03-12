const acit1620 = {
    code: 'ACIT 1620',
    name: 'Web Fundamental Technologies'
}

const acit1515 = {
    code: 'ACIT 1515',
    name: 'Scripting in IT'
}

const acit1630 = {
    code: 'ACIT 1630',
    name: 'Database Systems'
}

const acit1420 = {
    code: 'ACIT 1420',
    name: 'Intro to Systems Admin'
}

const orgb1100 = {
    code: 'ORGB 1100',
    name: 'Organizational Behaviour'
}

const comm1116= {
    code: 'COMM 1116',
    name: 'Business Communications 1'
}

const math1310 = {
    code: 'MATH 1310',
    name: 'Technical Math for IT'
}


let courseList = [acit1620,acit1515,acit1630,acit1420,orgb1100,comm1116,math1310]

let userPrompt = "";
do{
    userPrompt = prompt("Enter a 4-digit course number: ")
}while(userPrompt.length != 4) 

let add = true
for(let i = 0; i < courseList.length; i++){
    if(courseList[i].code.includes(userPrompt)){
        console.log(`Yes I am taking the course: ${courseList[i].code} - ${courseList[i].name}`)
        add = false
    }
}
if(add){
    let course = {
        code: userPrompt,
        name: undefined
    }
    courseList.push(course)
}
