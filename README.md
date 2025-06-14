<a href="https://www.typescriptlang.org/"><img src="./images/typescript_logo.png"></a>

# D2505_TypeScript
> TypeScript는 JavaScript를 포함하는 수퍼셋으로 브라우저, 운영체제에 상관없이 이용 가능한 오픈소스

<img src="./images/ts_intro_01.png">

### 대규모 애플리케이션 개발을 위한 강력한 도구!
- 타입(Types)을 사용하면 JavaScript 애플리케이션을 개발할 때 정적 타입 검사 및 코드 리팩토링과 같은 생산성 높은 개발을 수행할 수 있습니다. 
- 타입 설정이 필수는 아니지만, 설정할 경우 컴파일 과정에서 타입 식별자를 사용하여 코드를 정적으로 검증할 수 있습니다. 
- 타입을 통해 소프트웨어 컴퍼넌트 간 인터페이스를 정의하고, JavaScript 라이브러리 동작을 파악할 수 있습니다.

### 모던 JavaScript
- TypeScript는 ECMAScript 2015(ES6)의 새롭고 강력한 기능을 포함하는 모던 JavaScript 기능을 지원하므로 견고한 컴포넌트를 개발하는데 많은 도움이 됩니다. 
- 이러한 기능은 개발시 신뢰할 수 있는 애플리케이션 개발을 위해 제공되며, 간결한 JavaScript로 컴파일 됩니다.
<br/>

---
## TypeScript 설치 및 사용 방법

#### 1. Node.js 설치: [Node.js 공식 사이트](https://nodejs.org/ko) 에서 다운로드 후 설치

#### 2. TypeScript 설치: 터미널에서 다음 명령어 실행
```shell
npm install -g typescript
```

#### 3. TypeScript 코드 작성: 예제 파일 `example.ts` 생성 후 다음 코드 작성
```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Jace"));
```

#### 4. 컴파일 및 실행:
```shell
tsc example.ts   # TypeScript 파일을 JavaScript로 변환
node example.js  # 변환된 JavaScript 파일 실행
```

cf. TypeScript 공식사이트 : https://www.typescriptlang.org/

