# Quine-Collection
A quine is a program that takes no input and prints its own source code. This repository is a collection of quines in various programming and scripting languages.

A special thanks goes to my colleagues Rohan Mitra and Samarth Rai for writing some of these scripts :D

To compare the programs with their source code you should use `cat filename` on the terminal to view the source code and compare it with the output results.

## Tutorial on how to open the files using the CLI:
Nerds only use the CLI, so why bother using an IDE when you can do the trick using a few cli commands ;)

### .cpp - C++
To run and open C++ files on the terminal, make sure to install GNU compiler. Then run `g++ quine.cpp` to compile the file. An output file with the name a.out will be created. Simply type `./a.out` to run the executable.

### .cs - C#
To run and open C# files on Windows, download the .NET framework, set your Path environment variable to the directory containing the .NET framework then use the command `csc quine.cs` to compile the file and then run the executable using `quine.exe`. For UNIX systems, first download and install Mono. Then compile the file using `mcs quine.cs` and then run the executable file using `mono quine.exe`.

### .html - HTML
To run an HTML file simply use the command `open quine.html` on your terminal.

### .java - Java
To open a Java file on the terminal, make sure you first install the Java JDK. Then simply use `java quine.java` to compile and execute your java file.

### .js - Javascript
To open a Javascript file on the terminal, make sure to have the Node.Js runtime installed. Then simply use the `node quine.js` to compile and execute your file.

### .m - Matlab
To open a Matlab script on the terminal, make sure to install Matlab and then use the command `matlab -nodisplay -nosplash -nodesktop -r "run('path/to/your/script.m');exit;"` to execute your file.

### .pl - Prolog
I used the online SWISH tool for this one, unfortunately SWI-Prolog acts really weird on the terminal. But for the most part, you should be able to execute your Prolog file using `swipl quine.pl`.

### .py - Python
To open a Python file on the terminal, make sure to have Python (version 3.0 and above installed). Then simply use `python3 quine.py` to compile and execute your file.

### .r - R
To open an R file on the terminal, make sure to download R. Then simply use the command `rscript quine.r` to compile and execute your script.

### .sh - Bash
To open a Bash script on the terminal, simply use the command `sh quine.sh` to execute your script.
