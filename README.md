## Usage
Pass an HTML to the print function

```jsx
let qzp = new qzPrinty();
qzp.print(htmlToPrint);
```

By default, the printer name in use is "Zebra-Technologies-ZTC-ZT230-200dpi-ZP"
You can specify a printer name in options like so:
```jsx
let qzp = new qzPrinty({ printer: "My printer name" });
```
