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
기존 타입모델을 확장, extends
> 새로운 타입모델 BestMenu를 생성
[src/BestMenu.tsx] 생성
```ts
import React from "react";

const BestMenu: React.FC = () => {
    return (
        <div>Best Menu</div>
    );
}

export default BestMenu;

```

사용할 타입 설정시 똑같은게 중복이라면 기존걸 불러온다
[src/BestMenu.tsx] 
```ts
import React from "react";
import { Menu } from "./model/restaurant";

interface OwnProps extends Menu {
    // name: string;
    // category: string;
    // price: number;
}

const BestMenu: React.FC<OwnProps> = () => {
    return (
        <div>Best Menu</div>
    );
}

export default BestMenu;
```


[src/App.tsx]
```ts

const App:React.FC = () => {
  // const [myRestaurant, setMyRestaurant] = useState(data);
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data)

  const changeAddress = (address:Address) => {
    setMyRestaurant({...myRestaurant, address: address})
  }

  const showBestMenuName = (name: string) => {
    return name 
  }
  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress}/>
      <BestMenu name="불고기피자" category="pizza" price={10000} showBestMenuName={showBestMenuName}/>
    </div>
  );
}

```


[src/BestMenu.tsx]
```ts
import React from "react";
import { Menu } from "./model/restaurant";

interface OwnProps extends Menu {
    showBestMenuName(name: string): string;
}

const BestMenu: React.FC<OwnProps> = ({name, price, category, showBestMenuName}) => {
    return (
        <div>{name}</div>
    );
}

export default BestMenu;

```

extends를 사용하면 코드량도 줄어들고, 실수도 줄어든다!!!

---
그렇다면 interface 말고 type 에서는 어떻게 사용할까?
```ts
interface OwnProps extends Menu {
    showBestMenuName(name: string): string;
}
```

type에서는 `&`(그리고) 를 붙혀주면 된다
```ts
type OwnProps = Menu & {
    showBestMenuName(name: string): string;
}

```

---
이번에는 추가 하는게 아니라 특정 타입을 빼줄때 Omit
[src/model/restaurants.ts]
```ts

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

export type AddressWithoutZipcode = Omit<Address, 'zipcode'>;

```

---
가격 즉 특정 값만 빼고 바로 사용하려면 
[src/BestMenu.tsx]
```ts
interface OwnProps extends Omit<Menu, 'price'> {
    showBestMenuName(name: string): string;
}

const BestMenu: React.FC<OwnProps> = ({name, category, showBestMenuName}) => {
    return (
        <div>{name}</div>
    );
}

export default BestMenu;
```

---
빼주는게 아니라, 반대로 특정 값만 가져오려면 Pick
[src/model/restaurant.ts]
```ts

export type AddressWithoutZipcode = Omit<Address, 'zipcode'>;
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>;
```

Tip. ?는 있을수도 있고 없을수도 있고 할 때
