# 자바스크립트 알고리즘 연습

## 1. Stack, Queue
Array.prototype에 있는 push()와 pop(),shift()를 이용해서 구현가능. 


    const stack = [];
    
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log(stack.pop());//3 출력
    console.log(stack.shift());//1 출력

## 2. sort 
Array.prototype에 있는 sort()를 이용하면 됨.
유니코드기준 정렬을 하기 떄문에 compare 함수를 구현해야함 
    
    let arr = [1,2,3,4,10];
    arr.sort();
    console.log(arr);// (5) [1, 10, 2, 3, 4]
    
    let compare = ((a,b)=>{return a-b;});
    arr.sort(compare);
    console.log(arr);// (5) [1,2,3,4,10]
    
    arr.sort((a,b)=>{return a-b;});
    console.log(arr);// (5) [1,2,3,4,10]
    
## 3. forEach()
Array.prototype에 있는 메소드.
중간에 종료 불가. 중간에 종료가 필요할 떈 for문을 쓰는게 좋아보임. 

    const arr = [1,2,3,4,5,6,7,8];

    arr.forEach((element,index)=>{
       if(index%2===0){
           console.log(element);
       }
    });
    // 1,3,5,7 출력. 
     
## 4. Map 객체
자바스크립트에서 기본적으로 Map객체를 제공해줌.
Map.prototype.set() , Map.prototype.get(), Map.prototype.size,map.has() 
Map.prototype.get()에서 주의할 점은 해당 key값이 map에 존재 하지 않을 떄 undefined값을 리턴함
Map.prototype.entries() => [map,value] 형태의 iterator 객체 반환
Map.prototype.keys() => 모든 Key에 대한 iterator 객체 반환
Map.prototype.values() => 모든 value에 대한 iterator 객체 반환.
Map.prototye.delete(key) => value값을 반환하면서 제거함. 없다면 false반환. 



    const map= new Map();
    const people = ["a","a","a","b","c","d","e","b"];
    let str="";
    for(let i =0; i< people.length;i++){
       if(map.get(people[i])===undefined){
           map.set(people[i],1);
           continue;
       }
       map.set(people[i],map.get(people[i])+1);
    }
 
 ## 5. for in , for of 
 for in 은 객체의 프로퍼티를 순환할 떄, for of 은 iterable을 순환할 떄 사용. 
 위와 똑같은 map에서 [key,value] iterator객체를 받아와서 for of로 순환. 
    
    for([key,value] of map.entries()){
         str=str+key+":"+value+"\n";
     }
     console.log(str)// a:3 \n b:2 \n  ...
     
 ## 6. filter()
 Array.prototype 에 존재하는 메소드
 주어진 함수를 통과하는 element들을 모아 새로운 배열을 반환해줌. 
 Web docs에 좋은 예제가 있어서 들고옴. filter를 이용해 해당 문자열이 존재하는 element만 모아서 반환함. 
 
     const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];


     const filterItems = (query) => {
         return fruits.filter((el) =>
             el.toLowerCase().indexOf(query.toLowerCase()) > -1
            );
       }
 
     console.log(filterItems('ap')); // ['apple', 'grapes']
     console.log(filterItems('an')); // ['banana', 'mango', 'orange']
 
    
    
