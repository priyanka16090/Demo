import React from "react";

function Array(props){
    return(
        <div>
            <ul>
                <h3>{props.title}</h3>
                <li>priyanka</li>
                <li>suma</li>
                <li>pooja</li>
                <li>anusha</li>
            </ul>
        </div>
    )
}

//using array and for loop 
function Array2(props){
    var names=["priyanka","suma","anusha","pooja"];
    var liElements=[];
    for(let name of names){
        liElements.push(<li>{name}</li>);
    }
        return(
        <div>
            <h3>{props.title}</h3>
            <ul>{liElements}</ul>

        </div>
    )
}

//using map method
function ArrayMap(props){
    var names=["priyanka", "suma", "anusha", "pooja"];
        return(
        <div>
            <h3>{props.title}</h3>
            <ul>{names.map(name=><li>{name}</li>)}</ul>
        </div>
    )
}

//create static table
function StudTable(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>City</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Priyanka</td>
                        <td>26</td>
                        <td>Yadgir</td>
                    </tr>
                    <tr>
                        <td>Poojs</td>
                        <td>26</td>
                        <td>Hubli</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

//create table dynamically
function StudTable2(props){
    var students=[{name:"priyanka", age:26, city:"bangalore"},
{name:"soumys", age:26, city:"Gulbarga"}];
return(
    <div><h2>{props.title}</h2>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>City</td>
                </tr>
            </thead>
            <tbody>
                {students.map(student=><tr>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.city}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
)
}
export default Array;
export {Array2,ArrayMap,StudTable,StudTable2};