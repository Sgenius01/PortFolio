const Skills=["Front-End Web Developer","Back-End web Developer","C# language Programmer","Mobile App Developer"];
let index=0,skillIndex=0,skill="";
!function e(){
	skillIndex===Skills.length&&(skillIndex=0);
	let l=(skill=Skills[skillIndex]).slice(0,++index);console.log(l),document.querySelector(".type-text").textContent=l,l.length===skill.length?(skillIndex++,index=0,setTimeout(e,2e3)):setTimeout(e,200)
	}();
	
	
	
	
	var Project={
		first:{
			name:"My Portfolio Official Website",
			description:"this website is my personal page or my portfolio contains a four section : main page and about me with my cv file , my skills section , my services that i 'll give to my clients and contact page ,finally the footer section contains my adresse mail and my phone .",
			link:"https://competent-shannon-93c6d8.netlify.app/",
			image:"Assets/img1.png",
			category:"Website",
			date:"september, 2022.",
			made:"This project was developed using HTML & CSS for styling and structuring, & JQuery ."
		},
			
		second:{
			name:"Digital fix & repaire",
			description:"this website make people who need digital repair to contact the profetional Technicians for help them and do some repair for there phone or computer or console games or tablet or laptop .",
			link:"https://hungry-hoover-d22bdd.netlify.app/",
			image:"Assets/img2.png",
			category:"Website",
			date:"March, 2021.",
			made:"This project was developed using HTML & CSS for styling and structuring, & JavaScript ."
		},
		
		third:{
			name:"My Blog Personal & professional",
			description:"this website is my personal page or my blog personal conta my projects and my services : web design & web developer & mobile app developer   .",
			link:"",
			image:"Assets/img3.png",
			category:"Website",
			date:"May, 2021.",
			made:"This project was developed using HTML & CSS for styling and structuring, & JavaScript ."
		},
};


genDesc("first");
var c=0;
function genDesc(e){
	c++,
	document.querySelector("#projectName").innerHTML=Project[e].name,
	document.querySelector("#projectImage").setAttribute("src",Project[e].image),
	document.querySelector("#projectCategory").innerHTML=Project[e].category,
	document.querySelector("#projectDate").innerHTML=Project[e].date,
	document.querySelector("#projectDescription").innerHTML=Project[e].description,
	document.querySelector("#projectMade").innerHTML=Project[e].made,
	document.querySelector("#projectLink").setAttribute("href",Project[e].link),
	
	c>0&&$("#projectModal").modal("show")
}




