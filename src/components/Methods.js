

function Methods()
{
    let name={
        name:"sruthi",
        lname:"veerepalli",
       }
    
    let name1={
        name:"Susmitha",
        lname:"Veerepalli"
    }
    let printFunction=function(city,st)
    {
        console.log(this.name+" "+this.lname+" "+city+" "+st);
    }
    printFunction.apply(name1,["Austin","Texas"]);

    let bindExample=function(city)
    {
        console.log(this.name+" "+this.lname+" "+" "+city);
    }
    let printName=bindExample.bind(name1,"Austin");
    printName();

    <div>
       <h2>Welcome to the Method calls</h2> 
    </div>
   
}

export default Methods;