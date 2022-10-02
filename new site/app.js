const seeMore = document.querySelector(".btn");
const moreInfo = document.querySelector(".more-info");

function showsMore(){
	if(moreInfo.classList.contains('btn')
	){
		moreInfo.classList.remove('btn')
	}else{
		moreInfo.classList.add('btn')
		seeMore.style.opacity = .6;
		seeMore.style.cursor = 'not-allowed';
	}
}

seeMore.addEventListener('click', showsMore);


