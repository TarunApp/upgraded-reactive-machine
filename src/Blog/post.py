import os
import json
import time

files = os.listdir('Posts')
mdx = list(filter(lambda item: '.mdx' in item, files))

bigstring = """
"""
posts = []
s = """"""
summarycount = 0
if(len(mdx) != 0):
	for i in mdx:
		if(mdx.count(i) <= 1):
			timeofpost = os.path.getctime('Posts/' + i)
			bigstring = bigstring + "import {}{} from '!babel-loader!@mdx-js/loader!./Posts/{}.mdx'".format(i.split('.')[0], ",{"+ "Summary as " + "Summary" + str(summarycount) + "}" ,i.split('.')[0]) + "\n"
			jsmdx = "{name: " + '"{}"'.format(i.split(".")[0]) + "," + "content: " + i.split(".")[0] + ", " +  "date: " +  '"{}"'.format( str(" ".join(time.ctime(timeofpost).split(" ")[1:3]) + " " + time.ctime(timeofpost).split(" ")[4] ) ) + ", data: " + "Summary".split('"')[0] + str(summarycount) +"}".strip("'")
			s = s + jsmdx + ","
			summarycount = summarycount + 1
		else:
			print("Error, duplicate file name")	
else:
	print("No files listed")

s = "let posts = " + "[" + s + "]" + "\n"
with open('Posts.js', 'w') as filewrite:
	filewrite.write("""/* eslint-disable import/no-webpack-loader-syntax */ \n{} \n{} \nexport default posts""".format(bigstring, s))			

print("Files Updated")