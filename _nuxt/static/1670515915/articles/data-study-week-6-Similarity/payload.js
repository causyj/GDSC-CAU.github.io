__NUXT_JSONP__("/articles/data-study-week-6-Similarity", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P){return {data:[{article:{slug:"data-study-week-6-Similarity",description:"Similarity에 대한 기초개념",title:"문서의 유사도 (2)",category:"Data-Science",author:B,featured:"none",toc:[],body:{type:"root",children:[{type:b,tag:o,props:{id:"1-유사도란"},children:[{type:b,tag:p,props:{ariaHidden:q,href:"#1-%EC%9C%A0%EC%82%AC%EB%8F%84%EB%9E%80",tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:"1. 유사도란?"}]},{type:a,value:f},{type:b,tag:w,props:{},children:[]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"hat, cat"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"위와 같은 문자열 2개가 있다고 해보자. 둘은 얼마나 유사할까?"},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n단순히 문자간의 배열이 같은지, 의미상의 유사성 등 다양한 방식으로 유사한 정도를 표현할 수 있을 것이다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n이처럼 '유사성'이란 '비슷한 정도'를 수치적으로 표현한 것을 의미한다."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"자연어 처리에서 일반적으로 사용하는 몇가지 유사도 기법이 있다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n이번 글에서는 그에 대해 설명해보고자 한다."}]},{type:a,value:f},{type:b,tag:o,props:{id:"2-코사인-유사도cosine-similarity"},children:[{type:b,tag:p,props:{ariaHidden:q,href:"#2-%EC%BD%94%EC%82%AC%EC%9D%B8-%EC%9C%A0%EC%82%AC%EB%8F%84cosine-similarity",tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:"2. 코사인 유사도(Cosine Similarity)"}]},{type:a,value:f},{type:b,tag:w,props:{},children:[]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"코사인 유사도는 말그대로 코사인의 특성을 그대로 가져온 것이다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n코사인 값은 두 벡터 사이의 각도로 결정된다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n학습에 앞서 Raw Data를 전처리하는 과정에서 자연어를 단어, 어간\u002F어미 단위로 쪼갠 뒤에 이를 정수에 대치하는 인코딩을 한다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n하나의 문장을 최소단위로 토큰화 및 정수 인코딩을 진행하여 정수로 표현한 것을 Zero Padding을 해서 길이를 맞춰주게 되면 하나의 정수 벡터를 만들 수 있다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n이것을 바탕으로 각 벡터(문장)간의 코사인 값을 구하는 것을 코사인 유사도라고 할 수 있다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n계산을 위한 수식은 아래와 같다."}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"$similarity = cos(\\Theta) = \\frac{{A \\cdot B}}{||A||\\ ||B||} = \\frac{\\sum_{i=1}^{n} A_i \\times B_i}{\\sqrt{\\sum_{i=1}^{n}(A_i)^2}\\times\\sqrt{\\sum_{i=1}^{n}(B_i)^2}}$"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"코사인의 치역(출력)은 -1~1이므로 벡터(문장)가 일치할수록 절댓값이 1에 가까울 것이고, 벡터가 다를수록 0에 가까워질 것이다."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"단순한 예시를 살펴보도록 하자"}]},{type:a,value:f},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-python","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:C}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"as"}]},{type:a,value:" np\n"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:N}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:C}]},{type:a,value:" dot\n"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:N}]},{type:a,value:" numpy"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:"linalg "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:C}]},{type:a,value:" norm\n\n"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"def"}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:":"}]},{type:a,value:"\n    "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"return"}]},{type:a,value:" dot"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\u002F"}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"norm"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"*"}]},{type:a,value:" norm"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"B"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"\n\ndoc1 "},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:E}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"\ndoc2 "},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:E}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"\ndoc3 "},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:E}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"'doc1 & doc2 : '"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"doc1"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:" doc2"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"'doc2 & doc3 : '"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"doc2"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:" doc3"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"'doc3 & doc1 : '"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"doc3"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:" doc1"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,"triple-quoted-string",A]},children:[{type:a,value:"\"\"\"\noutput : \ndoc1 & doc2 :  0.6666666666666667\ndoc2 & doc3 :  1.0000000000000002\ndoc3 & doc1 :  0.6666666666666667\n\"\"\""}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"위 코드는 이미 단어집합에 맞춰 카운트로 인코딩된 문장 doc1, doc2, doc3 이 있다는 가정 하에 코사인 유사도를 계산한 것이다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\nnumpy.linalg.norm() 함수를 이용해 원점에서 벡터까지의 거리를 구한 뒤 수식에 대입하였다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\ndoc2, doc3은 벡터의 크기가 2배가 되었을 뿐이므로 문장이 동일하다고 표기되고 있다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n반대로 doc1, doc2 \u002F doc1, doc3은 모두 한자리씩 달라서 코사인값이 0.67이 된 모습을 확인할 수 있다."}]},{type:a,value:f},{type:b,tag:o,props:{id:"3-유클리드-거리euclidean-distance"},children:[{type:b,tag:p,props:{ariaHidden:q,href:"#3-%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C-%EA%B1%B0%EB%A6%ACeuclidean-distance",tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:"3. 유클리드 거리(Euclidean Distance)"}]},{type:a,value:f},{type:b,tag:w,props:{},children:[]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"다차원 공간에서 두 점간의 거리를 비교하는 것이다. 많이 쓰이지는 않는다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n수식은 다음과 같다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n$\\sqrt{(q_1 - p_1)^{2} + ... + (q_n - p_n)^{2}} = \\sqrt{\\sum_{i=1}^n (q_i - p_i)^2}$"}]},{type:a,value:f},{type:b,tag:o,props:{id:"4-자카드-유사도jaccard-similaity"},children:[{type:b,tag:p,props:{ariaHidden:q,href:"#4-%EC%9E%90%EC%B9%B4%EB%93%9C-%EC%9C%A0%EC%82%AC%EB%8F%84jaccard-similaity",tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:"4. 자카드 유사도(Jaccard Similaity)"}]},{type:a,value:f},{type:b,tag:w,props:{},children:[]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"자카드 유사도는 두 문장을 이루는 단어들을 원소로하는 집합을 만든 뒤에 두 문장의 합집합과 교집합의 비율을 표시하는 기법이다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n예를들어 문장 2개가 있을 때, 각 문장을 단어집합에 들어가는 단어 단위로 토큰화를 한다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n그렇게 만들어진 각 문장의 단어로 이루어진 집합을 각각 A, B라고 하자."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\nA와 B의 교집합이 있을 수도 있고, 없을 수도 있다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n이 경우, 다음 수식을 따른다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n$Jaccard Similarity = \\frac{P(A \\cap B)}{P \\cup B}$"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"비슷한 주제의 문장을 다루는 경우에 효과적이라고 생각된다."}]},{type:a,value:f},{type:b,tag:o,props:{id:"5-레벤슈타인-유사도levenshtein-distance"},children:[{type:b,tag:p,props:{ariaHidden:q,href:"#5-%EB%A0%88%EB%B2%A4%EC%8A%88%ED%83%80%EC%9D%B8-%EC%9C%A0%EC%82%AC%EB%8F%84levenshtein-distance",tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:"5. 레벤슈타인 유사도(Levenshtein Distance)"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"레벤슈타인 유사도는 문자열이 얼마나 비슷한지를 나타낸다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n말그대로 문자열을 얼마나 바꾸면 목표하는 문자열이 되는지를 계산한 것이다."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"예를들어,"}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"hat, here"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"두 문자열이 있다고 해보자. 이들의 편집거리(레벤슈타인 거리)는 3이다"}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"h -\u003E h (동일, 편집+0회)"},{type:b,tag:g,props:{},children:[]},{type:a,value:"\na -\u003E e (수정, 편집+1회)"},{type:b,tag:g,props:{},children:[]},{type:a,value:"\nt -\u003E r (수정, 편집+1회)"},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n-\u003E e (삽입, 편집+1회)"},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n총 편집 횟수) 3회"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"이같은 방법으로 유사도를 찾는 것이다."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"영어같은 경우에는 단순하게 코드를 작성 할 수 있지만 한글의 경우는 고려할 점이 있다."}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"신라면, 푸라면"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"이 두 문자열에 대해서는 '신'과 '푸'가 다르다는 것을 알 수 있다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n그렇다면 이 문자열은 몇번 편집해야 하는가? 라고 묻는다면 3회라고 해야한다."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\n따라서 이를 해결하기 위해 한글 유니코드표를 대조하여 레벤슈타인 거리를 계산하는 방법을 취해야만 정확한 편집거리를 구할 수 있다."}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fdata-study-week-6-Similarity",extension:".md",createdAt:"2022-01-27T13:26:20.000Z",updatedAt:"2022-03-10T05:16:13.000Z"},prev:{slug:"spring-study-week6",title:"EC2 서버에 프로젝트를 배포해 보자"},next:{slug:"jpa-study-week1",title:"JDBC와 JPA"},member:[{slug:"geonwoo",name:B,description:"Interested in DL, NLP, GPU\u002FTPU\u002FNeuromorphic Hardware architecture",role:"Alumni(21-22 Member)",img:"geonwoo.jpg",dir:"\u002Fmembers",path:"\u002Fmembers\u002Fgeonwoo",extension:".yaml",createdAt:"2021-11-25T13:01:33.000Z",updatedAt:"2022-10-26T12:57:45.000Z"}],authorName:B}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","\n","br","p",",","(",")","number","keyword","1","h1","a","true",-1,"icon","icon-link","blockquote","operator","hr","."," ","cos_sim","string","Choi Geonwoo","import","A","="," np","array","[","0","]","2","print"," numpy ","from"," B","\n\n")));