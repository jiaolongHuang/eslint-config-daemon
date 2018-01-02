module.exports = {
  // 指定脚本的运行环境
  'env': {
    'browser': true,
    'node': true,
    'commonjs': true,
    'es6': true,
    'amd': true,
    'jquery': true
  },
  // 启用standard标准，https://standardjs.com
  'extends': ['standard'],
  // 指定解析器
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 7, //使用ES2016
    'sourceType': 'module',
    'ecmaFeatures': {
        //对 object rest/spread properties 的支持
        'experimentalObjectRestSpread': true,
        // 'jsx': true,
        'modules': true,
    }
  },
  // 不再向上继续查找eslint配置
  'root': true,
  // 项目中的全局变量， false表示该变量不能被重新赋值，true表示可以
  'globals': {
    '$': false,
    'monitor': false
  },

  /**
  *  "off" 或 0 - 关闭规则
  *  "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
  *  "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  */
  "rules": {
    
    /**
     * 可能的错误
     * 这些规则与 JavaScript 代码中可能的语法错误或逻辑错误有关
     */
    // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
    'for-direction': 'error',
    // @fixable 禁止使用debugger
    'no-debugger': 'warn',
    // 禁止使用不规范空格
    'no-irregular-whitespace': ['error', {
      'skipStrings': true, // 允许在字符串中使用
      'skipComments': true, // 允许在注释中使用
    }],
    // getter必须有返回值，允许返回undefined
    'getter-return': ['error', { allowImplicit: true }],
    // 考虑到需要require css, 所以暂时先关闭
    "import/first": "off",
    // 禁止在 finally 语句块中出现控制流语句, return等。先暂时关闭
    "no-unsafe-finally": 'off',

    /**
     * 最佳实践
     * 这些规则通过一些最佳实践帮助你避免问题
     */
    // @fixable 必须使用===和!==，和null对比时除外
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    // @fixable 禁止使用隐式类型转换
    'no-implicit-coercion': ['warn', {
      'allow': ['+', '!!'] // 允许 + 转数值 '' + 转字符串和 !! 转布尔值
    }],
    // 禁止使用void
    'no-void': 'error',
    'no-extend-native': ['error', { "exceptions": ["Function"] }],

    /** 
     * 变量
     * 这些规则与变量申明有关
    */
    // 禁止在变量被定义之前使用它
    'no-use-before-define': ['warn',
      {
        'functions': false, // 允许函数在定义之前被调用
        'classes': false, // 允许类在定义之前被引用
      }
    ],

    /**
     * 风格问题
     * 这些规则与代码风格有关，所以是非常主观的
     */
    // @fixable 要求在语句末尾使用分号, 忽略花括号在同一行（内容也就在同一行了）的语句块中的最后一个分号
    "semi": ["error", "always", { "omitLastInOneLineBlock": true }],
    // @fixable 要求数组或者对象使用多行写法的时候，为最后一个元素添加逗号，
    'comma-dangle': ["error", "always-multiline"],
    // 关闭对骆驼拼写法的监控
    'camelcase': 'off',
    // @fixable 禁止行尾空格
    'no-trailing-spaces': ['warn', {
        "skipBlankLines": true, // 不检查空行
        "ignoreComments": true // 不检查注释
    }],
    // @fixable 字符串必须使用单引号
    'quotes': ['error', 'single', {
      'avoidEscape': true, // 允许包含单引号的字符串使用双引号
      'allowTemplateLiterals': true, // 允许使用模板字符串
    }],
    // @fixable 要求把换行符放在操作符前面
    "operator-linebreak": ["error", "before"],

    /**
    * ES6
    * 只与 ES6 有关, 即通常所说的 ES2015
    */
    "no-useless-constructor": "off",
  }
}