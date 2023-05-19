//your code here
function countltr(){
	const inp=document.getElementById("evaluatedText").value;
	const w=inp.trim().split(/\s+/);
	const worcount=w.length;
	document.getElementById("wordCount").textContent=worcount;
}