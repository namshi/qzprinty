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

You can also pass printer settings, for example:
```jsx
let qzp = new qzPrinty({ 
	printer: 'qr-printer', 
	settings: { 
		units: 'in', 
		size: { 
			width: 4, 
			height: 6 
		}, 
		rasterize: false 
	} 
});
```

You can find all settings on the qz.io config page: https://qz.io/api/qz.configs

You can also print pdf files as such:
```jsx
qzp.print(pathToPdf/URL, 'pdf');
```

To print multiple times, pass the values in an array, example:
```jsx
qzp.print([html1, html2, html3]);
```