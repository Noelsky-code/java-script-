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

## 함수의 선언 방법
#### 1. 함수 리터럴 
```javascript
function add(x,y){
    return x+y;
}
```
함수 선언문이나 함수 표현식 방법 모두 함수 리터럴 방식으로 함수를 생성함. 
함수명은 선택사항. 만약 함수 명이없다면 익명함수임.  
매개 변수는 타입을 기술하지 않는다는 점이 다른 언어와의 차이점임.
#### 2. 함수 선언문 
함수 리터럴 형태와 같지만 함수명이 반드시 정의되어있어야함.
```javascript
function add(x,y){
    return x+y;
}
console.log(add(3,5));//8출력
```
#### 3. 함수 표현식
함수도 하나의 값처럼 취급되므로 함수를 어떤 변수에 할당하는 것이 가능함.
이렇게 함수 리터럴로 함수를 만들고 이 함수를 변수에 할당하는 방식이 함수 표현식임.  
이떄 변수에 할당되는 함수는 함수 이름이 선택 사항이며 보통은 익명 함수로 만듬.  
```javascript
let add = function(x,y){
    return x+y;
};
let plus = add;
console.log(add(3,4),plus(3,4));//7 7 출력 
```
이때 할당되는 변수는 익명함수의 참조값을 할당받게 되므로 plus 변수도 같은 익명함수의 참조값을 할당받음  
따라서 plus도 add에 할당된 함수를 이용하게 되는것임. 
    
그렇다면 익명함수가 아니라 기명함수라면 어떻게 될까? 
```javascript
let add = function sum(x,y){
    return x+y;
}
console.log(add(3,4));// 7 출력 
console.log(sum(3,4));// error 발생 
```
sum()함수는 에러가 발생한다. 이는 함수 표현식에서 사용된 이름은 함수 외부에서 접근이 불가능 하기 떄문이다.  
그래서 이런 함수표현식에서의 기명함수는 함수 내부에서 재귀적으로 호출할 떄, 디버거등에서 함수를 구분할 때 쓰인다.
    
#### 함수 표현식에서의 세미클론
함수 표현식의 끝에 세미클론을 붙이는 것은 관습이다.  
자바스크립트에서는 세미클론 사용을 강제하지 않는데 이는 인터프리터가 자동으로 세미클론을 삽입시켜주기 떄문.  
하지만 세미클론을 붙이지 않는다면 자바스크립트에서는 중괄호를 함수의 끝이라고 생각하지 않는 경우가 발생할 수 있으므로 에러가 발생할 수 있다.  
이런 문제가 발생할 수 있기 떄문에 세미클론 사용을 권고하고 있다. 

### 함수 호이스팅 
더글러스 크락포드가 함수 표현식 만을 사용할 것을 강조한 이유.  
```javascript
add(2,3);//5
function add(x,y){
    return x+y;
}
add(4,3);//7
```
맨 처음 add(2,3)의 경우 함수가 정의되어 있지 않는데도 함수를 호출하는데 이는 함수 선언문 형태로 정의한 함수의 유효범위가 코드의 맨 처음부터 시작하기 떄문임.  
이것을 함수 호이스팅이라고 함.  
이 점은 함수를 사용하기 전에 반드시 선언해야한다는 규칙을 무시하므로 코드의 구조를 엉성하게 만들 수 있음.  
따라서 함수표현식 방식을 권장함.
```javascript
add(2,3);//error
let add = function(x,y){
    return x+y;
};
add(3,4);//7
```
함수 호이스팅의 원인은 변수 생성과 초기화의 작업이 분리되기 때문임. 

## 함수 객체
함수도 객체이며 일반 객체처럼 프로퍼티를 가질 수 있다.
함수의 코드는 [[CODE]] 내부 프로퍼티에 저ㅏ동으로 저장된다.
```javascript
function add()~~~~

add.result = add(3,2);
console.log(add.result);//5출력 
```
자바스크립트 함수의 특징 
* 리터럴에 의해 생성
* 변수나 배열의 요소, 객체의 프로퍼티 등에 할당가능 (함수가 값으로 취급됨)
* 함수의 인자로 전달 가능
* 함수의 리턴값으로 리턴 가능
* 동적으로 프로퍼티를 생성 및 할당 가능

이런 특징들 때문에 함수를 일급 객체라고 부름, 함수형 프로그래밍이 가능해짐. 
 1. 프로퍼티 값으로 할당
```javascript
let obj = {};
obj.a = function(){return 100;}
console.log(obj.a());//200 출력
```
 2. 함수 인자로 전달
    f 함수는 func을 실행해주는 함수임.  
    익명 함수를 f의 인자로 전달함으로써 익명함수를 실행해줌.  
   ```javascript
    let f = function(func){
        func();
    };

    f(function(){
        console.log('hello');
    });
    
   ```
3. 리턴값으로 활용
```javascript
let f = function(){
    return function(){
        console.log('hello');
    };
};

let b = f();//익명 갹채룰 할당받음 
b();//익명 객체를 실행함 ,hello 출력 . 
```
#### 함수 객체의 기본 프로퍼티 
일반 객체와는 다르게 추가로 함수 객체만의 표준 프로퍼티가 정의되어 있음.  
length, prototype 프로퍼티, name 프로퍼티, caller, arguments, __proto__프로퍼티를 가짐.
caller 프로퍼티는 자신을 호출한 함수를 의미, argumnets는 함수를 호출할 떄 전달된 인자를 나타냄
   
함수의 __proto__즉 프로토타입은 Function.prototype 객체이며 이 프로토타입 객체도 함수 객체이다. 
이 프로토타입에는 constructor 프로퍼티, toString() 메서드,apply() 메서드,call() 메서드,bind() 메서드가 있다.
   
length 프로퍼티는 함수가 정상적으로 실행될 때 기대되는 인자의 개수를 나타낸다.

함수 객체가 가지는 prototype 프로퍼티는 함수가 생성자로 사용될때 이 함수를 통해 생성된 객체의 부모 역할을 하는 프로토타입 객체를 가르킴.  
__proto__프로퍼티는 함수의 프로토타입 객체를 의미한다는 점에서 다름.  
    
prototype 프로퍼티는 함수가 생성될 때 만들어 지며 단지 constructor 프로퍼티 하나만 가지는 객체를 가르킴. 그리고 이 객체의 constructor 프로퍼티는 자신을 가르키는 함수를 가르킴.  즉 서로를 참조하는 구조. 
```javascript
function func(){
    return true;
}
console.dir(func.prototype);//constructor가 있는 객체를 출력 
console.dir(func.prototype.constructor);//func에 대한 정보 출력 
```
### 콜백 함수
익명함수의 대표적인 용도가 콜백함수임.  
* 콜백함수는 개발자가 단지 함수를 등록하기만 하고, 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출되는 함수를 말함.   
* 특정 함수의 인자로 넘겨서 코드 내부에서 호출되는 함수도 콜백함수가 될 수 있음
* ex)이벤트 핸들러 처리 -> window.onload 이벤트 핸들러를 익명함수로 연결해 익명함수를 콜백함수로 등록함. 
```javascript
window.onload = fucntion(){
    alert('hello');
};
```
### <strong>즉시 실행 함수</strong>
함수를 정의함과 동시에 바로 실행되는 함수.  
먼저 ()으로 함수 리터럴을 둘러싼 후 함수가 바로 호출 될 수 있도록 ()을 추가해줌.  
당연히 인자도 같이 넣어줄 수 있음.  
```javascript
(function(name){
    console.log('my name is '+name);
})('hansol');
```
즉시 실행 함수는 같은 함수를 다시 호출할 수 없음.
   
따라서 최초 한번의 실행만을 필요로 하는 부분에 쓰임.
* 초기화하는 부분 
* 라이브러리나 프레임워크
라이브러리나 프레임워크에서 쓰이는 이유는 기본적으로 자바스크립트의 변수가 전역 유효 범위를 가지는데 함수 내부에서 정의된 변수들은 함수 내부에서만 유효하기 때문임.  
이렇게 하면 함수 외부에서 함수 내부의 변수를 access하지 못하기 떄문에 변수 네이밍 충돌 문제같은게 발생하지 않게 할 수 있음. 

### 내부함수
함수 내부에 정의된 함수를 내부함수라고 부름
내부함수는 클로저를 생성하거나 독립적인 헬퍼함수를 구현하는데에 사용함.
```javascript
function parent(){
    var a = 100;
    var b = 200;
    function child(){
        var b = 300;
        console.log(a);
        console.log(b);
    }
    child();
}
parent();//100,300 출력 
child();//error
```
내부함수에서는 부모함수의 변수에 접근 가능 
* child에서 a변수에 접근하였음
* b는 child 함수의 b를 따라감. 

이런게 가능한 이유는 스코프 체이닝 떄문임.  

내부함수는 일반적으로 부모 함수 내부에서만 호출 가능.
-> 스코프 체이닝 때문이며 함수 내부에서 선언된 변수가 함수 외부에서 호출할 수 없는것과 동일함. 
기본적으로 함수 스코프 안에 선언된 변수나 함수에 함수 스코프 밖에서 접근하지 못함.  
-> 또한 스코프 체이닝 때문에 함수 내부에서는 함수 외부에 선언된 변수들을 호출가능함. 
   
만약 부모함수에서 내부함수를 리턴한다면 부모 함수 밖에서 내부 함수를 호출 가능함. 
```javascript 
function parent(){
    var a = 100;
    var child = function(){
        console.log(a);
    }

    return child;
}

var inner = parent();
inner();
```
이와 같이 부모 함수 스코프의 변수를 참조하는 inner() 같은 함수를 클로저라고 함.

### arguments 객체

자바스크립트는 타 언어와 다르게 엄격한 문법 체크를 하지 않음.  
그래서 함수를 호출할 때 함수 형식에 맞춰 인자를 넘기지 않더라도 에러 발생하지 않음.

함수에 정의된 인자보다 적게 함수를 호출했을 경우에는 해당 인자에는 undefined가 할당되며 초과한 인수는 무시됨.  

```javascript
function func(arg1,arg2){
    console.log(arg1,arg2);
}
func();//undefined undefined
func(1); //1 undefined
func(1,2); //1 2
func(1,2,3);//1 2 
```
이러한 특성때문에 자바스크립트는 런타임시에 호출된 인자의 개수를 확인해주고 이에 따라 동작을 다르게 할 필요가 있음.  
이걸 가능하게 하는게 arguments 객체.  
   
arguments 객체는 인자들과 함께 함수 내부로 전달되는 객체이며 함수 호출시 넘긴 인자들이 이 객체에 배열형태로 저장됨.  
이 객체는 배열이 아닌 유사배열객체. -> 따라서 배열 메서드를 사용하지는 못함. 

   
<strong>arguments 객체 구조</strong>
* 함수 호출시 인자 : 첫번째 인자는 인덱스 0 , 두번쨰는 1 ....
* length 프로퍼티 : 인자의 개수
* callee 프로퍼티 : 현재 실행중인 함수의 참조값.

arguments객체는 매개변수 개수가 정확하게 정해지지 않은 함수나 인자의 개수에 따라 다르게 처리해야하는 함수에 유용하게 쓰임.  
```javascript
fucntion sum(){
    let result=0;
    for(let i=0;i<arguments.length();i++){
        result+=arguments[i];
    }
    return result;
}
```
이렇게 구현해 놓으면 인자 개수에 상관없이 전달한 모든 값을 더한 결과를 리턴할 수 있음.  

### this 바인딩
자바스크립트에서의 this는 함수가 호출되는 방식에 따라 다른 객체를 참조하게 됨.  
#### 1.메서드 호출 시 this 바인딩 
메서드 내부 코드에서 사용되는 this는 해당 메서드를 호출한 객체로 바인딩됨.  
```javascript
let obj = {
    name: 'foo',
    age: 30,
    sayName : function(){
        console.log(this.name);
    }
};

let a ={
    name:'hansol'
};

a.sayName = obj.sayName;
console.log(obj.sayName());//foo 출력
console.log(a.sayName());//hansol 출력
``` 
위 코드에서 this가 각각 자신을 호출한 객체인 obj와 a에 바인딩 되었음을 확인할 수 있다.

#### 2.함수 호출 시 this 바인딩
자바스크립트에서 함수를 호출하면 함수 내부에서 사용되는 this는 전역 객체(브라우저 : window, Node.js : global)에 바인딩 됨.  
```javascript
var test = "i`m foo";
console.log(global.test);

var sayFoo =function(){
    console.log(this.test);
};
sayFoo();
```
위 코드를 실습했는데 당연히 의도한대로 i`m foo가 두번 출력될줄 알았는데 undefined가 두번 출력됐음.  
실습 환경이 node.js인데 아마 node.js에서 전역변수를 지양하기 떄문에 이런 방식으로 더이상 전역변수를 못쓰게한것 같다. 
```javascript
var test = "i`m foo";
console.log(global.test);//i`m foo 출력 
global.test = test;

var sayFoo =function(){
    console.log(this.test);
};
sayFoo();i`m foo 출력 
```
이렇게 ```global.test = test```로  직접 전역변수로 등록을 해줘야 정상적으로 this가 global.test에 접근해서 i`m foo를 출력했다.  
### 내부함수의 this 바인딩 
내부 함수의 this는 obj 객체가 아닌 전역 객체에 바인딩 된다. 왜냐하면 함수 호출이기 때문. 
```javascript
let value =100;

let obj = {
    value : 1,
    func1 : function(){
        this.value +=1;
        console.log('func1 value: '+this.value);
        func2 = function(){
            this.value +=1;
            console.log('func2 value: ' + this.value);
        };
        func2();
    }
};
obj.func1();
```
출력 결과 : 2 , NaN
  
내부함수의 이런 한계를 극복하려면 부모함수의 this를 내부함수가 접근 가능한 변수(that)에 저장하는 방법이 사용됨.  
이렇게 되면 내부함수에서는 that을 통해 부모함수의 this에 접근가능. 
```javascript
let value =100;

let obj = {
    value : 1,
    func1 : function(){
        this.value +=1;
        console.log('func1 value: '+this.value);
        that = this;
        func2 = function(){
            that.value +=1;
            console.log('func2 value: ' + that.value);
        };
        func2();
    }
};
obj.func1();

```
출력 결과 : 2 , 3 

자바스크립트에서는 이런 바인딩 관련 한계를 극복하려고 call과 apply 메서드를 제공함.  
여러 라이브러리에서는 bind라는 메서드를 통해 사용자가 원하는 객체를 this에 바인딩할 수 있도록 해줌.  
### 생성자 함수 this 바인딩 
자바스크립트에서는 기존 함수에 단순히 new 키워드를 붙이면 생성자 함수로 작동함.  
따라서 생성자 함 수 첫 문자를 대문자로 쓰기를 권장함.  

생성자 함수가 동작하는 방식은 다음과 같음
1. 빈 객체 생성 및 this 바인딩 
   -  빈 객체 (프로토 타입이 생성자 함수의 prototype 프로퍼티를 가르키는 객체인) 에 this가 바인딩됨. 
   - 따라서 생성자 함수 코드에서의 this는 이 빈 객체가 됨. 
2.  생성자 함수의 this를 통해 빈 객체의 프로퍼티를 생성함 
3. 생성된 객체 리턴 
   - 만약 리턴문이 없다면 만들어진 객체를 리턴
   - 만약 리턴문이 있다면 리턴문에 있는 객체를 리턴 

즉 생성자 함수 실행 결과 생성자 함수의 prototype 프로퍼티가 가르키는 객체를 프로토 타입으로 하는 새로운객체가 리턴됨. 

만약 new 키워드를 붙이지 않은 채 생성자 함수를 호출하면 에러가 발생함.  
왜냐하면 생성자 함수의 this 바인딩과 일반 함수의 this 바인딩이 다르기 때문에  
new 키워드를 붙이지 않는다면 this가 전역 객체에 바인딩 되기 때문임. 
   
* 이런 위험을 피하기 위해 사용 되는 패턴
  - 만약 new 키워드로 호출했다면 callee 와 this가 같을것이고 new 가 아니라면 다를것.. 따라서 new 키워드로 호출하지 않았다면 new 키워드를 붙여 반환해주는 코드. 
```javascript
function A(arg){
    if(!(this instance of arguments.callee)){
        return new A();
    }
}
```
### 생성자 함수 생성 객체와 객체리터럴 객체의 차이 
단순한 차이는 객체 리터럴 방식은 당연히 재생산이 안된다는점, 생성자 함수 방법은 재생산이 가능하다는 점이다. 
  
구조적인 차이는 객체 리터럴 방법은 프로토타입이 Object.prototype인데 반해 생성자 함수 방식 생성자함수.prototype 이다.  
이는 객체 리터럴 방식은 생성자 함수가 Object()이기 떄문.  

## 화살표 함수에서의 this 
일반 함수는 this가 동적으로 바인딩 되는데에 비해 화살표 함수는 정적으로 바인딩됨.  
  
화살표 함수의 this는 언제나 상위 스코프의 this를 가르키며 이를 Lexical this라고 함.  
또한 화살표 함수는 call,apply,bind 메소드를 통해 this를 변경할 수 없음. 

* 단, 화살표 함수로 메서드를 정의하는것은 피해야함.  
왜냐하면 메소드에 화살표 함수를 정의한다면 화살표함수 내부 this는 객체가 아닌 상위 컨택스트인 전역객체를 가르키기 때문.
*  또한 같은 이유로 prototype에 메서드를 할당하는 경우에도 사용을 지양함
*  생성자 함수를 화살표 함수로 지정해서는 안되는데 화살표 함수가 prototype 프로퍼티를 가지고 있지 않기 떄문. 
*  addEventListener 함수의 콜백함수로도 사용해서는 안됨. this가 전역객체를 가르키게 됨. 

따라서 화살표 함수는 간단하지만 쓰임새가 제한되야할 것 같다.  
내 생각에는 입출력 혹은 콜백함수 정도에 쓰이는게 좋은 것 같다. (혹은 아주 간단한 함수) 

## call 과 apply를 이용한 this 바인딩
자바스크립트에서 특정 객체에 명시적으로 this를 바인딩 시켜주기 위해 제공하는 메서드.  
* function.apply(thisArg,argArray)
apply() 메서드는 호출하는 주체가 함수이며 this를 특정 객체에 바인딩 시킬 뿐 본질은 함수호출임.  
만약 Person.apply() 라고 호출한다면 결국엔 Person() 함수를 호출한다는 뜻.  
    
첫번째 인자 thisArg는 this에 바인딩할 객체를 의미.  
두번쨰 인자 argArray는 함수에 넘길 인자를 의미.  
즉 argArray를 호출한 함수의 인자로 전달하되 this를 thisArg에 바인딩하겠다는 의미.  

apply() 메서드의 경우에는 두번쨰 인자가 배열이 아닌 값 하나 하나 .. 
```javascript
function Person(name,age){
    this.name = name;
    this.age = age;
}

let foo = {};
Person.apply(foo,['hansol',30]);
console.log(foo);
let vat = {};
Person.call(vat,'hansol',30);
console.log(vat);
```
{ name: 'hansol', age: 30 }
{ name: 'hansol', age: 30 }
  
apply나 call 메서드는 this를 원하는 값으로 바인딩하여 특정 함수나 메서드를 호출할 수 있다는 점에서 장점이 있음.  
대표적인 용도가 유사 배열 객체에서 배열 메서드를 사용하는 경우임.
아래 코드는 slice 메서드를 arguments에 바인딩하는 예제.  
따라서 유사 배열 객체인 arguments가 바인딩 되어 slice 메서드를 사용할수 있게 됨.  
아마 slice 메서드 내부에서 this를 이용하기 때문에 그대로 사용할 수 있는거 같음.    
```javascript
function func(){
    let args = Array.prototype.slice.apply(arguments);
    console.log(args);
}
func(1,2,3);
```
### 함수의 리턴값
자바스크립트의 함수는 항상 리턴값을 반환함.  
1. 만약 return 을 지정하지 않는다면 undefined값이 리턴됨
2. 생성자 함수에서 리턴값을 지정하지 않느다면 생성된 객체가 리턴됨.  
3. 만약 생성자 함수의 리턴값으로 객체를 지정했다면 해당 객체가 리턴됨
4. 만약 생성자 함수의 리턴값이 기초 자료형이면 생성된 객체가 리턴됨. 
```javascript
function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    return 100;
}
let a = new Person('hansol',25,'male');
console.log(a); // Person { name: 'hansol', age: 25, gender: 'male' }
```
## 프로토타입 체이닝 
객체 리터럴 방식으로 생성된 객체의 생성자 함수는 Object() 함수임.  
따라서 Object() 함수의 prototype 프로퍼티가 가르키는 Object.prototype 객체를 생성된 객체의 [prototype]이 가르킴.
만약 생성된 객체에 없는 메서드를 호출할 경우 프로토타입 객체의 프로퍼티를 검색함.  
이것이 프로토타입 체이닝임. 

생성자 함수로 생성한 객체의 프로토타입 체이닝은 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 프로토타입으로 설정함. 
그리고 프로토타입 체이닝은 생성된 객체 -> 프로토타입 객체 -> Object.prototype 객체로 이어짐.

즉 프로토타입 체이닝의 종점은 Object.prototype 객체이며 모든 자바스크립트 객체는 Object.prototype객체가 가진 프로퍼티와 메서드에 접근가능하며 공유가능하다는 뜻. 
   
따라서 모든 객체가 사용할 수 있는 Object.prototype에 자바스크립트의 표준 메서드들이 정의되어 있음.
또한 숫자, 문자열, 배열등에서 사용되는건 각각 Number.prototype, String.prototype, Array.prototype 객체에 정의되어 있음.  
그리고 각 표준 빌트인 프로토타입 객체에 사용자가 직접 메서드를 추가하는게 가능함. 
   
여기서, 함수가 생성될때 prototype 프로퍼티에 연결되는 객체는 constructor 프로퍼티만 가지지만 일반 객체처럼 동적으로 프로퍼티 추가/삭제가 가능함.  
그리고 실시간으로 프로토타입 체이닝에 반영됨. 

### 프로토타입 메서드 this 바인딩
프로토타입 메서드 내부에서 this를 사용한다면 당연히 호출한 객체에 this가 바인딩됨. 
```javascript
function Person(name){
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
};

let foo = new Person('hansol');//hansol
console.log(foo.getName());
Person.prototype.name = 'aa';
console.log(Person.prototype.getName());//aa
```
위 코드의 경우 foo.getName()을 호출하면 foo 객체에 getName 메서드가 없으므로 Person.prototype을 검색하고 여기서 getName 메서드를 찾게된다.  
이때 getName을 호출한 객체는 foo이므로 foo에 this가 바인딩되어 정상적으로 출력하게 된다.  
Person.prototype.getName()의 경우 호출한 객체가 Person.prototype 객체이므로 this에 Person.prototype객체가 바인딩되며 name 프로퍼티를 리턴하게 된다. 

### 디폴트 프로토타입의 변경
디폴트 프로토타입은 함수가 생성될 떄 만들어지는 객체이며 함수의 prototype 프로퍼티에 연결됨.  
이 디폴트 프로토타입을 다른 일반 객체로 변경하는 것이 가능하며 이를 이용해 상속을 구현할 수 있다.  
   
이때, 프로토타입을 변경하기 전의 객체들은 기존의 프로토타입에 링크되며 변경 후에 생성되는 객체들은 변경된 프로토타입에 연결된다. 
```javascript
function Person(){
    this.name = name;
}

console.log(Person.prototype.constructor);//Person() 생성자 함수 
Person.prototype = {
    age : 12
};
console.log(Person.prototype.constructor);// Object() 생성자 함수
```
아래 console.log()의 경우 바뀐 프로토타입 객체는 constructor 프로퍼티가 없으므로 프로토타입 체이닝이 일어남.  
따라서 Object.prototype에서 constructor 프로퍼티를 찾게되고 이 프로퍼티가 가르키는 것은 Object() 생성자 함수이므로 Object() 생성자 함수를 출력하게 됨.  

### 프로토타입 체이닝과 쓰기 
프로토타입 체이닝은 읽기나 메서드를 실행할때만 동작함.  
당연히 프로퍼티의 쓰기, 메서드의 추가 등은 동적으로 객체에 추가되기 떄문에 프로토타입 체이닝이 일어나지 않음. 

## 실행 컨텍스트
실행 컨텍스트는 타 언어의 콜 스택과 비슷한 개념으로 실행 가능한 자바스크립트 코드 블록이 실행되는 환경이다.  
컨텍스트 안에는 실행에 필요한 여러 정보들이 있으며 대부분은 함수이다. 
실행 컨텍스트가 형성되는 시점은 3가지가 있는데 전역코드, eval()함수코드 , 함수안의 코드이다.   
프로그래머들은 함수로 실행컨텍스트를 만들며 코드가 실행되면 함수의 실행 컨텍스트가 생성되며 스택안에 쌓이게 된다.  
제일 위에 있는 실행 컨텍스트가 현재 실행되는 컨텍스트이다.  
  
실행 컨텍스트의 생성은 ECMAScript에서 다음과 같이 설명한다. 
"현재 실행되는 컨텍스트에서 관련없는 실행코드가 실행되면 새로운 컨텍스트가 생성되어 스택에 들어과 제어권이 그 컨텍스트로 이동한다."  

### 실행 컨텍스트 생성 과정 

```javascript
function execute(param1,param2){
    let a= 1 , b = 2;
    function func(){
        return a+b;
    }
    return param1+ param2+ func();
}
execute(3,4);
```
위 코드는 다음과 같은 과정을 거쳐 진행된다.
 
 1. 활성 객체 생성  
   - 실행 컨텍스트가 생성되면 해당 컨텍스트의 실행에 필요한 여러가지 정보를 담을 객체가 생성되며 이를 활성객체라고 한다. 
   - 활성 객체에 매개변수나 사용자가 정의한 변수 및 객체를 저장하고 새로 만들어진 컨텍스트로 접근이 가능하다. 
   - 사용자는 접근 불가하고 자바스크립트 엔진 내부에서 접근가능하다. 

 2. arguments 객체 생성
- 기존의 arguments 객체와 동일하다. 
- 활성 객체가 arguments 객체를 arguments 프로퍼티로 참조한다.
-  
 3. 스코프 정보 생성
- 스코프는 현재 컨텍스트의 유효범위를 나타낸다. 
- 현재 실행중인 실행 컨텍스트 안에서 연결리스트와 유사한 형식이며 특정 변수에 접근할 때 활용한다. 
- 이 정보를 통해 현재 컨텍스트의 변수뿐 아니라 상위 컨텍스트의 변수도 접근 가능하다. 
- 이 리스트에서 특정 변수를 찾지 못할 경우 에러를 검출한다. 
- 이 리스트를 스코프 체인 이라고 하며 scope 프로퍼티로 참조된다. 

4. 변수 생성 
- 현재 실행 컨텍스트 내부의 지역 변수 생성이 이뤄진다.
- 이때 , 활성 객체와 변수 객체는 같은 의미며 변수 객체 안에서 호출된 함수 인자의 프로퍼티가 만들어지고 그 값이 할당된다.
- 즉 이 단계에서 활성 객체에 execute함수에 선언된 변수 a,b와 함수 func이 생성되며 undefined로 할당된다. 단, 초기화는 아직 안된다.  

5. this 바인딩 
- this 바인딩 규칙에 따라 this가 바인딩 된다.
6. 코드 실행
- 이렇게 실행 컨텍스트, 변수 객체가 만들어진 후 초기화 및 코드 실행이 진행된다. 

전역 실행 컨텍스트는 arguments 객체가 없으며 전역 객체 하나만을 포함하는 스코프 체인이 있음.  
전역코드가 실행될 때 생성되는 컨텍스트이며 전역객체와 변수객체가 같다.  
따라서 전역적으로 선언된 함수의 변수가 전역 객체의 프로퍼티가 되는 것이다.  

## 스코프 체인
자바스크립트도 타 언어와 마찬가지로 스코프, 즉 유효범위가 존재함.  
타 언어는 {} 단위로 유호범위가 존재하지만 자바스크립트는 함수만이 유호범위의 한 단위임(let 변수 제외)  
이 유효범위를 나타내는 스코프가 scope 프로퍼티로 각 함수 객체 내에서 연결 리스트 형식으로 관리되는데 이를 스코프 체인이라고 함.  
이때 스코프 체인의 구성요소는 변수 객체가 됨.  
   
각 함수는 scope 프로퍼티로 자신이 생성된 실행 컨택스트의 스코프 체인을 참조함.  
```javascript
let var1 = 1;
let var2 = 2;
```
위 코드는 전역코드임.  
이 코드를 실행하면 먼저 전역 실행 컨텍스트가 생성되고, 변수 객체가 만들어짐.  
현재 전역 실행 컨텍스트 하나만 존재하므로 참조할 상위 컨텍스트가 없음.
따라서 자신이 변수 객체의 스코프체인은 자기 자신만을 가지며 이후에 var1, var2 변수들이 생성되어 변수 객체에 의해 참조됨.  
그리고 이 변수 객체는 전역 객체가 됨. 즉 scope 프로퍼티는 전역 객체를 가르키게 됨.  

```javascript
let var1 = 1;
let var2 = 2;
function func(){
    let var1 = 10;
    let var2 = 20;
    console.log(var1);//10
    console.log(var2);//20
}
func();
console.log(var1);//1
console.log(var2);//2
```
위 예제는 전역 실행 컨텍스트가 생성된 후 func() 함수 객체가 생성됨.  
이 함수 객체의 scope 프로퍼티는 현재 실행되는 컨텍스트의 변수객체 scope를 그대로 가지게 되고 결국 전역 변수 객체가 됨.  
함수를 실행하게 되면 새 컨텍스트가 생성되고 이 컨텍스트의 스코프 체인은 함수 객체의 scope 프로퍼티를 그대로 복사한 후 현재 생성된 변수 객체를 복사한 스코프 체인의 맨앞에 추가함.  
따라서 [func 변수객체 - 전역 객체] 형태로  스코프 체인이 만들어짐. 

* 각 함수 객체는 scope 프로퍼티로 현재 컨텍스트의 스코프 체인을 참조함
* 함수가 실행되면 컨텍스트가 만들어지고 현재 실행중인 함수 객체의 scope 프로퍼티를 복사한 후 새롭게 생성된 변수 객체를 해당 체인의 맨 앞에 추가함
* 즉 스코프 체인 = 현재 실행 컨텍스트 변수객체 + 상위 컨텍스트의 스코프 체인
  
이렇게 만들어진  스코프 체인으로 식별자 인식이 이뤄짐.  
식별자 인식은 스코프 체인의 첫번쨰 변수 객체부터 시작하며 변수 객체에 존재하는지 확인한 후 다음 변수 객체로 넘어간다.  
이떄, this는 키워드로 분류되므로 스코프 체인의 참조없이 접근가능하다. 

#### 호이스팅의 원인  
```javascript
foo();
bar();
let foo = function(){
    ~~~~
};
function bar(){
    ~~~~~
}
```
위 코드에서 함수 생성시 변수 foo,함수 객체 bar이 생성됨.  
이때 변수 foo에는 undefined가 할당되지만 foo에 함수객체의 참조가 일어나기 전 호출되기 떄문에 에러가 발생하는 것임.  

## 클로저 
```javascript
function outerFunc(){
    let x = 10;
    let innerFunc = function(){
        console.log(x);
    };
    return innerFunc();
}
var inner = outerFunc();
inner();
```
위 코드에서 innerFunc의 scope는 outerFunc의 변수 객체와 전역 객체를 가짐.  
이때 innerFunc은 outerFunc의 실행이 끝난 후 실행됨.  
즉 outerFunc의 실행컨텍스트 종료후 innerFunc 실행 컨텍스트가 생성되는데 여전히 innerFunc의 스코프 체인은 outerFunc 변수객체를 참조함.  
이는 outerFunc의 실행컨텍스트가 사라졌어도 변수객체가 여전히 남아있기 떄문.  
이것이 클로저의 개념임.  
   
즉 클로저는 이미 생명주기가 끝난 외부 함수의 변수를 참조하는 함수라고 할수있음.  
그리고 클로저로 참조되는 외부 변수, x와 같은 변수를 자유변수라고 함. 
```javascript
function outerFunc(arg1,arg2){
    let local=8;
    function innerFunc(innerArg){
        console.log((arg1+arg2)/(innerArg+local));
    }
    return innerFunc;
}
let exam1 = outerFunc(2,4);
exam1(2);
```
여기서 outerFunc의 실행컨텍스트가 종료되어도 변수객체가 innerFunc의 스코프체인으로 참조되고 접근가능하게 된다.  
따라서 outerFunc의 실행컨텍스트가 종료되었어도 변수객체로 접근함으로써 해당 변수 객체의 프로퍼티값을 읽기 및 쓰기가 가능해짐.  
즉 위 코드에서는 arg1,arg2,local 값은 outerFunc 변수객체에서 찾게되고 innerArg 값은 innerFunc 변수 객체에서 찾게되는 것. 

### 클로저의 성능
클로저는 스코프체인에서 뒤쪽에 있는 개체에 접근하게 되므로 성능저하를 유발할수있음.  
또한 메모리 부담이 커짐.  
하지만 클로저는 자바스크립트의 강력한 기능중 하나이므로 영리하게 사용해야함.  

## 클로저 주의 사항



---
## var vs let
참고: https://poiemaweb.com/es6-block-scope
### var
var은 ES5 까지 쓰이던 변수를 선언할 수 있는 유일한키워드 였음.
하지만 여러 문제점이 존재하던 키워드였음. 
#### var 문제점 1 - 함수레벨 스코프 
var은 함수 레벨 스코프를 가지고 있기 때문에 함수의 코드블록이 아니면 모두 <strong>전역변수로 취급이 됨.</strong>  
따라서 var을 쓰면 전역변수를 남발하게 되는 가능성을 높임.  
또한 for문의 변수 선언문에서 선언한 변수를 for문 외부에서 참조할 수 있음.  
#### var 문제점 2 - 키워드 생략 허용
#### var 문제점 3 - 변수 중복 선언 허용
-> 의도치 않은 변수값 변경이 일어날 수 있음
#### var 문제점 4 - 변수 호이스팅
-> 변수를 선언하기 이전에 참조할 수 있음  

이런 문제점들은 전역 변수로 인해 발생함
### let 
이런 var의 문제점을 보완하기 위해 ES6부터 let과 const가 도입됨

### 특징 1 - 블록 레벨 스코프 
다른 언어들과 같이 블록레벨의 스코프를 가짐. 
```javascript
let foo = 123;//전역
{
    let foo= 456;//지역
    let bar = 456;//지역
}
console.log(foo);//123
console.log(bar);//error
```
### 특징 2- 변수 중복 선언 금지
다른 언어들 처럼 변수를 중복해서 선언할 수 없어짐

### 특징 3 - 호이스팅
var로 선언된 변수는 초기화와 선언이 동시에 이뤄지므로 스코프에 변수를 등록하고 메모리에 공간을 확보한 후 undefined로 초기화함.  
   
따라서 변수 선언 이전에 변수에 접근해도 undefined를 반환할 뿐이지 에러가 발생하지 않음.  

let은 선언과 초기화가 분리되어 진행되므로 스코프에 변수를 등록한 후 초기화 단계는 변수 선언이 될 때 이뤄짐.   
따라서 변수 선언 이전에 접근하면 에러가 발생.  

### 특징 4 - 클로저 
for문 조건문에서 선언한 var 변수들은 전역 스코프를 가지기 때문에 의도치 않은 문제가 발생함.  
즉 직관적이지 못함.  
이를 해결하기 위해 ES5에서는 클로저를 활용해야했는데 ES6 부터는 let을 이용해 클로저를 사용하지 않아도 의도한대로 for문을 작동시킬 수 있음.  
이는 let으로 선언한 변수는 for loop 안에서만 유효한 지역변수이기 떄문.  

### 특징 5 - 전역 객체
var로 선언한 변수는 전역변수로 사용할 경우 전역객체의 프로퍼티가 됨.
```javascript
var foo = 123;
console.log(window.foo);//123
```
하지만 let 키워드로 선언한 변수를 전역변수로 사용하면 이 변수는 전역 객체의 프로퍼티가 아님.
```javascript
let foo= 123;
console.log(window.foo);//undefined
```




---
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
 
    
    
