function Clear()
{
    var e=document.getElementById('Display');
    e.value=e.value.slice(0,-1);
}
function AC()
{
    var e=document.getElementById('Display');
    e.value=' ';
}
function Res()
{
    var num1=document.getElementById('Display').value;
    var num2=eval(num1);
    document.getElementById('Display').value=num2;
}