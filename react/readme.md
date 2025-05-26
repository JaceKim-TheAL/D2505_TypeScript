# React Typescript
> https://create-react-app.dev/docs/getting-started

### Creating a TypeScript app

```
npx create-react-app my-app --template typescript
```

---
환경설정 파일에서 es5를 es6로 변경 
[tsconfig.json]
```json
{
  "compilerOptions": {
    // "target": "es5",
    "target": "es6",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext", 
    // 추가
      "es6"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}
```

[src/App.tsx]
```ts
function App() {
}
```
를 아래와 같이 바꾸고 <div>안의 내용은 새로 작성
```ts
const App:React.FC = () => {
  return (
    <div className="App">

    </div>
  );
}
```

---
새로운 타입을 정의한 tsx 파일 생성
[src/Store.tsx]   // 새파일
```ts
import React from "react";

const Store:React.FC = () => {
    return (
        <div>Store</div>
    );
}

export default Store;

```

[src/App.tsx] 작성 계속
```ts
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';

let data = {
  name: "John",
  category: "western",
  address: {
    city: "New York",
    detail: "123 Main St",
    zipcode: "10001"
  },
  menu:[
    { name: "Burger", price: 5.99, category: "main" },
    { name: "Salad", price: 4.99, category: "side" },
    { name: "Pizza", price: 8.99, category: "main" },
    { name: "Ice Cream", price: 3.99, category: "dessert" },
    { name: "Coffee", price: 2.49, category: "beverage" }
  ]
}

const App:React.FC = () => {
  return (
    <div className="App">
      <Store info={data} />
    </div>
  );
}

export default App;
``

---
사용자가 사용할 타입모델은 model 디렉토리에서 관리
> src에 model 디렉토리를 생성하고, restaurant.ts 파일을 생성

[src/model/restaurant.ts]
```ts
// let data = {
//   name: "John",
//   category: "western",
//   address: {
//     city: "New York",
//     detail: "123 Main St",
//     zipcode: 10001
//   },
//   menu:[
//     { name: "Burger", price: 5.99, category: "main" },
//     { name: "Salad", price: 4.99, category: "side" },
//     { name: "Pizza", price: 8.99, category: "main" },
//     { name: "Ice Cream", price: 3.99, category: "dessert" },
//     { name: "Coffee", price: 2.49, category: "beverage" }
//   ]
// }

export type Restaurant = {
    name: string;
    category: string;
    address: {
        city: string;
        detail: string;
        zipcode: number;
    };
    menu: {
        name: string;
        price: number;
        category: string;
    }[];
};

```

추가로 Type안에 또 다른 타입을 만들수 있다
```ts
.................

export type Address = {
    city: string;
    detail: string;
    zipcode: number;
};

export type Menu = {
    name: string;
    price: number;
    category: string;
};

```

[src/App.tsx]
```ts
// import React from 'react';
import React, {useState} from 'react';

......................................
......................................

const App:React.FC = () => {
  // const [myRestaurant, setMyRestaurant] = useState(data);
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  return (
    <div className="App">
      <Store info={data} />
    </div>
  );
}

export default App;

```
useState 에서 새로운 데이터타입을 가져오도록 설정했지만, 
여전히 <Store>태그의 info는 에러

[src/Store.tsx]
```ts
import React from "react";
import { Restaurant } from "./model/restaurant";

interface OwnProps {
    info:Restaurant
}

const Store:React.FC<OwnProps> = (props) => {
    return (
        <div>Store</div>
    );
}

export default Store;

```
[src/App.tsx]에서 <Store>태그의 info 에러 사라짐!!!

---
[src/App.tsx]에 함수도 추가해보자
changeAddress 추가
```ts

const App:React.FC = () => {
  // const [myRestaurant, setMyRestaurant] = useState(data);
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address:Address) => {
    setMyRestaurant({
      ...myRestaurant,
      address: address
    })
  }
  return (
    <div className="App">
      <Store info={data} />
    </div>
  );
}

export default App;
```

[src/Store.tsx]
```ts
import React from "react";
import { Address, Restaurant } from "./model/restaurant";

interface OwnProps {
    info:Restaurant,
    changeAddress(address:Address):void
}
```

---


