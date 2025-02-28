# File Manager CLI

## 📌 Overview
This is a **simple command-line file manager** built using **Node.js**. The application allows users to **create, read, append, rename, and delete files** through an interactive menu in the terminal.

---

## 🔧 Features
✅ Write to a file
✅ Read a file
✅ Append content to a file
✅ Rename a file
✅ Delete a file
✅ Exit the program

---

## 🚀 Installation & Setup

### 1️⃣ Prerequisites
- **Node.js** (v14+ recommended)
- **npm** (Node Package Manager)

### 2️⃣ Clone the Repository
```sh
https://github.com/Harshitj-2005/CLI_filemanager.git
cd CLI_filemanager
```

### 3️⃣ Install Dependencies
```sh
npm install
```

### 4️⃣ Run the File Manager
```sh
node CLI_filemanager.js
```

---

## 📜 Usage
Once the script runs, you'll see an interactive menu:
```
choose an option
1: write file
2: Read file
3: append file
4: rename file
5: delete file
6: Exit
```
Simply **enter the corresponding number** to perform a file operation.

---

## 🛠 How It Works
The script utilizes:
- **`readline`**: To capture user input from the terminal.
- **`fs (File System)`**: To handle file operations asynchronously.
- **Callback functions** to handle errors and display success messages.

---

## 📌 Example
### 1️⃣ Writing to a File
```
choose an option: 1
Enter file name: myFile
Enter content: Hello, World!
File created successfully.
```
### 2️⃣ Reading a File
```
choose an option: 2
Enter file name: myFile
Content of myFile.txt: Hello, World!
```

---

## ⚠️ Known Issues
- The **Exit option is labeled as "5" instead of "6"** in the menu.
- The **`parse.join` function is incorrect** in the delete operation (should be `path.join`).
- The variable `r1` should be `rl` in `else` statement.

🔧 **Fixes are in progress!**

---

## 📌 Contributing
Feel free to **fork** this repository, create a branch, and submit a pull request. Any improvements and bug fixes are welcome!

```sh
git checkout -b my-feature
```

---

## 📜 License
This project is licensed under the **MIT License**.

---

### 👨‍💻 Author
Harshit Jain  
GitHub: [Harshit Jain](https://github.com/Harshitj_2005)

