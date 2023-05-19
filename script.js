//your code here
function countltr(){
	const inp=document.getElementById("evaluatedText").value;
	const ltrcount=inp.length;
	document.getElementById("wordCount").textContent=ltrcount;
}