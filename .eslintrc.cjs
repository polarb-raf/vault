module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'unknown', 'type'], // import 정렬순서
        pathGroups: [
          {
            pattern: '{react*, react*/**}', // 해당 패턴일 경우 builtin 전
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/**', // 해당 패턴일 경우 external 후
            group: 'external',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc', // 오름차순
          caseInsensitive: true, // 대소문자 순서 설정 (true : 대문자 우선, false : 소문자 우선)
        },
        'newlines-between': 'always', // (ignore: 개행 규칙 적용하지 않음, always: group들 사이마다 개행 적용 (group 내부에서 개행 적용 불가), never: group들 사이마다 개행이 없도록 적용
        pathGroupsExcludedImportTypes: ['react', 'unknown'], // react, unknown 최상단 정렬
      },
    ],
    indent: [2, 2, { SwitchCase: 1, offsetTernaryExpressions: true }], // indent: 2, switch 구문에서도 indent 넣도록 처리 (없을 시 prettier 과 겹쳐서 에러가 남)
    radix: [2, 'always'], // parseInt() 를 쓸 때는 radix args 가 있을 때만 쓰도록
    'block-spacing': [2, 'always'], // block 을 한 줄에서 열고 닫을 때 spacing 적용
    'array-bracket-spacing': [2, 'never'], // 대괄호에 spacing 쓰지 않음
    'comma-spacing': [2, { before: false, after: true }], // comma 좌우 spacing 옵션
    'func-call-spacing': [2, 'never'], // 함수 호출 시 함수명과 () 사이 spacing 쓰지 않음
    'key-spacing': [2, { beforeColon: false, afterColon: true }], // colon 좌우 spacing 옵션
    'keyword-spacing': [2, { before: true, after: true }], // keyword 좌우 spacing 옵션 (if, switch, try 등등)
    'semi-spacing': [2, { before: false, after: true }], // semicolon 좌우 spacing 옵션
    'switch-colon-spacing': [2, { before: false, after: true }], // switch 문 에서 쓰는 colon 좌우 spacing 옵션
    'arrow-spacing': [2, { before: true, after: true }], // 화살표 함수의 화살표 좌우 spacing 옵션
    'generator-star-spacing': [2, 'after'], // generator 사용 시 function 후에 오는 * 위치 및 spacing 옵션
    'rest-spread-spacing': [2, 'never'], // spread operator 와 표현식 사이에 spacing 사용 안함
    'template-curly-spacing': [2, 'never'], // 템플릿 문자열 안에 ${} 에서 spacing 사용 안함
    'yield-star-spacing': [2, 'after'], // generator 사용 시 yield 후에 오는 * 위치 및 spacing 옵션
    'no-new-object': 2, // new Object 허용 안함 (recommend literal syntax)
    'no-prototype-builtins': 0, // Object.prototype 의 고유 메서드 사용 허용 (해당 옵션 off)
    'prefer-destructuring': [1, { array: true, object: true }, { enforceForRenamedProperties: false }], // 구조 분해 할당 옵션 on, 구조 분해 할당 시 변수명 변경 off, 몇 걸리는 부분이 있어서 warning 세팅
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never', asyncArrow: 'always' }], // 함수 작성 시 함수명 or function 키워드 와 () 사이 spacing 옵션
    'space-before-blocks': [2, { functions: 'always', keywords: 'always', classes: 'always' }], // {} 블락문자 전에 spacing 옵션
    'space-in-parens': [2, 'never'], // () 괄호 안에 spacing 사용 안함
    'space-infix-ops': 2, // infix operators 좌우 spacing 적용 (+, -, =, ...)
    'space-unary-ops': [2, { words: true, nonwords: false }], // unary operators 좌우 spacing 적용, words: new, delete, typeof, void, yield / nonwords: -, +, --, ++, !, !!
    'no-param-reassign': [2, { props: false }], // 함수 인자 재선언 or 변경 불가, props 추가는 가능
    'prefer-arrow-callback': [2, { allowNamedFunctions: false, allowUnboundThis: true }], // callback 이나 함수 인자에 화살표 함수 사용, 유명 함수는 제외, 명시적으로 바인딩 되지 않는 한 this 를 포함하는 함수표현식이 콜백으로 사용되는 것을 허용하지 않음
    'no-duplicate-imports': 2, // module 구문 중복 금지
    'no-new-wrappers': 2, // primitive constructor 사용 금지 (new String, new Number 등등)
    'new-cap': 2, // 생성자명은 PascalCase 를 사용하도록 설정
    'no-underscore-dangle': [
      2,
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        allowAfterThisConstructor: false,
        enforceInMethodNames: false,
        allowFunctionParams: false,
      },
    ], // 식별자 좌우 _ (underscore) 사용 금지 옵션
    'no-dupe-keys': 2, // 객체 중복 키 금지
    'no-dupe-class-members': 2, // 클래스 멤버 중복 금지
    'react/react-in-jsx-scope': 'off', // react 17부터 jsx에 react 없어도 사용 가능
    'react/prop-types': 'off',
    'tailwindcss/no-custom-classname': 0,
  },
}
