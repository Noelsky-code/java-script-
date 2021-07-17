# 자바스크립트 공부 및 연습
<strong>인사이드 자바스크립트 + 구글링으로 자바스크립트 정리하기.</strong> 
## Eslint 사용법

```
$ npm init
```
1. npm init으로 package.json 생성
```
$ npm install eslint
```
2. eslint 설치 
```
$ eslint --init 
```
3. eslint 시작 
4. 여러 질문들 -> 기본 세팅완료
5. .eslintrc 파일 생성 
6. 여러 rule들을 추가함
7. eslint를 실행할 js파일을 지정함
```
$ eslint App.js 
```
## 객체 프로퍼티 
자바스크립트의 객체 프로퍼티는 동적으로 추가, 삭제 가능함
delete는 프로퍼티의 삭제만 가능하고 객체의 삭제는 불가능함. 
```javascript
let a = {
    name : 'hansol',
    age : 25
};
a.sex = 'male';
console.log(a.sex);// 객체에 동적으로 추가되어 male 출력
delete a.age;//a.age 삭제
console.log(a.age);//undefined -> 삭제 완료 의미
delete a;
console.log(a.name);//hansol 출력 -> 객체 삭제는 안됨 
```
## 배열
자바스크립트의 배열은 동적으로 요소를 추가할 수 있으며 배열에 들어가는 데이터 형식은 상관이 없다.  
또한 값을 순차적으로 넣을 필요없이 아무렇게나 넣어도 동적으로 할당해 준다.  
```javascript
let arr = [];
arr[0]=1;
arr[1]='google';
console.log(arr[1]);// google 출력
arr[3] = 5;
console.log(arr);//[1,google,undefined,5] 출력 
```
자바스크립트의 모든 배열에는 length 프로퍼티가 있으며 배열의 크기를 알려준다.  
하지만 실제 원소들의 갯수를 의미하진 않으며 그저 배열내의 가장 큰 인덱스에 1을 더한 값이다.
또한 실제 메모리는 length 만큼 할당되지 않는다. (undefined)
```javascript
console.log(arr.length);//4출력
arr[100] = 1;
console.log(arr.length);//101출력 
```
#### 배열- length 프로퍼티 
또한 length 프로퍼티를 명시적으로 변경 가능하며 빈 공간은 undefined가 된다. 즉 메모리가 할당되진 않는다.  
만약 length 프로퍼티가 기존 값에서 감소한다면 사라진 영역은 삭제된다. 
```javascript
arr.length = 5;
console.log(arr);//[1,google,undefined,5] 출력
arr.length=7;
console.log(arr);//[1,google,undefined,5,undefined x 2]
```
#### 배열 - push()메서드
push()메서드는 인수로 넘어온 항목을 배열의 끝에 추가하는 자바스크립트 표준 배열 메서드이다.  
이 메서드는 현재 legnth 값의 위치에 새로운 값을 추가하며 length를 1 증가시켜준다.  
   
push() 메서드가 length 값에 따라 작동하므로 length값을 임의로 바꾼다면 push() 메서드로 추가되는 값의 위치도 바뀌게 된다. 
```javascript
let arr = [1,2];
arr.length=3;
arr.push(3);
console.log(arr);//[1,2,undefined,3] 출력 
```
#### 배열과 객체의 차이 
배열과 객체는 둘 다 자바스크립트에서 객체이지만 차이점이 존재한다. 
먼저 배열엔 length 프로퍼티가 있지만 일반 객체에는 length 프로퍼티가 존재하지 않는다.  
또한 배열은 배열 표준 메서드를 호출할 수 있지만 일반 객체는 사용할 수 없다. 
이는 배열과 일반 객체의 프로토타입이 다르기 때문이다.  

배열은 배열 표준 메서드를 저장하고 있는 Array.prototype 객체가 프로토타입인데 반해 일반 객체는 Object.prototype 객체가 프로토타입이다.
Array.prototype 객체는 Object.prototype 객체를 프로토타입으로 가지고 있기 때문에 배열 객체는 Object.prototype에 정의된 메서드들을 사용할 수 있다. 

#### 배열의 프로퍼티
배열도 객체이므로 프로퍼티를 가질 수 있으며 동적으로 할당이 가능하다. 
하지만 배열 원소의 개수가 바뀌는건 아니기 떄문에 length는 변하지 않는다 
```javascript
let arr = [1,2];
arr.color = 'blue';
arr.name = 'arr';
console.log(arr.color);//blue 출력 
console.log(arr.length)//2출력
```
#### 배열과 for문 
배열도 객체이므로 for in 문을 사용해 배열내의 모든 프로퍼티를 열거할 수 있다.  
for문은 배열의 요소만 출력한다
```javascript
for(let prop in arr){
    console.log(prop,arr[prop]);//프로퍼티와 배열의 요소까지 모두 열거
}

for(let i =0;i<arr.length;i++){
    console.log(i,arr[i]);// 배열의 요소만 출력 
}
``` 
#### 배열 요소 삭제
배열도 객체이므로 delete연산자를 이용해 배열 요소를 삭제할 수 있음
하지만 delete는 해당 요소의 값을 undefined로 바꿀뿐 원소자체를 삭제하지 않음
```javascript
let arr = ['zero','one','two','three'];
delete arr[2];
console.log(arr);// [zero,one,undefined,three]
console.log(arr.length);//4
```
따라서 배열에서 요소를 삭제할 경우 splice() 메서드를 사용함.
* splice(start,deleteCount,item...)
* start : 시작위치
* deleteCount : 시작위치로부터 삭제할 요소의 수 
* item : 삭제할 위치에 추가할 요소

```javascript
arr.splice(2,1);
console.log(arr);//[zeron,one,three]
console.log(arr.length);//3
```
#### Array() 생성자 함수
일반적으로 리터럴로 배열을 생성하지만 이는 결국 Array() 생성자 함수로 배열을 생성하는 과정을 단순화 한 것임.  
자바 스크립트도 생성자 함수를 이용해 객체를 생성할 때는 new 연산자를 같이 써줘야함.  
* Array() 생성자 함수의 인자가 1개이고 숫자일 경우 : 호출된 인자를 length로 가지는 빈 배열 생성
* 그외의 경우: 호출된 인자를 요소로 갖는 배열 생성 
## 유사 배열 객체
배열의 length 프로퍼티는 배열의 동작에 아주 중요한 프로퍼티.  
만약 일반 객체가 length 프로퍼티를 가지고 있다면 일반 객체임에도 불구하고 표준 배열 메서드를 사용하는게 가능함.  
이렇게 length 프로퍼티를 가지고 있는 객체를 유사 배열 객체라고 함.
    
하지만 유사 배열 객체는 배열이 아니므로 바로 표준 배열 메서드를 호출하면 에러가 발생함.  
```javascript
let obj = {
    name: 'hansol',
    length : '1'
};
obj.push(1);//error
```
하지만 apply()메서드를 사용하면 표준 배열 메서드를 사용할 수 있음.
```javascript
Array.prototype.push.apply(obj,['lala']);
console.log(obj);//{'1':'lala',name:'hansol',length:2}
```
## 기본타입의 표준 메서드
자바스크립트의 기본타입(number,string,boolean)은 객체가 아닌데 charAt()등의 표준 메서드를 사용할 수 있다.  
이는 메서드를 처리하는 순간에 객체로 변환한 다음 메서드를 호출한 후 다시 기본 타입으로 돌아오는 과정을 거치기 떄문이다.
따라서 기본 타입도 표준 메서드들을 호출할 수 있게 된다. 

## == 연산자, === 연산자, !! 연산자
자바스크립트에서 두 값이 동일한지 확인하는데 쓰이는 연산자 들이다.  
두 개의 차이점은 == 연산자는 피연산자들의 타입이 다른 경우 타입 변환을 거친 다음 비교하지만 ===연산자는 피연산자의 타입이 다를 경우에 타입을 변경하지 않고 변경함.  
따라서 자바스크립트에서는 ===연산자를 사용하길 권장하고 있음

!! 연산자는 피연산자를 boolean 값으로 변환하는 역할을 함.
```javascript
console.log(!!0);//false
console.log(!!1);//true
```
## 프로토타입
자바스크립3트의 모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있음.  
상속 개념과 비슷하게 부모 객체의 프로퍼티를 자신의 것처럼 쓸수 있으며 이런 부모 객체를 프로토아입 이라고 부름.  
  
자바스크립트의 모든 객체는 자신의 프로토타입을 가르키는 [[ProtoType]]이라는 숨겨진 프로퍼티를 가짐. 브라우저에서는 _ proto _ 에서 확인가능. 
   
모든 객체의 프로토타입은 객체를 생성할 때 결정됨  


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
 
    
    
