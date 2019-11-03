	var string = "";
	
	
	class Dress {
  		constructor(data) {
    		this.name = data[0];
    		if(data[1] != ""){this.link = data[1];}	else{this.link = "./notavail.jpg";}	
    		this.style = data[2];
    		this.s1 = data[3];
    		this.s2 = data[4];
    		this.level = data[5];
    		this.c1 = data[6];
    		this.c2 = data[7];
    		this.avail = data[8];
  		}

	}

	var all_data = parseCsv(); // an array of Dress objects
	


function parseCsv(){
		var my_array = [];

	var my_data = `L001,Red fringe barrel,,Latin,M,,Newcomer,Red,,TRUE,,,y,L1
L100,Light Pink Fringe,https://lh3.googleusercontent.com/jIePKChjRvmNq3pDAaQ8xZ6vmQhW-QbBWjuItq6YobpntCNNi5jJv9Mf2grlxs7isblii1yzhb9Cu-7zY74VJvtMsId_QD33Iy2NRTTb8HvjcjfxJDnKX0D4E79TZfEaCYS65120WQ=w2400,Latin,S,,Bronze,Pink,,TRUE,older; needs to be cleaned,,y,L1
L101,Hot Pink Fringe,https://lh3.googleusercontent.com/t6ub4k4xzv9yliAvO_nyTsGc_mqnZcE4NtW4GYOaWZXBDqz7OQ7wXkoKzT2AW0dpa3sFe8NGmQDeH0OB3L7zYbR3x1cZOXNqyhGFte2pj70QdNdSxzjb3eFEr8AKP-68PsaUpu6xcA=w2400,Latin,S,,Bronze,Pink,,TRUE,older; needs to be cleaned,,y,L1
L102,Orange/Black Fringe,,Latin,S,,Bronze,Orange,Black,TRUE,New; hard to get into though,Donated from Nika Couture,y,L1
L103,Yellow Fringe,https://lh3.googleusercontent.com/5Afx4ddmLbgLx3FdOWEe8utGhyuF0hkj9BHR2xmbO1qH_4AnrmwxNdJ0VbmhUd8rD6ldLI9h4Dji2jnt-twDqMAimqTaxxjwyHN9T9A8yWc7Sq4SvTBzKAQmQ8qwL6xjnP3PzuhPzQ=w2400,Latin,S,M,Bronze,Yellow,,TRUE,older  needs to be cleaned,,y (out),out
L104,Simple Black pink stones,https://lh3.googleusercontent.com/8cS-iMP_j4HkK650MZHVEuh8_zp9X5E_jP3cUncTWbs9R9HVDeLFUe_vJRVrOyDsvvlOR1_CbbHdMLShSmi1OujgP3PMl91APAmcJj--YBYZOb7vRqOG5xKVpht9raCqEXf5N0KZSw=w2400,Latin,S,M,Bronze,Black,,TRUE,moderate  needs to be cleaned,,y,L1
L105,Black Ursula blue stones,https://lh3.googleusercontent.com/BTDx5dXGkWB2OVYBfNDLYDG9prgKyBCKAuhust4qhuUACRJrc77R4hWkEmJ_BlJH4JhjvyjpnGW-l0lLUNluWhku0oE4FPoYBifjEDAVIjPL6bWUa3ksQgROd2fXnS5QVgYV2Lecvw=w2400,Latin,S,M,Bronze,Black,,FALSE,moderate; needs to be cleaned,,y,L1
L106,Black Zebra,https://lh3.googleusercontent.com/v1DGJ8xz1xbprKaXsVrBRBrGVjmCPbZwucqAwVheSYK1YjInK4DpdaGzfapD-oSpcVNhFSPHpVcd9ztLf_qbtKx75LmUDpE8jtK4yFTLC7wgWs9Efj2leLteqZlGMoy1goLjvlXdJw=w2400,Latin,S,M,Bronze,Black,White,TRUE,?,,y,L1
L107,White Red/Brown Flower,https://lh3.googleusercontent.com/8wt5stYRJU70Pxc2B-PpxZUhokm9YXsY8K5S9y_ZG6DXf_s3BY_9IZBkxJvpPwdWm51lX5PFdn6XYuKnSjvlacNj-eGpjvdK1Vy284zuyjhbg9GU4b6pI0W4EYlQYhwtGiy7GByxwA=w2400,Latin,S,M,Bronze,White,Red,TRUE,old/bad structure,,y,L1
L108,Orange Asymmetric,https://lh3.googleusercontent.com/3Ku9S30T81nyrCI1SciEpWXjtkbmOOBx67EsE3ONIY7p7qyHe3BPIRS7Bw71BXpTF2oe8c5yaSR7KV3wfZKSdml1y4_lKUjN9iI3gBkZA26yI3CK_F-UrM1Y7rwXqd2iOCix3y3X5Q=w2400,Latin,S,M,Bronze,Orange,,TRUE,new; needs to be cleaned?,Purchased from LatinoDancewear; 2017,y,L1
L109,Black/White/Orange Flower,https://lh3.googleusercontent.com/0GAkfoUTJa2SnhsOnuJXK0F6W6P2i2vvAYQXEz0EqpT7kp5RT8P8RfFTmpJvPWkT6qQVJvbKVK2Kkr-QF5OWK7dnedC0F6oyeigAQfp-VTcaJAgrgju_zKHIO84MtsUwVedTPeq_rQ=w2400,Latin,S,M,Bronze,White,Black,TRUE,moderate; needs to be cleaned - orange part has been cut off,,y,L1
L111,Fire red; silver stones,,Latin,M,,Bronze,Red,,TRUE,new,Purchased from LatinoDancewear; 2019,y,L1
L112,Burgundy lace-up,,Latin,M,,Bronze,Red,,TRUE,new,Purchased from Yale alumn,y,L1
L113,Red sequin fringe,,Latin,S,,Bronze,Red,,TRUE,,,y,L2
L110,Purple + Silver Fringe,https://lh3.googleusercontent.com/wNfs7fE0-RKQWEvkneu9ACbdJ9l-0ol1pglwrfHPGv1_ykneDvPpcS_AvLhccROjEfdkxk6srUlfzrlakiZDxf2CjxuRWnmGcbGjmGLimMgHmu29Q8181Pzhx8ISbK2CuaNhtO9X5Q=w2400,Latin,M,L,Silver,Purple,,TRUE,new; needs to be cleaned,Purchased from LatinoDancewear; 2017,y,L2
L200,Black Fringe Suit,,Latin,S,,Silver,Black,,FALSE,new,Purchased from LatinoDancewear; 2018,y,L2
L201,Electric Blue; draped sash + skirt,,Latin,S,,Silver,Blue,,TRUE,new/moderate; clean,Purchased from Juliana Neves; 2018,y,L2
L202,Yellow Asymmetric,,Latin,S,M,Silver,Yellow,,TRUE,new; clean (?),Purchased from LatinoDancewear; 2018,y,L2
L203,Red Fringe,,Latin,S,M,Gold,Red,,FALSE,clean (?); good condition,Purchased from Alisa Zosin; 2018,no????,?
L204,Indigo Fringe,https://lh3.googleusercontent.com/hTjK2qYbSojps8TON_zsaYmXXpy_QHX1HZlkPYoAjfMGmo78oKJ--PZt1rs7L0zsoWrozLOVDxv686rOhrdltlvRzakRwmg18L1yf0kzECoFlRTkTVXWyzH25xwq76TZgrrM5pQXmw=w2400,Latin,M,,Gold,Purple,Blue,FALSE,moderate; needs to be cleaned (?),,no,out
L205,Pink Fringe (longer skirt),https://lh3.googleusercontent.com/MFqfbfVzi1_UPLQZ-hNfPzGsgFbJvNgXrLRyBKHf8ZPhOqUVrdG-8TZ081fPqrt2RR4GxryEsmv-BT3FiXdLkIpb0656Io1NVtsCAG7FvxH3CGiuLRjaRkheVkFUf_JDaN_-62JTww=w2400,Latin,S,M,Gold,Pink,,TRUE,moderate; needs to be cleaned (?),,y,L2
L206, Black Lace + Fringe; Pink Stones,https://lh3.googleusercontent.com/b__kZPi4OdL8Dn3Dn9Hj9DJkHpkoKZrgaXNUXUHzsbGy1tGraN7YzomDtNvlXQ9qLL-HHY8TEAViya-ERYSnTWQjWsOTfBD_Tz0o4RgYR7OdgqWsOKhESJNivuQUed2wKazDgeL9kg=w2400,Latin,S,,Gold,Black,Pink,FALSE,moderate/old; needs cleaning,Purchased from Juliana Neves; 2018,y,L2
L207,Hot Pink Ruffle,https://lh3.googleusercontent.com/6ucmRcC5xlRaHj8oZ8UQeLfw4OfIARYObQ7aDQfZMkaBuLkEMUJNo7tgPj25iSzL6GQGfJag9vpqOHF1E6bKwxvCkzjK305j5gJCMyelry9BC4RaJCzETfWKUGVAyLSvNGQPN4k0uA=w2400,Latin,S,M,Gold,Pink,,FALSE,moderate; needs to be cleaned (?),,y,L2
L208,Black Chiffon Red Bra,https://lh3.googleusercontent.com/8Y02J5rKdl30jvKEVl9CP6HBcISvQqtJe1cYmCpQtC1YmEgj52CjKwDbnlPKnjv1hsfj4kuiTQ4aU9f0wvw7Wdb77ZHNjSmeK0YUEo2BBGc_WCV_eFmUPKuGLsZcri0vAaBBK-Oz0g=w2400,Latin,S,M,Gold,Black,Red,TRUE,skirt is torn,Purchased from Juliana Neves; 2018,y,L2
L300,Dark Red; blue applique,,Latin,S,M,Gold,Red,Blue,TRUE,leotard is broken,Purchased from Alisa Zosin; 2018,y,L2
L301,Red/Black Long,https://lh3.googleusercontent.com/iMNC0CXzN8KZHhu8fe_2nCmEnUMO_kSz8DcidbQb5F4f88i9Wq-wwd-Hg2k3IzYagAdm8927GQm3WI4QaPmUNe1pAohjMM5D7Lgvl_DNtO2j-sanbNQAEAFX9E3ueEp2xOnouK3qkA=w2400,Latin,M,M,Gold,Red,Black,FALSE,moderate; needs to be cleaned (?),,no????,?
L302,Turquoise Satin,,Latin,S,,Open,Blue,,FALSE,,Purchased from Juliana Neves; 2018,y (out),out
L303,Red/Blue Stoned Fringe,,Latin,S,,Open,Red,Blue,FALSE,,Purchased from Juliana Neves; 2018,y (out),out
L304,Tan White Feather,https://lh3.googleusercontent.com/XgVWlMrs72UXLzQtj8XOY6zdGMmXT7jrKf6JEB2Wp1dfl_alqPVJvd5wgvXKebgzkbOcXgQGBsZLNf8s2VXN9j293A_r9V8OZT1APKygHcVdD9PJ08Gm7vZvzvVZYK2ZP1igtiNYcg=w2400,Latin,M,,Open,White,,TRUE,moderate; needs to be cleaned (?),,y,L2
L305,Dark Navy,https://lh3.googleusercontent.com/YD81tDfEEm8hAbpV9EB9y-KgEUBAKZAWg4Fqub0KV5Fb02JH1QBp1IJyqTbP0UrSLyU9uN2CPzMmeQ50179zenmzmUZe9ATmMgvgnj8sGObolgL_e_yCGj3BfZo0GeqoazeUxETPrg=w2400,Latin,M,,Open,Blue,,TRUE,moderate; needs to be cleaned (?),,y,L2
L306,Tan Electric Blue,https://lh3.googleusercontent.com/NoFdeX8HSRGjjKcerfeV2VDpPEJuoFUsEmukTkzi_WX8bJohXEqsk_6BL3YqMqXqxchqBOIVEC5D99Ud6saJ-QjbEftUy1-T-mtZv9cD6t0HxFho3Gdws3aAJ-DhMqAqZ4s28ycUBw=w2400,Latin,M/L,L,Open,Blue,,TRUE,new,,no????,?
S100,Lavender Satin,,Standard,XS,S,Bronze,Purple,,TRUE,,,y,S1
S101,Dark Red; black/pink applique,https://lh3.googleusercontent.com/kLdV9oplfn7qblZeKTydcsxEM07rzBcKmfCPdOcMPodIfIG2wqKA68J0pH8mT2lnooIzTTlOyat76TgKJJmZuEsotrfgwUYH-zAeVcqsVQibHJ8lUH2QFITrKgMqLLYjR8mUSyfJ3A=w2400,Standard,S,,Bronze,Red,Pink,TRUE,,,y,S1
S102,Light Pink,,Standard,S,,Bronze,Pink,,TRUE,,,y,S1
S103,Fluorescent Red,https://lh3.googleusercontent.com/PrJEg9TmCCWZnzYwZsWT9N3CgPZ332RLQ6CssH_9RBeYHTtTutmxRwSbxKC5jfKeCgID_kFhll-XHLZxynDNyYcl4fSqvx3RS-gkezMRTy84UfNm5SbzH03zpiwTIezg_88znjhv6w=w2400,Standard,S,M,Bronze,Red,,TRUE,moderate; no more feather,,y,S1
S104,Burgundy bronze stones,https://lh3.googleusercontent.com/3PRpkqA7KvBAs206sWF3HVmRA7AmMRHMFuPmmOUnVR7EjYMnLLaUZ4Bj8bIUwRE502iUFa8dNvpa6uc7--zwEpvDDLT6EiksTfCYBxw1Toy8VjdRhHJpTSt_SZHKELTyOZtqGGWmlg=w2400,Standard,S,,Bronze,Red,,TRUE,need to attach float,,y,S1
S105,White/Pink Ombre,https://lh3.googleusercontent.com/8x66ugIIUW8hKXG0qO_EejVdNBxGAwmjIeYBGeLDt-EqBHhQRqmV44E_7ohlfniXR32ahOKq6bZa3sWnHHY76GU-Jz3QT3Ae_AebN3h2U3lW4aSFgvmjDjtUocnGy5cspGdBrb0CfA=w2400,Standard,S,,Bronze,White,Pink,TRUE,zipper in back broken,,y,S1
S106,Neon Yellow,https://lh3.googleusercontent.com/2G-vHhmaYMK33IrhMazp_H3b0Z6rSo0AOfMf4iS3Zg3pIY_yeBs5tSMfE4beqXlhIGodcC0KWCPUZFCRQ-9E2jMMCeVKl8rQRsAKGEv6gvfK-dd8QcJ56oiPR6q2mmz-tBAmIJ0Ijg=w2400,Standard,S/M,M,Bronze,Yellow,,TRUE,,,y,S1
S107,White blue stones,https://lh3.googleusercontent.com/z6TZpw0tZTEXOVNMsrC5u80uAmUV5a-gu3WGSON0n84hms3VVR-e7Rz9qH13v-Hd85PkfzqRzqHEFLGUh31YRXiNXYyHZgsQ60wE5kNWOvEegUALre6nncVrUhs3FqCATuJsX4JzwA=w2400,Standard,M,,Bronze,White,Blue,TRUE,,,y,S1
S108,Royal Blue; black applique,,Standard,M,L,Bronze,Blue,Black,TRUE,,,y,S1
S109,Dark Green,,Standard,M,L,Silver,Green,,TRUE,new,purchased from LatinoDancewear; 2018,y,S1
S110,Fire red,,Standard,M,,Silver,Red,,TRUE,new,purchased from LatinoDancewear; 2019,y,S1
S111,Deep sky blue,,Standard,M,,Silver,Blue,,FALSE,new,purchased from LatinoDancewear; 2019,y,S1
S200,Royal Blue white applique,https://lh3.googleusercontent.com/EaelWLFs_pqm-sOCmMhPToSTbiAyDgEc4ZebYQ3eQOLJFuKjWfZILIvQ3iCKioAQKosySSmCOL9xgvgvCQ7mtvINz-nIqFWuIr3QBS1ArhGUqvJDgJ4iaEwOHb2_uJnudtgiL2pdyA=w2400,Standard,M,,Silver,Blue,White,FALSE,,,no,
S201,White; purple flowers,,Standard,S,M,Gold,White,Purple,TRUE,new,bought from VenusDancewear; 2018,y,S2
S202,Purple White Ombre,https://lh3.googleusercontent.com/-US5oAy-X6jM-lnQymsvu0VSMB5lLowStpakxRbWzvaqnq4vPllSZ9C05uOZiv5ChKFUWkOQKXs3Brrs-2JwE4QNM9PH_2iY6q5YwMWNzPrWmMKUWKuMEWcs11EHg_rnoIOj_M5dMA=w2400,Standard,M,,Gold,Purple,White,FALSE,,,no,
S203,Pale Blue,https://lh3.googleusercontent.com/om8OlMycdZ347m2Q3kuRwtqGwx4azH-mfun6C27ZQOg2TdBa_sz8smWZJ3VcTCGFjyslQY7A8LPX02iT52Dvhob2MzYyEI4QCUEv-7riaxKLzyhCkCvqsTqObmupijsg0IhQYEDpxA=w2400,Standard,M,,Gold,Blue,,FALSE,,,y,S2
S204,Electric Blue Ruched,,Standard,M,,Gold,Blue,,TRUE,,,y,S2
S300,Neon Pink,,Standard,XS,S,Gold,Pink,,TRUE,,,y,S3
S301,White/Pink Ombre,,Standard,S,M,Gold,White,Pink,TRUE,,,y,S3
S302,Neon Orange,,Standard,M,,Gold,Orange,,FALSE,,,y,S3
S400,White/Gold Sequins,,Standard,M,,Open,White,Gold,TRUE,,,y,S4
S401,Lavender Lace,https://lh3.googleusercontent.com/FWCq2QcPdbJQfYJOAhceVmkcP3BowQcPainBz1xBEKk0qrFZcju4JbKgCOx-YeiPoMwzLlR-ECqZvnLyhjq0s32-EmFfsh951FLKyo1IJTFNN0swwYxqcb63Q17Ud4A8-kyE4ZxtiA=w2400,Standard,S,,Open,Purple,White,TRUE,,,y,S4
S402,Tan blue horsehair trim,https://lh3.googleusercontent.com/XW-JNyd8rwvreOBpZ3caAfXxGYFCdf-l-dZNqS9lZLfNagFDgSquX321s40kQ34YIhi1WhIF9YTh3S7ukn5E2epyAlkRZSKcT2yP6eEtrONtMg4f3rHuKhgVLkXiZlqUnRLKFt2pRw=w2400,Standard,S,M,Open,Blue,,TRUE,,,no,
S403,White/Black Floral,https://lh3.googleusercontent.com/1zcYe3e8In-qIctIov-tH2Q-heE6g4WWiFWOoWOECdj2c4FH-eqghpdB1ykJEK9ZqmhC3--3hJGABSU6BCFNrjUQaMicETn2NH4dp6qgXEpDxDP8oU_UEQs4AujTb-DyGRauRHbcbg=w2400,Standard,S,M,Open,White,Black,FALSE,,,no,`

		var allTextLines = my_data.split(/\r\n|\n/); 
		allTextLines.forEach(function(thisLine){
								
    		var lineArray = [];
    		lineArray = thisLine.split(",").slice(1, 10);
    		my_array.push(new Dress(lineArray));
    		});
    
    	return my_array;
	}
	
	function filterData(my_style, size, color, my_level, my_avail) {
		
		var search_array = all_data;
		
		if (my_style != "All") {
			search_array = search_array.filter(dress => dress.style == my_style);
		}
		
		if (size != "All"){
			search_array = search_array.filter(dress => (dress.s1 == size || dress.s2 == size));
		}
		
		if (color != "All"){
			search_array = search_array.filter(dress => (dress.c1 == color || dress.c2 == color));
		}
		
		if (my_level != "All"){
			search_array = search_array.filter(dress => dress.level == my_level);
		}
		
		if (my_avail != "All"){
			search_array = search_array.filter(dress => dress.avail == my_avail);
		}
		
		return search_array;	
	}
	
	function updateData() { 
		var sf = document.getElementById("style");
		var style = sf.options[sf.selectedIndex].value;
	
		var sizef= document.getElementById("size");
		var size = sizef.options[sizef.selectedIndex].value;
	
		var cf= document.getElementById("color");
		var color = cf.options[cf.selectedIndex].value;
	
		var lf= document.getElementById("level");
		var level = lf.options[lf.selectedIndex].value;
		
		var af= document.getElementById("availability");
		var avail = af.options[af.selectedIndex].value;
	
		
		
		// here is where we call the api to get the json data
		// then we filter it
		// then we update the display 
		
		var results_list = filterData(style, size, color, level, avail);
		
		var html_string = "";

		results_list.forEach(function(dress)
			{html_string += addImage(dress.name + " (" + dress.s1 + ", " + dress.level + ")", dress.link)} // + addImage(dress.name, dress.link)
			);
		

		//testing adding images
		//var first = addImage("dress", "https://lh3.googleusercontent.com/jIePKChjRvmNq3pDAaQ8xZ6vmQhW-QbBWjuItq6YobpntCNNi5jJv9Mf2grlxs7isblii1yzhb9Cu-7zY74VJvtMsId_QD33Iy2NRTTb8HvjcjfxJDnKX0D4E79TZfEaCYS65120WQ=w2400");
		//var second = addImage("dress", "https://lh3.googleusercontent.com/jIePKChjRvmNq3pDAaQ8xZ6vmQhW-QbBWjuItq6YobpntCNNi5jJv9Mf2grlxs7isblii1yzhb9Cu-7zY74VJvtMsId_QD33Iy2NRTTb8HvjcjfxJDnKX0D4E79TZfEaCYS65120WQ=w2400");
		
		//var full_string = first.concat(second);
		container_block = document.getElementById('datahere');
		container_block.innerHTML=html_string;
		
		//var url = "https://sheets.googleapis.com/v4/spreadsheets/1apfQCiN7wYE3JaHLGe5QgnJmBEmvt73qzZPWlORgn6I";
		
		
	}
		
	function addImage(name, url) {
		return "<div class=\"container\" style=\"float:left; margin:10px;\"> <img src = ".concat(url, " alt=\"Avatar\" class=\"image\">	<div class=\"overlay\"> <div class=\"text\">", name,"</div></div></div>");
    }
    
    
    // stuff for the dropdown menus
    var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
selElmnt = x[i].getElementsByTagName("select")[0];
/* For each element, create a new DIV that will act as the selected item: */
a = document.createElement("DIV");
a.setAttribute("class", "select-selected");
a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
x[i].appendChild(a);
/* For each element, create a new DIV that will contain the option list: */
b = document.createElement("DIV");
b.setAttribute("class", "select-items select-hide");
for (j = 1; j < selElmnt.length; j++) {
/* For each option in the original select element,
create a new DIV that will act as an option item: */
c = document.createElement("DIV");
c.innerHTML = selElmnt.options[j].innerHTML;
c.addEventListener("click", function(e) {
/* When an item is clicked, update the original select box,
and the selected item: */
var y, i, k, s, h;
s = this.parentNode.parentNode.getElementsByTagName("select")[0];
h = this.parentNode.previousSibling;
for (i = 0; i < s.length; i++) {
if (s.options[i].innerHTML == this.innerHTML) {
s.selectedIndex = i;
h.innerHTML = this.innerHTML;
y = this.parentNode.getElementsByClassName("same-as-selected");
for (k = 0; k < y.length; k++) {
y[k].removeAttribute("class");
}
this.setAttribute("class", "same-as-selected");
break;
}
}
h.click();
});
b.appendChild(c);
}
x[i].appendChild(b);
a.addEventListener("click", function(e) {
/* When the select box is clicked, close any other select boxes,
and open/close the current select box: */
e.stopPropagation();
closeAllSelect(this);
this.nextSibling.classList.toggle("select-hide");
this.classList.toggle("select-arrow-active");
});
}
function closeAllSelect(elmnt) {
/* A function that will close all select boxes in the document,
except the current select box: */
var x, y, i, arrNo = [];
x = document.getElementsByClassName("select-items");
y = document.getElementsByClassName("select-selected");
for (i = 0; i < y.length; i++) {
if (elmnt == y[i]) {
arrNo.push(i)
} else {
y[i].classList.remove("select-arrow-active");
}
}
for (i = 0; i < x.length; i++) {
if (arrNo.indexOf(i)) {
x[i].classList.add("select-hide");
}
}
}
/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
