function createcolumn(classname="",stylecol="",text=""){
    var col=document.createElement('td');
    col.setAttribute("class",classname);
    col.setAttribute("style",stylecol);
    col.innerHTML=text;
    return col;
}

function createrow(classname="",stylecol="",text=""){
    var row=document.createElement('tr');
    row.setAttribute("class",classname);
    row.setAttribute("style",stylecol);
    row.innerHTML=text;
    return row;
}

var main=document.createElement('div');
main.setAttribute("class","bac");
main.innerHTML="<br><br><img src='bat.png' class='pic'><span>this<h1>PRUDHVI BSS</h1></span>";
document.body.append(main);
var prehead=document.createElement('h3');
prehead.innerHTML="prudhvib460@gmail.com,chicago, 9999 9999 | resume @ | www.kickwatewscx.com<hr><br><br>";
document.body.append(prehead);

var maintable=document.createElement('table');
document.body.append(maintable);

newcol=createcolumn("bod");

var prof=document.createElement("div");
prof.innerHTML="<h2><img src='user-circle-solid.svg' class='ico'> Profile</h2><p>1+ years of experience in I.T industry with skillset of Front-end development, SFDC, SQL and MSBI.</p>";

var skills=document.createElement("div");
skills.innerHTML="<h2><img src='flask-solid.svg' class='ico'> Skills</h2>";
var sectable=document.createElement("table");
var newrow1=createrow();
newrow1.append(createcolumn("","padding: 0px;","Apex"),createcolumn("","","<input type='range' min='1' max='100' value='70' class='slider' >"));
var newrow2=createrow();
newrow2.append(createcolumn("","padding: 0px;","MSSQL"),createcolumn("","","<input type='range' min='1' max='100' value='70' class='slider' >"));
var newrow3=createrow();
newrow3.append(createcolumn("","padding: 0px;","Azure"),createcolumn("","","<input type='range' min='1' max='100' value='70' class='slider' >"));
var newrow4=createrow();
newrow4.append(createcolumn("","padding: 0px;","JAVA"),createcolumn("","","<input type='range' min='1' max='100' value='70' class='slider' >"));
var newrow5=createrow();
newrow5.append(createcolumn("","padding: 0px;","Python"),createcolumn("","","<input type='range' min='1' max='100' value='70' class='slider' >"));
sectable.append(newrow1,newrow2,newrow3,newrow4,newrow5);    
skills.append(sectable);


var exp=document.createElement("div");
exp.innerHTML="<h2><img src='briefcase-solid.svg' class='ico'> Project Experience</h2>";
var expdiv=document.createElement("div");
expdiv.innerHTML="<ul><li><b>SALESFORCE DEVELOPER</b><br>FITBIT INTEGRATION, INFOSYS</li><li><b>BI DEVELOPER</b><br>PMO TRACKER, INFOSYS</li></ul>"
exp.append(expdiv);

newcol.append(prof,skills,exp);

var newcol2=createcolumn();

var exp2=document.createElement("div");
exp2.innerHTML="<h2><img src='briefcase-solid.svg' class='ico'> Project Experience</h2><ul><li><b>ORACLE DEVELOPER</b><br>E.ON UK SERVICE, INFOSYS</li></ul> ";

var educ=document.createElement("div");
educ.innerHTML="<h2><img src='briefcase-solid.svg' class='ico'> Project Experience</h2>";
var educdiv=document.createElement("div");
educdiv.innerHTML="<ul><li><p>MAY 2019 -- PRESENT<br>INFOSYS, SYSTEMS ENGINEER</p></li><li><p>MAY 2018 – JUNE 2018<br>TATA MOTORS, INTERN</p></li><li><p>JUNE 2015 – JUNE 2019<br>ANIL NEERUKONDA INSTITUTE OF TECHNOLOGY,<br> B.TECH MECHANICAL ENGINEERING (8.33 GPA)</p></li></ul>"
educ.append(educdiv);

newcol2.append(exp2,educ);

maintable.append(newcol,newcol2);
