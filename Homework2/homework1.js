function func (a) {
    if (typeof a !== "number") {
        return "Неверный тип данных"
        }
            var today = new Date();
var dd = today.getDate();

var  mm = today.getMonth()+1; 

var qq = today.getHours();
var min = today.getMinutes();
var sec =   today.getSeconds()

var yyyy = today.getFullYear();
if(dd<10) 
{
    dd=`0${dd}`;
} 

if(mm<10) 
{
    mm=`0${mm}`;
} 
today = `${mm}.${dd}.${yyyy} - ${qq}`:${min}:${sec};
console.log(today);
}

func (123)
