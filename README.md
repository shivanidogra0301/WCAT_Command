# WCAT_Command
This project builds a command "wcat" which can be used globally in computer.
## Feature
- 'wcat filenames'  : prints the data from the multiple files
- 'wcat -s filenames' : prints data but omit the empty lines.
- 'wcat -n filenames' : prints data along with numbering(it gives numbering to line breaks too).
- 'wcat -b filenames' : prints data along with numbering(it does not gives numbering to line breaks too).
- 'wcat filename1 -w filename2' : overwrite the data from filename2 to filename1.
- 'wcat filename1 -ws filename2' : overwrite the data from filename2 to filename1 but omit empty lines.
- 'wcat filename1 -a filename2' : append the data from filename2 to filename1.
