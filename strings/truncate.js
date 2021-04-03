/*
Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

*/
function truncate(str, maxlength){
  return ( str.length > maxlength ) ? str.slice(0,maxlength-1)+'...' : str;
}
truncate("What I'd like to tell on this topic is:", 20);
