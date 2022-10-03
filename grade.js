const student=[
    {
    firstName: "Kelton",
    lastName: "DeBord",
    weight: 120,
    height: "5'6",
    grade: 90,
    },
    {
    firstName: "John",
    lastName: "Doe",
    weight: 180,
    height: "5'10",
    grade: 70,
    },
    {
    firstName: "Tim",
    lastName: "Aurthor",
    weight: 140,
    height: "6'0",
    grade: 60,
    },
    {
    firstName: "Mary",
    lastName: "Lynn",
    weight: 130,
    height: "5'9",
    grade: 50,
    }
];
for(i=0;i<student.length;i++)
{
     console.log(`The stuendent name is ${student[i].firstName} and the grade is ${student[i].grade}`)
    if (student[i].grade >90){
        console.log("A");
    }else if (student[i].grade>80){
        console.log("B");
    }else if (student[i].grade> 70){
        console.log("C");
    }
    else {
        console.log("Fail");
    }   
}

