let styles = ["jazz","blues"];
styles.push("Rock-n-Roll");
if(styles.length>1) styles[Math.floor((styles.length - 1)/2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap","Raggae");
