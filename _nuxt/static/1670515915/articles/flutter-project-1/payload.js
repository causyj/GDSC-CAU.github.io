__NUXT_JSONP__("/articles/flutter-project-1", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa){return {data:[{article:{slug:"flutter-project-1",description:"플러터에서 사용되는 언어인 Dart에 대한 내용입니다.",title:"Flutter CH1.Dart 언어 소개",category:"Application",author:w,toc:[{id:H,depth:x,text:I},{id:J,depth:x,text:K},{id:L,depth:x,text:M}],body:{type:"root",children:[{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-dart","line-numbers"]},children:[{type:b,tag:e,props:{},children:[{type:a,value:N},{type:b,tag:h,props:{className:[r,"function"]},children:[{type:a,value:"print"}]},{type:b,tag:h,props:{className:[r,y]},children:[{type:a,value:"("}]},{type:b,tag:h,props:{className:[r,"string-literal"]},children:[{type:b,tag:h,props:{className:[r,"string"]},children:[{type:a,value:"'Hello World!'"}]}]},{type:b,tag:h,props:{className:[r,y]},children:[{type:a,value:")"}]},{type:b,tag:h,props:{className:[r,y]},children:[{type:a,value:";"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"구글에서 크로스 플랫폼 개발 툴킷으로 제공하고 있는 "},{type:b,tag:f,props:{},children:[{type:a,value:"Flutter"}]},{type:a,value:O},{type:b,tag:f,props:{},children:[{type:a,value:"Dart"}]},{type:a,value:"라는 객체지향 언어를 사용합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"때문에 플러터를 배우려면 Dart 문법을 지나칠 수가 없겠죠?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:P},{type:b,tag:f,props:{},children:[{type:a,value:"C계열 언어"}]},{type:a,value:"와 문법이 비슷해서 프로그래밍을 경험해본 사람은 쉽게 배울 수 있는 언어라고 생각합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이번 시간에는 Dart언어의 "},{type:b,tag:f,props:{},children:[{type:a,value:"syntax"}]},{type:a,value:"를 다뤄보도록 하겠습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"다른 언어에 공통적으로 있는 syntax는 생략하거나 간략 설명하는 방식으로 진행되겠습니다."}]},{type:a,value:c},{type:b,tag:z,props:{id:H},children:[{type:b,tag:i,props:{href:"#1-%ED%83%80%EC%9E%85",ariaHidden:k,tabIndex:l},children:[{type:b,tag:h,props:{className:[m,n]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:s,props:{id:"모든-것이-객체"},children:[{type:b,tag:i,props:{href:"#%EB%AA%A8%EB%93%A0-%EA%B2%83%EC%9D%B4-%EA%B0%9D%EC%B2%B4",ariaHidden:k,tabIndex:l},children:[{type:b,tag:h,props:{className:[m,n]},children:[]}]},{type:a,value:"모든 것이 객체"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"처음은 언어 소개답게 타입부터 시작해보겠습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"먼저, Dart에서는 "},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:t}]},{type:a,value:"을 제외한 모든 것이 Object"}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"1, ‘a’ 같은 값들도 객체로 존재하게 됩니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:t}]},{type:a,value:"은 별도로 "},{type:b,tag:e,props:{},children:[{type:a,value:R}]},{type:a,value:"이라는 클래스의 객체로 존재합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"타입 확인하기",src:"\u002Fflutter-project-1\u002Fdart1.png"},children:[]}]},{type:a,value:c},{type:b,tag:s,props:{id:"선언자-알아보기"},children:[{type:b,tag:i,props:{href:"#%EC%84%A0%EC%96%B8%EC%9E%90-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0",ariaHidden:k,tabIndex:l},children:[{type:b,tag:h,props:{className:[m,n]},children:[]}]},{type:a,value:"선언자 알아보기"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:S}]},{type:a,value:"는 다른 언어에서도 많이 제공되는 선언자로 어떤 변수의 "},{type:b,tag:f,props:{},children:[{type:a,value:"값을 일정"}]},{type:a,value:"하게 만들기 위해 사용됩니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"그런데, "},{type:b,tag:e,props:{},children:[{type:a,value:S}]},{type:a,value:O},{type:b,tag:f,props:{},children:[{type:a,value:"초기화와 할당이 동시"}]},{type:a,value:"에 이뤄져야 합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"const 특성",src:"\u002Fflutter-project-1\u002Fdart2.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"반면에 "},{type:b,tag:e,props:{},children:[{type:a,value:A}]},{type:a,value:" 선언자는 초기화와 할당을 동시에 하지 않아도 값을 일정하게 만들어주는 선언자라고 할 수 있겠습니다. 예시를 살펴볼까요?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"const와 final 비교",src:"\u002Fflutter-project-1\u002Fdart3.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"그렇다면 "},{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:"은 무엇일까요?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"다음 예시를 보면 이해가 되실 것 같습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"dynamic 특성",src:"\u002Fflutter-project-1\u002Fdart4.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:A}]},{type:a,value:T},{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:"의 차이는 "},{type:b,tag:f,props:{},children:[{type:a,value:"한 번만 할당"}]},{type:a,value:"되냐 그렇지 않냐에 있습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:"은 또 다른 특징이 있습니다. 이번에는 "},{type:b,tag:e,props:{},children:[{type:a,value:u}]},{type:a,value:"와 비교를 해보겠습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"dynamic과 var 비교",src:"\u002Fflutter-project-1\u002Fdart5.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:T},{type:b,tag:e,props:{},children:[{type:a,value:u}]},{type:a,value:" 모두 여러 번 할당이 가능하지만 "},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:u}]},{type:a,value:"는 선언했을 때 할당받은 값의 타입"}]},{type:a,value:"을 갖게 됩니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"때문에 9번째 줄처럼 "},{type:b,tag:e,props:{},children:[{type:a,value:"String"}]},{type:a,value:"을 할당할 수 없게 되죠."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"재밌는건 "},{type:b,tag:e,props:{},children:[{type:a,value:u}]},{type:a,value:"도 선언과 할당을 동시에 하지 않고 "},{type:b,tag:f,props:{},children:[{type:a,value:"나중에 할당"}]},{type:a,value:"할 경우 "},{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:"과 똑같이 다른 타입의 값을 할당해줄 수 있게 됩니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:u}]},{type:a,value:" 선언자를 사용할 때는 이 점을 유의하는게 좋겠습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"한마디로 "},{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:"은 계속 타입을 추론해 할당할 수 있도록 하는 선언자입니다. 정말 "},{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:"하죠?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이 "},{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:"은 보통 "},{type:b,tag:f,props:{},children:[{type:a,value:"JSON"}]},{type:a,value:"을 처리할때 많이 사용됩니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"예시에서 "},{type:b,tag:e,props:{},children:[{type:a,value:U}]},{type:a,value:" 타입은 키와 값을 가지는 "},{type:b,tag:f,props:{},children:[{type:a,value:"컬렉션 타입"}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"JSON처리 예시",src:"\u002Fflutter-project-1\u002Fdart6.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"타입과 관련해 정리를 해보면 다음과 같습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:B},{type:b,tag:f,props:{},children:[{type:a,value:C}]}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Dart에서는 "},{type:b,tag:e,props:{},children:[{type:a,value:t}]},{type:a,value:"을 제외한 모든 것이 Object이다. "},{type:b,tag:e,props:{},children:[{type:a,value:t}]},{type:a,value:" 역시 "},{type:b,tag:e,props:{},children:[{type:a,value:R}]},{type:a,value:" 클래스의 객체이다."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:A}]},{type:a,value:q},{type:b,tag:e,props:{},children:[{type:a,value:o}]},{type:a,value:" 같은 동적 선언자 및 타입을 제공한다."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:D,props:{},children:[]},{type:a,value:c},{type:b,tag:z,props:{id:J},children:[{type:b,tag:i,props:{href:"#2-%ED%95%A8%EC%88%98",ariaHidden:k,tabIndex:l},children:[{type:b,tag:h,props:{className:[m,n]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:s,props:{id:E},children:[{type:b,tag:i,props:{href:"#%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0",ariaHidden:k,tabIndex:l},children:[{type:b,tag:h,props:{className:[m,n]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Dart에서는 함수 파라미터를 표현하는데 몇 가지 옵션을 제공하고 있습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"하나씩 살펴보겠습니다."}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:V}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"이름 지정 파라미터 예시",src:"\u002Fflutter-project-1\u002Fdart7.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"9번째 줄 코드처럼 파라미터 이름을 지정해서 값을 넣어줄 수가 있는데"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이름을 지정하기 위해 파라미터를 중괄호"},{type:b,tag:e,props:{},children:[{type:a,value:"{}"}]},{type:a,value:"로 감싸주어야 합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"10번째 줄 코드와 같이 이름을 지정해서 값을 넣지 않았다면 기본적으로 할당 받은 값을 가지게 됩니다."}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"선택형 위치 지정"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"선택형 지정 파라미터 예시",src:"\u002Fflutter-project-1\u002Fdart8.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이번엔 파라미터에 중괄호가 아니고 대괄호"},{type:b,tag:e,props:{},children:[{type:a,value:"[]"}]},{type:a,value:"가 보입니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"대괄호로 감싸진 파라미터는 선택적으로 사용되는 파라미터를 의미합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"12번째 줄 코드처럼 마지막 파라미터인 c에 값을 넘기지 않아도 함수 호출이 가능한 것을 알 수 있습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이때 c의 타입에 "},{type:b,tag:e,props:{},children:[{type:a,value:W}]},{type:a,value:"가 붙었는데, Dart에서 "},{type:b,tag:e,props:{},children:[{type:a,value:W}]},{type:a,value:"는 해당 변수가 "},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:t}]},{type:a,value:"을 가질 수 있음"}]},{type:a,value:"을 의미합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이는 "},{type:b,tag:e,props:{},children:[{type:a,value:t}]},{type:a,value:"값으로 인해 발생할 수 있는 문제를 해결하는 "},{type:b,tag:e,props:{},children:[{type:a,value:"Null Safety"}]},{type:a,value:" 개념과 관련이 있는데 추후에 다뤄보도록 하겠습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:V}]},{type:a,value:q},{type:b,tag:f,props:{},children:[{type:a,value:"선택형 지정"}]},{type:a,value:" 파라미터는 "},{type:b,tag:f,props:{},children:[{type:a,value:"클래스"}]},{type:a,value:"에서 주로 사용되는데 뒷부분에서 더 자세히 다루도록 하겠습니다."}]},{type:a,value:c},{type:b,tag:s,props:{id:"함수형-프로그래밍"},children:[{type:b,tag:i,props:{href:"#%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D",ariaHidden:k,tabIndex:l},children:[{type:b,tag:h,props:{className:[m,n]},children:[]}]},{type:a,value:"함수형 프로그래밍"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:P},{type:b,tag:f,props:{},children:[{type:a,value:"함수형 프로그래밍(FP)"}]},{type:a,value:" 특징도 갖고 있는 언어입니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"아래 예시와 같이 Dart에서는 함수를 값으로 사용할 수 있습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"일급함수",src:"\u002Fflutter-project-1\u002Fdart9.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:X},{type:b,tag:e,props:{},children:[{type:a,value:"List"}]},{type:a,value:q},{type:b,tag:e,props:{},children:[{type:a,value:"Set"}]},{type:a,value:q},{type:b,tag:e,props:{},children:[{type:a,value:U}]},{type:a,value:" 타입의 "},{type:b,tag:f,props:{},children:[{type:a,value:"컬렉션"}]},{type:a,value:"이 존재합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"컬렉션은 리스트처럼 여러 데이터를 원소로 갖는 자료구조라고 보면 되겠습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이 컬렉션은 "},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:F}]},{type:a,value:" 타입 객체"}]},{type:a,value:"로써 존재하며 "},{type:b,tag:e,props:{},children:[{type:a,value:F}]},{type:a,value:" 클래스 메소드를 사용할 수 있습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이 컬렉션과 관련된 함수형 프로그래밍 형식의 코드를 살펴보겠습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"FP 기초",src:"\u002Fflutter-project-1\u002Fdart10.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"간단하게 리스트의 원소를 순차적으로 출력하는 코드입니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이것을 for문 없이 함수형 프로그래밍 형식으로 다시 작성해보겠습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"forEach메소드",src:"\u002Fflutter-project-1\u002Fdart11.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"컬렉션에서 사용되는 "},{type:b,tag:e,props:{},children:[{type:a,value:Y}]},{type:a,value:" 메소드는 "},{type:b,tag:f,props:{},children:[{type:a,value:"파라미터로 함수"}]},{type:a,value:"를 받습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"그리고, 컬렉션 안의 원소들을 하나씩 꺼내 파라미터로 들어온 함수를 실행하게 됩니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"자바스크립트나 파이썬을 경험해 보신 분들은 익숙할 것이라 생각합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이번엔 더 특수한 상황을 살펴보겠습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"where메소드",src:"\u002Fflutter-project-1\u002Fdart12.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이번엔 컬렉션에서 짝수만 출력하는 코드입니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"where"}]},{type:a,value:" 메소드로 조건에 부합한 원소를 구성하는 새로운 "},{type:b,tag:e,props:{},children:[{type:a,value:F}]},{type:a,value:"을 생성하고 그것에 대해 "},{type:b,tag:e,props:{},children:[{type:a,value:Y}]},{type:a,value:" 메소드를 진행하게 됩니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"하나만 더 살펴볼까요?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"reduce메소드",src:"\u002Fflutter-project-1\u002Fdart13.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이번에는 컬렉션에서 가장 큰 값을 출력하는 상황입니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이런 경우 컬렉션의 "},{type:b,tag:e,props:{},children:[{type:a,value:Z}]},{type:a,value:"라는 메소드로 해결할 수 있습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:Z}]},{type:a,value:"는 원소를 순차적으로 꺼내 특정 조건의 누적된 값을 반환하는 메소드인데 다음 예시를 통해 더 자세하게 살펴보겠습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"reduce메소드 분석",src:"\u002Fflutter-project-1\u002Fdart14.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"16~20번째 줄 코드는 위의 예시와 동일한 작업을 수행하지만 중간 과정을 출력한 것입니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"콘솔에서 볼 수 있듯이 원소를 순차적으로 꺼내 "},{type:b,tag:e,props:{},children:[{type:a,value:"max"}]},{type:a,value:"함수의 결과를 반환하게 됩니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이처럼 컬렉션 함수를 이용하면 간결한 코드로 구현할 수 있습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"함수와 관련해 정리를 해보면 다음과 같습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:B},{type:b,tag:f,props:{},children:[{type:a,value:C}]}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"파라미터와 관련해서 다양한 옵션을 제공하고 있다."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Dart에서 함수는 값으로써 사용되는 일급함수이다."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:D,props:{},children:[]},{type:a,value:c},{type:b,tag:z,props:{id:L},children:[{type:b,tag:i,props:{href:"#3-%ED%81%B4%EB%9E%98%EC%8A%A4",ariaHidden:k,tabIndex:l},children:[{type:b,tag:h,props:{className:[m,n]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:s,props:{id:"no-overloading"},children:[{type:b,tag:i,props:{href:"#no-overloading",ariaHidden:k,tabIndex:l},children:[{type:b,tag:h,props:{className:[m,n]},children:[]}]},{type:a,value:"No Overloading"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"자바나 C++에서는 이름은 같지만 형식이 다른 생성자 오버로딩을 지원합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"반면, Dart는 "},{type:b,tag:f,props:{},children:[{type:a,value:"오버로딩을 지원하지 않습니다."}]}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"이름 있는 생성자"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"예시를 먼저 살펴보겠습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"생성자 이름",src:"\u002Fflutter-project-1\u002Fdart15.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"위의 예시처럼 "},{type:b,tag:e,props:{},children:[{type:a,value:"생성자.이름"}]},{type:a,value:" 형식으로 생성자에 이름을 부여할 수 있습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"그래서 "},{type:b,tag:f,props:{},children:[{type:a,value:"기본 생성자"}]},{type:a,value:"는 사실 "},{type:b,tag:f,props:{},children:[{type:a,value:"이름이 없는 생성자"}]},{type:a,value:"라고 볼 수 있습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"그런데, 생성자를 하나만 써주고 싶은 기분이 들죠? 다른 방법은 없을까요?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"앞에서 다뤘던 "},{type:b,tag:f,props:{},children:[{type:a,value:"지정 파라미터"}]},{type:a,value:"가 이를 해결해 줄 수 있습니다."}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"지정"}]},{type:a,value:N},{type:b,tag:f,props:{},children:[{type:a,value:E}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"오버로딩 구현",src:"\u002Fflutter-project-1\u002Fdart16.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"선택형 지정 파라미터"}]},{type:a,value:"에 연산자를 받게끔 변경된 상태입니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이렇게 지정 파라미터를 통해 하나의 생성자에서 오버로딩이 구현된 것처럼 만들수 있겠습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"어찌보면 지정 파라미터가 있으니까 오버로딩을 굳이 지원하지 않나봅니다."}]},{type:a,value:c},{type:b,tag:s,props:{id:"접근-제어자"},children:[{type:b,tag:i,props:{href:"#%EC%A0%91%EA%B7%BC-%EC%A0%9C%EC%96%B4%EC%9E%90",ariaHidden:k,tabIndex:l},children:[{type:b,tag:h,props:{className:[m,n]},children:[]}]},{type:a,value:"접근 제어자"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:X},{type:b,tag:e,props:{},children:[{type:a,value:G}]},{type:a,value:q},{type:b,tag:e,props:{},children:[{type:a,value:v}]},{type:a,value:"같은 접근 제어자 키워드가 없지만 매우 간단하게 표현할 수 있습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"Dart의 형식 지정자",src:"\u002Fflutter-project-1\u002Fdart17.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"위의 예시에서 볼 수 있듯이 변수 이름에 "},{type:b,tag:e,props:{},children:[{type:a,value:"_(밑줄)"}]},{type:a,value:"의 유무에 따라 "},{type:b,tag:e,props:{},children:[{type:a,value:G}]},{type:a,value:q},{type:b,tag:e,props:{},children:[{type:a,value:v}]},{type:a,value:"가 결정됩니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"밑줄이 있는"}]},{type:a,value:" 변수인 health는 "},{type:b,tag:e,props:{},children:[{type:a,value:v}]},{type:a,value:"이기 때문에 외부에서 접근할 수 없게 됩니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"클래스와 관련해 정리를 해보면 다음과 같습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:B},{type:b,tag:f,props:{},children:[{type:a,value:C}]}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Dart는 오버로딩을 지원하지 않는다. 대신에 이름이 있는 생성자를 사용한다."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:G}]},{type:a,value:q},{type:b,tag:e,props:{},children:[{type:a,value:v}]},{type:a,value:"과 같은 접근 제어자가 없고 다른 방식을 취한다."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:D,props:{},children:[]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"참고문헌: 에릭 윈드밀, Flutter in Action"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"아래의 링크에서 Dart 언어를 다뤄보실 수 있습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:i,props:{href:_,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:_}]}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fflutter-project-1",extension:".md",createdAt:$,updatedAt:$},prev:{slug:"javascript-basic-study-1",title:"Javascript 데이터 타입과 변수"},next:{slug:"javascript-deep_study-gabage_collection",title:"Javascript 가비지 컬렉션"},member:[{slug:"sinhan",name:w,description:"22-23 GDSC 멤버로 활동하고 있습니다. Flutter에 관심 있습니다.",role:"Member",img:"sinhan.jpg",dir:"\u002Fmembers",path:"\u002Fmembers\u002Fsinhan",extension:".yaml",createdAt:aa,updatedAt:aa}],authorName:w}],fetch:{},mutations:void 0}}("text","element","\n","p","code","strong","img","span","a","li","true",-1,"icon","icon-link","dynamic","ul",", ","token","h4","null","var","private","Sin Han",3,"punctuation","h3","final","🗒️","정리","hr","파라미터","Iterable","public","1-타입","1. 타입","2-함수","2. 함수","3-클래스","3. 클래스"," ","는 ","Dart는 ","입니다.","Null","const","과 ","Map","이름 지정","?","Dart에는 ","forEach","reduce","https:\u002F\u002Fdartpad.dev\u002F","2022-11-15T15:35:15.000Z","2022-11-06T11:11:43.000Z")));