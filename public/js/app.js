// fetch the student details from serrver

console.log('hello');

const myBtn = document.getElementById('searchBtn');
myBtn.addEventListener('click', fetchData);
async function fetchData(){
    const inputName = document.querySelector('input').value;
    const url = `/api/${inputName}`;
   
    try{
        const res = await fetch (url);
        const data = await res.json();

    
        (inputName === 'all')? showAllStudent(data) : showOneStudent(data)
        
       1
    }catch(err){
        console.log(`Something went wrong ${err}`);
    } 

}
const showAllStudent = (data)=> {
    const container = document.querySelector('.student-data');
    for(let i = 0; i < data.length; i++){
        // here I have to create four div for each iteration and append it in container
        const Roll = document.createElement('div');
        const Name = document.createElement('div');
        const Age = document.createElement('div');
        const College = document.createElement('div');

        // insert the information to these created div
        Roll.innerText = data[i].rollno;
        Name.innerText = data[i].name;
        Age.innerText = data[i].age;
        College.innerText = data[i].college
        // append these all four div into container
        container.append(Roll, Name, Age, College);
    }


}

const showOneStudent = (data)=>{
   
    const container = document.querySelector('.student-data');
    console.log(container)
    const Roll = document.createElement('div');
    const Name = document.createElement('div');
    const Age = document.createElement('div');
    const College = document.createElement('div');

    Roll.innerText = data.rollno;
    Name.innerText = data.name;
    Age.innerText = data.age;
    College.innerText = data.college
    container.append(Roll, Name, Age, College);




}



