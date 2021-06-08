import os
import json

files = os.listdir('Posts')
mdx = list(filter(lambda item: '.mdx' in item, files))

bigstring = """
"""
posts = []
s = """"""
if(len(mdx) != 0):
	for i in mdx:
		if(mdx.count(i) <= 1):
			bigstring = bigstring + "import {} from '!babel-loader!@mdx-js/loader!./Posts/{}.mdx'".format(i.split('.')[0],i.split('.')[0]) + "\n"
			jsmdx = "{name: " + '"{}"'.format(i.split(".")[0]) + "," + "content: " + i.split(".")[0] + "}".strip("'")
			s = s + jsmdx + ","
		else:
			print("Error, duplicate file name")	
else:
	print("No files listed")

s = "let posts = " + "[" + s + "]" + "\n"
with open('Posts.js', 'w') as filewrite:
	filewrite.write("""/* eslint-disable import/no-webpack-loader-syntax */ \n{} \n{} \nexport default posts""".format(bigstring, s))			

print("Files Updated")