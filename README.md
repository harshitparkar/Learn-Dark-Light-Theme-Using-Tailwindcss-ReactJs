
# LEARNING - Dark/Light switching in reactJs using tailwind css

1st => Create project
```bash 
npm create react-app project-name
```
2nd => Run project
```bash 
npm start
```
3rd => Install tailwindcss
```bash 
npm install -D tailwindcss
```

4th => Initialize tailwindcss
```bash 
npx tailwindcss init -p
```

5th => Go to tailwind.config.js => Add
```bash
content: ["./src/**/*.{html,js,jsx,tsx}"],
darkMode: "class",
```

6th => Go to index.html => Add className="dark"
```bash
 <body className="dark">
```

7th => Go to App.js => Edit the UI accordingly to tailwind

8th => Usage  dark: then any style attribute.
```bash
<div className="h-screen dark:bg-black justify-center items-center flex">
 <button className="p-4 py-2 rounded-lg dark:bg-white bg-black  text-white dark:text-black" onClick={toggleTheme}>
    Click Me
 </button>
</div>
```
## Screenshots

![Light Theme](https://github.com/harshitparkar/Learn-Dark-Light-Theme-Using-Tailwindcss-ReactJs/assets/56834158/9605271c-2865-4d63-92d8-57150b3ddf00)
![Dark Theme](https://github.com/harshitparkar/Learn-Dark-Light-Theme-Using-Tailwindcss-ReactJs/assets/56834158/143c50db-7231-43a5-8a9d-b43b78669886)
