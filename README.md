# React-Onepage-Site-Template
create-react-app을 통하여 원페이지 템플릿 과제겸 제작 진행중

2019-01-17 DB의 멘타루
=============
#### Link : [Demo](http://luckyd.be:3001)
#### 반응형/적응형 제작 예정
#### UI 컴포넌트 재사용 생각하며 만드는중
#### IE10에서 Map이 정의되지 않았다는 에러 출력 -> 최상위 polyfill 적용해도 에러 출력

2019-01-19 DB의 멘타루
=============

### 1. 웹호환성
##### 1-1. IE10
###### Map 에러 => polyfill bundle 추가(public/index.html)
```javascript
<script crossorigin="anonymous" src="https://polyfill.io/v3/polyfill.min.js?features=default%2CMap%2CObject.setPrototypeOf"></script>
```
###### IE9 - 11 polyfill 추가(src/index.js)
```
npm install --save react-app-polyfill
```
```javascript
import 'react-app-polyfill/ie9'; // For IE 9-11 support
```
##### 1-2. IE9
###### 에러 : react-slick matchmedia not present legacy browsers require a polyfill (src/polyfills.js)
```javascript
'use strict';

window.matchMedia = window.matchMedia || function () { 
	return { 
		matches : false, 
		addListener : function () {}, 
		removeListener : function () {} 
	}; 
};
```
```javascript
import './polyfills';
```
