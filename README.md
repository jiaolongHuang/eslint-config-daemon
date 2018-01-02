# eslint-config-daemon

Extends `eslint-config-standard`. Use it as a foundation for your own config.

# Installation

```
npm install eslint-config-daemon --save-dev
```

# Usage

After you installed `eslint-config-daemon` in your project, you can use it like this:

```
{
  "extends":  "eslint-config-daemon"
}
```

or add your own special configs:

```
{
  "extends":  "eslint-config-daemon",
  "rules": {
    "import/first": "error",
  }
}
```
