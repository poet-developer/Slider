(function(){
            const stageElem = document.querySelector('.stage');
            const contentElem = document.querySelector('.slider-con');
            const circleElem = document.querySelector('.circle')
            const contents = document.querySelectorAll('.slider-item');
          

            let currentIndex = 1;
            let index =1;
            const MAX_LENGTH = contents.length;
            const MIN_LENGTH = 1;
            
            let WIDTH =-400*0;
            const space = 400;

            let circleOrder =0;

            const data = [{desc : 'A', color: 'rgba(255, 101, 101, 0.5)'},
                            {desc : 'B', color : 'rgba(255, 156, 99, 0.5)'},
                        {desc : 'C', color : 'rgba(255, 232, 101, 0.5)'},
                        {desc : 'D', color : 'rgba(101, 224, 255, 0.5'},
                        {desc : 'E', color : 'rgba(61, 42, 46, 0.5)'},
                        {desc : 'F', color : 'rgba(120, 100, 93)'}
                    ]       

            function paintCircle(circles, currentCircle){
                const dataOrder = Number(circles[currentCircle].getAttribute('data-order'));
                circles[circleOrder].style.opacity = "0.3";
                if(currentCircle === dataOrder){
                    circles[currentCircle].style.opacity = "1";
                }

                circleOrder = currentCircle;
            }

            function moveItem(item, data){
                localStorage.setItem("imgIndex",3);
                if(item.classList.contains('right') && currentIndex<data.length){
                    // right
                    if(currentIndex !== MAX_LENGTH){
                    currentIndex++;
                    }
                    if(index < currentIndex){
                        contentElem.style.transform = `translateX(${(WIDTH - space)}px)`;
                        index++;
                        WIDTH = WIDTH - space;
                    }

                }else if(item.classList.contains('left')){
                    // left
                    if(currentIndex !== MIN_LENGTH ){
                    currentIndex--;
                    }
                    if(index > currentIndex){
                        contentElem.style.transform = `translateX(${(WIDTH + space)}px)`;
                        index--;
                        WIDTH = WIDTH + space;
                    }
                }
                paintCircle(document.querySelectorAll('span'),currentIndex-1);
                
            }

            function clickHandler(e){
                const btnStr =  e.target.className.split(' ')[0];
                if(btnStr === "btn"){
                    moveItem(e.target, data);
                }
            }

        
             function init(){
                makeContent(data); // Num of Content
                stageElem.addEventListener('click',clickHandler);
            }

            //data를 받아 Dom 생성
            const makeContent = (data) => {
                for(var i = 0 ; i<data.length; i++){
                    const newDiv = document.createElement("li");
                    newDiv.classList.add('slider-item');
                    newDiv.innerHTML = data[i].desc // desc
                    newDiv.style.background =  data[i].color
                    contentElem.appendChild(newDiv);

                    const cir = document.createElement("span");
                    cir.dataset.order = i;
                    cir.innerHTML = '●'
                    circleElem.appendChild(cir);
                }
                paintCircle(document.querySelectorAll('span'),0);
            }

            init();
        })();