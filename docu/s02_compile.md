<img src="../images/typescript_logo.png">
<p style="text-align: right"> 
    <a href="./README.md">[INDEX]</a>
</p>

# TypeScript 컴파일

### `tsconfig.json`
매번 TypeScript 컴파일 명령어를 입력할 때마다 옵션을 추가하거나 제거하는 것은 매우 귀찮고 불편합니다. 명령어를 매번 입력하지 않고, 보다 쉽게 사용하려면 컴파일 설정 파일(`tsconfig.json`)을 만들어 사용하는 것이 편리합니다.

`tsconfig.json` 파일이 있는 위치가 TypeScript 프로젝트의 루트 디렉토리(Root Directory)로 설정됩니다. 이 파일에는 프로젝트를 컴파일 하는데 필요한 루트 파일, 컴파일러 옵션을 설정할 수 있습니다. TypeScript 프로젝트는 다음 방법 중 하나로 컴파일됩니다.

tsconfig.json을 사용할 경우
인풋 파일이 없는 `tsc` 명령일 경우, `tsconfig.json`에 설정된 모든 디렉토리를 체인하여 컴파일 합니다.

인풋 파일이 없는 `tsc` 명령일 경우, `-p` 옵션을 사용해 특정 디렉토리 내에 있는 `tsconfig.json` 또는 유효한 JSON 파일을 설정할 수 있습니다.

tsconfig.json을 사용하지 않을 경우
인풋 파일이 있는 `tsc <파일.ts>` 명령일 경우, `tsconfig.json` 파일은 무시됩니다.

NOTE.
<pre>
  <li>tsconfig.json파일에 설정된 컴파일 옵션 보다 명령어가 우선합니다. (예: tsc -m "commonjs")
  <li>tsconfig.json 파일 설정에 대한 자세한 공부하려면 tsconfig.json 문서를 살펴보세요.
</pre>


