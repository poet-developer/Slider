(function(){
            const stageElem = document.querySelector('.stage');
            const content = document.querySelector('.slider-con');
            const circleCon = document.querySelector('.circle');
            const circles = document.querySelectorAll('span');

            let currentIndex = 1;
            let index =1;
            const MAX_LENGTH = 5;
            const MIN_LENGTH = 1;
            
            let WIDTH =-400*0;
            const space = 400;

            let circleOrder =0;

            function paintCircle(currentCircle){
                const dataOrder = Number(circles[currentCircle].getAttribute('data-order'));

                circles[circleOrder].style.opacity = "0.3";
                // console.log("last"+circleOrder);
                // 어차피 동시 적용되는 조건 밑에서 중복되서 덮음 
                if(currentCircle === dataOrder){
                    circles[currentCircle].style.opacity = "1";
                    // console.log("now"+currentCircle);
                }

                circleOrder = currentCircle;
            }

            function moveItem(item){
                console.log(WIDTH,"index:"+index,"currentIndex"+currentIndex);
                localStorage.setItem("imgIndex",3);
                if(item.classList.contains('right')){
                    // right
                    if(currentIndex !== MAX_LENGTH){
                    currentIndex++;
                    }
                    if(index < currentIndex){
                        content.style.transform = `translateX(${(WIDTH - space)}px)`;
                        index++;
                        WIDTH = WIDTH - space;
                    }

                }else if(item.classList.contains('left')){
                    // left
                    if(currentIndex !== MIN_LENGTH ){
                    currentIndex--;
                    }
                    if(index > currentIndex){
                        content.style.transform = `translateX(${(WIDTH + space)}px)`;
                        index--;
                        WIDTH = WIDTH + space;
                    }
                }
                paintCircle(currentIndex-1);
                
            }

            function clickHandler(e){
                const btnStr =  e.target.className.split(' ')[0];
                if(btnStr === "btn"){
                    moveItem(e.target);
                }
            }

            

            function init(){
                paintCircle(0);
                stageElem.addEventListener('click',clickHandler);
            }


            // refresh();
            init();
        })();