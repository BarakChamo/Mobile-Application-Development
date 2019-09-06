
## How to use Terminal

Terminal, or `bash`, or `command line`, is the command line interface used to execute scripts and commands
in both Windows, Mac and Linux. You'll use to do anything from cloning repositories, running servers and
installing coding libraries and extensions.

But, before doing any of these things, it's important to know how to navigate the terminal.

#### 1. On OSX open the `Terminal` app, on Windows use a `bash` compatible alternative.
I like using `Commander` or `Cmder`, it's a free `cmd` replacement that comes with Git preinstalled.
You can download it [here](https://cmder.net/).

#### 2. optional - set `Cmder` to bash mode (Compatible with Linux and OSX Terminal)
Right-click the cmder window icon and open the `Settings`.

![`cmder` settings](https://github.com/BarakChamo/Mobile-Application-Development/blob/master/help/files/cmder%20-%20settings.PNG)

Set the `Specified named task` to `{bash::bash}` and restart `cmder`.
![`Set bash initialization mode`](https://github.com/BarakChamo/Mobile-Application-Development/blob/master/help/files/cmder%20-%20bash%20mode.PNG)

#### 3. useful commands
- Run `pwd` (print working directory) to know which folder you're in
- Run `cd {folder_name}` to change folder
  - `cd ../` navigates to the previous folder and can be chained (`../../` etc.)
  - `cd ~` navigates to the root user folder (`/users/Barak` for me for example) where the Documents folder is
- Run `ls` to list the files and folders in the current directory
  - `ls -la` will print a table with more information, such as file size and wether the item is a file or folder.
- To open the current folder in `Explorer` or `Finder` run `start .` or `open .`
  
To learn how to use `git` in command line check the `Using Git` help page.
