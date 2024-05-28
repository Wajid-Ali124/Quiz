export const data = [
  {
    title: "What is TypeScript?\n",
    choices: [
      "a) A scripting language for web pages.",
      "b) A typed superset of JavaScript that compiles to plain JavaScript.",
      "c) A database query language.",
      "d) A style sheet language.",
    ],
    correct: "b) A typed superset of JavaScript that compiles to plain JavaScript.",
  },
  {
    title: "Which command is used to install TypeScript globally via npm?\n",
    choices: ["a) `npm install typescript`", "b) `npm install -g typescript`", "c) `npm typescript`", "d) `npm ts`"],
    correct: "b) `npm install -g typescript`",
  },
  {
    title: "Which file extension is typically used for TypeScript files?\n",
    choices: ["a) `.js`", "b) `.ts`", "c) `.tsx`", "d) Both b and c"],
    correct: "d) Both b and c",
  },
  {
    title: "What is the purpose of the `tsconfig.json` file in a TypeScript project?\n",
    choices: [
      "a) To configure the TypeScript compiler options.",
      "b) To list the project dependencies.",
      "c) To define the project's database connection settings.",
      "d) To configure the project's routing.",
    ],
    correct: "a) To configure the TypeScript compiler options.",
  },
  {
    title: "How do you define an interface in TypeScript?\n",
    choices: [
      "a) interface Person { name: string; age: number; }",
      "b) class Person { name: string; age: number; }",
      "c) type Person = { name: string; age: number; }",
      "d) function Person(name: string, age: number) {}",
    ],
    correct: "a) interface Person { name: string; age: number; }",
  },
  {
    title:
      'What does the following TypeScript code snippet output?\n\nlet x: number | string;\nx = 10;\nconsole.log(typeof x);\nx = "hello";\nconsole.log(typeof x);\n',
    choices: ["a) `number` `string`", "b) `number` `number`", "c) `string` `number`", "d) `undefined` `string`"],
    correct: "a) `number` `string`",
  },
  {
    title: "How do you define a function in TypeScript that returns a promise resolving to a string?\n",
    choices: [
      "a) function fetchData(): string {}",
      "b) function fetchData(): Promise<string> {}",
      "c) function fetchData(): void {}",
      "d) function fetchData(): Promise<void> {}",
    ],
    correct: "b) function fetchData(): Promise<string> {}",
  },
  {
    title:
      "Which of the following allows you to specify optional properties in an interface?\n\ninterface Person {\n   name: string;\n   age?: number;\n}\n",
    choices: [
      "a) The `?` after the property name makes it optional.",
      "b) The `?` before the property name makes it optional.",
      "c) The `=` after the property name makes it optional.",
      "d) The `:` before the property name makes it optional.",
    ],
    correct: "a) The `?` after the property name makes it optional.",
  },
  {
    title:
      "How do you create a read-only property in a TypeScript interface?\n\ninterface Person {\n   readonly id: number;\n   name: string;\n}\n",
    choices: [
      "a) Using the `readonly` keyword before the property name.",
      "b) Using the `const` keyword before the property name.",
      "c) Using the `static` keyword before the property name.",
      "d) Using the `immutable` keyword before the property name.",
    ],
    correct: "a) Using the `readonly` keyword before the property name.",
  },
  {
    title:
      'What is the output of the following TypeScript code snippet using generics?\n\nfunction identity<T>(arg: T): T {\n    return arg;\n}\n\nconsole.log(identity<number>(42));\nconsole.log(identity<string>("TypeScript"));\n',
    choices: ["a) `42` `TypeScript`", "b) `number` `string`", "c) `undefined` `undefined`", "d) `T` `T`"],
    correct: "a) `42` `TypeScript`",
  },
];
